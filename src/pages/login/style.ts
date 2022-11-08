import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 1rem;

  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: purple;
  padding: 0 0 1rem 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 85%;

  background-color: purple;
  color: #fff;

  font-size: 1.3rem;

  padding: 0.5rem 0;

  border: unset;
  border-radius: 20px;
  cursor: pointer;
`;
