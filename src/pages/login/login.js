import firebase from "../../config/config";
import 'firebase/auth';
import { useState } from "react";
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      alert('LOGIN FEITO!');

    }).catch(error => {
      alert(`${getMessageByErrorCode(error.code)}`)
    })
  }

  function submitForm(e) {
    e.preventDefault()
    logar();
  }

  function getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Senha incorreta";
      case "auth/invalid-email":
        return "Email invalido";
      case "auth/user-not-found":
        return "Usuário não encontrado";
      case "auth/network-request-failed":
        return "Sem conexão a internet";
      default:
        return "Error desconhecido";
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label> Email: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />

        <label> Senha : </label>
        <input type="password" onChange={(e) => setSenha(e.target.value)} />

        <button> Login </button>
      </form>
    </div>
  );
}

export default Login;
