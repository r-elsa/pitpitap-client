import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  FlexContainer,
  Text,
  GridContainer,
  Image
} from "../../components/common";
import { userActions } from "../../store/user/actions";
import bear_1 from "../../assets/images/bear-1.png";
import bear_2 from "../../assets/images/bear-2.png";
import bear_3 from "../../assets/images/bear-3.png";
import bear_4 from "../../assets/images/bear-4.png";
import bear_5 from "../../assets/images/bear-5.png";
import bear_6 from "../../assets/images/bear-6.png";
import bear_7 from "../../assets/images/bear-7.png";
import bear_8 from "../../assets/images/bear-8.png";
import fill_one from "../../assets/images/fill-1.svg";

const WhoWeArePage = props => {
  const [width, setWidth] = useState(window.innerWidth);

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
    {
      name: "",
      imgsrc: "",
      job: ""
    },
    {
      name: "פז דוידוביץ",
      imgsrc: bear_1,
      job: "מייסדת פיטפיטאפ"
    },
    {
      name: "ניר גורלי",
      imgsrc: bear_2,
      job: "מייסד פיטפיטאפ"
    },
    {
      name: "עודד ששון",
      imgsrc: bear_3,
      job: "מייסד פיטפיטאפ"
    },
    {
      name: "",
      imgsrc: "",
      job: ""
    },
    {
      name: "נטע נחמיאס",
      imgsrc: bear_8,
      job: "מעצבת"
    },
    {
      name: "אלון מיטלמן",
      imgsrc: bear_7,
      job: "מתכנת"
    },
    {
      name: "דור צפריר",
      imgsrc: bear_6,
      job: "מתכנת"
    },
    {
      name: "אלזה ריינאן",
      imgsrc: bear_4,
      job: "מתכנתת"
    },
    {
      name: "שירן גולברי",
      imgsrc: bear_5,
      job: "מעצבת"
    }
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
        width={["80%", "45%"]}
        padding={["10rem", "7rem, 0rem,0rem"]}
      >
        <Image
          src={fill_one}
          width={["90%", "100%"]}
          margin="auto"
          style={{ transform: "rotate(180deg)" }}
        />
        <Text
          fontSize={["30rem", "45rem"]}
          fontFamily="Rounded1c_Medium"
          margin="auto"
        >
          צוות פיטפיטאפ
        </Text>
        <Image width={["90%", "100%"]} src={fill_one} margin="auto" />
      </GridContainer>

      <FlexContainer width={["70vw", "40vw"]}>
        <Text
          fontSize="22rem"
          fontFamily="Rounded1c_Regular"
          margin="0rem 0rem 18rem 0rem"
        >
          הצוות שלנו משלב בתוכו שותפים מעולם הטכנולוגיה והקרייאטיב שיצרו באהבה
          עבור הילדים שלהם ושלכם את השילוב של משחק עם גלריית תמונות משפחתית
          וקטגוריות נוספות מעולם הילדים כך שילדנו יהנו מחוויה כייפית מוגנת
          ומלמדת
        </Text>
      </FlexContainer>

      <GridContainer
        gridTemplateColumns={["1fr", "repeat(5, 1fr)"]}
        gridTemplateRows="1fr 1fr"
        gridGap="40rem"
        margin="0"
      >
        {width > "800"
          ? items.map((item, index) => (
              <div>
                <Image src={item.imgsrc} height="14vh" margin="auto" />
                <Text
                  fontSize="22rem"
                  fontFamily="Rounded1c_ExtraBold"
                  margin="auto"
                >
                  {item.name}
                </Text>
                <Text
                  fontSize="15rem"
                  fontFamily="Rounded1c_Regular"
                  margin="auto"
                >
                  {item.job}
                </Text>
              </div>
            ))
          : items.map(
              (item, index) =>
                !item.imgsrc == "" && (
                  <div>
                    <Image src={item.imgsrc} height="18vh" margin="auto" />
                    <Text
                      fontSize={["28rem", "25rem"]}
                      fontFamily="Rounded1c_ExtraBold"
                      padding="3rem"
                      margin="auto"
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontSize={["25rem", "20rem"]}
                      fontFamily="Rounded1c_Regular"
                      margin="auto"
                    >
                      {item.job}
                    </Text>
                  </div>
                )
            )}
        )) }
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

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeArePage);
