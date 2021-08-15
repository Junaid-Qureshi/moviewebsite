import { saveNewRow, hideNewRow } from "ka-table/actionCreators";
import { ICellEditorProps } from "ka-table/props";

const SaveButton: React.FC<ICellEditorProps> = ({ dispatch }) => {
    const saveNewData = () => {
        const rowKeyValue = "Temp";
        dispatch(
            saveNewRow(rowKeyValue, {
                validate: true,
            })
        );
    };
    return (
        <div className="buttons">
            <img
                src="static/icons/save.svg"
                className="save-cell-button"
                alt="Save"
                title="Save"
                onClick={saveNewData}
            />
            <img
                src="static/icons/close.svg"
                className="close-cell-button"
                alt="Cancel"
                title="Cancel"
                onClick={() => dispatch(hideNewRow())}
            />
        </div>
    );
};

export default SaveButton;
