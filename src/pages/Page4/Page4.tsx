import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// 사용자 데이터 타입
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

// 사용자 데이터 배열 (-> API 요청으로 변경?)
const rows: User[] = [
  { id: 1, name: 'John Doe', age: 30, email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Doe', age: 25, email: 'janedoe@example.com' },
  { id: 3, name: 'Ilmin Cho', age: 29, email: 'ilmincho@gmail.com' },
];

// 컬럼
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
];

export default function UserDataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
