import { Button } from "@material-ui/core";
import { ICellTextProps } from "ka-table/props";
import { useHistory } from "react-router";

const Navigatebutton = (props: ICellTextProps) => {
    const history = useHistory();
    return (
        <Button onClick={() => history.push(`/MovieDetails?id=${props.rowData.id}`)}>View</Button>
    );
};

export default Navigatebutton;
