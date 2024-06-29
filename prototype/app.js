const { createElement } = React;
const { render } = ReactDOM;
const styled = window.styled;

const GradientBackground = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
  color: white;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const NavigationMenu = styled.nav`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 300px;
  background: url('https://example.com/hero-image.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <GradientBackground>
      <NavigationMenu>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavigationMenu>
      <Container>
        <HeroImage />
        <h1>Welcome to the Future</h1>
        <p>Experience the cutting-edge technology and design</p>
      </Container>
    </GradientBackground>
  );
}

render(<App />, document.getElementById('root'));
