
import { Carousel } from "antd";
import { CSSProperties } from "react";


const contentStyle: CSSProperties = {

    height: '300px',
    color: '#fff',
    width:"100%",
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner = () => {



  return (
    <>
      

     <Carousel autoplay arrows infinite={true} effect="fade" >
        <div>
        <img style={contentStyle} src=""/>
        </div>
        <div>
        <img style={contentStyle} src=""/>
        </div>
        <div>
        <img style={contentStyle} src=""/>
        </div>
        <div>
        <img style={contentStyle} src=""/>
        </div>
      </Carousel>
  
      

    

    </>
  );
};

export default Banner;