import { wrapper } from "@/01.shared/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "@/01.shared/styles/global.scss";
import BaseLayout from "@/04.widgets/Layouts/BaseLayout/BaseLayout";

const MyApp: React.FC<AppProps> = function MyApp({ Component, pageProps }) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
  );
};

export default MyApp;
