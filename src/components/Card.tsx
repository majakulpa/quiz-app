import React from "react";
import { AnswerObj } from "../App";
import { CardWrapper, ButtonWrapper } from "./Card.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObj | undefined;
  questionNr: number;
  totalQuestions: number;
};

// FC = functional component
const Card: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => {
  return (
    <CardWrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <ButtonWrapper
            key={answer}
            correct={
              userAnswer === undefined
                ? false
                : userAnswer.correctAnswer === answer
            }
            userClicked={
              userAnswer === undefined ? false : userAnswer.answer === answer
            }
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </CardWrapper>
  );
};

export default Card;

// !!userAnswer = userAnswer ? true : false
