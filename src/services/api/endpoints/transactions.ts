import { axios } from "../api";
import { DataAuth } from "../../auth/auth";

export type chartResponse = {
  data: {
    date: string;
    value: number;
  }[];
  totalValue: number;
};

export async function getTransactionChart(
  auth: DataAuth
): Promise<chartResponse> {
  const response = await axios.get(`/transaction/chart`, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });

  if (response.status !== 200) throw new Error(response.statusText);

  return response.data;
}