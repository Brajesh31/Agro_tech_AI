const User = require("../model/user");

exports.getUserByID = async (req, res) => {
  try {
    if (req.userRole !== "admin" && req.userId !== req.params.id) {
      return res.status(403).json({ message: "You are not allowed to view this profile." });
    }

    const user = await User.findById(req.params.id)
      .select("firstName lastName username email address role phone profilePicture points loyaltyTier createdAt updatedAt")
      .lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return res.status(500).json({ message: "Unable to fetch user profile." });
  }
};

exports.deleteUnverifiedUsers = async () => {
    try {
      const now = new Date();
      const expirationTime = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago
  
      const deletedUsers = await User.deleteMany({
        isVerified: false,
        createdAt: { $lt: expirationTime }
      });
  
      console.log(`Deleted ${deletedUsers.deletedCount} unverified accounts older than 24 hours`);
    } catch (error) {
      console.error('Error deleting unverified accounts:', error);
    }
  };

