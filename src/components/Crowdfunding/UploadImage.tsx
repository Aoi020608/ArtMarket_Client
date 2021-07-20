import React, { ChangeEvent, useState, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { DropzoneArea, DropzoneDialogBase } from "material-ui-dropzone";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  layout: {
    height: "23rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonLayout: {
    padding: "9rem",
  },
});

const UploadImage = () => {
  const classes = useStyles();
  const imageList: any[] = [];
  const dispatch = useDispatch();
  const { image } = useSelector((state: any) => state.crowdfund);
  const [open, setOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  const handleImage = (imageFile: any) => {
    dispatch({
      type: "IMAGE",
      image: imageFile,
    });
  };

  const dialogTitle = () => (
    <>
      <span>Upload file</span>
      <IconButton
        style={{ right: "12px", top: "8px", position: "absolute" }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
    </>
  );

  console.log(image);

  return (
    <div className={classes.layout}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Show off your catchy photos
        </Typography>
        <div className={classes.buttonLayout}>
          <Grid container spacing={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
            >
              Add Image
            </Button>

            <DropzoneDialogBase
              dialogTitle={dialogTitle()}
              acceptedFiles={["image/*"]}
              fileObjects={fileObjects}
              cancelButtonText={"cancel"}
              submitButtonText={"submit"}
              maxFileSize={5000000}
              open={open}
              onAdd={(newFileObjs: any) => {
                console.log("onAdd", newFileObjs);
                setFileObjects([].concat(fileObjects, newFileObjs));
              }}
              onDelete={(deleteFileObj) => {
                console.log("onDelete", deleteFileObj);
              }}
              onClose={() => setOpen(false)}
              onSave={() => {
                console.log("onSave", fileObjects);
                handleImage(fileObjects);
                setOpen(false);
              }}
              showPreviews={true}
              showFileNamesInPreview={true}
            />
          </Grid>
        </div>
      </React.Fragment>
    </div>
  );
};

export default UploadImage;
