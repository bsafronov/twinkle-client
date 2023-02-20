import MainLayout from "@/04.widgets/Layouts/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("bogdasafronov");
  }, []);

  return <MainLayout></MainLayout>;
};

export default Index;
