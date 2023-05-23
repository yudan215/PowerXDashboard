import axios from 'axios';

export interface AssociateWeWorkAccountRequest {
  code: string;
}

export interface AssociateWeWorkAccountReply {
  employeeId: number;
}

export function associateWeWorkAccount(request: AssociateWeWorkAccountRequest) {
  return axios.post<AssociateWeWorkAccountReply>(
    '/api/v1/admin/scrm/setting/userinfo/actions/associate-wework-account',
    request
  );
}
