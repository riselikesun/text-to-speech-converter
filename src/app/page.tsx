"use client";

import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import {
  VoiceSelector,
  TextInput,
  TransformButton,
  AudioPlayer,
} from "./components";

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
      <Paper elevation={3} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>
          <TextInput />
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            minWidth="250px"
            padding={2}
          >
            <Typography fontWeight={600} color="textSecondary" >
              Options
            </Typography>
            <VoiceSelector />
            <TransformButton />
          </Box>
        </Box>
        <Divider flexItem />
        <AudioPlayer />
      </Paper>
    </Container>
  );
}
