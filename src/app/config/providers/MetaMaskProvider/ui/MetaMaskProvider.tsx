import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

import { formatBalance } from '@/shared/lib/formatter';

interface WalletState {
  accounts: any[];

  balance: string;

  chainId: string;
}

interface MetaMaskContextData {
  wallet: WalletState;

  hasProvider: boolean | null;

  error: boolean;

  errorMessage: string;

  isConnecting: boolean;

  connectMetaMask: () => void;

  clearError: () => void;
}

const disconnectedState: WalletState = {
  accounts: [],

  balance: '',

  chainId: ''
};

const MetaMaskContext = createContext<MetaMaskContextData>(
  {} as MetaMaskContextData
);

const MetaMaskProvider = ({ children }: PropsWithChildren) => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);

  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const [wallet, setWallet] = useState<WalletState>(disconnectedState);

  const clearError = () => setErrorMessage('');

  const _updateWallet = useCallback(async (providedAccounts?: any) => {
    const accounts =
      providedAccounts ||
      (await window.ethereum.request({ method: 'eth_accounts' }));

    if (accounts.length === 0) {
      setWallet(disconnectedState);

      return;
    }

    const balance = formatBalance(
      await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest']
      })
    );

    const chainId = await window.ethereum.request({
      method: 'eth_chainId'
    });

    setWallet({ accounts, balance, chainId });
  }, []);

  const updateWalletAndAccounts = useCallback(
    () => _updateWallet(),
    [_updateWallet]
  );

  const updateWallet = useCallback(
    (accounts: any) => _updateWallet(accounts),
    [_updateWallet]
  );

  const connectMetaMask = async () => {
    setIsConnecting(true);

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      clearError();

      await updateWallet(accounts);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });

      setHasProvider(Boolean(provider));

      if (provider) {
        await updateWalletAndAccounts();

        window.ethereum.on('accountsChanged', updateWallet);

        window.ethereum.on('chainChanged', updateWalletAndAccounts);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener('accountsChanged', updateWallet);

      window.ethereum?.removeListener('chainChanged', updateWalletAndAccounts);
    };
  }, [updateWallet, updateWalletAndAccounts]);

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        hasProvider,
        error: !!errorMessage,
        errorMessage,
        isConnecting,
        connectMetaMask,
        clearError
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export { MetaMaskContext, MetaMaskProvider };
