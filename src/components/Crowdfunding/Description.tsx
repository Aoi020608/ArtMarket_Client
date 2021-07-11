import React, { ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  textArea: {
    width: "100%",
    height: "10rem",
    padding: "0.4rem",
  },
});

const Description = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { descriptionTitle, descriptionContent, descriptionCategory } = useSelector((state: any) => state.crowdfund);
  const [open, setOpen] = React.useState(false);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "DESCRIPTIONTITLE", 
      descriptionTitle: e.target.value, 
    })
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: "DESCRIPTIONCONTENT", 
      descriptionContent: e.target.value,
    })
  }

  const handleCategory = (e: ChangeEvent<{value: unknown}>) => {
    dispatch({
      type: "DESCRIPTIONCATEGORY", 
      descriptionCategory: e.target.value,
    })
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell your project
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            label="Title"
            fullWidth
            autoComplete="cc-title"
            placeholder="Tell your original title"
            value={descriptionTitle}
            onChange={handleTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            aria-label="maximum height"
            placeholder="Conclude your project in 3 lines"
            className={classes.textArea}
            rows={10}
            value={descriptionContent}
            onChange={handleContent}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="demo-controlled-open-select-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={descriptionCategory}
            onChange={handleCategory}
            style={{ display: "flex" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="Performance">Performance</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Description;
