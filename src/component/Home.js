import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="https://darkinventor.github.io/Tesla-clone/images/accessories.jpg"
        leftBtnText="Order now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
