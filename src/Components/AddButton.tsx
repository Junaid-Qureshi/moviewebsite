import { IconButton } from "@material-ui/core";
import { showNewRow } from "ka-table/actionCreators";
import { IHeadCellProps } from "ka-table/props";
import { AddCircle } from "@material-ui/icons";

const AddButton: React.FC<IHeadCellProps> = ({ dispatch }) => {
    return (
        <IconButton onClick={() => dispatch(showNewRow())}>
            <AddCircle />
        </IconButton>
    );
};

export default AddButton;
