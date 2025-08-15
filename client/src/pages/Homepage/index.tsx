import { Badge, Button, Card, Rate, Space, Typography, Image } from "antd";
import { useProductsApi } from "../../Api/Medicine";

const HomePage = () => {
  const { products } = useProductsApi();

  return (
    <div>
      {products &&
        products.map((product) => (
          <Space
            direction="horizontal"
            size={5}
            key={product.id}
            style={{ padding: 20 }}
          >
            <Badge.Ribbon text={product.discountPercentage}>
              <Card hoverable={true} style={{ width: 150, height: 300 }}>
                <Image
                  src={product.image}
                  style={{ background: "cover", width: 100, height: 100 }}
                />
                <p>{product.title.slice(0, 6)}</p>

                <Typography.Title level={5} style={{ color: "black" }}>
                  {`$ ${product.price}`}
                </Typography.Title>
                {/* <Card.Meta
                title={product.title}
                description={product.description}
              /> */}
                <Rate allowHalf value={product.rating}></Rate>
                <Button type="link">Add</Button>
              </Card>
            </Badge.Ribbon>
          </Space>
        ))}
    </div>
  );
};

export default HomePage;
