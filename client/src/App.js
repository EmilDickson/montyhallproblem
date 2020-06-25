import React, { Component } from "react";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Results from "./components/Results";
import GameTable from "./components/GameTable";
import Info from "./components/Info";
import Images from "./components/Images";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4F4F4F",
        },
        secondary: {
            main: "#CE8147",
        },
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: null,
            numberOfSimulations: 1,
            numberInputError: false,
            switchDoors: false,
            loading: false,
            windowWidth: window.innerWidth,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    checkSimulationInput(event) {
        const newValue = event.target.value;
        // Checks so that input is a number, non-negative, not zero and not infinity
        if (isNaN(newValue) || newValue < 1 || newValue.includes("e")) {
            this.setState({
                numberInputError: true,
            });
        } else {
            this.setState({
                numberOfSimulations: parseInt(newValue),
                numberInputError: false,
            });
        }
    }

    runSimulations() {
        this.setState({ loading: true });
        fetch("http://localhost:9000/results", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                numberOfSimulations: this.state.numberOfSimulations,
                switchDoors: this.state.switchDoors,
            }),
        })
            .then((res) => res.json())
            .then((results) =>
                this.setState({ apiResponse: results, loading: false })
            )
            .catch((err) => {
                this.setState({ loading: false });
                alert(err);
            });
    }

    updateWindowDimensions() {
        // Results table is too wide for smaller screens and will not behave responsively.
        // Therefore, table does not render for screens of width < 422px.
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <AppBar position='sticky' color='primary'>
                        <Toolbar>
                            <Typography variant='h6'>
                                Monty Hall Simulator
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className='mainContainer'>
                        <Images />
                        <Info />
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.switchDoors}
                                        onChange={() =>
                                            this.setState({
                                                switchDoors: !this.state
                                                    .switchDoors,
                                            })
                                        }
                                        name='switchDoorsCheck'
                                    />
                                }
                                label='Switch doors'
                            />
                            <TextField
                                error={this.state.numberInputError}
                                id='number-input'
                                label='Number of simulations'
                                defaultValue={this.state.numberOfSimulations}
                                helperText={
                                    this.state.numberInputError
                                        ? "Incorrect entry."
                                        : null
                                }
                                onChange={(e) => this.checkSimulationInput(e)}
                            />
                        </div>
                        <Button
                            variant='contained'
                            color='secondary'
                            disabled={
                                this.state.numberInputError ||
                                this.state.loading
                            }
                            onClick={() => this.runSimulations()}
                        >
                            {this.state.loading
                                ? "Loading results"
                                : "Run simulations"}
                        </Button>
                        <Results results={this.state.apiResponse} />
                        {this.state.apiResponse &&
                        this.state.windowWidth > 423 ? (
                            <Typography variant='h6'>All games:</Typography>
                        ) : null}
                        <GameTable
                            results={this.state.apiResponse}
                            windowWidth={this.state.windowWidth}
                        />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
