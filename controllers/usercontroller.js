const fs = require("fs");
const User = require("../models/user");
const UserInformation = require("../models/userinfo");

exports.getAllUsers = async (req, res) => {
  try {
    
    const data = JSON.parse(fs.readFileSync("user.json", "utf8"));

    for (const user of data.users) {
      const newUser = await User.create({ email: user.email });
      await UserInformation.create({
        name: user.name,
        salary: user.salary,
        department: user.department,
        userId: newUser.id,
      });
    }

    res.json({ message: "Data imported successfully" });
  } catch (error) {
    console.error("Error importing data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getUserDetails = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
      include: UserInformation,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
