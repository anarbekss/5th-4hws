import { Button } from "antd";
import styles from "./Quiz.module.css";

export const AnswerButton = ({ answer, onClick, isSelected, isCorrect, disabled }) => {
  let className = styles.default;

  if (disabled) {
    if (isCorrect) {
      className = styles.correct;
    } else if (isSelected) {
      className = styles.incorrect;
    }
  }

  return (
    <Button
      className={className}
      onClick={() => onClick(answer)}
      disabled={disabled}
    >
      {answer}
    </Button>
  );
};