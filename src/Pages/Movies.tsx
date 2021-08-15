import "../scss/movieGrid.scss";
import { ITableProps, kaReducer, Table } from "ka-table";
import { ActionType, DataType, EditingMode, SortingMode } from "ka-table/enums";
import {
    closeEditor,
    hideLoading,
    loadData,
    openEditor,
    showLoading,
    updateCellValue,
    updateData,
} from "ka-table/actionCreators";
import { ICellTextProps } from "ka-table/props";
import { DispatchFunc } from "ka-table/types";
import { Box, Card, FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import { useState } from "react";
import DeleteRow from "../Components/DeleteButton";
import Navigatebutton from "../Components/NavigateButton";
import AddButton from "../Components/AddButton";
import useFetch from "../Hooks/useFetch";

const FormatSelector: React.FC<ICellTextProps> = ({ column, dispatch, rowKeyValue, value }) => {
    const [editorValue, setValue] = useState(value);
    return (
        <div
            onClick={() => {
                dispatch(openEditor(rowKeyValue, column.key));
            }}
        >
            <FormControl>
                <Select
                    labelId="format-selector"
                    autoFocus={true}
                    onBlur={() => {
                        dispatch(updateCellValue(rowKeyValue, column.key, editorValue));
                        dispatch(closeEditor(rowKeyValue, column.key));
                    }}
                    id="format-selector"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                >
                    <MenuItem value="VHS">VHS</MenuItem>
                    <MenuItem value="DVD">DVD</MenuItem>
                    <MenuItem value="Streaming">Streaming</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

const initTableProps: ITableProps = {
    columns: [
        {
            key: `:navigate`,
            width: 100,
            style: { textAlign: "left", borderBottom: "2px solid #4a4e69" },
        },
        {
            key: `title`,
            title: `Title`,
            dataType: DataType.String,
            style: {
                width: "40%",
                textAlign: "left",
                borderBottom: "2px solid #4a4e69",
            },
        },
        {
            key: `format`,
            title: `Format`,
            dataType: DataType.String,
            style: {
                width: "15%",
                textAlign: "left",
                borderBottom: "2px solid #4a4e69",
            },
        },
        {
            key: `length`,
            title: `Length`,
            dataType: DataType.String,
            style: {
                width: "15%",
                textAlign: "left",
                borderBottom: "2px solid #4a4e69",
            },
        },
        {
            key: `release_year`,
            title: `Release Year`,
            dataType: DataType.String,
            style: {
                width: "15%",
                textAlign: "left",
                borderBottom: "2px solid #4a4e69",
            },
        },
        {
            key: `rating`,
            title: `Rating`,
            dataType: DataType.String,
            style: {
                width: "10%",
                textAlign: "left",
                borderBottom: "2px solid #4a4e69",
            },
        },
        {
            key: `:delete`,
            width: 100,
            style: { textAlign: "left", borderBottom: "2px solid #4a4e69" },
        },
    ],
    validation: ({ column, value }) => {
        if (column.key === `title`) {
            if (value.length > 50) {
                return `Title name cannot exceed 50`;
            }
        }
        if (column.key === `length`) {
            if (value > 500) {
                return `length cannot exceed 500 minutes`;
            } else if (value < 1) {
                return `length cannot be less than 1 minutes`;
            }
        }
        if (column.key === `release_year`) {
            if (value < 1800) {
                return `Release year cannot be before 1800`;
            } else if (value > 2100) {
                return `Release year cannot be after 2100`;
            }
        }
        if (column.key === `rating`) {
            if (value < 1 || value > 5) {
                return `Rating must be between 1-5`;
            }
        }
    },
    editingMode: EditingMode.Cell,
    loading: {
        enabled: true,
        text: "Loading Movies",
    },
    singleAction: loadData(),
    rowKeyField: "id",
    sortingMode: SortingMode.Single,
};

const Movies = () => {
    const [tableProps, changeTableProps] = useState(initTableProps);
    const fetch = useFetch();

    const dispatch: DispatchFunc = async action => {
        changeTableProps((prevState: ITableProps) => kaReducer(prevState, action));

        if (action.type === ActionType.LoadData) {
            dispatch(showLoading());
            const result = await fetch<any>("/api/movies");
            dispatch(updateData(result));
            dispatch(hideLoading());
        } else if (action.type === ActionType.UpdateCellValue) {
            const body = {
                id: action.rowKeyValue,
                columnKey: action.columnKey,
                value: action.value,
            };
            await fetch("/api/put", {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else if (action.type === ActionType.DeleteRow) {
            const body = {
                id: action.rowKeyValue,
            };
            await fetch("/api/delete", {
                method: "DELETE",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    };
    return (
        <Box justifyContent="center" flex={0} style={{ width: "auto" }}>
            <Card elevation={1}>
                <Typography variant="h3"></Typography>
                <Box className="movieGrid" style={{ margin: "20px 0 20px" }}>
                    <Table
                        {...tableProps}
                        dispatch={dispatch}
                        childComponents={{
                            cellEditor: {
                                content: props => {
                                    switch (props.column.key) {
                                        case `format`:
                                            return <FormatSelector {...props} />;
                                    }
                                },
                            },
                            cellText: {
                                content: props => {
                                    switch (props.column.key) {
                                        case `:delete`:
                                            return <DeleteRow {...props} />;
                                        case `:navigate`:
                                            return <Navigatebutton {...props} />;
                                    }
                                },
                            },
                            headCell: {
                                content: props => {
                                    switch (props.column.key) {
                                        case `:delete`:
                                            return <AddButton {...props} />;
                                    }
                                },
                            },
                        }}
                    />
                </Box>
            </Card>
        </Box>
    );
};

export default Movies;
