import { Button, Card } from "antd";
import { useState } from "react";
import { QuizView } from './QuizView'
import { Result } from "./Result";

export const Quiz = ({ question }) => {
//   console.log(question);
  
  const [curIndex, setcurIndex] = useState(0)
  const [selected, setseleted] = useState(null)
  const [score, setscore] = useState(0)
  const [finished, setfinished] = useState(false)

  const curQuestion = question[curIndex]
//   console.log(curQuestion);

  function handle(answer) {
    setseleted(answer)
    if (answer === curQuestion.correct){
        setscore(prev => prev + 1)
    }
  }

  function nextQuestion() {
    if (curIndex + 1 < question.length) {
        setcurIndex((prev) => prev + 1)
        setseleted(null)
    } else {
        setfinished(true)
    }
  }

  function restart () {
    setcurIndex(0)
    setfinished(false)
    setseleted(null)
    setscore(0)
  }
  if (finished) {
    return <Result score={score} total={question.length} onRestart={restart}/>
  }


//   console.log(score);
  return <div>

    <Card title={`вопрос ${curIndex + 1} из ${question.length}`}>
        <QuizView question={curQuestion} selected={selected} onAnswer={handle}/>
        {selected && (
            <Button type="primary" onClick={nextQuestion} style={{marginTop:10}}>Далее</Button>
        )}
    </Card>
  </div>;
};

/*Приложение должно содержать компонент Quiz, в котором есть вопрос и 4 варианта ответа. Вопрос и варианты ответа передать через props. Варианты ответа вывести с помощью метода map() и назначить уникальные ключи. При нажатии на правильный ответ под вопросом должна появляться подсказка "ПРАВИЛЬНО!", при неверном – "НЕПРАВИЛЬНО!". Использовать useState для хранения выбранного ответа. Стили оформить через CSS-модули: правильный ответ подсвечивать зелёным, неправильный – красным. Добавить обработку событий onClick для кнопок с вариантами ответа.


Дополнительно: добавить несколько вопросов (массив объектов) и отображать их поочерёдно. Добавить счётчик правильных ответов. В конце викторины выводить результат: «Вы ответили правильно на X из Y вопросов». Добавить кнопку "Начать заново". Использовать компоненты Ant Design (Button, Card).*/
