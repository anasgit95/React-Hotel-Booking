const ShowStatistique = (state = false, action) => {
    switch (action.type) {
        case 'DataIsHere':
            return true;
        default:
            return false;
    }
};
export default ShowStatistique;