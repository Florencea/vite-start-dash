import "dayjs/locale/en";
import "tailwindcss/tailwind.css";

import { StyleProvider } from "@ant-design/cssinjs";
import { App, ConfigProvider } from "antd";
import enUS from "antd/es/locale/en_US";
import { HeadProvider } from "react-head";

import { theme } from "./theme";

interface Props {
  children?: React.ReactNode;
  container: HTMLElement;
}

export const Providers = ({ container, children }: Props) => {
  return (
    <HeadProvider>
      <ConfigProvider
        getPopupContainer={() => container}
        locale={enUS}
        theme={theme}
      >
        <StyleProvider hashPriority="high">
          <App>{children}</App>
        </StyleProvider>
      </ConfigProvider>
    </HeadProvider>
  );
};
