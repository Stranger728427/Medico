import { Card, Rate, Space, Typography } from "antd";
import { useProductsApi } from "../../Api/Medicine";
import Header from "../../components/Header";

const HomePage = () => {
  const { products } = useProductsApi();

  return (
    <div>
      <Header />
      {products &&
        products.map((product) => (
          <Space
            direction="horizontal"
            size={5}
            key={product.id}
            style={{ padding: 20 }}
          >
            <Card hoverable={true}>
              <img
                alt="example"
                src={product.image}
                style={{ background: "cover", width: 150, height: 150 }}
              />
              <p></p>
              <Typography.Title>{product.title}</Typography.Title>s
              <Card.Meta title={product.title} description={product.price} />
              <Rate></Rate>
            </Card>
          </Space>
        ))}
    </div>
  );
};

export default HomePage;
