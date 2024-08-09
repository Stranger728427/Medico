import { Card } from "antd";
import { useState } from "react";

const initialData = [
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
  { title: "Hande Eracel", Price: "$20", photo: "https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/Paracetamol+Dolo-650+Uses-+Side+Effects-+Composition+and+Price-1920w.jpg" },
];
const TopMedicines = () => {
  const [cardDetails, setCardDetails] = useState(initialData);

  return (
    <div className="top-medicine-container" style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {/* <Carousel autoplay arrows infinite={true}> */}
      {
        
        cardDetails.map((item, idx) => {
            
          return (
            <div key={idx} style={{display:'flex',width:'20%', borderRadius:'4px solid red',alignItems:'center',justifyContent:'center'}}>
            
            
            <Card type="inner">
              <img src={item.photo} alt={item.title} style={{height:'50px',width:'100px'}} />
              <h3>{item.title}</h3>
              <p>{item.Price}</p>
            </Card>
        
          
          </div>
          );
          
        })
         
      }
      
      {/* </Carousel> */}
    </div>
  );
}

export default TopMedicines;
