import { InputContainer } from "./style";

import { IInput } from "./type";

export default function Input({ type, errorMessage, ...rest }: IInput) {
  return (
    <InputContainer>
      <input type={type} {...rest} />
      {errorMessage && <p>{errorMessage}</p>}
    </InputContainer>
  );
}
