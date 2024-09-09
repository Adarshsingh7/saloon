import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { userProfileEndpoints } from "../api";
import { setLoading } from "../../slices/profileSlice";

const {
  GET_USER_DETAILS_API,
  UPDATE_USER_PROFILE_API,
  GET_ALL_USER_PROFILE_API,
} = userProfileEndpoints;

export const createUserProfile = async (token, data) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        GET_ALL_USER_PROFILE_API,
        data,
        {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      );
      console.log("Create A new User Profile response", response);
      if (response.status !== 201) {
        throw new Error("Could not create a new user profile");
      }

      toast.success("User profile created successfully");
      return response.data?.data;
    } catch (err) {
      console.log("Create user profile api error....", err);
      toast.error(err.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};
export const getAllUserProfiles = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_USER_PROFILE_API, null, {
      Authorization: `Bearer ${token}`,
    });
    console.log("All user profile response....", response);
    if (response.status !== 200) {
      throw new Error("Could not get all user profile");
    }
    result = response.data?.data;
  } catch (error) {
    console.log("Get all user profile api error....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getUserDetails = async (token, userId) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("GET", GET_USER_DETAILS_API, userId, {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
    console.log("Get user details response....", response);
    if (response.status !== 200) {
      throw new Error("Could not get user details");
    }
    result = response.data?.data;
  } catch (error) {
    console.log("Get user details api error....", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateUserProfile = async (token, data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_USER_PROFILE_API, data, {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    });
    console.log("Update user profile response....", response);
    if (response.status !== 200)
      throw new Error("Could not update user profile");

    toast.success("User profile updated successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("update user profile error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const deleteUserProfile = async (token, userId) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "DELETE",
      GET_ALL_USER_PROFILE_API + `${userId}`,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );
    console.log("Delete user profile response....", response);
    if (response.status !== 200)
      throw new Error("Could not delete user profile");
    toast.success("User profile deleted successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("Delete user profile error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
