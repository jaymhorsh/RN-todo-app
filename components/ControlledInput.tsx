import { ControlledInputProps } from '@/types/ui';
import React from 'react';
import { Controller, ControllerRenderProps, FieldValues } from 'react-hook-form';
import TodoInput from './TodoInput';

const ControlledInput: React.FC<ControlledInputProps> = ({ name, control, rules, ...rest }) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }: {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: { error?: { message?: string } };
      }) => <TodoInput {...rest} onChangeText={onChange} onBlur={onBlur} value={value as any} error={error?.message} />}
    />
  );
};

export default ControlledInput;
