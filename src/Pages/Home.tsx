import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";

const homeStyles = makeStyles((theme: Theme) =>
    createStyles({
        hrStyle: {
            width: "80%",
            marginTop: "20px",
        },
        headerStyle: {
            margin: "20px",
        },
    })
);

const Home = () => {
    const styles = homeStyles();
    return (
        <Box justifyContent="center">
            <Typography variant="h3" align="center" className={styles.headerStyle}>
                Welcome to the number one movie viewing/rental site
            </Typography>
            <hr className={styles.hrStyle} />
        </Box>
    );
};

export default Home;
