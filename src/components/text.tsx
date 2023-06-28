import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FC, useEffect, useState } from "react";
import store from "../store/store";
import type { TextProps } from "@/types/types";

export const Text: FC<TextProps> = ({ textKey, common }) => {
  const { t } = useTranslation();
  const { currentPage } = store.data.meta || {};
  const [text, setText] = useState("");
  const additionalKey = !common ?? currentPage;


  useEffect(() => {
    setText(`${additionalKey ? currentPage + "." : ""}${textKey}`);
  }, [currentPage, textKey, additionalKey]);

  if (!i18next.exists(text)) {
    console.log(`Text to replace not found: ${textKey}`);
  }

  return <>{t(text)}</>;
};
