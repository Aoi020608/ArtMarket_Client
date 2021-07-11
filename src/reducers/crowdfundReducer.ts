const initialState = {
  targetAmount: 0,
  endDate: new Date(),
  descriptionTitle: "",
  descriptionContent: "",
  descriptionCategory: "",
  image: [],
  content: "",
  returnAmount: 0,
  returnContent: 0,
};

const crowdfundReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TARGETAMOUNT":
      return {
        ...state,
        targetAmount: action.targetAmount,
      };

    case "ENDDATE":
      return {
        ...state,
        endDate: action.endDate,
      };

    case "DESCRIPTIONTITLE":
      return {
        ...state,
        descriptionTitle: action.descriptionTitle,
      };

    case "DESCRIPTIONCONTENT":
      return {
        ...state,
        descriptionContent: action.descriptionContent,
      };

    case "DESCRIPTIONCATEGORY":
      return {
        ...state,
        descriptionCategory: action.descriptionCategory,
      };

    case "IMAGE": 
      return {
          ...state, 
          image: action.image,
      }

    default:
      return {
        ...state,
      };
  }
};

export default crowdfundReducer;
