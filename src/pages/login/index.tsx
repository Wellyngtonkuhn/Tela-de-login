import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import { Section, Container, H1, Form, Button } from "./style";

import { IFormData } from "./type";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "Minimo de 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  console.log(isValid);
  

  return (
    <Section>
      <Container>
        <H1>Login</H1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type={"text"}
                placeholder={"e-mail"}
                {...field}
                errorMessage={errors?.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type={"password"}
                placeholder={"password"}
                {...field}
                errorMessage={errors?.password?.message}
              />
            )}
          />

          <Button disabled={!isValid} type="submit">Entrar</Button>
        </Form>
      </Container>
    </Section>
  );
}
