export type ShapeRendererProps = {
    shape: string;
    color: string;
}

export type CellProps = {
    shape: string;
    color: string;
}

export type BoardProps = {
    board: CellProps[][];
}

export type ScoreDisplayProps = {
    score: number;
    gameOver: boolean;
};

export type CooldownOverlayProps = {
    value: number;
};

export type AppProps = {
    board: CellProps[][];
    score: number;
    gameOver: boolean;
};