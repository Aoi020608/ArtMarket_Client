import React, { useState, useRef } from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML, convertFromHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  layout: {
    height: "23rem",
  },
});

const Content = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { content } = useSelector((state: any) => state.crowdfund);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState<string>();

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    // setConvertedContent(currentContentAsHTML);
    let currentContent = convertFromHTML(currentContentAsHTML);
    console.log(currentContent);
    dispatch({
      type: "CONTENT",
      content: currentContentAsHTML,
    });
  };

  const convertContentFromHTML = () => {
    let editorContent = ContentState.createFromBlockArray(content);
    return editorContent;
  };

  const contentBlock = convertFromHTML(content);
  // const editorContent: any = ContentState.createFromText()

  console.log();

  return (
    <div className={classes.layout}>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Let's talk about your thougts
        </Typography>
        <Grid container spacing={3}>
          <div
            style={{
              border: "1px solid black",
              height: "22rem",
              cursor: "text",
              borderRadius: "0.2rem",
              padding: "0.4rem",
              width: "100%",
            }}
            //   onClick={focusEditor}
          >
            <Editor
              // ref={editor}
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              placeholder="Write something!"
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              // defaultEditorState={() => {
              //   convertFromHTML(content)
              // }}
            />
          </div>
        </Grid>
      </React.Fragment>
    </div>
  );
};

export default Content;
