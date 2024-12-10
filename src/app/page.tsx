"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { VoiceSelector } from "./components";

const TextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  fontSize: "16px",
  border: "none",
  color: theme.palette.text.secondary,
  fontFamily: "inter",
  resize: "none",
  padding: 8,
  minWidth: "400px",
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
        color="textDisabled"
      >
        Text To Speech Converter
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, display: "flex", gap: 2 }}>
        <TextArea
          minRows={10}
          defaultValue="Good day, how are you?"
          placeholder="Enter some text to convert to speech"
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box display="flex" flexDirection="column" gap={2} minWidth="200px" paddingTop={1}>
          <Typography fontWeight={600} color="textSecondary">Options</Typography>
          <VoiceSelector />
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Transform into speech
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
