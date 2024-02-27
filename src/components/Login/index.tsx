import * as React from "react";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

import styles from "./Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import {
  handleGetUser,
  handlegetCloseLogin,
  handlegetOpenLogin,
} from "../../features/Redux/Reducers/loginSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";
import { handlePucharseByUser } from "../../features/Redux/Reducers/pucharseSlice";
export default function index() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dataUsers = useSelector(
    (state: RootState) => state.reducer.loginSlice.listUsers
  );

  const statusDrawerLogin = useSelector(
    (state: RootState) => state.reducer.loginSlice.open
  );
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const userLogin = dataUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (userLogin) {
      dispatch(handleGetUser(userLogin));
      dispatch(handlegetCloseLogin());
      dispatch(handlePucharseByUser(userLogin.id));
      setUsername("");
      setPassword("");
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  console.log(statusDrawerLogin);

  return (
    <div>
      {/* <button onClick={handleToggleDrawer}>Toggle Drawer</button> */}
      <Drawer
        anchor="right"
        open={statusDrawerLogin}
        onClose={() => dispatch(handlegetCloseLogin())}
      >
        <Box
          sx={{
            padding: "16px",
            borderBottom: "1px solid #000",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Sign in</Typography>
          <Typography
            onClick={() => dispatch(handlegetCloseLogin())}
            component={"span"}
            sx={{ fontSize: "1.5rem", fontWeight: "300", cursor: "pointer" }}
          >
            {" "}
            <i className="fa-solid fa-xmark"></i>
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={styles.drawer}
        >
          <TextField
            id="username"
            name="username"
            label="Username or email address"
            variant="outlined"
            fullWidth
            autoFocus
            sx={{ marginY: "8px" }}
            value={username}
            onChange={handleUsernameChange}
          />

          <FormControl sx={{ marginY: "8px" }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{ marginY: "8px" }}
            fullWidth
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Drawer>
    </div>
  );
}
