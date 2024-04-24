import React from "react";
import { IconArrowRightSquare } from "assets/icons/IconArrowRightSquare";
import { IconCheckSquare } from "assets/icons/IconCheckSquare";
import { IconSquare } from "assets/icons/IconSquare";
import { gameModeAtom } from "Atoms/Atoms";
import classNames from "classnames";
import { useAtom } from "jotai";

import * as styles from "./Targets.module.scss";

export const Targets: React.FC = () => {
    const [gameMode, setGameModeAtom] = useAtom(gameModeAtom);

    const handleClick = (lineValue: number) => {
        setGameModeAtom((prev) => (prev === lineValue ? lineValue - 1 : lineValue));
    };

    const getIcon = (value: number) => {
        if (value === gameMode) {
            return <IconArrowRightSquare />;
        }
        if (value < gameMode) {
            return <IconCheckSquare />;
        }
        return <IconSquare />;
    };

    return (
        <div className={styles.targetWrapper}>
            <div
                className={classNames(styles.target, gameMode > 1 ? styles.labelDisabled : "")}
                onClick={() => handleClick(1)}
            >
                {getIcon(1)}
                <label htmlFor="one">En rad</label>
            </div>
            <div
                className={classNames(styles.target, gameMode > 2 ? styles.labelDisabled : "")}
                onClick={() => handleClick(2)}
            >
                {getIcon(2)}
                <label htmlFor="two">Två rader</label>
            </div>
            <div
                className={classNames(styles.target, gameMode > 3 ? styles.labelDisabled : "")}
                onClick={() => handleClick(3)}
            >
                {getIcon(3)}
                <label htmlFor="all">Hela brickan</label>
            </div>
        </div>
    );
};
