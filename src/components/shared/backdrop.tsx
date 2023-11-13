import ReactDOM from "react-dom";

interface BackdropProps {
    onClose: () => void;
}

const Backdrop = (props: BackdropProps) => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onClose}
            className='fixed top-0 left-0 w-screen h-screen z-10 bg-black/50'
        />,
        document.getElementById("backdrop") as HTMLDivElement
    );
};

export default Backdrop;
