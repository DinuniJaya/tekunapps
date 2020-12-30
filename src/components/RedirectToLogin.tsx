import React, { useEffect, useContext } from "react";
import { IonRouterContext } from "@ionic/react";

interface RedirectToLoginProps {
  removeUserSession: Function;
}

const RedirectToLogin: React.FC<RedirectToLoginProps> = ({
  removeUserSession,
}) => {
  const ionRouterContext = useContext(IonRouterContext);

  console.log("ionRouterContext", ionRouterContext);
  useEffect(() => {
    console.log("here");

    removeUserSession();
    ionRouterContext.push("/login");
  }, [removeUserSession, ionRouterContext]);
  return null;
};

export default RedirectToLogin;
