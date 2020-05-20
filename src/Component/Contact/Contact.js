import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <form action="https://contactform.dk/alferezjose9@gmail.com" className="Form">
        <h1 className="Form__title">¿Alguna pregunta? ¿Trabajamos juntos? ¿Nos tomamos un café? ¡Siéntete libre de contactar conmigo!</h1>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="Nombre" />
        <label htmlFor="email">Correo <span className="Form__banner">(opcional)</span></label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
        <label htmlFor="message" >Mensaje</label>
        <textarea type="message" name="message" className="Form__message" />
        <button type="submit" className="Form__send">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
