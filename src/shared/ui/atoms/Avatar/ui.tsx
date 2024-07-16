import React, { memo, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { generateRandomColorAvatar } from '@/shared/lib/getRandomColor/getRandomColor';

import { View } from '../View';

import styles from './ui.module.scss';

interface AvatarProps {
  className?: string;

  icon?: ReactNode;
}

const Avatar = memo(({ className, icon }: AvatarProps) => {
  return (
    <div className={cn(styles.avatar, className)}>
      <View.Condition if={Boolean(icon)}>{icon}</View.Condition>

      <View.Condition if={!Boolean(icon)}>
        <RandomAvatar />
      </View.Condition>
    </div>
  );
});

const RandomAvatar = memo(() => {
  const avatarColors = generateRandomColorAvatar(90);

  return (
    <div className={styles.randomAvatar}>
      {avatarColors.map((colors) =>
        colors.map((color, index) => (
          <span
            className={styles.colorItem}
            key={index}
            style={{ backgroundColor: color }}
          />
        ))
      )}
    </div>
  );
});

export { Avatar };
