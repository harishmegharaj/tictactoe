import React from "react";
import StartGame from "./StartGame";
import BoxesLay from './BoxesLay';
import MoveSection from "./MoveSection";
import PropTypes from "prop-types";


class PlayGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            goBackMove: 0,
            goForwardMove: 0,
        };

        this.winnerLogic = this.winnerLogic.bind(this);
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
            goBackMove: step - 1 > 0 ? step - 2 : step,
            goForwardMove:
                step + 1 < this.state.history.length - 1 ? step + 2 : step
        })
    }
    showPast(history) {
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move #${move}` : "Go to start";
            return (
                <button
                    style={{
                        fontWeight: this.state.stepNumber === move ? "bold" : "normal",
                        cursor: move % 2 !== 0 ? "not-allowed" : "pointer",
                        textDecorationLine: move % 2 !== 0 ? "line-through" : "none",
                        display: move === 10 ? "none" : "inline"
                    }}
                    onClick={() => this.jumpTo(move)}
                    disabled={move % 2 !== 0 ? true : false}
                >
                    {desc}
                </button>
            );
        });
        return moves;
    }

    winnerLogic(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.winnerLogic(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            goBackMove: history.length - 2,
            goForwardMove: history.length
        });
    }
    outOfMoves(currentBoard) {
        const status = currentBoard.squares.filter(square => square === null);
        if (status.length === 0) {
            return true;
        }
        return false;
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.winnerLogic(current.squares);
        const moves = this.showPast(history);
        const isOutOfMoves = this.outOfMoves(current);
        const gameStatus =
            isOutOfMoves && !winner ? "Draw" : winner ? winner : "Still playing";
        return (
            <div className="game">
                <div className="game-board">
                    {gameStatus !== "Still playing" ? (
                        <StartGame
                            onClick={() => this.props.startNewGame()}
                            gameStatus={gameStatus}
                        />
                    ) : (
                            <BoxesLay
                                squares={current.squares}
                                onClick={i => this.handleClick(i)}
                            />
                        )}
                </div>
                <div className="game-info">
                    <MoveSection
                        goBack={() => this.jumpTo(this.state.goBackMove)}
                        goForward={() => this.jumpTo(this.state.goForwardMove)}
                        moves={moves}
                        current={this.state.stepNumber}
                        isOutOfMoves={isOutOfMoves}
                    />
                </div>
                <div className=''>
                    <button className="reset" onClick={() => this.props.startNewGame()}>
			            Reset Game
		            </button>
                </div>
            </div>
        );
    }
}

PlayGame.propTypes = {
    startNewGame: PropTypes.func
};

export default PlayGame;
