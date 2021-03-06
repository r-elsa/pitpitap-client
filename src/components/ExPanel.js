import React, { useState, useEffect, useRef } from "react";
import { FlexContainer } from "./common";
import {
  ItemUnderLine,
  Question,
  Answer,
  Text
} from "../components/ExpanelContainer";

import { ReactComponent as PlusIcon } from "../assets/images/plus.svg";
import { ReactComponent as MinusIcon } from "../assets/images/minus.svg";

const ExPanel = ({ items }) => {
  const [active, setActive] = useState([]);

  const handleClick = index => {
    setActive(index);
  };

  const handleClose = index => {
    setActive(false);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ alignItems: "right", margin: "auto" }}>
          <Question padding={["15rem 0rem 15rem 0", "8rem 0rem 8rem 0"]}>
            {" "}
            {active === index ? (
              <MinusIcon
                style={{ cursor: "pointer", margin: "auto 0" }}
                onClick={() => handleClose(index)}
              />
            ) : (
              <PlusIcon
                style={{ cursor: "pointer", margin: "auto 0" }}
                marginTop="5rem"
                onClick={() => handleClick(index)}
              />
            )}
            <Text
              alignItems="right"
              fontSize={["24rem", "20rem"]}
              fontFamily="Rounded1c_Bold"
              padding={["0rem 15rem 0rem 0rem", "0rem 8rem 0rem 0rem"]}
            >
              {item.question}
            </Text>
          </Question>
          <Answer className={active === index ? "answer" : ""}>
            <Text
              fontSize={["20rem", "16rem"]}
              fontFamily="Rounded1c_Regular"
              padding={["0rem 55rem 15rem 15rem", "0rem 40rem 10rem 10rem"]}
            >
              {item.answer}
            </Text>
          </Answer>
          <ItemUnderLine />
        </div>
      ))}
    </div>
  );
};
export default ExPanel;
