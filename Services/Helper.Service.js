export const paginationCalculation = (page, limit) => {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    
    const skip = (pageNum - 1) * limitNum;
    return { limitNum, skip, pageNum }
}

export const getSearchCondition = (searchKeyArr, searchText) => {
    if (!searchKeyArr || !searchText) {
        return {};
    }
    const conditions = searchKeyArr.map(key => ({
        [key]: { $regex: searchText, $options: 'i' }
    }));

    return {
        $or: conditions
    };
}
