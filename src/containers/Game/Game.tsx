import React, { useState } from "react";
import { gameModeAtom } from "Atoms/Atoms";
import { useSetAtom } from "jotai";
import { tileSquare } from "types";

import { Button } from "components/Button";
import { CurrentNumber } from "components/CurrentNumber";
import { Targets } from "components/Targets";

import "../../global.module.scss";

import { Board } from "../Board";

import * as styles from "./Game.module.scss";

type GameProps = {
    letters: string[];
};

export const Game: React.FC<GameProps> = ({ letters }) => {
    const { tiles, setTiles } = useGameTiles(letters);
    const [currentTile, setCurrentTile] = useState<tileSquare>({ id: 0, char: "", state: false });
    const clearTarget = useSetAtom(gameModeAtom);

    const getNextTile = () => {
        const getRandom = (tiles: tileSquare[]): tileSquare => {
            return tiles[Math.floor(Math.random() * tiles.length)];
        };
        const newTile = getRandom(tiles.filter((tile) => !tile.state));

        if (newTile) {
            setCurrentTile(newTile);
            setTiles((prevState) =>
                prevState.map((tile) => {
                    if (tile.id === newTile.id) {
                        return { ...tile, state: true };
                    } else {
                        return tile;
                    }
                })
            );
        }
    };

    const clearGame = () => {
        setTiles((prevState) =>
            prevState.map((tile) => {
                return { ...tile, state: false };
            })
        );
        setCurrentTile({ id: 0, char: "", state: false });
        clearTarget(1);
    };

    return (
        <div className={styles.gameWrapper}>
            <div className={styles.panelRight}>
                <CurrentNumber char={currentTile.char} num={currentTile.id} />
                <Button buttonText="NÄSTA NUMMER" onClick={getNextTile} variant={"nextNumber"} />
            </div>
            <Board tiles={tiles} letters={letters} />
            <div className={styles.panelLeft}>
                <Targets />
                <Button buttonText="NYTT SPEL" onClick={clearGame} variant={"newGame"} />
            </div>
        </div>
    );
};

const useGameTiles = (letters: string[]) => {
    const totalTiles = 75;
    const getChar = (num: number) => {
        const tileRange = totalTiles / letters.length;
        for (let i = 0; i < letters.length; i++) {
            if (num >= i * tileRange && num < (i + 1) * tileRange) {
                return letters[i];
            }
        }
        return letters[letters.length - 1];
    };

    const [tiles, setTiles] = useState<tileSquare[]>(
        Array.from(Array(totalTiles)).map((_, index) => {
            return { id: index + 1, char: getChar(index), state: false } as tileSquare;
        })
    );

    return { tiles, setTiles };
};
