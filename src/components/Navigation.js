import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <Container>
      <nav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style-type: none;
  }

  li a {
    text-decoration: none;
    color: black;
  }
`;

export default Navigation;
