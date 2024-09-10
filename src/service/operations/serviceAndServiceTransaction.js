import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { serviceEndpoints } from "../api";

const {
  GET_ALL_SERVICE_TRANSACTION_API,
  GET_ALL_SERVICE_API,
  GET_ALL_SERVICE_USAGES_API,
} = serviceEndpoints;

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
      }
    );
    toast.success("All Service Transactions fetched successfully");
    result = response.data;
  } catch (error) {
    console.log("Fetch service transactions api error", error);
    toast.error("Failed to fetch service transactions");
  }
  toast.dismiss(toastId);
  return result;
};
