import React, { useState } from 'react';
import Joi from 'joi';
import './form.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Form = () => {

  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [address, setAddress] = useState('');
  const [addressTouched, setAddressTouched] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const nameIsValid = name.length > 0;
  const nameErrorMessage = nameIsValid ? '' : 'Vänligen fyll i ditt namn.';

  const emailSchema = Joi.string().email({ tlds: false });
  const emailResult = emailSchema.validate(email);
  const emailIsValid = !emailResult.error;
  const emailErrorMessage = emailIsValid ? '' : 'Vänligen fyll i en giltig email.';


  const addressIsValid = address.length > 0;
  const addressErrorMessage = addressIsValid ? '' : 'Vänligen fyll i din adress.';

  const formIsValid = nameIsValid && emailIsValid && addressIsValid;

  const handleSubmit = () => {
    if (!formIsValid) {

      return;
    }
    setShowPopup(true);
  };

  const closePopup = () => {
	setShowPopup(false);
	setName('');
	setNameTouched(false);
	setEmail('');
	setEmailTouched(false);
	setAddress('');
	setAddressTouched(false);
  };

  return (
    <form className="form">

      <section className="form-item">
        <label> Fullständigt namn </label>
        <div className={'input-container ' + (nameTouched && !nameIsValid ? 'invalid-input' : '')}>
          <input
            className={nameTouched && !nameIsValid ? 'invalid-input' : ''}
            value={name}
            onChange={event => setName(event.target.value)}
            onBlur={() => setNameTouched(true)}
            type="text"
          />
        </div>
        {nameTouched && !nameIsValid && <p className="error"> {nameErrorMessage} &nbsp; </p>}
      </section>

      <section className="form-item">
        <label> E-mail </label>
        <div className={'input-container ' + (emailTouched && !emailIsValid ? 'invalid-input' : '')}>
          <input
            className={emailTouched && !emailIsValid ? 'invalid-input' : ''}
            value={email}
            onChange={event => setEmail(event.target.value)}
            onBlur={() => setEmailTouched(true)}
            type="email"
          />
        </div>
        {emailTouched && !emailIsValid && <p className="error"> {emailErrorMessage} &nbsp; </p>}
      </section>

      <section className="form-item">
        <label> Adress </label>
        <div className={'input-container ' + (addressTouched && !addressIsValid ? 'invalid-input' : '')}>
          <input
            className={addressTouched && !addressIsValid ? 'invalid-input' : ''}
            value={address}
            onChange={event => setAddress(event.target.value)}
            onBlur={() => setAddressTouched(true)}
            type="text"
          />
        </div>
        {addressTouched && !addressIsValid && <p className="error"> {addressErrorMessage} &nbsp; </p>}
      </section>

      <button
        className="form-btn"
        disabled={!formIsValid}
        onClick={handleSubmit}
      >
        Beställ
      </button>

      {showPopup && (
        <Popup message="Tack för ditt köp!" onClose={closePopup} />
      )}

    </form>
  );
}

export default Form;