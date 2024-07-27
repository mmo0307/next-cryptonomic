interface CheckBoxProps {
  label: string;

  value?: boolean;

  onChange?: (checked: boolean) => void;

  disabled?: boolean;

  error?: boolean;

  className?: string;
}

export type { CheckBoxProps };
