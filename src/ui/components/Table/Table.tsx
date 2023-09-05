import { DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';

import { addSelectedProduct } from '../../../store/products/actions';
import { IProduct } from '../../../models';

import './Table.scss';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 110 },
  { field: 'title', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 130,
  },
  {
    field: 'image',
    headerName: 'Image',
    renderCell: (params: GridRenderCellParams) => (
      <img
        src={params.value}
        alt='Cannot load an image'
        width='100px'
        height='100px'
      />
    ),
    type: 'string',
    sortable: false,
    width: 130,
  },
  { field: 'rating', headerName: 'Rating', type: 'number', width: 130 },
  { field: 'stock', headerName: 'Stock', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
];

export default function DataTable(props: any) {
  const { products } = props;
  const dispatch = useDispatch();

  let rows = [] as IProduct[];
  products.map((products: IProduct) => {
    rows.push({
      id: products.id,
      title: products.title,
      description: products.description,
      price: products.price,
      image: products?.images?.length ? products.images[0] : null,
      rating: products.rating,
      stock: products.stock,
      category: products.category,
    });
  });

  const handleSelectionChange = (selection: any) => {
    dispatch(addSelectedProduct(selection));
  };

  return (
    <div className='container'>
      <div className='tableContainer'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[7, 9, 20]}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
          className='table'
        />
      </div>
    </div>
  );
}
