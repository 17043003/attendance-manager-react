import { Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../utils/axios";

type loginFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit: SubmitHandler<loginFormInput> = (data) => {
    console.log(data);
    const params = new URLSearchParams();
    params.append("email", data.email);
    params.append("password", data.password);
    axios
      .post("/login", params)
      .then((response) => {
        console.log(response.status);
      })
      .catch(() => {
        setErrorMessage("ログインに失敗しました");
      });
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{errorMessage}</div>
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/i,
          })}
        />
        {errors.email?.type === "pattern" && (
          <span>メールアドレスを入力してください</span>
        )}
        {errors.email?.type === "required" && (
          <span>メールアドレスは必須です</span>
        )}

        <label>Password</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>パスワードは必須です</span>}

        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Login;
