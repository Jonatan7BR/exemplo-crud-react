import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPeople } from "../../api/people";

export enum MessageType {
    Success = 'success',
    Error = 'error'
};

interface MessageState {
    message: string;
    messageType: MessageType,
    messageVisible: boolean
}

const initialState: MessageState = {
    message: '',
    messageType: MessageType.Success,
    messageVisible: false
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        sendMessage: (state, action: PayloadAction<{ message: string, messageType?: MessageType }>): void => {
            state.message = action.payload.message;
            state.messageType = action.payload.messageType || MessageType.Success;
            state.messageVisible = true;
        },
        closeMessage: (state, _: PayloadAction<void>): void => {
            state.messageVisible = false;
        }
    }
});

export const { sendMessage, closeMessage } = messageSlice.actions;

export default messageSlice.reducer;
