import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const { returnAmount, returnContent } = useSelector(
    (state: any) => state.crowdfund
  );

  const handleReturnAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "RETURNAMOUNT",
      returnAmount: e.target.value,
    });
  };

  const handleReturnContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "RETURNCONTENT",
      returnContent: e.target.value,
    });
  };

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
              value={returnAmount}
              onChange={handleReturnAmount}
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
            value={returnContent}
            onChange={handleReturnContent}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Return;
