import { useState } from "react";
import { Container,Image } from "react-bootstrap";

const Language = ({name,img,options})=>{

  const [showDesc,setShowDesc] = useState(true);

    return (
      <Container style={{background:"peachpuff"}} className="p-4 rounded-2 h-100 lang-card" 
      onClick={()=>setShowDesc(!showDesc)}
      type = "button">

        {showDesc && (<Container>
        <Image src={img} width="70%" className="lang-logo"></Image>
        <h3 className="display-6">{name}</h3>
        </Container>)}
        
      {!showDesc && (<ol className="h-100">
        {options.map((item)=>{
          return(
            <li className="h5 text-start">
              {item}
            </li>
          )
        })}
      </ol>)}
      
      </Container>
    );
};

export default Language;

//resimler birbirine yapışıyor bunun önüne geçmek için row'a gidip gap verecez! 
//tıklandığında resim yerine bilgi gelsin istiyorsak bunu toggle ile yaparız ve daha sonra aşağıya yeni bir container tanımlarız veya container yerine ul de kullanabiliriz aynı işlevi görür
/*
showdesc false ise bunu göster dedik burada:
  {!showDesc && (<ol>
        {options.map((item)=>{
          return(
            <li className="h5 text-start">
              {item}
            </li>
          )
        })}
      </ol>)}
*/

//resme tıklayınca alan küçülüyor resim küçük olduğu için. bunu nasıl halledebiliriz? ol'ye yükseklik vermemiz lazım bunu bootstrapten vereceğiz h-100 olarak verdik.... ama yemedi o yüzden containera da gidip yüzde yüz yükseklik vermemiz gerek o zaman yeriz 

// d-flex flex-column justify-content-center>>bootstrapte flex kullanma 
//üzerine geldiğimizde nasıl cursor pointer vereceğiz..kısayol yol olarak type button verirsek yaparız
//hover vesaire için css'e geçmek lazım index.css'e geçtik....