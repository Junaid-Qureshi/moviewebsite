import { deleteRow } from "ka-table/actionCreators";
import { ICellTextProps } from "ka-table/props";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const DeleteRow: React.FC<ICellTextProps> = ({ dispatch, rowKeyValue }) => {
    return (
        <IconButton onClick={() => dispatch(deleteRow(rowKeyValue))}>
            <Delete />
        </IconButton>
    );
};

export default DeleteRow;
