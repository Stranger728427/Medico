import { Layout } from "antd";

const { Footer } = Layout;

const FooterBox = () => {
  return (
    <>
     <div className="footer-container">
        <Layout>
     <Footer style={{ textAlign: 'center' }}>
        Medico ©{new Date().getFullYear()} Created by Stranger
      </Footer>
      </Layout>
     </div>
    </>
  )
}

export default FooterBox