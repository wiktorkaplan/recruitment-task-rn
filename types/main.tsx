import { ChangeEvent } from "react";

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
  onChange?: (e: string | ChangeEvent<any>) => void;
  value?: string;
};
