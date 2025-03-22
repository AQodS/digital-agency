"use client";
import { Box, Button, ButtonProps } from "@mui/material";

const FlippingButton = ({
  frontText,
  backText,
  frontColor,
  backColor,
  variant = "contained",
}: {
  frontText: string;
  backText: string;
  frontColor?: ButtonProps["color"];
  backColor?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
}) => {
  return (
    <Box
      sx={{
        perspective: "1000px", // Enables 3D effect
      }}
    >
      <Box
        sx={{
          position: "relative",
          fontFamily: "Montserrat, sans-serif",
          width: "200px",
          height: "50px",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "rotateY(180deg)",
            transition: "transform 1.5s ease",
          },
        }}
      >
        {/* Front Side */}
        <Button
          fullWidth
          variant={variant}
          size="large"
          color={frontColor}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            // color: "#fff",
          }}
        >
          {frontText}
        </Button>

        {/* Back Side */}
        <Button
          fullWidth
          variant={variant}
          color={backColor}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            // color: "#fff",
          }}
        >
          {backText}
        </Button>
      </Box>
    </Box>
  );
};

export default FlippingButton;
