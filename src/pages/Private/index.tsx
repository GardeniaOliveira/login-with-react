import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1>Private</h1>
      <h4>Hi, {auth.user?.name}, how are you?</h4>
    </div>
  );
};
