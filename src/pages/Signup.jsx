
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
  IconButton,
  Link,
  Grid,
  Paper,
  Divider
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LoginImage from "../assets/Login_image.png";
import Api from "../api/Api";
import { useNavigate } from "react-router-dom";

const StyledTextField = (props) => (
  <TextField
    fullWidth
    variant="filled"
    InputProps={{
      disableUnderline: true,
      sx: {
        borderRadius: 2,
        backgroundColor: "#1A212B",
        "&.Mui-focused": { backgroundColor: "#1A212B" },
        "&:hover": { backgroundColor: "#222a36" },
      },
      ...props.InputProps,
    }}
    sx={{
      "& .MuiFilledInput-root": { backgroundColor: "#1A212B" },
      "& .MuiInputBase-input": { color: "white" },
      "& .MuiFormHelperText-root": { color: "#f44336", ml: 0 },
      mb: 1,
    }}
    error={!!props.error}
    helperText={props.helperText}
    {...props}
  />
);

const Signup = ({ handleClose, onSwitchToLogin }) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit =  async (data) => {
    console.log("Signup Data:", data);
    await Api.post(`users`, data)
    localStorage.setItem("loginData", JSON.stringify(data))
    alert("success ")
    navigate("/cart");
  };

  return (
    <Paper
      elevation={6}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        p: 0,
        width: { xs: "100%", sm: "90%", md: "62rem" },
        mx: "auto",
        position: "relative",
        bgcolor: "#171E26",
        display: "flex"
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "#222A36",
          color: "#FFB244",
          "&:hover": { backgroundColor: "#33405a" },
          zIndex: 1,
        }}
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <Grid container>
        <Grid
          item
          md={5}
          sx={{
            background: `linear-gradient(75deg,#273842 70%,#ffb24410), url(${LoginImage}) center/cover no-repeat`,
            display: { xs: "none", md: "block" },
            minHeight: 540,
          }}
        />
        <Grid item xs={12} md={7} sx={{ display: "flex" }}>
          <Box
            sx={{
              flexGrow: 1,
              px: { xs: 3, md: 8 },
              py: { xs: 5, md: 8 },
              color: "white",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "rgba(20,24,30,0.96)"
            }}
          >
            <Box textAlign="center" mb={3}>
              <Typography variant="h4" fontWeight="700" color="#FFB244" mb={1}>
                Create Account
              </Typography>
              <Typography variant="subtitle2" color="#d1cfcf">
                Sign up for exclusive features and faster checkout.
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1.5}>
                <StyledTextField
                  {...register("name", { required: "Name is required" })}
                  error={errors.name}
                  helperText={errors.name?.message}
                  placeholder="Full Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon sx={{ color: "#FFB244" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <StyledTextField
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email}
                  helperText={errors.email?.message}
                  placeholder="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: "#FFB244" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <StyledTextField
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  error={errors.password}
                  helperText={errors.password?.message}
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon sx={{ color: "#FFB244" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box textAlign="right" my={0.5}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#FFB244",
                      cursor: "pointer",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#FFB244",
                    color: "#171E26",
                    fontWeight: "bold",
                    py: 1.2,
                    borderRadius: "6px",
                    letterSpacing: 1,
                    fontSize: "1rem"
                  }}
                >
                  SIGN UP
                </Button>
              </Stack>
            </form>
            <Divider sx={{ my: 3, bgcolor: "#222a36" }} />
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                startIcon={<FacebookIcon />}
                variant="outlined"
                sx={{
                  color: "#1877F2",
                  borderColor: "#1877F2",
                  textTransform: "none",
                  px: 2,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  bgcolor: "rgba(24,119,242,0.07)",
                  "& .MuiSvgIcon-root": { color: "#1877F2" },
                  "&:hover": {
                    bgcolor: "#1877F2",
                    color: "#fff",
                  },
                }}
              >
                Facebook
              </Button>
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                sx={{
                  color: "#DB4437",
                  borderColor: "#DB4437",
                  textTransform: "none",
                  px: 2,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  bgcolor: "rgba(219,68,55,0.08)",
                  "& .MuiSvgIcon-root": { color: "#DB4437" },
                  "&:hover": {
                    bgcolor: "#DB4437",
                    color: "#fff",
                  },
                }}
              >
                Google
              </Button>
            </Stack>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography component="span" variant="body2">
                Already have an account?{" "}
              </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={onSwitchToLogin}
                sx={{
                  color: "#FFB244",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                  ml: 0.5,
                }}
              >
                Login
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Signup;
