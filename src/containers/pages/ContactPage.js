import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  FlexContainer,
  Text,
  GridContainer,
  Image
} from "../../components/common";
import { userActions } from "../../store/user/actions";
import facebook from "../../assets/images/facebook.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import fill_one from "../../assets/images/fill-1.png";
import Download from "../../components/Download";

const ContactPage = props => {
  const [width, setWidth] = useState(window.innerWidth);

  // this function will call every time that that prop someValue will change,
  // if you leave that array empty so it will call only after the render of the componenet
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    { imgsrc: phone, title: "הטלפון שלנו", info: "03-5454752125" },
    { imgsrc: email, title: "האימייל שלנו", info: "contact@pitpitap.co.il" },
    { imgsrc: facebook, title: "הפייסבוק שלנו", info: "#pitpitap page" }
  ];

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <GridContainer
        gridTemplateColumns={["1fr 2fr 1fr", "1fr 2fr 1fr"]}
        gridTemplateRows="auto"
        gridGap="0"
        margin="auto"
        height={["5vh", "10vh"]}
        width={["60%", "35%"]}
        padding={["10rem 25rem", "20rem 50rem"]}
      >
        <Image
          src={fill_one}
          width={["100%", "100%"]}
          margin="auto"
          style={{ transform: "rotate(180deg)" }}
        />
        <Text
          fontSize={["40rem", "45rem"]}
          fontFamily="Rounded1c_Medium"
          margin="auto"
        >
          צרו קשר
        </Text>
        <Image src={fill_one} width={["100%", "100%"]} margin="auto" />
      </GridContainer>
      <GridContainer
        gridTemplateColumns={["1fr", "repeat(3, 1fr)"]}
        gridTemplateRows="1fr"
        gridGap={["5%", "3%"]}
        margin="2vh"
        width="50vw"
        height="35vh"
        marginTop="50rem"
      >
        {items.map((item, index) => (
          <div key={index}>
            <Image src={item.imgsrc} height={["14vh", "19vh"]} margin="auto" />
            <Text
              fontSize="25rem"
              fontFamily="Rounded1c_ExtraBold"
              margin="auto"
              padding="5rem"
            >
              {item.title}
            </Text>
            <Text fontSize="20rem" fontFamily="Rounded1c_Regular" margin="auto">
              {item.info}
            </Text>
          </div>
        ))}
      </GridContainer>
      <GridContainer
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr"
        gridGap="0"
        margin="auto"
        marginTop={["350rem", "60rem"]}
        marginBottom={["50rem", "0rem"]}
      >
        <Text
          fontSize={["25rem", "35rem"]}
          fontFamily="Rounded1c_Bold"
          margin="auto"
        >
          הורידו עכשיו
        </Text>
        <Download />
      </GridContainer>
    </FlexContainer>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  exampleFunc: data => dispatch(userActions.login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
