import React from "react";
import { tileSquare } from "types";

import { Column } from "components/Column";

import * as styles from "./Board.module.scss";

type BoardProps = {
    tiles: tileSquare[];
    letters?: string[];
};

export const Board: React.FC<BoardProps> = ({ tiles, letters = ["B", "I", "N", "G", "O"] }) => {
    const tilesPerColumn = tiles.length / letters.length;

    return (
        <div className={styles.board}>
            {letters.map((letter, index) => (
                <Column
                    key={letter}
                    letter={letter}
                    tiles={tiles.slice(index * tilesPerColumn, (index + 1) * tilesPerColumn)}
                />
            ))}
        </div>
    );
};
