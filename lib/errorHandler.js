export const notFound = 'NotFound'
export const validationError = 'ValidationError'
export const castError = 'CastError'
export const syntaxError = 'SyntaxError'
export const mongoError = 'MongoError'
export const unauthorized = 'unauthorized'
export const forbidden = 'forbidden'


export default function errorHandler(err, _req, res, next) {
  console.log(`👶 Congratultions, it's a ${err.name}!`)

  if (err.name === castError || err.message === notFound) {
    //Cast Error, attempt to locate a document with any value that will not be recognized as a valid Mongo ID eg GET 'url/films/ahhhhhhhekfekfo' or GET 'url/films/34'. The response should be 404 - message: Not Found.

    // And throwing our own errors “Not Found” when a valid Mongo ID is provided, but a matching document cannot be found. eg GET url/films/5fda0f48baa001a2f0d763ec . And then as a result of this returning null in our controller we say
    // if (thingIsNull) throw new Error(notFound) .  The response should be the same as above, 404 not found as it’s essentially the same problem. Can’t find whatever you are looking for.
    return res.status(404).json({ message: 'Address not found. There was an invalid Mongo ID or value in your URL.' })
  }

  if (err.message === forbidden) {
    return res.status(403).json({ message: 'Foridden' })
  }
  
  if (err.message === unauthorized) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (err.name === validationError) {
    //Validation Error, try to create something with invalid or missing values. The response should be 422 Unprocessable Entity and an object containing the specific errors.
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }

    return res.status(422).json({ 
      message: 'Form Validation Errors.', 
      errors: customErrors,
    })
  }

  if (err.name === mongoError || err.name === syntaxError) {
    //This will simply catch the error from the user input, log it, and return the correct status and error type to the user.
    return res.status(422).json({ message: `Unprocessable Entity. ${err.name}.` })
  }

  res.sendStatus(500)
  next(err)
}