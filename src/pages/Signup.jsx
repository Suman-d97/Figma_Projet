// import { useForm } from "react-hook-form";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
//   Stack,
//   IconButton,
//   Link,
// } from "@mui/material";

// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import CloseIcon from "@mui/icons-material/Close";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import LoginImage from "../assets/Login_image.png";
// import Api from "../api/Api";
// import { useNavigate } from "react-router-dom";

// const StyledTextField = (props) => (
//   <TextField
//     fullWidth
//     variant="filled"
//     InputProps={{
//       disableUnderline: true,
//       sx: {
//         borderRadius: "4px",
//         backgroundColor: "#0a1316",
//         "&.Mui-focused": { backgroundColor: "#0a1316" },
//         "&:hover": { backgroundColor: "#0a1316" },
//       },
//       ...props.InputProps,
//     }}
//     sx={{
//       "& .MuiFilledInput-root": { backgroundColor: "#0a1316" },
//       "& .MuiInputBase-input": { color: "white" },
//       "& .MuiFormHelperText-root": { color: "#f44336", marginLeft: 0 },
//       marginBottom: "4px",
//     }}
//     error={!!props.error}
//     helperText={props.helperText}
//     {...props}
//   />
// );

// const Signup = ({ handleClose, onSwitchToLogin }) => {

//   const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit =  async (data) => {
//     console.log("Signup Data:", data);
//     await Api.post(`users`, data)
//     localStorage.setItem("loginData", JSON.stringify(data))
//     alert("success ")
//     navigate("/login/add-to-cart");

//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         backgroundColor: "#192428",
//         borderRadius: "8px",
//         overflow: "hidden",
//         width: "62rem",
//         position: "relative",
//         outline: "none",
//       }}
//     >
//       <IconButton
//         sx={{
//           position: "absolute",
//           top: 16,
//           right: 16,
//           backgroundColor: "#d9832e",
//           color: "white",
//           "&:hover": { backgroundColor: "#b86e26" },
//           zIndex: 1,
//         }}
//         aria-label="close"
//         onClick={handleClose}
//       >
//         <CloseIcon />
//       </IconButton>

//       <Box
//         sx={{
//           width: { xs: "0%", md: "40%" },
//           backgroundImage: `url(${LoginImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: { xs: "none", md: "block" },
//         }}
//       />

//       <Box sx={{ flexGrow: 1, p: { xs: 4, md: 6 }, color: "white" }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Stack spacing={2}>
//             <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//               Your Name:
//             </Typography>
//             <StyledTextField
//               {...register("name", { required: "Your name is required" })}
//               error={errors.name}
//               helperText={errors.name?.message}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <PersonOutlineOutlinedIcon sx={{ color: "grey.500" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//               Email:
//             </Typography>
//             <StyledTextField
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "Invalid email address",
//                 },
//               })}
//               error={errors.email}
//               helperText={errors.email?.message}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <EmailOutlinedIcon sx={{ color: "grey.500" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//               Password:
//             </Typography>
//             <StyledTextField
//               type="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 8,
//                   message: "Password must be at least 8 characters",
//                 },
//               })}
//               error={errors.password}
//               helperText={errors.password?.message}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <LockOutlinedIcon sx={{ color: "grey.500" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 mt: 1,
//               }}
//             >
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#d68240",
//                   cursor: "pointer",
//                   "&:hover": { textDecoration: "underline" },
//                   fontWeight: "bold",
//                 }}
//               >
//                 Forgot Password?
//               </Typography>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#d68240",
//                   color: "white",
//                   fontWeight: "bold",
//                   py: 1,
//                   px: 4,
//                   borderRadius: "4px",
//                 }}
//               >
//                 SIGN UP
//               </Button>
//             </Box>
//           </Stack>
//         </form>

//         <Stack
//           direction="row"
//           spacing={3}
//           sx={{ mt: 5, justifyContent: "center" }}
//         >
//           <Button
//             startIcon={<FacebookIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontSize: "1rem",
//               "& .MuiSvgIcon-root": { color: "#1877F2" },
//             }}
//           >
//             Facebook
//           </Button>
//           <Button
//             startIcon={<GoogleIcon />}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontSize: "1rem",
//               "& .MuiSvgIcon-root": { color: "#DB4437" },
//             }}
//           >
//             Google
//           </Button>
//         </Stack>

//         <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
//           <Typography variant="body2">Already have an account?</Typography>
//           <Link
//             component="button"
//             variant="body2"
//             onClick={onSwitchToLogin}
//             sx={{
//               color: "#d68240",
//               cursor: "pointer",
//               fontWeight: "bold",
//               textDecoration: "underline",
//             }}
//           >
//             Login
//           </Link>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Signup;


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
    navigate("/login/cart");
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
