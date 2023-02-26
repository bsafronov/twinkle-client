import Box from "@/02.UI/Box/Box";
import Card from "@/02.UI/Card/Card";
import Title from "@/02.UI/Title/Title";
import MainLayout from "@/04.widgets/Layouts/MainLayout/MainLayout";
import React from "react";

const ErrorPage = () => {
  return (
    <MainLayout>
      <Card>
        <Box>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <h1 style={{ fontSize: 64 }}>404</h1>
            <h2 style={{ fontSize: 48 }}>Этой страницы не существует... </h2>
            <h3 style={{ fontSize: 32 }}>
              Вы уверены, что хотели попасть сюда?
            </h3>
            <img src="/cat.png" alt="Я не плачу" style={{ width: 256 }} />
          </div>
        </Box>
      </Card>
    </MainLayout>
  );
};

export default ErrorPage;
