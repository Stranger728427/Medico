import HeaderComponent from "../components/HeaderComponent";
import { Layout } from 'antd';
import FooterBox from "../components/FooterBox";
import Banner from "../components/Banner";
import TopMedicines from "../components/TopMedicines";
// import '../styles/home.css'; 

const { Content } = Layout;

const Home = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <div className="bg-slate-200">
      <HeaderComponent />
      <div className="border-red-700">
        <Content style={{ padding: '0 48px' ,margin:'20px'}}>
          <Layout
            style={{ padding: '24px 0'}}
          >
            <Content style={{ padding: '0 24px', minHeight: 280 }} className="bg-slate-400 h-fit">
              <div className="banner" style={{margin:'30px',}}>
                <Banner />
              </div>
              <div className="flex-1 m-[30px]" >

                <TopMedicines />
                
              </div>
            </Content>
          </Layout>
        </Content>
      </div>
      <FooterBox />
    </div>
  );
}

export default Home;
