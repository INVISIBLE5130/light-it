import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { SignUp } from "./signUp/signUp";
import { SignIn } from "./signIn/signIn";
import { Text } from "../../components/text";
import store from "../../store/store";
import { PageWrapper } from "../../wrappers/pageWrapper";
import { languages } from "../../constants";
import LanguageSwitch from "../../components/switchLanguage";

export const AuthPage: FC = observer(() => {
  const [isSignIn, setSignIn] = useState(true);

  useEffect(() => {
    store.setCurrentPage("authPage");
  }, []);

  const signInHandler = () => {
    setSignIn(!isSignIn);
  };

  return (
    <PageWrapper className="flex flex-col justify-center relative">
      <>
        <LanguageSwitch languages={languages} />
        {isSignIn ? <SignIn /> : <SignUp signInHandler={signInHandler} />}
        <button onClick={signInHandler} className="mx-auto mt-4">
          <Text
            textKey={isSignIn ? "switchButton_signIn" : "switchButton_signUp"}
          />
        </button>
      </>
    </PageWrapper>
  );
});
