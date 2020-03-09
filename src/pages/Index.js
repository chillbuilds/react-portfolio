import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Index() {

  return (
    <Container fluid>
      <Row>
        <Col size='sm-12'>
            <h1>Welcome to the Fight!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">
        <a href="/newbot">   
              <h1>Initialize BattleBots</h1>
          </a>
        </Col>
        <Col size="md-6 sm-12">
          <a href="/newBot">
                <h1>Git Ready to Rumble</h1>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Index;
