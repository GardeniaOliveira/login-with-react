import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <div>
      <h2>Restrict Access</h2>

      <input type="text" placeholder="type your e-mail" value={email} />

      <input
        type="password"
        placeholder="type your password"
        value={password}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
