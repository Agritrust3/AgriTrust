

export const createCrop = async (req, res) => {
    try {
        const { name, fertilizer, pesticide, seedType } = req.body;
        const cropModel = new crop({ name, fertilizer, pesticide, seedType, farmer: req.params.userId, farm: req.params.farmId });
        await cropModel.save();
        await cropModel.populate('farmer', 'name mobile');
        await cropModel.populate('farm', 'name location');
        
        res.status(201).json({ message: 'Crop created', cropModel });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};