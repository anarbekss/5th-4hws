import {AnswerButton} from './AnswerButton'

export const QuizView = ({ question, selected, onAnswer }) => {

    if (!question || !question.answer) return null;

    console.log(question);
  return (
    <div>
      <p>{question.question}</p>
      <div>
        {question.answer.map((answer, index) => (
          <AnswerButton
            key={index}
            answer={answer}
            onClick={onAnswer}  
            isSelected={selected === answer}
            isCorrect={answer === question.answer}
            disabled={!!selected}   
          />
        ))}
      </div>

      {selected && (
        <p>{selected === question.correct ? "ПРАВИЛНО" : "НЕПРАВИЛЬНО!"}</p>
      )}
    </div>
  );
};
