import * as httpService from '../infra/Http';
import Logger from '../infra/logger';

const logger = Logger('TVMazeService');
const endpoint = process.env.API_TVMAZE_ENDPOINT;

/**
 * https://www.tvmaze.com/api#show-search
 */
export async function showSearch(name) {
  logger.debug(`Finding shows given the following name: ${name}`);
  let showSearchEndpoint = `${endpoint}/search/shows`;
  let params = { q: name };

  return httpService.get(showSearchEndpoint, params).then(res => {
    logger.debug('Parsing response as JSON...');
    return res.json();
  });
}

/**
 * https://www.tvmaze.com/api#show-main-information
 */
export async function showMainInformation(id) {
  logger.debug(`Finding show details given the following ID: ${id}`);
  let showMainInformationEndpoint = `${endpoint}/shows/${id}`;

  return httpService.get(showMainInformationEndpoint).then(res => {
    logger.debug('Parsing response as JSON...');
    return res.json();
  });
}
