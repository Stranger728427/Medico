
import SearchBar from './Search'
import '../../App.css'
import CardMenu from './CardMenu'
const Banner = () => {
  return (
    <div className="banner">
      <SearchBar/>
      <div className="banner-menu">
      <CardMenu/>   
      </div>
       
    </div>
  )
}

export default Banner