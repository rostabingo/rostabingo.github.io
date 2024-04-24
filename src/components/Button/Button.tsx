import React from "react";

import * as styles from "./Button.module.scss";

type ButtonProps = {
    onClick: () => void;
    buttonText: string;
    variant: "newGame" | "nextNumber";
};

export const Button: React.FC<ButtonProps> = (props) => {
    const buttonStyle = props.variant === "newGame" ? styles.newGame : styles.nextNumber;
    return (
        <button className={buttonStyle} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
};
