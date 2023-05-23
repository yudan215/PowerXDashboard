import axios from 'axios';

/**
 * SCRM公开接口
 */

export interface GetWeWorkOAuth2UrlRequest {
  redirectUri: string;
  state: string;
}

export interface GetWeWorkOAuth2UrlReply {
  url: string;
}

export function getWeWorkOAuth2Url(request: GetWeWorkOAuth2UrlRequest) {
  return axios.get<GetWeWorkOAuth2UrlReply>(
    '/api/v1/admin/scrm/public/oauth2/url/wework',
    {
      params: request,
    }
  );
}
