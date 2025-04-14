import type { InputHTMLAttributes } from "react";
import type { FieldValues } from "react-hook-form";

import { useController } from "react-hook-form";

export type TInputProps = FieldValues &
  InputHTMLAttributes<HTMLInputElement> & {
    maxLength?: number;
    control: any;
    rules?: any;
    name: string;
  };

const MInputText = (props: TInputProps) => {
  const { control, rules, name, maxLength = 255, ...rest } = props;

  const {
    field: { value = "", onChange, ref },
  } = useController({ name, rules, control });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    onChange(inputVal);
  };

  return (
    <>
      <input
        ref={ref}
        name={name}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        {...rest}
      />
    </>
  );
};

export default MInputText;
