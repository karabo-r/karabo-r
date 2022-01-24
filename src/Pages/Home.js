import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import greetings from "../components/greetings";
import styled from "styled-components";
function Home() {
  const [currentGreeting, setGreeting] = useState("Hello.");

  return (
    <Container>
      {/* <Navigation /> */}
      <Title>{currentGreeting}</Title>

      <Description>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          praesentium aperiam in maiores quis eligendi, odio debitis. Minus
          eaque recusandae cupiditate, debitis tempora molestias facere nostrum
          libero odio repudiandae, porro velit repellendus voluptatem accusamus
          eligendi inventore quod labore culpa consectetur maxime. Consequatur
          libero eaque praesentium voluptate enim delectus voluptatum possimus
          consequuntur sequi soluta totam laboriosam eligendi beatae, cumque
          porro nostrum quod cupiditate repellat ullam corporis voluptas vitae!
        </p>
      </Description>
      <button className="button-primary">View Projects</button>
    </Container>
  );
}

const Container = styled.div`
  button {
    margin-top: 20px;
    background-color: #665df5;
    border: transparent;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  letter-spacing: 4px;
`;

const Description = styled.div`
  width: 40%;
  font-size: 20px;
  margin-top: 50px;
  text-align: justify;
`;

export default Home;
