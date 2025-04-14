import { ChangeEvent } from "react";
import { useController } from "react-hook-form";

type TRadioGroup = {
  label: string;
  value: string;
  disabled?: boolean;
};

type TRadioProp = {
  name: string;
  rules?: any;
  control: any;
  formLabel?: string;
  group: TRadioGroup[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MRadio = (props: TRadioProp) => {
  const {
    name,
    rules,
    control,
    formLabel,
    group,
    onChange: propsOnChange,
  } = props;

  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    control,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    if (propsOnChange) {
      propsOnChange(event);
    }
  };

  return (
    <fieldset>
      {formLabel && <legend>{formLabel}</legend>}
      <div>
        {group.map((item, index) => (
          <label
            key={index}
            style={{
              fontSize: 14,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <input
              type="radio"
              name={name}
              value={item.value}
              checked={value === item.value}
              onChange={handleChange}
            />
            {item.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default MRadio;
