
const controller_middleware = (controllerFunction) => {
    return async(req, res, next)=>{
        const data = req.body;
        const reqParams = req.params;
        const reqQuery = req.query;
        const userCtx = req?.user || null;
        try{
            const toSend = await controllerFunction(
                data,userCtx,reqQuery,reqParams
            );
            // res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
            return res.json({status: 1, data: toSend, msg: 'success'});
        }catch(err){
            return res.json({status: 0, data: null, msg: 'error'});
        }
    }
}

module.exports = {
    controller_middleware
}