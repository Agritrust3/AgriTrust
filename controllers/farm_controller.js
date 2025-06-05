import farm from "../models/farm_model";


export const createFarm = async (req, res) => {
    try {
        const { name, location } = req.body;
        const farmModel = new farm({ name, location, farmer: req.params.userId });
        await farmModel.save();
        
        res.status(201).json({ message: 'Farm created', farmModel });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};