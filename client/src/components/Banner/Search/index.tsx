
import { Input } from "antd"

import { useState } from "react"

const SearchBar = () => {

const [search, setSearch] = useState<string>('')
const [loading, setLoading] = useState<boolean>(false)

const handleSearch = (e:any) => {
    setLoading(true)
    setTimeout(() => {  
        setLoading(false)
    }
    , 1000)

    setSearch(e.target.value)
}

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        <Input.Search 
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
          style={{ width: '600px' }}
          allowClear
          loading={loading}
          size="large"
          
        />
          
    </div>
  )
}

export default SearchBar