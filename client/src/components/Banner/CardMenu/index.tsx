import { Card, Space } from "antd";

const { Meta } = Card;

const MenuCard = [
    {
        id: 1,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },
    {
        id: 2,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },
    {
        id: 3,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },
    {
        id: 4,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },
    {
        id: 5,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },
    {
        id: 6,
        image: 'https://plus.unsplash.com/premium_photo-1671721439617-491242a0507f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D',
        description: 'Medicine',
        SaveValue: '22% OFF',
        link: '/'

    },


];

const CardMenu = () => {
  return (
    <div>
        <div className="card-menu">
            {MenuCard.map((item) => {
            return (
               <Space direction="horizontal" size={5} key={item.id} style={{ margin: 20 }}> 
                <Card
                    
                    hoverable={true}
                    style={{ width: 150 }}
                    cover={<img alt="example" src={item.image}  style={{background:'cover', height:150}}/>}
                >
                    <Meta title={item.description} description={item.SaveValue} />
                </Card>
                </Space>
            )
            })}
        </div>
    </div>
  )
}

export default CardMenu