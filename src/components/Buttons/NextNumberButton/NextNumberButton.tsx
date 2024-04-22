import React from "react";

import * as styles from "./Button.module.scss";

type ButtonProps = {
    onClick: () => void;
    buttonText: string;
};

export const NextNumberButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
};
