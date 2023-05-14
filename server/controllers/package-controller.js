const Package = require("../models/package");

//get all packages
const getAllPckgs = async (req, res, next) => {
    let packages;

    try{
        packages = await Package.find(); 
    }
    catch (err){
        console.log(err);
    }

    if(!packages){
        return res.status(404).json({message:"No packages found!"});
    }
    return res.status(200).json({packages});
};

//get by id
const getByPId = async (req, res, next) => {
    const id = req.params.id;
    
    let package;
    try{
        package = await Package.findById(id);
    }
    catch(err){
        console.log(err);
    }
    if(!package){
        return res.status(404).json({message:"No package found!"});
    }
    return res.status(200).json({package});
};



//add a new package
const addPckg = async (req, res, next) => {
    const { pid, category, name, overview, duration, itininary, accomodation, lprice, fprice, available, image} = req.body;
    let package;
    const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" })
    try{
         package = new Package ({
            pid,
            category,
            name,
            overview,
            duration,
            itininary,
            accomodation,
            lprice,
            fprice,
            available,
            image,
            date
        });
        await package.save();
    }
    catch (err){
        console.log(err);
    }

    if(!package){
        return res.status(500).json({message:"Unable to add!"});
    }
    return res.status(200).json({package});
};

//update a package
const updatePckg = async (req, res, next) => {
    const id = req.params.id;
    const { pid, category, name, overview, duration, itininary, accomodation, lprice, fprice, available, image} = req.body;

    let package;
    try{
        package = await Package.findByIdAndUpdate(id, {
            pid,
            category,
            name,
            overview,
            duration,
            itininary,
            accomodation,
            lprice, 
            fprice,
            available,
            image
        });
        package = await package.save();
    }
    catch(err){
        console.log(err);
    }
    if(!package){
        return res.status(404).json({message:"Unable to update!"});
    }
    return res.status(200).json({package});

};

//delete a package
const deletePckg = async (req, res, next) => {
    const id = req.params.id;
    let package;

    try{
        package = await Package.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!package){
        return res.status(404).json({message:"Unable to delete!"});
    }
    return res.status(200).json({message:"Package successfully deleted!"});
};
exports.getAllPckgs = getAllPckgs;
exports.getByPId = getByPId;
exports.addPckg = addPckg;
exports.updatePckg = updatePckg;
exports.deletePckg = deletePckg;