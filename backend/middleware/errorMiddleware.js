const notFound = (re, res, next) => {
    console.log('I am in not found')
    const error = new Error(`Not found -${req,originalUrl}`)
    res.status(404)
    next(error)
}



const errorHandler = (err, req, res, next) => {
    console.log("I am in the error handler")
    console.log(`res.statusCode: ${res.statusCode}`)
   const statusCode= res.statusCode === 200 ? 500 : res. statusCode

   res.ststus(statusCode)
   res.json({
       message: err.message
   })
}

export {errorHandler}