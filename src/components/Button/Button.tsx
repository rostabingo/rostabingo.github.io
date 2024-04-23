import React from "react";
import classNames from "classnames";

import * as styles from "./Button.module.scss";

type ButtonProps = {
    onClick: () => void;
    buttonText: string;
    buttonType: "newGame" | "nextNumber";
};

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button className={classNames(styles.button, "." + props.buttonType)} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
};
