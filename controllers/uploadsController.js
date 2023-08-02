const path = require("path");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded.");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please, upload an image.");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      `Please, upload an image with size smaller than ${maxSize}.`
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
