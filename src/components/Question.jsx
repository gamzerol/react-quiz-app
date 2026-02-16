import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  if (!question) return null;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
