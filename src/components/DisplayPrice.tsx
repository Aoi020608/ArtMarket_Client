import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";

import {
  widthdrawHandler,
  auctionContractHandler,
} from "../actions/auctionAction";

interface RootState {
  auction: any;
  artToken: any;
}

const useStyles = makeStyles({
  cardRoot: {
    background: "rgb(229, 232, 235)",
    marginBottom: "10px",
  },
  title: {
    fontSize: 14,
  },
  date: {
    fontSize: 30,
    fontFamily: "bold",
    paddingLeft: 5,
  },
  price: {
    fontSize: 30,
    fontFamily: "bold",
    paddingLeft: 5,
  },
  buttonContainer: {
    textAlign: "center",
    padding: "10px",
  },
  button: {
    width: "100%",
  },
});

const DisplayPrice = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { highestBid, auctionTimeEnd } = useSelector(
    (state: RootState) => state.auction
  );
  const { nftDetail } = useSelector((state: RootState) => state.artToken);

  useEffect(() => {
    const loadAuctionContractHandler = () => {
      dispatch(auctionContractHandler(nftDetail.attributes["TokenId"]));
    }
    loadAuctionContractHandler();
  }, [nftDetail]);

  const openModal = () => {
    dispatch({
      type: "SHOW_MODAL",
      functionType: "Bid",
      title: "Input Price",
    });
  };

  return (
    <div style={{ width: "40%", padding: "5px" }}>
      <Container maxWidth="lg" component="div">
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography variant="h3" component="p" className={classes.title}>
              End time
            </Typography>
            <Typography variant="h1" component="p" className={classes.date}>
              {auctionTimeEnd}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container maxWidth="lg" component="div">
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography variant="h3" component="p" className={classes.title}>
              Current price
            </Typography>
            <Typography variant="h1" component="p" className={classes.price}>
              {highestBid} ETH
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
              onClick={openModal}
            >
              BID
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Container
        maxWidth="lg"
        component="div"
        className={classes.buttonContainer}
      >
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={widthdrawHandler()}
        >
          WITHDRAW
        </Button>
      </Container>
    </div>
  );
};

export default DisplayPrice;
