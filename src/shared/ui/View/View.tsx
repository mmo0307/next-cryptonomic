import React, { FC, PropsWithChildren } from 'react';

interface ConditionProps extends PropsWithChildren {
  if: boolean;
}

const Condition: FC<ConditionProps> = ({ if: condition, children }) => {
  if (condition) {
    return <>{children}</>;
  }

  return null;
};

const View = {
  Condition
};

export { View };
