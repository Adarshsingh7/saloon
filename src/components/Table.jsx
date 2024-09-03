import { useMemo } from "react";
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
const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const Example = () => {
  const accessorKeys = accessorKeyGenerator(data[0]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
      {
        id: "action", // This is a unique identifier for the column
        header: "Actions",
        size: 10,
        Cell: ({ row }) => (
          <button onClick={() => alert(row.original)}>Action</button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilter: false, // Disable per-column filtering
    enableGlobalFilter: false, // Disable global search
    enableColumnActions: false, // Disable per-column actions
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
