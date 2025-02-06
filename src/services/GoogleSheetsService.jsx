
import axios from "axios";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/tyvlzosjriwzc";

export const fetchGoogleSheetData = async () => {
  try {
    const response = await axios.get(SHEETDB_API_URL);
    return response.data[0]; 
  } catch (error) {
    console.error("Error fetching SheetDB data:", error);
    return null;
  }
};


// https://sheetdb.io/api/v1/tyvlzosjriwzc