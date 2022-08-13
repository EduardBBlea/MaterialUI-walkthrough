import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TableData = [
  {
    id: 1,
    first_name: "Emmey",
    last_name: "Leaming",
    email: "eleaming0@amazon.de",
    gender: "Female",
    ip_address: "59.241.201.194",
  },
  {
    id: 2,
    first_name: "Mellie",
    last_name: "Leroux",
    email: "mleroux1@vistaprint.com",
    gender: "Female",
    ip_address: "85.154.17.70",
  },
  {
    id: 3,
    first_name: "Broderick",
    last_name: "Venard",
    email: "bvenard2@prweb.com",
    gender: "Polygender",
    ip_address: "95.92.111.87",
  },
  {
    id: 4,
    first_name: "Thaddus",
    last_name: "Vedishchev",
    email: "tvedishchev3@canalblog.com",
    gender: "Male",
    ip_address: "226.172.152.234",
  },
  {
    id: 5,
    first_name: "Arie",
    last_name: "Ferrieroi",
    email: "aferrieroi4@uol.com.br",
    gender: "Male",
    ip_address: "119.77.69.196",
  },
  {
    id: 6,
    first_name: "Mel",
    last_name: "Sidary",
    email: "msidary5@last.fm",
    gender: "Male",
    ip_address: "61.254.159.207",
  },
  {
    id: 7,
    first_name: "Zitella",
    last_name: "MacAllester",
    email: "zmacallester6@aol.com",
    gender: "Female",
    ip_address: "239.226.175.195",
  },
  {
    id: 8,
    first_name: "Gunar",
    last_name: "Beceril",
    email: "gbeceril7@alexa.com",
    gender: "Genderfluid",
    ip_address: "222.179.9.241",
  },
  {
    id: 9,
    first_name: "Gae",
    last_name: "Maasz",
    email: "gmaasz8@dell.com",
    gender: "Female",
    ip_address: "215.179.4.167",
  },
  {
    id: 10,
    first_name: "Theadora",
    last_name: "Brocking",
    email: "tbrocking9@kickstarter.com",
    gender: "Female",
    ip_address: "125.182.19.108",
  },
];

export default MuiTable;
