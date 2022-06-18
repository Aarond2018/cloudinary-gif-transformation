const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: "ddmm5ofs1",
	api_key: process.env.CLD_API_KEY,
	api_secret: process.env.CLD_API_SECRET,
	secure: true,
});

export default async function handler(req, res) {
	try {
		const response = await cloudinary.video("giphy_ilmc8i", {resource_type: "image"});
		res.status(200).send(response);
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
}