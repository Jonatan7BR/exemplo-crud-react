import { useAppSelector } from "../redux/hooks";

import './Snackbar.scss';

const Snackbar = (): JSX.Element => {
    const message = useAppSelector(state => state.message.message);
    const messageType = useAppSelector(state => state.message.messageType);
    const visible = useAppSelector(state => state.message.messageVisible);

    return visible ? (
        <div className="snack-bar-container">
            <div className={'snack-bar ' + messageType + (visible ? ' show' : '')}>{message}</div>
        </div>
    ) : <></>;
};

export default Snackbar;
