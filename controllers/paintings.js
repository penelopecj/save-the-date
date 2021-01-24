import Painting from '../models/painting.js'
import { notFound, forbidden } from './../lib/errorHandler.js'

// * GET ALL PAINTINGS
async function paintingIndex(_req, res) {
  // Retrieve all paintings currently in DB and populate the user object with the user's data
  const paintings = await Painting.find().populate('owner')
  return res.status(200).json(paintings)
}

// * PUSH NEW PAINTING
async function paintingCreate(req, res, next) {
  try {
    // currentUser will come from req on previous piece of middleware
    // Now the owner key on painting object is set to the actual owner!
    const newPaintingWithOwner = { ...req.body, owner: req.currentUser._id }
    const newPainting = await Painting.create(newPaintingWithOwner)
    return res.status(201).json(newPainting)
  } catch (err) {
    next(err)
  }
}

// * GET ONE PAINTING
async function paintingShow(req, res, next) {
  const { id } = req.params
  try {
    // Retrieve the one painting with matching id and populate the user object with the user's data
    const painting = await Painting.findById(id).populate('owner')
    if (!painting) throw new Error(notFound)
    return res.status(200).json(painting)
  } catch (err) {
    next(err)
  }
}

// * DELETE ONE PAINTING
async function paintingDelete(req, res, next) {
  const { id } = req.params
  try {
    const paintingToDelete = await Painting.findById(id)
    if (!paintingToDelete) throw new Error(notFound)
    // Check if user has permission to delete this painting
    if (!paintingToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await paintingToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

// * PUT ONE PAINTING
async function paintingUpdate(req, res, next) {
  const { id } = req.params
  try {
    const paintingToUpdate = await Painting.findById(id)
    if (!paintingToUpdate) throw new Error(notFound)
    // Check if user has permission to edit this painting
    if (!paintingToUpdate.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    Object.assign(paintingToUpdate, req.body)
    await paintingToUpdate.save()
    return res.status(202).json(paintingToUpdate)
  } catch (err) {
    next(err)
  }
}

// * PUSH ONE COMMENT
async function commentCreate(req, res, next) {
  const { id } = req.params
  try {
    const painting = await Painting.findById(id).populate('owner')
    if (!painting) throw new Error(notFound)
    const newComment = { ...req.body, owner: req.currentUser._id }
    painting.comments.push(newComment)
    await painting.save()
    return res.status(201).json(painting)
  } catch (err) {
    next(err)
  }
}

// Not working properly
// * DELETE ONE COMMENT
async function commentDelete(req, res, next) {
  const { id, commentId } = req.params
  try {
    const painting = await Painting.findById(id)
    if (!painting) throw new Error(notFound)
    const commentToDelete = painting.comments.id(commentId)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error(forbidden)
    await commentToDelete.remove()
    await painting.save()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}


export default {
  index: paintingIndex,
  create: paintingCreate,
  show: paintingShow,
  update: paintingUpdate,
  delete: paintingDelete,
  commentCreate: commentCreate,
  commentDelete: commentDelete,
}