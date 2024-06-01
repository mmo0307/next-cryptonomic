import { Children, isValidElement, ReactElement, ReactNode } from 'react';

interface ShowProps {
  children: ReactNode;
}

interface WhenProps {
  isTrue: boolean;
  children: ReactNode;
}

interface ElseProps {
  render?: ReactNode;
  children?: ReactNode;
}

const Show = (props: ShowProps): ReactElement | null => {
  let when: ReactNode = null;
  let otherwise: ReactNode = null;

  Children.forEach(props.children, (child: ReactNode) => {
    if (!isValidElement(child)) return;

    if (child.props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && child.props.isTrue === true) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }: WhenProps): ReactNode =>
  isTrue ? children : null;
Show.Else = ({ render, children }: ElseProps): ReactNode => render || children;

export { Show };
