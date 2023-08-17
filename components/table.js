import React from 'react';
import { useTable } from 'react-table';
import { motion } from 'framer-motion';

const data = [
  { id: 1, producto: 'Producto 1', stock: 20 },
  { id: 2, producto: 'Producto 2', stock: 15 },
  { id: 3, producto: 'Producto 3', stock: 8 },
  { id: 4, producto: 'Producto 4', stock: 10 },
  { id: 5, producto: 'Producto 5', stock: 5 },
  // Agrega más productos aquí
];

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Producto',
        accessor: 'producto',
      },
      {
        Header: 'Stock',
        accessor: 'stock',
        Cell: ({ value }) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-green-500"
          >
            {value}
          </motion.div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table w-full border-collapse">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-4 py-2 font-semibold text-left"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="hover:bg-gray-200">
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} className="px-4 py-2">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
