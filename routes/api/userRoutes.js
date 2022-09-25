const userRouter = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  deleteUser,
  deleteFriend,
} = require("../../controllers/user-controller");

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

userRouter.route("/:id/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = userRouter;
