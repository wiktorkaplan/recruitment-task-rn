export type MainViewProps = {
  scrollable: boolean;
};

export type ButtonProps = {
  title: string;
  additionalStyles?: object;
  onPress?: () => void;
};

export type TextInputProps = {
  placeholder?: string;
  additionalStyles?: object;
  onChange?: () => void;
  value?: string;
};
