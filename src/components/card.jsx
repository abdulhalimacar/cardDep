import { Container, Row, Col } from "react-bootstrap";
import Language from "./language";
import data from "../helper/data";

const Card = ()=>{

    return (
      <Container className="rounded-4 mt-3 p-3" style={{ background: "orange" }}>
        <h1 className="text-white my-2">Language</h1>

        <Row className="g-3 justify-content-center">
          {data.map((lang, index) => {
            
              return(
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Language {...lang}  />
            </Col>
              )
          })}
        </Row>
      </Container>
    );
};

export default Card; 

//container da classname yerine şu da yapılabilir: style={{background:"orange"}}
//container da style yerine şu da yapılabilir: classname="bg-warning"

//şimdi biz burada bootstrap ile nasıl yuvarlaklık verebiliriz? classname="rounded-4" ile

//bootstrapteki col ve row özelliklerini kullanmak için bu ikisini component gibi import ettik

//küçük ekranlarda tek gözükecek, sm ekranlarda 2 gözükecek, md lerde 3 tane item, lg de 4 tane item gözükecek

// SM = {6}, MD = {4}, LG = {3}

//bootstrapte üstten aşağıdan margin nasıl verilir: my-4
//h1 de my-4 ün çalışması için üst containera padding verilmesi lazım

//my:top and bottom margin
//mx:left and right margin 

//rowa niye justify content center verdik: en alttaki 2 şeyin ortalanması için verdik 