import mongoose from 'mongoose';

export default async function connect() {
	try {
		await mongoose.connect(process.env.ATLAS_URI);
	} catch (error) {
		console.log(error);
	}
	console.log('Database Connected');
}
