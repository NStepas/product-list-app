import DataTable from './Table/Table';

import { IProductsList } from '../../models';

const SearchList: React.FC<IProductsList> = (props) =>{
   const {filteredProducts} = props

   return (
      <div>
         <DataTable products={filteredProducts}/>       
      </div>
   );
}

export default SearchList
