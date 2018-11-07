import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <Paper className="home_paper" elevation={4}>
            <div>
              <img className="image" src="/images/cinema.png" alt="cinema" />
            </div>
            <Typography className="text_paper" variant="h5" component="h3">
            Welcome to the Movie App
            </Typography>
            <Typography component="p">
            Please go ahead and search for your favourite movies, enjoy!
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}
