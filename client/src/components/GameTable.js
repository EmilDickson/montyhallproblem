import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const createData = (gameNo, door1, door2, door3, selected, result) => ({
    gameNo,
    door1,
    door2,
    door3,
    selected,
    result,
});

const GameTable = (props) => {
    let games = [];
    if (props.results) {
        for (let i = 0; i < props.results.games.length; i++) {
            const game = props.results.games[i];
            games.push(
                createData(
                    i + 1,
                    game.doors[0].car ? "Car" : "Goat",
                    game.doors[1].car ? "Car" : "Goat",
                    game.doors[2].car ? "Car" : "Goat",
                    "Door " + game.selectedDoor,
                    game.win ? "Won car" : "Won goat"
                )
            );
        }
    }

    return props.results ? (
        <Table style={props.windowWidth < 422 ? { display: 'none' } : null}>
            <TableHead>
                <TableRow>
                    <TableCell>Game no. </TableCell>
                    <TableCell align='right'>Door 1</TableCell>
                    <TableCell align='right'>Door 2</TableCell>
                    <TableCell align='right'>Door 3</TableCell>
                    <TableCell align='right'>Initially selected</TableCell>
                    <TableCell align='right'>Result</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {games.map(game => (
                    <TableRow key={game.gameNo}>
                        <TableCell component="th" scope="row">
                            {game.gameNo}
                        </TableCell>
                        <TableCell align="right">{game.door1}</TableCell>
                        <TableCell align="right">{game.door2}</TableCell>
                        <TableCell align="right">{game.door3}</TableCell>
                        <TableCell align="right">{game.selected}</TableCell>
                        <TableCell align="right">{game.result}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ) : null;
};

export default GameTable;
