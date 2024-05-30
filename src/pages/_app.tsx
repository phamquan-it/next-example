import ReactQueryProvider from "@/libs/react-query/ReactQueryProvider";
import ReduxProvider from "@/libs/redux/Provider";
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import NextProgress from "next-progress";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <NextIntlClientProvider
    locale={router.locale}
    messages={pageProps.messages}
    timeZone="Europe/Vienna"
  >
    {/* addRedux */}
    <ReduxProvider>
      {/* add react  query */}
      <ReactQueryProvider>
        {/* add ant design */}
        <ConfigProvider theme={theme}>
          <NextProgress delay={300} options={{ showSpinner: false }} />
          <Component {...pageProps} />
          {/* add toastify */}
          <ToastContainer />
        </ConfigProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  </NextIntlClientProvider>;
}