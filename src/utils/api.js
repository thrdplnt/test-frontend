import axios from 'axios';

/**
 * Fetches population data and source annotations from the Data USA API.
 * @returns {Promise<Object>} A promise that resolves to an object containing data and organization info.
 * { data: Array<Object>, orgInfo: Object }
 */
export async function fetchPopulationData() {
  try {
    const originalApiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    const apiUrlWithProxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(originalApiUrl);
    const response = await axios.get(apiUrlWithProxy); 
    const apiData = response.data.data;
    const sourceAnnotations = response.data.source && response.data.source[0] && response.data.source[0].annotations;

    let orgInfo = { name: '', description: '' };
    if (sourceAnnotations) {
      orgInfo = {
        name: sourceAnnotations.source_name,
        description: sourceAnnotations.source_description
      };
    }

    return { data: apiData, orgInfo: orgInfo };
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw new Error("Failed to fetch population data."); 
  }
}