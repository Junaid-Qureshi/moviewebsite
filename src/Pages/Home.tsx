import { Box, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import BubbleInformation from "../Components/BubbleInformation";
import img1 from "../Images/dvd.svg";
import img2 from "../Images/streaming.svg";
import img3 from "../Images/information.svg";

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
            <BubbleInformation
                iconPath={img1}
                description="Get your movies delivered directly to you"
            />
            <BubbleInformation iconPath={img2} description="Stream movies at your leisure" />
            <BubbleInformation
                iconPath={img3}
                // eslint-disable-next-line max-len
                description="Once you're done watching remember to write a review (Feature In Development)"
            />
        </Box>
    );
};

export default Home;
