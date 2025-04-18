import { ChangeEvent } from "react";
import { useController } from "react-hook-form";
import { css } from "@emotion/react";

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
  designType?: "tabs" | "filters";
};

const radio = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
`;

const styles = {
  common: css`
    display: flex;
    border: none;
    box-shadow: none;

    input[type="radio"] {
      ${radio}
    }
  `,
  tabs: css`
    margin-bottom: var(--px-lg);

    label {
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: var(--btn-xlg2);
      margin-left: -1px;
      line-height: 1.1;
      padding: 8px;
      background-color: #fff;
      border: 1px solid #cdd0d2;
      border: 1px solid var(--midnight-100);
      text-align: center;
      font-size: var(--tab-fsize);
      color: inherit;

      &.active {
        background-color: #05141f;
        background-color: var(--midnight-900);
        border-color: #05141f;
        border-color: var(--midnight-900);
        color: #fff;
        font-weight: 600;
        position: relative;
      }
    }
  `,
  filters: css`
    flex-wrap: wrap;
    margin-bottom: var(--px-md);
    margin-right: -2px;

    label {
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--btn-md);
      min-width: var(--btn-md);
      padding: 0 var(--space-sm);
      margin-right: 2px;
      overflow: hidden;
      position: relative;
      border-radius: calc(var(--btn-md) / 2);
      font-weight: 600;
      letter-spacing: -0.4px;

      &.active {
        background-color: #05141f;
        background-color: var(--midnight-900);
        color: #fff;
      }
    }
  `,
};

const MRadio = (props: TRadioProp) => {
  const {
    name,
    rules,
    control,
    formLabel,
    group,
    onChange: propsOnChange,
    designType = "tabs",
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
    <fieldset css={[styles.common, styles[designType]]}>
      {formLabel && <legend>{formLabel}</legend>}
      <>
        {group.map((item, index) => (
          <label key={index} className={value === item.value ? "active" : ""}>
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
      </>
    </fieldset>
  );
};

export default MRadio;
