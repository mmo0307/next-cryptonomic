import {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode
} from 'react';

type ShowProps = PropsWithChildren;

interface WhenProps extends PropsWithChildren {
  isTrue: boolean;
}

interface ElseProps extends PropsWithChildren {
  render?: ReactNode;
}

const Show = (props: ShowProps): ReactElement | null => {
  let when: ReactNode = null;
  let otherwise: ReactNode = null;

  Children.forEach(props.children, (child: ReactNode) => {
    if (!isValidElement(child)) return;

    if (child.props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && child.props.isTrue) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }: WhenProps): ReactNode =>
  isTrue ? children : null;
Show.Else = ({ render, children }: ElseProps): ReactNode => render || children;

export { Show };
