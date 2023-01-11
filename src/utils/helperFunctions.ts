import { toast } from "react-toastify";

export const formatTime = (time: string) => {
  let formatedTime;
  let date = new Date(time);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeString = date.toLocaleTimeString().toString().split(" ")[1];
  let dat = new Date(time); // @ts-ignore
  dat = dat.toString().split(" ");
  // @ts-ignore
  formatedTime = `${dat[1]} ${dat[2]}, ${dat[3]} ${hour}:${minutes}:${seconds} ${timeString}`;
  return formatedTime;
};

export const displayErrorToast = (text: string) => {
  return toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
