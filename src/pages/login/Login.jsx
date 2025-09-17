import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
  IconButton,
} from "@mui/material";


import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LoginImage from "../../assets/Login_image.png"

const StyledTextField = (props) => (
  <TextField
    fullWidth
    variant="filled"
    InputProps={{
      disableUnderline: true,
      sx: {
        borderRadius: "4px",
        backgroundColor: "#0a1316",
        "&.Mui-focused": {
          backgroundColor: "#0a1316",
        },
        "&:hover": {
          backgroundColor: "#0a1316",
        },
      },
      ...props.InputProps,
    }}
    sx={{
      "& .MuiFilledInput-root": {
        backgroundColor: "#0a1316",
      },
      "& .MuiInputBase-input": {
        color: "white",
      },
      marginBottom: "16px",
    }}
    {...props}
  />
);


const Login = ({ handleClose }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#192428",
        borderRadius: "8px",
        overflow: "hidden",
        maxWidth: "2000px",
        width: "62rem", 
        position: "relative",
        outline: 'none', 
      }}
    >
      
      <IconButton
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "#d9832e",
          color: "white",
          "&:hover": {
            backgroundColor: "#b86e26",
          },
          zIndex: 1,
        }}
        aria-label="close"
        onClick={handleClose} 
      >
        <CloseIcon />
      </IconButton>

   
    
      <Box
        sx={{
          width: { xs: "0%", md: "40%" },
          flexShrink: 0,
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", md: "block" },
        }}
      />
   
    
      <Box
        sx={{
          flexGrow: 1,
          p: { xs: 4, md: 6 },
          color: "white",
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Stack spacing={2}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Your Name:
          </Typography>
          <StyledTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
          />

  
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Email:
          </Typography>
          <StyledTextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
          />

      
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Password:
          </Typography>
          <StyledTextField
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "grey.500" }} />
                </InputAdornment>
              ),
            }}
          />


          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#d68240",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d68240",
                color: "white",
                fontWeight: "bold",
                py: 1,
                px: 4,
                borderRadius: "4px",
              }}
            >
              SUBMIT
            </Button>
          </Box>

        
          <Stack
            direction="row"
            spacing={3}
            sx={{ mt: 5, justifyContent: "center" }}
          >
            <Button
              startIcon={<FacebookIcon />}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                "& .MuiButton-startIcon": { mr: 1 },
                "& .MuiSvgIcon-root": { color: "#1877F2" },
              }}
            >
              Facebook
            </Button>
            <Button
              startIcon={<GoogleIcon />}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                "& .MuiButton-startIcon": { mr: 1 },
                "& .MuiSvgIcon-root": { color: "#DB4437" },
              }}
            >
              Google
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;