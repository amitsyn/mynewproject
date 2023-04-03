export default function handler(req,res){
    res.setPreviewData({name:'vishwas'})
    // res.end("Preview mode enable")
    res.redirect(req.query.redirect)
}