import type { InputHTMLAttributes } from "react";
import type { FieldValues } from "react-hook-form";

import { useController } from "react-hook-form";
import { css } from "@emotion/react";
import SearchIcon from "@/asset/images/ic_search.svg";
import ClearIcon from "@/asset/images/ic_clear.svg";
import { media } from "@/style/theme";

export type TInputProps = FieldValues &
  InputHTMLAttributes<HTMLInputElement> & {
    control: any;
    rules?: any;
    name: string;
    onClear?: any;
    onSubmit?: any;
  };

const styles = {
  wrap: css`
    background-color: var(--gray-10);
    display: flex;
    justify-content: center;
    margin-bottom: var(--px-md);
    padding: var(--px-md);

    ${media.max.mobile} {
      padding: 0;
    }
  `,
  input: css`
    position: relative;
    width: var(--search-bar-width);
    background-color: #fff;

    --clear-space: 8px;

    input {
      width: 100%;
      border-color: var(--midnight-900);
      font-size: 1rem;
      height: var(--btn-xlg2);
      padding-left: 16px;
      padding-right: calc(var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px);
    }

    button {
      font-size: 0;
      text-indent: -999em;

      &.clear {
        align-items: center;
        display: flex;
        font-size: 0;
        height: calc(100% - 2px);
        justify-content: center;
        position: absolute;
        top: 1px;
        width: calc(var(--ic-sm) + var(--clear-space));
        right: calc(-1px + var(--btn-xlg2));
      }

      &.submit {
        align-items: center;
        display: flex;
        height: calc(100% - 2px);
        justify-content: center;
        position: absolute;
        right: 1px;
        top: 1px;
        width: calc(var(--btn-xlg2) - 2px);
      }
    }
  `,
};

const MInputText = (props: TInputProps) => {
  const { control, rules, name, onSubmit, onClear, ...rest } = props;

  const {
    field: { value = "", onChange, ref },
  } = useController({ name, rules, control });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    onChange(inputVal);
  };

  return (
    <div css={styles.wrap}>
      <div css={styles.input}>
        <input ref={ref} name={name} value={value} onChange={handleChange} {...rest} />
        {value.length > 0 && typeof onClear === "function" && (
          <button type="button" onClick={onClear} className="clear">
            초기화
            <ClearIcon />
          </button>
        )}
        {typeof onSubmit === "function" && (
          <button type="button" onClick={onSubmit} className="submit">
            검색
            <SearchIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default MInputText;
