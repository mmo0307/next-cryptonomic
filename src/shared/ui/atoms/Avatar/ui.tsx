import React, { memo, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { generateRandomColorAvatar } from '@/shared/lib/getRandomColor/getRandomColor';
import { Each } from '@/shared/utils/each/each';

import { View } from '../View';

import styles from './ui.module.scss';

interface AvatarProps {
  className?: string;

  icon?: ReactNode;
}

const Avatar = memo(({ className, icon }: AvatarProps) => {
  return (
    <div
      className={cn(styles.avatar, className, {
        [styles.withIcon]: Boolean(icon)
      })}
    >
      <View.Condition if={Boolean(icon)}>{icon}</View.Condition>

      <View.Condition if={!Boolean(icon)}>
        <RandomAvatar />
      </View.Condition>
    </div>
  );
});

const RandomAvatar = memo(() => (
  <div className={styles.randomAvatar}>
    <Each
      data={generateRandomColorAvatar(90)}
      render={(colors) =>
        colors.map((color, index) => (
          <span
            className={styles.colorItem}
            key={index}
            style={{ backgroundColor: color }}
          />
        ))
      }
    />
  </div>
));

export { Avatar };
