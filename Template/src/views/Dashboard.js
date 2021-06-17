import React from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Veículos Disponíveis</Card.Title>
                {/* <p className="card-category">
                Here is a subtitle for this table
              </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Placa</th>
                      <th className="border-0">Modelo</th>
                      <th className="border-0">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ABT-001</td>
                      <td>Mercedez Benz</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => console.log("botão")}
                        >
                          <i className="nc-icon nc-delivery-fast"></i> Usar
                          Veiculo
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
