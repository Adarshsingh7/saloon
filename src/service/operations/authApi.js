import { toast } from "react-hot-toast";
import { endpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const {
  SIGNUP_API,
  LOGIN_API,
  UPDATE_PASSWORD_API,
  RESET_PASSWORD_API,
  FORGET_PASSWORD_API,
} = endpoints;

export function signUp(
  role,
  firstName,
  lastName,
  email,
  address,
  postCode,
  phone_number,
  gender,
  gdpr_sms_active,
  gdpr_email_active,
  referred_by,
  preferred_location,
  avatar,
  userName,
  password,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        role,
        firstName,
        lastName,
        email,
        password,
        address,
        postCode,
        phone_number,
        gender,
        gdpr_email_active,
        gdpr_sms_active,
        referred_by,
        preferred_location,
        avatar,
        userName,
      });
      console.log("SIGNUP API RESPONSE.........", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successfully");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR.........", error);
      toast.error("Signup failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(userName, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        userName,
        password,
      });

      console.log("LOGIN API RESPONSE.........", response);

      if (response.status !== 200) {
        throw new Error(response.data);
      }
      
      toast.success("Login Successfully");
      dispatch(setToken(response.data.token));
      const userImage = response.data?.data?.user?.user_profile?.avatar
        ? response.data.data.user.user_profile.avatar
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.user.user_profile.firstName} ${response.data.data.user.user_profile.lastName}`;
      dispatch(setUser({ ...response.data.data.user, avatar: userImage }));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/");
    } catch (error) {
      console.log("LOGIN API ERROR........", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/login");
  };
}
