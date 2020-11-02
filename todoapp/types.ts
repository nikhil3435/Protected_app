export type TodoSample = {
    id: number;
    text: string;
    completed: boolean;
};


export interface ToggleDispatch {
    type:string;
    id: number;
};

export interface AddTodoDispatch {
    type: string;
    id: number;
    text: string;
};

export type TodoDispatch = AddTodoDispatch | ToggleDispatch;

export type VisibilityFilterDispatch = {
    type: string;
    filter: string;
};