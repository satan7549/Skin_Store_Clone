import { Box, Image } from "@chakra-ui/react";

function Loading() {
  return (
    <Box style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Image
        style={{
          margin: "auto",
          justifyContent: "center",
          alignContent: "center",
        }}
        src="https://blog.hubspot.com/hs-fs/hubfs/7a8f8d634013568124e130728834d47a.gif?width=1500&name=7a8f8d634013568124e130728834d47a.gif"
      />
    </Box>
  );
}

export default Loading;
