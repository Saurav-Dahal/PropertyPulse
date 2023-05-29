const express = require("express");
const Listings = require("../Model/listingSchema");
const asyncHandler = require('express-async-handler');


const createListing = asyncHandler(async(req, res, next) => {
    const {type,name, bedrooms, bathrooms, parking, furnished, address, 
        offers, regularPrice, discountedPrice} = req.body;
    
    if(!type || !name || !address || !regularPrice){
        res.status(400);
        throw new Error('Please include all fields.'); 
    }else{
    // if(regularPrice>=discountedPrice){
        if(req.files.coverImage)
        {
            coverImage = req.files.coverImage[0]['filename'];
        }else{
            res.status(400);
            throw new Error('Please select cover photo.'); 
        }

        newMultiImage = [];
        if(req.files.images)
        {
            req.files.images.forEach(value => {
                const multiImage = {
                    image: value.filename
                }
                newMultiImage.push(multiImage);
            })
        }
        
        const listing = await Listings.create({type, name, bedrooms, bathrooms, parking, furnished, address, offers, regularPrice, discountedPrice, coverImage, images: newMultiImage});
        if (listing) {
            res.status(201).json({
            ok: true,
            message: "Listing created successfully.",
            });
        }else{
            res.status(400).json({message: "There is some problems while creating listing."});
        }
    // }else{
    //     res.status(400);
    //     throw new Error('Discounted price cannot be greater than regular price.')
    // }
    }
});

const getAllListing = asyncHandler(async(req, res, next) => {
    const listing = await Listings.find();
    if(listing){
        res.status(201).json(listing);
    }else{
        res.status(400).json({message: "There is some problems while fetching data."});
    }
});

const getListingByCategory = asyncHandler(async(req, res, next) => {
    const listing = await Listings.find({type: req.params.category});
    if(listing){
        res.status(201).json(listing);
    }else{
        res.status(400).json({message: "There is some problems while fetching data."});
    }
});

const getListingById = asyncHandler(async(req, res, next) => {
    const listing = await Listings.findOne({type: req.params.category, _id: req.params.listingId});
    if(listing){
        res.status(201).json(listing);
    }else{
        res.status(400).json({message: "There is some problems while fetching data."});
    }
});

const editListingById = asyncHandler(async(req, res, next) => {
    const listing = await Listings.findOne({type: req.params.category, _id: req.params.listingId});
    if(listing){
        res.status(201).json(listing);
    }else{
        res.status(400).json({message: "There is some problems while fetching data."});
    }
});

const updateListing = asyncHandler(async(req, res, next) => {
    const {type,name, bedrooms, bathrooms, parking, furnished, address, 
        offers, regularPrice, discountedPrice} = req.body;
    
    if(!type || !name || !address || !regularPrice){
        res.status(400);
        throw new Error('Please include all fields.'); 
    }else{
    // if(regularPrice>=discountedPrice){
        if(req.files.coverImage)
        {
            coverImage = req.files.coverImage[0]['filename'];
        }else{
            res.status(400);
            throw new Error('Please select cover photo.'); 
        }

        newMultiImage = [];
        if(req.files.images)
        {
            req.files.images.forEach(value => {
                const multiImage = {
                    image: value.filename
                }
                newMultiImage.push(multiImage);
            })
        }
        
        const listing = await Listings.create({type, name, bedrooms, bathrooms, parking, furnished, address, offers, regularPrice, discountedPrice, coverImage, images: newMultiImage});
        if (listing) {
            res.status(201).json({
            ok: true,
            message: "Listing created successfully.",
            });
        }else{
            res.status(400).json({message: "There is some problems while creating listing."});
        }
    // }else{
    //     res.status(400);
    //     throw new Error('Discounted price cannot be greater than regular price.')
    // }
    }
});

const deleteListing = asyncHandler(async(req, res, next) => {

});

deleteListing

module.exports = {createListing, getAllListing, getListingByCategory, getListingById, editListingById, updateListing, deleteListing};