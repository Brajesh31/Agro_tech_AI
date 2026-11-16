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

exports.updateUserByID = async (req, res) => {
  try {
    if (req.userRole !== "admin" && req.userId !== req.params.id) {
      return res.status(403).json({ message: "You are not allowed to update this profile." });
    }

    const updates = {};
    if (typeof req.body.firstName === "string") {
      const value = req.body.firstName.trim();
      if (value.length < 2) {
        return res.status(400).json({ message: "First name must contain at least 2 characters." });
      }
      updates.firstName = value;
    }
    if (typeof req.body.lastName === "string") {
      const value = req.body.lastName.trim();
      if (value.length < 2) {
        return res.status(400).json({ message: "Last name must contain at least 2 characters." });
      }
      updates.lastName = value;
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No supported profile fields were provided." });
    }

    const user = await User.findByIdAndUpdate(req.params.id, { $set: updates }, {
      new: true,
      runValidators: true,
    }).select("firstName lastName username email address role phone profilePicture points loyaltyTier createdAt updatedAt");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user profile:", error.message);
    return res.status(400).json({ message: "Unable to update user profile." });
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

