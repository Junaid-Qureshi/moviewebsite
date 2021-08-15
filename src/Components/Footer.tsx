import { makeStyles, Theme, createStyles, Box, Typography } from "@material-ui/core";

const footerStyled = makeStyles((theme: Theme) => createStyles({}));

export const Footer = () => {
    return (
        <Box>
            <Typography variant="h2">In Progress</Typography>
        </Box>
    );
};

export default Footer;
