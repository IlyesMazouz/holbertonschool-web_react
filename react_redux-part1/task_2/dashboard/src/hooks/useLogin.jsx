import { useState, useCallback } from 'react';

const useLogin = (onLogin) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateForm = useCallback((email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEnableSubmit(emailRegex.test(email) && password.length >= 8);
  }, []);

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handleChangePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit,
  };
};

export default useLogin;
