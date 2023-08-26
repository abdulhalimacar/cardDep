import { Container, Image } from "react-bootstrap"; 
import python from "../assets/python.jpg";

const Header = () => {
  return (
    <Container>
      <Image src={python} alt="python_logo" fluid width={"250px"}></Image>
      
    </Container>
  );
};

export default Header;

//burada biz div yerine kapsayıcı tag olarak container kullandık
//fluid resmi containerın içerisine hapseder
//
//
//
//