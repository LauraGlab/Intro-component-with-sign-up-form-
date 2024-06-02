import "../styles/SectionTwo.css";
import Adv from "../jsx/Adv.jsx";
import Form from "../jsx/Form.jsx";

function SectionTwo() {
  return (
    <section className="section2">
      <Adv />
      <div className="white-container">
        <Form />
      </div>
    </section>
  );
}
export default SectionTwo;
