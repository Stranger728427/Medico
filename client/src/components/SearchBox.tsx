import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"


const SearchBox = () => {
  return (
    <>
      <div className="searchInput">
        <Input prefix={<SearchOutlined />} placeholder="Search" style={{ width: '100%' }} />

        
      </div>
    </>
  )
}

export default SearchBox