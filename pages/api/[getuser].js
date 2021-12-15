export default function handler(req, res) {
    const { getuser } = req.query
    res.end(`User: ${getuser}`)
    // req.cookies
    // req.query
    // req.body
    // res.status(code)
    // res.json(body)
    // res.send(body)
    // res.redirect(301, 'path')
  
}
  
