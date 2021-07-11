import React from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextareaAutosize,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  textArea: {
    width: "100%",
    height: "10rem",
  },
});

const Return = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        An attractive return to supporters
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              //   value={values.amount}
              //   onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg "
                    style={{ width: "20px" }}
                  />
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            aria-label="maximum height"
            placeholder="Conclude your project in 3 lines"
            className={classes.textArea}
            rows={10}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Return;
