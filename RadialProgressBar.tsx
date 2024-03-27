//code assembled and put together by Haider Ali
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const RadialProgressBar = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const size = 200;

  return (
    <>
      {/* First Progress Circle */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mb: 10 }}
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 20,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={progress}
            size={size}
            thickness={4}
            sx={{
              color: "primary.main",
              position: "absolute",
              zIndex: 2,
              transition: "stroke-dashoffset 0.35s",
              easeInOuteaseInOut: "easeInOut",
            }}
          />

          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              zIndex: 3,
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="primary.main"
              fontSize={30}
            >
              {`${progress}%`}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Second Progress Circle */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 20,
          }}
        >
          <CircularProgress
            //variant="determinate"
            value={progress}
            size={size}
            thickness={4}
            sx={{
              color: "primary.main",
              position: "absolute",
              zIndex: 2,
              transition: "stroke-dashoffset 0.35s",
              easeInOuteaseInOut: "easeInOut",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default RadialProgressBar;
