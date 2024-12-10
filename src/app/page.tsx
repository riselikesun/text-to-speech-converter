"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";

const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  fontSize: "16px",
  border: "none",
  color: theme.palette.text.secondary,
  fontFamily: "inter",
  resize: "none",
  padding: 8
}));

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h1"
        fontSize={20}
        fontWeight={600}
        padding={2}
        textAlign="center"
      >
        Text To Speech Converter
      </Typography>
      <Paper
        elevation={3}
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextArea
          minRows={10}
          defaultValue="Good day, how are you?"
          placeholder="Enter some text to convert to speech"
        />
        <Box>
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Transform into speech
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
