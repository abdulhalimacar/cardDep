import { Container, Row, Col } from "react-bootstrap";
import Card from "./components/card";
import Header from "./components/header";

function App() {

  
  return (
    <Container className="text-center mt-5 p-4">
      <Header/>
      <Card/>
    </Container>
  );
}

export default App;

//niye padding 4 verdik? en alta yapışmaması için 
//1.adım: yarn ile bootstrabi ekle
//1.adımdan sonra dependicilere yeni şeyler gelecek
//yarn add ile bootstrap indirildikten sonra app.js veya index.js ye import etmek yeterlidir
//bootstrapteki col ve row özelliklerini kullanmak için bu ikisini component gibi import ettik
//
//
//
//
//