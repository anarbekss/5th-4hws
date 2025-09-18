import style from "./AuthForm.module.scss";

export const AuthInp = ({ AuthData, register, errors }) => {
  return (
    <div className={style.AuthInpBlock}>
      <input
        placeholder={AuthData.name}
        type={AuthData.type}
        {...register(AuthData.name, {
          required: AuthData.required,
          pattern: AuthData.pattern,
          validate: AuthData.validate,
        })}
      />
      {errors[AuthData.name] && 
        <span>
            {errors[AuthData.name]?.message}
      </span>}
    </div>
  );
};
