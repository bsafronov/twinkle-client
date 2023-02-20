import ContentCenter from "@/03.components/Containers/ContentCenter/ContentCenter";
import BaseLayout from "@/04.widgets/Layouts/BaseLayout/BaseLayout";
import LoginForm from "@/04.widgets/LoginForm/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <BaseLayout>
      <ContentCenter>
        <LoginForm />
      </ContentCenter>
    </BaseLayout>
  );
};

export default LoginPage;
