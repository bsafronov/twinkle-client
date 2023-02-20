import ContentCenter from "@/03.components/Containers/ContentCenter/ContentCenter";
import BaseLayout from "@/04.widgets/Layouts/BaseLayout/BaseLayout";
import RegistrationForm from "@/04.widgets/RegistrationForm/RegistrationForm";
import React from "react";

const RegistrationPage = () => {
  return (
    <BaseLayout>
      <ContentCenter>
        <RegistrationForm />
      </ContentCenter>
    </BaseLayout>
  );
};

export default RegistrationPage;
