import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://github.com/gabriel-sisjr">Gabriel Santana</a> 
              and 
              <a href="https://github.com/clovijan">Clovijan Bispo</a>, based on Creative Tim Template.
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
