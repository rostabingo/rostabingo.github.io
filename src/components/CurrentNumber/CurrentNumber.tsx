import React from "react";

import * as styles from "./CurrentNumber.module.scss";

type CurrentNumberProps = {
    char: string;
    num: number;
};

export const CurrentNumber: React.FC<CurrentNumberProps> = (props) => {
    const number = props.num !== 0 ? props.num : "-";
    return (
        <div className={styles.currentNumberContainer}>
            {props.char} {number}
        </div>
    );
};
