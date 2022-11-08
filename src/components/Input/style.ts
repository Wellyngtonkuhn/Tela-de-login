import styled from "styled-components";

export const InputContainer = styled.div`
  width: 85%;
  padding-bottom: 1rem;

  input {
    width: 100%;
    padding: 0.7rem;
    border-radius: 20px;
    border: 1px solid purple;
    font-size: 1rem;

    :focus {
      outline: none;
    }
  }

  p {
    padding: 0.3rem 0 0 0.5rem;
    color: red;
    font-weight: 400;
  }
`;
