import { Box, CircularProgress } from "@mui/material";

const CircularProgressWithIcon = ({
  value = 50,
  icon,
}: {
  value: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}) => {
  return (
    <Box position="relative" display="inline-flex">
      {/* Buffer Progress (Background Circle) */}
      <CircularProgress
        variant="determinate"
        value={100}
        sx={{ color: "lightgray", position: "absolute" }}
        size={80}
      />

      {/* Main Progress */}
      <CircularProgress
        variant="determinate"
        value={value}
        color="primary"
        size={80}
      />

      {/* Icon in the Center */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default CircularProgressWithIcon;
