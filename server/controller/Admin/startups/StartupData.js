const { FetchStartupDataModel, StartupCountData } = require("../../../model/AddStartupModel");
const FetchStartupData = async(req, res) => {
    try
    {
        const result = await FetchStartupDataModel();
        res.status(200).json(result);
    }
    catch(error)
    {
        res.send(error)
    }
}
const StartupCount = async(req, res) => {
    try 
    {
        const result = await StartupCountData();
        res.status(200).json(result);
    }
    catch(err)
    {
        res.send(err);
    }
}
module.exports = {
    FetchStartupData,
    StartupCount
};