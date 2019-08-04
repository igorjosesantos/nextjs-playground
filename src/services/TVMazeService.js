import * as httpService from '../support/HttpService';

const endpoint = 'https://api.tvmaze.com';

/**
 * https://www.tvmaze.com/api#show-search
 */
export async function showSearch(name) {
  let showSearchEndpoint = `${endpoint}/search/shows`;
  let params = { q: name };

  return httpService.get(showSearchEndpoint, params);
}

/**
 * https://www.tvmaze.com/api#show-main-information
 */
export async function showMainInformation(id) {
  let showMainInformationEndpoint = `${endpoint}/shows/${id}`;

  return httpService.get(showMainInformationEndpoint);
}