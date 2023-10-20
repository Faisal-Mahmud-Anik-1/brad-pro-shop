import { Navbar, Nav, Container } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand href="/">ProShop 🛍</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/cart">🛒Cart</Nav.Link>
              </Nav>
              <Nav href="/login">
                <Nav.Link>🔑Sign In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
