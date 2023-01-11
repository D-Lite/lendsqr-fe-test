import { ChangeEvent, useState } from "react";
import validator from "../utils/validator";
import { useNavigate } from "react-router-dom";
import { Ctx } from "../contexts/globalContext";
import { ILogin } from "../interfaces/LoginData";
import { displayErrorToast } from "../utils/helperFunctions";

const useForm = (initialState: ILogin) => {
  const { setUser } = Ctx();

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  let navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const { name: fieldName } = e.target as HTMLInputElement;
    const failedFields = validator(values, fieldName);

    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(failedFields)[0],
    }));
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    data: ILogin
  ) => {
    e.preventDefault();
    const inputStatus = Object.values(values).map((el) => el.length === 0);
    if (inputStatus.includes(true)) {
      return displayErrorToast("Please fill in all your inputs");
    }
    const errorStatus = Object.values(errors).map((el) => el.length === 0);
    if (errorStatus.includes(false)) {
      return displayErrorToast("Please check your inputs");
    }
    setUser(values.email);

    localStorage.setItem("user", JSON.stringify(values.email));
    navigate("/");
  };
  return { handleChange, handleBlur, errors, values, handleSubmit };
};

export default useForm;
