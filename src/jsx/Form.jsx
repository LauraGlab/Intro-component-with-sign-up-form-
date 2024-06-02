import "../styles/Form.css";
import { useForm } from "react-hook-form";


function Form() {

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

    return (
      <form className="input-container" noValidate onSubmit={handleSubmit()}>
        <div className="collecting-data">
          <input
            className={errors.firstName ? "error" : ""}
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          ></input>
          {errors.firstName && (
            <span className="error-span">First Name cannot be empty</span>
          )}
        </div>
        <div className="collecting-data">
          <input
            className={errors.lastName ? "error" : ""}
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          ></input>
          {errors.lastName && (
            <span className="error-span">Last Name cannot be empty</span>
          )}
        </div>
        <div className="collecting-data">
          <input
            className={errors.emailAdress ? "error" : ""}
            type="text"
            placeholder="E-mail"
            {...register("emailAdress", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          ></input>
          {errors.emailAdress && errors.emailAdress.type === "pattern" && (
            <span className="error-span">This is not an email</span>
          )}
          {errors.emailAdress && errors.emailAdress.type === "required" && (
            <span className="error-span">E-mail cannot be empty</span>
          )}
        </div>
        <div className="collecting-data">
          <input
            className={errors.password ? "error" : ""}
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          ></input>
          {errors.password && errors.password.type === "required" && (
            <span className="error-span">Password cannot be empty</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="error-span">
              Password must have at least 8 characters
            </span>
          )}
        </div>
        <button type="submit" onClick={(e) => handleClick(e)}>
          Claim your free trial
        </button>
        <p className="button-info">
          By clicking the button, you are agreeing to our
          <a href="#">Terms and Services</a>
        </p>
      </form>
    );
}
export default Form;