import { MaterialIcons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

export interface TodoInputProps extends Omit<TextInputProps, 'className'> {
	isPassword?: boolean;
	containerClassName?: string;
	inputClassName?: string;
	leftIcon?: React.ReactNode;
	error?: string;
  }
  
  export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
  
  export interface TodoButtonProps {
	title: string;
	onPress: () => void;
	variant?: ButtonVariant;
	size?: ButtonSize;
	loading?: boolean;
	disabled?: boolean;
	iconName?: keyof typeof MaterialIcons.glyphMap;
	iconPosition?: 'left' | 'right';
	fullWidth?: boolean;
	className?: string;
  }