import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Applayout from "./Common/Applayout";

// Authication
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Forgot from "./Authentication/Forgot";
import Reset_password from "./Authentication/Reset-password";
import Account_Setting from "./Authentication/Account-setting";

// Routing
import ProtectedRoute from "./routing/ProtectedRoute";
import PublicRoute from "./routing/PublicRoute";
import AdminRoute from "./routing/AdminRoute";
import VerifyEmail from "./Authentication/Verify-email";
import ThankYou from "./Authentication/Thankyou";

// Admin
import Dashboard from "./Admin/Dashboard";
import Task_list from "./Admin/Task-list";
import Add_task from "./Admin/Add_task";
import Logs from "./Admin/Logs";
import Deposit from "./Admin/Deposit";
import Payment from "./Admin/Payment";

import Add_balance from "./Admin/Add-balance";
import Country_list from "./Admin/Country-list";
import Add_Edit_Country from "./Admin/Add-Edit-Country";

// Pages
import Home from "./Pages/Home";

function App() {
  const [newRerender, setNewrerender] = useState(false);

  return (
    <div className="App_import">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <PublicRoute>
              <Home />
              // </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              // <PublicRoute>
              <Register />
              // </PublicRoute>
            }
          />
          <Route
            path="/verify-email"
            element={
              // <PublicRoute>
              <VerifyEmail />
              // </PublicRoute>
            }
          />
          <Route
            path="/thank-you"
            element={
              // <PublicRoute>
              <ThankYou />
              // </PublicRoute>
            }
          />
          <Route
            path="verify-email/:token/:decodeId"
            element={
              // <PublicRoute>
              <VerifyEmail />
              // </PublicRoute>
            }
          />
          <Route
            path="/forgot"
            element={
              // <PublicRoute>
              <Forgot />
              // </PublicRoute>
            }
          />
          <Route
            path="reset-password/:token/:uid"
            element={
              // <PublicRoute>
              <Reset_password />
              // </PublicRoute>
            }
          />
          <Route
            path="reset-password"
            element={
              // <PublicRoute>
              <Reset_password />
              // </PublicRoute>
            }
          />

          <Route
            element={
              <Applayout
                newRerender={newRerender}
                setNewrerender={setNewrerender}
              />
            }
          >
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/deposit"
              element={
                <ProtectedRoute>
                  <Deposit />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/country-list"
              element={
                <ProtectedRoute>
                  <Country_list />
                </ProtectedRoute>
              }
            />
            <Route
              path="/country"
              element={
                <ProtectedRoute>
                  <Add_Edit_Country />
                </ProtectedRoute>
              }
            />
            <Route
              path="/country/:countryId"
              element={
                <ProtectedRoute>
                  <Add_Edit_Country />
                </ProtectedRoute>
              }
            /> 
            <Route
              path="/add-balance"
              element={
                <ProtectedRoute>
                  <Add_balance />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/account-setting"
              element={
                <ProtectedRoute>
                  <Account_Setting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-task"
              element={
                <ProtectedRoute>
                  <Add_task />
                </ProtectedRoute>
              }
            />
            <Route
              path="/task-list"
              element={
                <ProtectedRoute>
                  <Task_list />
                </ProtectedRoute>
              }
            />
            <Route
              path="/logs"
              element={
                <ProtectedRoute>
                  <Logs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
