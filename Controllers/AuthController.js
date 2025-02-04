import UserModel from '../Models/User.js';
import { paginationCalculation, getSearchCondition } from '../Services/Helper.Service.js';

export const addQuery = async (req, res) => {
    try {
        const { Full_Name, Mobile_No, Email, Address } = req.body;
        const newUser = new UserModel({ Full_Name, Mobile_No, Email, Address });
        const user = await newUser.save();
        return res.status(201).json({
            message: "Query Send Sucessfully",
            success: true,
            user
        })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false,
                err
            })
    }
}

export const getAllQuery = async (req, res) => {
    try {
        const { search, page = 1, limit = 10, sortBy = 'name', order = 'ASC' } = req.query;

        const { limitNum, skip, pageNum } = paginationCalculation(page, limit);

        const searchCondition = getSearchCondition(['Full_Name', 'Email', 'Address'], search);

        const users = await UserModel.find(searchCondition)
            .skip(skip)
            .limit(limitNum)
            .sort({ [sortBy]: order === 'ASC' ? 1 : -1 }); // Sorting in ascending or descending order

        const totalCount = await UserModel.countDocuments(searchCondition);

        return res.status(200).json({
            message: "Query Sent Successfully",
            success: true,
            users,
            pagination: {
                totalCount,
                totalPages: Math.ceil(totalCount / limitNum),
                currentPage: pageNum,
                perPage: limitNum
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            err
        });
    }
}
