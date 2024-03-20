import app from './app.js';
import connectToDb from './config/dbConnect.js';
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectToDb();
    
    console.log(`Server running on port ${PORT}`);
});