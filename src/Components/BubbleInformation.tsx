import { Box, createStyles, Icon, makeStyles, Theme, Typography } from "@material-ui/core";

const bubbleStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            width: "10rem",
            height: "10rem",
        },
        text: {
            marginLeft: "2rem",
            marginTop: "4rem",
        },
    })
);

interface props {
    iconPath: string;
    description: string;
}

const BubbleInformation = (props: props) => {
    const styles = bubbleStyles();
    return (
        <Box display="flex" justifyContent="center">
            <Box component="span">
                <Icon>
                    <img className={styles.icon} src={props.iconPath} alt="Bubble Icon" />
                </Icon>
            </Box>
            <Box component="span">
                <Typography className={styles.text} variant="body1">
                    {props.description}
                </Typography>
            </Box>
        </Box>
    );
};

export default BubbleInformation;
