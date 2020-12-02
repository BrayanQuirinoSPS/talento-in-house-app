import { LOGIN } from "../constan";
import { LOGIN_ERROR } from "../constan";
import axios from "axios";

const login = (payload, userData) => {
  return {
    type: LOGIN,
    userDetails: { ...payload },
    userData: userData,
    success: true,
  };
};

export const LoginAction = (payload) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    let fullPath=`?usuario=${payload.usuario}&contrasena=${payload.contrasena}`
    axios.all([axios.get(`/usuarios`)])
      .then((response) => {
        console.log(response);
        dispatch(login(payload, response));
        resolve(login(payload, response));
      })
      .catch((error) => {
        dispatch({ type: LOGIN_ERROR, payload: "No se encontro el usuario" });
        resolve({ error });
      });
  });
};
