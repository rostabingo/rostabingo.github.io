import React from "react";

import * as styles from "./Targets.module.scss";

export const Targets: React.FC = () => {
    return (
        <div>
            <div className={styles.target}>
                <input type="checkbox" id="one" name="one" checked={false} />
                <label htmlFor="one">En rad</label>
            </div>
            <div className={styles.target}>
                <input type="checkbox" id="two" name="two" />
                <label htmlFor="two">Två rader</label>
            </div>
            <div className={styles.target}>
                <input type="checkbox" id="all" name="all" />
                <label htmlFor="all">Hela brickan</label>
            </div>
        </div>
    );
};
