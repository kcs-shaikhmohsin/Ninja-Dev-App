import { Box } from '@mui/material';
import React from 'react';

const Rightbar = () => {
    return (
        <Box flex={1.5} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
            Rightbar
            </Box>
        </Box>
    );
};

export default Rightbar;