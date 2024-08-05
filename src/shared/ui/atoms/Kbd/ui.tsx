import { forwardRef, useMemo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { Each } from '@/shared/utils/each/each';

import { View } from '../View';

import { kbdKeysLabelMap, kbdKeysMap, KbdProps } from './model/types';

import styles from './ui.module.scss';

const Kbd = forwardRef<'kbd', KbdProps>(
  ({ as, keysToRender, className, children }, ref) => {
    const Component = as || 'kbd';

    const keysContent = useMemo(() => {
      return (
        <Each
          data={keysToRender}
          render={(key) => (
            <abbr
              key={key}
              className={cn(styles.abbr, className?.abbr)}
              title={kbdKeysLabelMap[key]}
            >
              {kbdKeysMap[key]}
            </abbr>
          )}
        />
      );
    }, [keysToRender]);

    return (
      <Component
        ref={ref}
        className={cn(styles.base, className?.base)}
      >
        {keysContent}

        <View.Condition if={Boolean(children)}>
          <span className={cn(styles.content, className?.content)}>
            {children}
          </span>
        </View.Condition>
      </Component>
    );
  }
);

export { Kbd };
