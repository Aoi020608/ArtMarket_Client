import "date-fns";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles({
  layout: {
    height: "23rem",
  },
  date: {
    width: "100%",
  },
});

const Target = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { targetAmount, endDate } = useSelector(
    (state: any) => state.crowdfund
  );

  const handleTargetAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "TARGETAMOUNT",
      targetAmount: e.target.value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    dispatch({
      type: "ENDDATE",
      endDate: date,
    });
  };

  return (
    <div className={classes.layout}>
      <React.Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Let's set the required target amount
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={targetAmount}
                  onChange={handleTargetAmount}
                  startAdornment={
                    <InputAdornment
                      position="start"
                      style={{ padding: "0 1rem" }}
                    >
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
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="End Date"
                format="MM/dd/yyyy"
                value={endDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                className={classes.date}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </React.Fragment>
    </div>
  );
};

export default Target;
