export const purchaseBook = async (req, res) => {
    const { userId, bookId } = req.body;

    try {
        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user || !book) {
            return res.status(404).json({ message: "User or Book not found" });
        }

        // Check if user has enough balance
        if (user.wallet < book.price) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Deduct price from wallet
        user.wallet -= book.price;

        // Add book to purchased list
        user.purchasedBooks.push({ bookId });
        await user.save();

        res.status(200).json({ message: "Book purchased successfully", wallet: user.wallet });
    } catch (error) {
        console.error("Purchase Error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
