/* eslint-disable filenames/match-regex */
import "@telefonica/mistica/css/reset.css";
import "@telefonica/mistica/css/roboto.css";
import "@telefonica/mistica/css/mistica.css";

import {
  getVivoNewSkin,
  ThemeConfig,
  ThemeContextProvider,
} from "@telefonica/mistica";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const misticaTheme: ThemeConfig = {
    skin: getVivoNewSkin(),
    i18n: { locale: "pt-BR", phoneNumberFormattingRegionCode: "BR" },
  };

  return (
    <ThemeContextProvider theme={misticaTheme}>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
