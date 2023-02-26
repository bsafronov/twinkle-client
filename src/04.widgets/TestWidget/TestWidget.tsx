import Box from "@/02.UI/Box/Box";
import Button from "@/02.UI/Button/Button";
import Card from "@/02.UI/Card/Card";
import s from "./TestWidget.module.scss";
const TestWidget = () => {
  return (
    <Card>
      <Box>
        <div className={s.main}>
          <Button _variant="solid">Кнопка</Button>
          {/* <Button _variant="outlined">Кнопка</Button>
          <Button _variant="link">Кнопка</Button>
          <Button _color="primary" _variant="solid">
            Кнопка
          </Button>
          <Button _color="primary" _variant="outlined">
            Кнопка
          </Button>
          <Button _color="primary" _variant="link">
            Кнопка
          </Button> */}
        </div>
      </Box>
    </Card>
  );
};

export default TestWidget;
