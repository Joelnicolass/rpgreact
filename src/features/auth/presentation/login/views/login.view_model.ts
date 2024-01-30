import { useRef, useState } from "react";
import { useStore } from "../../../../../core/presentation/hooks/use_store";
import { useRoute } from "../../../../../core/presentation/hooks/use_route";
import { ROUTES } from "../../../../../core/presentation/routes/app_router";

export enum LoginModes {
  HISTORY = "history",
  CASUAL = "casual",
}

export const LOGIN_MODE_ATTRIBUTE = "data-mode";

export enum LoginFormFields {
  EMAIL = "email",
}

interface LoginForm {
  [LoginFormFields.EMAIL]: string;
}

export const useLoginViewModel = () => {
  const route = useRoute();
  const { setEmail } = useStore.getState();
  const [form, setForm] = useState<LoginForm>({
    [LoginFormFields.EMAIL]: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const _resetForm = () => {
    setForm({
      [LoginFormFields.EMAIL]: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _historyLogin = () => {};

  const _casualLogin = () => {
    setEmail(form.email);
    route.goTo(ROUTES.CHARACTER_CREATION);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const _mapTypeToLogin = {
      [LoginModes.HISTORY]: _historyLogin,
      [LoginModes.CASUAL]: _casualLogin,
    };

    const mode = e.currentTarget.getAttribute(
      LOGIN_MODE_ATTRIBUTE
    )! as LoginModes;

    _mapTypeToLogin[mode]();

    _resetForm();
  };

  return {
    form,
    formRef,
    handleChange,
    handleSubmit,
  };
};
