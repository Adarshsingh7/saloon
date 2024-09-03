import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function accessorKeyGenerator(obj, prefix = "") {
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "object" && value !== null) {
        keys = keys.concat(accessorKeyGenerator(value, newPrefix));
      } else {
        keys.push(newPrefix);
      }
    }
  }

  return keys;
}

//nested data is ok, see accessorKeys in ColumnDef below

const Table = ({ data }) => {
  const accessorKeys = accessorKeyGenerator(data[0]);

  const fields = [
    "name",
    "category",
    "brand",
    "model",
    "price",
    "quantity",
    "warehouse",
    "supplier name",
    "phone",
    "email",
    "Actions",
  ];

  const columns = fields.map((field, index) => {
    if (field === "Actions") {
      return {
        id: "action",
        header: "Actions",
        size: 10,
        Cell: ({ row }) => (
          <button onClick={() => alert(JSON.stringify(row.original))}>
            Edit
          </button>
        ),
      };
    }

    return {
      accessorKey: accessorKeys[index],
      header: field,
    };
  });

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableColumnResizing: true,
    enableFullScreenToggle: false,
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
