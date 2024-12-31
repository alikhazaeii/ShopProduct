import React from "react";
import { Alert } from "@mui/material";

export default function AlertBox({ showAlert, severity, message }) {
  if (!showAlert) return null;

  return (
    <Alert
      sx={{
        height: "50px",
        width: "300px",
        position: "absolute",
        top: "150px",
        right: "10px",
      }}
      className="top-[100px] fixed "
      severity={severity}
    >
      {message}
    </Alert>
  );
}
