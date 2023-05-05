import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  countrylistActions,
  deletecountryAction,
} from "../Redux/Action/Country-action";
import { ListItem } from "@mui/material";
import moment from "moment";

function Country_list() {
  const dispatch = useDispatch();

  const { countrylist, success } = useSelector(
    (state) => state.countrylistReducer
  );

  const { success: deletesuccess } = useSelector(
    (state) => state.deleteCountryReducer
  );

  useEffect(() => {
    dispatch(countrylistActions());
  }, [deletesuccess]);

  const [usersForRender, setUsersForRender] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let userData = [];
    countrylist?.map((item, index) => {
      item.country = item.country;
      item.price = item.price;
      item.action = (
        <div className="flex text-lg">
          <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/country/${item.id}`}
          >
            <i className="fas fa-edit  pr-4 text-blue-500 "></i>
          </Link>
          <div className="flex">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => deleteHandler(item.id)}
            >
              <i className="fa fa-trash text-red-500"></i>
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setRows(userData);
  }, [countrylist]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this Country?",
      className: "errorAlert",
      // icon: "/img/company-logo.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletecountryAction(id));
        swal({
          title: "Successfully Complete",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/company-logo.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  const columns = [
    { id: "country", label: "Country" },
    { id: "price", label: "Price", align: "center" },
    { id: "action", label: "Action", minWidth: 100 },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          <div className="all-content-div w-full  h-screen">
            <main>
              <div className="pt-6 px-4">
                <div className="xl:gap-4 my-4">
                  <div className="heading-top">
                    <h3 className="text-black text-2xl font-medium">
                      Country List
                    </h3>
                  </div>
                  <div className="bg-white rounded-md mb-8 mt-3 p-4 sm:p-6 h-full">
                    <div className="savebtnTask Categorybtn">
                      <Link
                        className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                        to={`/country`}
                      >
                        {" "}
                        Add Country{" "}
                      </Link>
                    </div>
                    <Paper sx={{ mb: 2 }}>
                      <div className="Category_p Categoryadminworkflownew">
                        <TableContainer>
                          <Table size="small" aria-label="sticky table">
                            <TableHead>
                              <TableRow
                                style={{
                                  backgroundColor: "#D0E3FF",
                                }}
                              >
                                {columns.map((column) => (
                                  <TableCell
                                    style={{
                                      fontWeight: "900",
                                    }}
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.label}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows?.length > 0 &&
                                rows
                                  .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                  )
                                  .map((row, index) => {
                                    return (
                                      <TableRow
                                        // hover
                                        style={
                                          index % 2 === 0
                                            ? { backgroundColor: "#FFFFFF" }
                                            : { backgroundColor: "#ECF5FF" }
                                        }
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                      >
                                        {columns.map((column) => {
                                          const value = row[column.id];
                                          return (
                                            <TableCell
                                              key={column.id}
                                              align={column.align}
                                            >
                                              {column.format &&
                                              typeof value === "number"
                                                ? column.format(value)
                                                : value}
                                            </TableCell>
                                          );
                                        })}
                                      </TableRow>
                                    );
                                  })}
                              {rows.length < 1 && (
                                <div className="Category_p">
                                  <TableRow
                                    style={{
                                      height: "50vh",
                                    }}
                                  >
                                    No matching records found
                                  </TableRow>
                                </div>
                              )}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <div className="Category_p workflowadiv">
                          <TablePagination
                            rowsPerPageOptions={[10, 20, 50, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                          />
                        </div>
                      </div>
                    </Paper>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Country_list;
