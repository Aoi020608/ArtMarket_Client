const initialState = {
    targetAmount: 0, 
    endDate: new Date(), 
    descriptionTitle: "", 
    descriptionContent: "", 
    descriptionCategory: "", 
    image: null, 
    content: "", 
    returnAmount: 0, 
    returnContent: 0,
}

const crowdfundReducer = (state = initialState, action: any) => {
    switch(action.type) {
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

        default: 
            return {
                ...state, 

            };
    }
}

export default crowdfundReducer;

