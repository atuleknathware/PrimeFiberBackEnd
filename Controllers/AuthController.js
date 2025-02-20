import UserModel from '../Models/User.js';
import { paginationCalculation, getSearchCondition } from '../Services/Helper.Service.js';

export const addQuery = async (req, res) => {
    try {
        const { Full_Name, Mobile_No, Email, Address, Service_Type } = req.body;

        if (!Service_Type || !["Home Broadband", "Bandwidth for Business"].includes(Service_Type)) {
            return res.status(400).json({
                message: "Invalid Service Type. Choose either 'Home Broadband' or 'Bandwidth for Business'.",
                success: false
            });
        }

        const newUser = new UserModel({ Full_Name, Mobile_No, Email, Address, Service_Type });
        const user = await newUser.save();

        return res.status(201).json({
            message: "Query Sent Successfully",
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            err
        });
    }
};

export const getAllQuery = async (req, res) => {
    try {
        const { search, page = 1, limit = 10, sortBy = 'Full_Name', order = 'ASC', serviceType } = req.query;
        const { limitNum, skip, pageNum } = paginationCalculation(page, limit);

        let searchCondition = getSearchCondition(['Full_Name', 'Email', 'Address', 'Service_Type'], search);

        // Filter by service type if provided
        if (serviceType && ["Home Broadband", "Bandwidth for Business"].includes(serviceType)) {
            searchCondition.Service_Type = serviceType;
        }

        const users = await UserModel.find(searchCondition)
            .skip(skip)
            .limit(limitNum)
            .sort({ [sortBy]: order === 'ASC' ? 1 : -1 });

        const totalCount = await UserModel.countDocuments(searchCondition);

        return res.status(200).json({
            message: "Query Retrieved Successfully",
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
};


