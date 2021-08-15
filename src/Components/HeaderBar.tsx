import { AppBar, Typography, styled, Box, Toolbar } from "@material-ui/core";
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
        backgroundColor: "#4a4e69",
    },
    fontSize: 16,
});

const StyledToolbar = styled(Toolbar)({
    height: "80px",
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: "#22223b",
});

const HeaderBar = (props: props) => {
    return (
        <Box minHeight="100vh">
            <StyledAppBar position="static" elevation={0}>
                <StyledToolbar>
                    <Box display="flex" width="9.5rem">
                        <Typography variant="h5">Movies R' Us</Typography>
                    </Box>
                    <Box display="flex" flexGrow={1} marginLeft="30px">
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
            </StyledAppBar>
            <main>{props.children}</main>
        </Box>
    );
};

export default HeaderBar;
