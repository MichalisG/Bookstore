import type { FC } from 'react';

interface InputProps {
  name?: string;
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  onKeyDown?: any;
  error?: boolean;
  errorMessage?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  const {
    type = 'text',
    placeholder = '',
    label,
    value,
    onChange,
    error,
    errorMessage,
    ...rest
  } = props;

  const errorClass = error ? 'input-error' : ''

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label p-0">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`focus:outline-none input input-bordered w-full max-w-xs ${errorClass}`}
        {...rest}
      />
      <div className="label p-0">
        <span className="label-text-alt text-error">{error ? errorMessage : <>&nbsp;</>}</span>
      </div>
    </label>

  );
}

export default Input;
