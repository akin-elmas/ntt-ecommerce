import { Box, Drawer, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <Drawer anchor="right" open={open} variant="temporary">
      <Box sx={{ width: "100vw" }}>
        <Box
          sx={{
            width: "100%",
          }}>
          <Stack direction="row" alignItems="center">
            <Stack spacing={2} sx={{ p: 3 }}>
              <Typography variant="h5">Category 1</Typography>
              <Typography variant="h5">Category 1</Typography>
              <Typography variant="h5">Category 1</Typography>
              <Typography variant="h5">Category 1</Typography>
            </Stack>
            <Close
              sx={{
                position: "absolute",
                right: "1rem",
                top: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            />
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
}
