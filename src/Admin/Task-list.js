import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTaskList, deleteTasks } from "../Redux/Action/admin-action";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Task_list = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current_route = useLocation();

  // console.log("current_route - ", current_route.search);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const { taskListData, success } = useSelector(
    (state) => state.getTaskListReducer
  );

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  if (current_route?.search == "?task=success") {
    navigate("/task-list");
    window.location.reload();
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let userData = [];

    if (taskListData?.length) {
      for (let index = 0; index < taskListData.length; index++) {
        // console.log("kkkkkkkkkkkk", taskListData[index].status);
        //  if (taskListData[i]) {
        //  }
      }
    }
  }, [success, taskListData]);

  useEffect(() => {
    let userData = [];

    taskListData?.map((item, index) => {
      item.id = item.id;
      item.campaign_name = item.campaign_name;
      item.phone = item.phone;
      item.message = item.message;
      item.status = item.status;

      // item.country_name = item.country_name;
      userData.push(item);
    });

    setRows(userData);
  }, [success, taskListData]);

  const columns = [
    { id: "id", label: "Task ID" },
    // { id: "campaign_name", label: "Campaign Name" },
    { id: "phone", label: "Phone", minWidth: 50 },
    { id: "status", label: "Status", minWidth: 100 },
    { id: "message", label: "Message", minWidth: 100 },
    // { id: "country_name", label: "Country", minWidth: 100 },
  ];

  return (
    <>
      <div className="transparent-bg flex flex-col flex-auto- min-h-screen- flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="all-content-div w-full h-screen-">
            <main>
              <div className="px-4">
                <div className="xl:gap-4 my-4">
                  {/* <div className="heading-top">
                    <h3 className="text-black text-2xl font-medium">
                      Task List
                    </h3>
                  </div> */}
                  <div className="bg-white bg-white-inner rounded-md mb-8 p-4 sm:p-6 h-full">
                    <div className="discover-how">
                      <h3>Task List</h3>
                    </div>
                    <div className="savebtnTask Categorybtn">
                      <Link
                        className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-1o8ezb2-MuiButtonBase-root-MuiButton-root"
                        to={`/add-task`}
                      >
                        {" "}
                        Add Task{" "}
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
                                <TableRow className="Category_p">
                                  <TableCell colSpan={columns.length}>
                                    No matching records found
                                  </TableCell>
                                </TableRow>
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
};

export default Task_list;
