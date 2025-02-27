import { PowerModel, PrefixUriAdmin } from '@/api/common';
import axios from 'axios';
import { UriMarket } from '@/api/crm/market/media';
import { MediaSet } from '@/api/mediaresource';

const UriStore = '/stores';

export interface Store extends PowerModel, MediaSet {
  name: string;
  employeeId?: number;
  contactNumber: string;
  address: string;
  description: string;
  longitude: number;
  latitude: number;
  startWork: string;
  endWork: string;
}

export interface ListStorePageRequest {
  ids?: number[];
  likeName?: string;
  storeIds?: number[];
  pageIndex?: number;
  pageSize?: number;
}

export interface ListStorePageReply {
  list: Store[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export function listStores(request: ListStorePageRequest) {
  return axios.get<ListStorePageReply>(
    `${PrefixUriAdmin + UriMarket + UriStore}/page-list`,
    {
      params: request,
    }
  );
}

export function createStore(request: Store) {
  return axios.post<Store>(`${PrefixUriAdmin + UriMarket + UriStore}`, request);
}

export function updateStore(request: Store) {
  return axios.put<Store>(
    `${PrefixUriAdmin + UriMarket + UriStore}/${request.id}`,
    request
  );
}

export interface DeleteStoreRequest {
  id: number;
}

export interface DeleteStoreReply {
  id: number;
}

export function deleteStore(request: DeleteStoreRequest) {
  return axios.delete<DeleteStoreReply>(
    `${PrefixUriAdmin + UriMarket + UriStore}/${request.id}`
  );
}
