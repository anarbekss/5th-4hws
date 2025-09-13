import { Card, Button } from "antd"

export const Result = ({score, total, onRestart}) => {

  return (
   <Card title={"Результат"}>
        <p>
            Вы ответили правильно на <b>{score}</b> из <b>{total}</b> вопросов
        </p>
        <Button type="primary" onClick={onRestart}>
            Начать занаво
        </Button>
   </Card>
  )
}
