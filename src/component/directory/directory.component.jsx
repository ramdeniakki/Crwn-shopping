import CategoryItems from '../category-item/category.item.component';
import './directory.style.scss'
const Directory = ( ({categories}) => {
    return(
        <div className="directory-container">
  {categories.map( (Category) =>(
    <CategoryItems key={Category.id}  Category={Category}/>
    
  ))}
     
  </div>
    )
})
export default Directory;