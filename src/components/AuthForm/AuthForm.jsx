import { useForm } from "react-hook-form";
import style from "./AuthForm.module.scss";
import { AuthInp } from "./AuthInp";
import { toast } from "react-toastify";

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const ExamBtn = (data) => {
    console.log("Данные формы:", data);
    toast.success("Успешная авторизация 🎉", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const ExamError = (errors) => {
    console.log("Ошибки:", errors);

    toast.error("Проверьте введённые данные ⚠️", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const regForEmail = /\w{2,}@\w{2,}\.[a-z]{2,}/;
  const regForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const regForName = /^[A-Za-zА-Яа-я]{2,}$/;

  const fields = [
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      required: "Email обязателен",
      pattern: { value: regForEmail, message: "Введите корректный email" },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Пароль",
      required: "Пароль обязателен",
      pattern: {
        value: regForPassword,
        message:
          "Пароль должен быть минимум 6 символов и содержать буквы и цифры",
      },
    },
    {
      name: "name",
      type: "text",
      placeholder: "Имя",
      required: "Имя обязательно",
      pattern: {
        value: regForName,
        message: "Имя должно содержать минимум 2 буквы",
      },
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Подтверждение пароля",
      required: "Подтверждение обязательно",
      validate: (value) => value === watch("password") || "Пароли не совпадают",
    },
  ];

  return (
    <div className={style.Background}>

    <form
      className={style.FormBlock}
      onSubmit={handleSubmit(ExamBtn, ExamError)}
    >
      <div style={{marginBottom:30}} className={style.InpBlock}>
        <h2>Authorization</h2>
        {fields.map((field) => (
          <AuthInp
            key={field.name}
            AuthData={field}
            errors={errors}
            register={register}
          />
        ))}
      </div>
      <button type="submit" className={style.AuthCheck}>
        Examination
      </button>
    </form>
    </div>
  );
};
