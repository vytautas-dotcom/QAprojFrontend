import React from "react";
import { QuestionData } from "./QuestionData";
import { Question } from "./Question";

interface Props {
  data: QuestionData[];
}

export const QuestionList = ({ data }: Props) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        <Question data={question} />
      </li>
    ))}
  </ul>
);
