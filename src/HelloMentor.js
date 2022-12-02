import Greeting from "./Greeting";
import Mentor from "./Mentor";
import "./App.css";

export default function HelloMentor() {
  const mentors = ["Ali", "Tom", "Bob", "Sem"];
  return (
    <div>
      <Greeting greet="Hello" />
      <Mentor names={ mentors } />
    </div>
  );
}