import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { serviceEndpoints } from "../api";
import { setLoading } from "../../slices/serviceSlice";

const {
  GET_ALL_SERVICE_TRANSACTION_API,
  GET_ALL_SERVICE_API,
  GET_ALL_SERVICE_USAGES_API,
} = serviceEndpoints;

export const createService = async (token, data) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", GET_ALL_SERVICE_API, data, {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
      if (response.status !== 201)
        throw new Error("Couldn't create a new service");

      toast.success("Service created successfully");
      return response.data?.data;
    } catch (error) {
      console.log("Create service Api error...", error);
      toast.error(error.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const getAllService = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("GET", GET_ALL_SERVICE_API, null, {
      Authorization: `Bearer ${token}`,
    });
    if (response.status !== 200) throw new Error("Could not fetch All Service");
    toast.success("All Services fetched successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("Fetch all services api error", error);
    toast.error("Failed to fetch all services");
  }
  toast.dismiss(toastId);
  return result;
};

export const getServiceById = async (token, serviceId) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      `${GET_ALL_SERVICE_API}/${serviceId}`,
      null,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );

    if (response.status !== 200) throw new Error("Couldn't found Service");
    toast.success("Service fetch successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("Fetch service by id api error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const updateService = async (token, serviceId, data) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "PATCH",
      `${GET_ALL_SERVICE_API}/${serviceId}`,
      data,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );
    console.log("Update Service Api Response...", response);
    if (response.status !== 200) throw new Error("Couldn't update Service");
    toast.success("Service updated successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("Update Service Api Error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const deleteService = async (token, serviceId) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "DELETE",
      `${GET_ALL_SERVICE_API}/${serviceId}`,
      null,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );
    console.log("Delete Service Api Response..", response);
    if (response.status !== 204) throw new Error("Could not delete Service");
    toast.success("Service deleted successfully");
    result = true;
  } catch (error) {
    console.log("Delete Service Api Error", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllServiceTransactions = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_SERVICE_TRANSACTION_API,
      null,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );
    if (response.status !== 200)
      throw new Error("Could not fetch All Service Transaction");
    toast.success("All Service Transactions fetched successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("Fetch service transactions api error", error);
    toast.error("Failed to fetch service transactions");
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllServiceUsage = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_SERVICE_USAGES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    );

    console.log("GET_ALL_SERVICE_USAGES_API response...", response);

    if (response.status !== 200)
      throw new Error("Couldn't get all services usage");

    toast.success("All Service Usage fetched successfully");
    result = response.data?.data;
  } catch (error) {
    console.log("GET_ALL_SERVICE_USAGES_API error", error);
    toast.error("Failed to get all services usage");
  }
  toast.dismiss(toastId);
  return result;
};
