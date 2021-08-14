import { AppBar, Typography, Button, styled, Box, Toolbar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

interface props {
    children: React.ReactChild;
}

const StyledLink = styled(Link)({
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecorationLine: "none",
    padding: "0 38px",
    height: "100%",
    "&:hover": {
        backgroundColor: "#f6f9ff1a",
    },
    fontSize: 16,
});

const StyledToolbar = styled(Toolbar)({
    height: "80px",
});

const HeaderBar = (props: props) => {
    return (
        <Box minHeight="100vh">
            <AppBar position="static">
                <StyledToolbar>
                    <Box display="flex" width="9.5rem">
                        <Typography variant="h5">Rentals R' Us</Typography>
                    </Box>
                    <Box display="flex" flexGrow={1} marginLeft="30px" height="100vh">
                        <StyledLink to="/">
                            <Typography>Home</Typography>
                        </StyledLink>
                        <StyledLink to="/Movies">
                            <Typography>Movies</Typography>
                        </StyledLink>
                        <StyledLink to="/About">
                            <Typography>About Us</Typography>
                        </StyledLink>
                        <StyledLink to="/Contact">
                            <Typography>Contact</Typography>
                        </StyledLink>
                    </Box>
                </StyledToolbar>
            </AppBar>
            <main>{props.children}</main>
        </Box>
    );
};

export default HeaderBar;
