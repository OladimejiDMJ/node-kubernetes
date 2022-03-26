const os = require('os');
const hostname = os.hostname();
exports.myResponse = async (req,res)=>{
  data = {"timestamp":new Date(Date.now()),"hostname":hostname,"visitor ip" : req.ip, "engine" : process.version}
    res.status(201).json({
        status: 'success',
        data
      });
}