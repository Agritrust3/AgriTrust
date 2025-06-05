

export const createCrop = async () => {
    try {
        const cropModel = new crop({ name: "", fertilizer: "", pesticide: "", seedType: "", farmer: "", farm: "" });
        await cropModel.save();
        await cropModel.populate('farmer', 'name mobile');
        await cropModel.populate('farm', 'name location');
        
        res.status(201).json({ message: 'Crop created', cropModel });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};