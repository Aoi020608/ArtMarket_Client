import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Button,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";

import { bidHandlerAction, auctionStartAction } from "../actions/auctionAction";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "50%",
    height: "30%",
  },
  inputDiv: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: "5px",
    fontSize: "20px",
  },

  buttonContainer: {
    textAlign: "center",
    padding: "20px",
  },
}));

interface RootState {
  artToken: any;
  modal: any;
}

const Modals = () => {
  const [price, setPrice] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const classes = useStyles();
  const { isModalVisible, functionType, title, objectId, tokenId } =
    useSelector((state: RootState) => state.modal);
  const { nftDetail } = useSelector((state: RootState) => state.artToken);
  const dispatch = useDispatch();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const bidHandler = () => {
    dispatch(bidHandlerAction(nftDetail.attributes["TokenId"], price));
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const handleAuction = () => {
    dispatch(auctionStartAction(tokenId, selectedDate, objectId));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalVisible}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalVisible}>
        <div className={classes.paper}>
          <h3 id="transition-modal-title">{title}</h3>
          {functionType === "Bid" && (
            <>
              <div className={classes.inputDiv}>
                <input
                  type="number"
                  className={classes.input}
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={price}
                />
                <p>ETH</p>
              </div>
              <Container
                component="div"
                maxWidth="lg"
                className={classes.buttonContainer}
              >
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={() => bidHandler()}
                >
                  BID
                </Button>
              </Container>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </>
          )}
          {functionType === "MyPage" && (
            <Grid
              container
              spacing={3}
              alignItems="center"
              style={{ height: "100%", textAlign: "center" }}
            >
              <form
                noValidate
                autoComplete="off"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2rem",
                  width: "100%",
                }}
              >
                <Container maxWidth="lg" style={{ width: "50%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Token ID"
                    variant="outlined"
                    name="Token ID"
                    value={tokenId}
                    fullWidth
                  />
                </Container>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Auction Time End"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    style={{ width: "50%", margin: "0" }}
                  />
                </MuiPickersUtilsProvider>
              </form>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleAuction}
                >
                  OK
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default Modals;
