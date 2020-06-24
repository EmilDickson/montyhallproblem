import React from "react";
import Typography from "@material-ui/core/Typography";

const Info = () => (
    <div className='info'>
        <Typography>
            Welcome to the{" "}
            <a href='https://en.wikipedia.org/wiki/Monty_Hall_problem'>
                Monty Hall problem
            </a>{" "}
            simulator!
        </Typography>
        <Typography>
            The premise is a game where you can win either a car or a goat.
            There is one car and two goats.
        </Typography>
        <Typography>
            Monty (pictured above) will let you pick a door, open one of the
            other two doors (but never one with the car) and finally offer you
            the chance to switch door.
        </Typography>
        <Typography>
            Define the number of simulations to run and whether to switch doors
            after having them opened the first time.
        </Typography>
    </div>
);

export default Info;