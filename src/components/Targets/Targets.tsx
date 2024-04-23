import React from "react";
import { gameModeAtom } from "Atoms/Atoms";
import classNames from "classnames";
import { useAtom } from "jotai";
import { gameMode } from "types";

import * as styles from "./Targets.module.scss";

export const Targets: React.FC = () => {
    const [gameMode, setGameModeAtom] = useAtom(gameModeAtom);

    const handelChange = (arg: gameMode) => {
        setGameModeAtom(gameMode === arg ? null : arg);
    };

    return (
        <div>
            <div className={classNames(styles.target, gameMode === "two" ? styles.labelDisabled : "")}>
                <input
                    type="checkbox"
                    id="one"
                    name="one"
                    checked={gameMode === "one" || gameMode === "two" || gameMode === "all"}
                    onChange={() => handelChange("two")}
                />
                <label htmlFor="one">En rad</label>
            </div>
            <div className={styles.target}>
                <input
                    type="checkbox"
                    id="two"
                    name="two"
                    checked={gameMode === "two"}
                    onChange={() => handelChange("all")}
                />
                <label htmlFor="two">Två rader</label>
            </div>
            <div className={styles.target}>
                <input type="checkbox" id="all" name="all" checked={gameMode === "all"} onChange={() => null} />
                <label htmlFor="all">Hela brickan</label>
            </div>
        </div>
    );
};
