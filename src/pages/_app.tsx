import { wrapper } from "@/01.shared/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/01.shared/styles/global.scss";

const MyApp: React.FC<AppProps> = function MyApp({ Component, pageProps }) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
