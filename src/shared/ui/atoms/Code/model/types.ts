interface CodeProps {
  value?: string;

  onChange?: (value: string) => void;

  length?: number;

  error?: boolean;
}

export type { CodeProps };
