import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";
import RegistrationForm from './RegistrationForm';
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

const AuthModel = ({ handleClose, open }) => {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen ? '80%' : 500,
    bgcolor: 'background.paper',
    outline: "none",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegistrationForm />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModel;
