import React, { useState } from "react";
import style from "./faq.module.css";

const FAQ = (props) => {
  const { question, desc } = props;
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <article className={style.faq}>
      <div>
        <h3>{question}</h3>
        <button onClick={handleClick}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
