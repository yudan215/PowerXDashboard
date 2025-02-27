import axios from 'axios';
import { PowerModel, PrefixUriAdmin } from '@/api/common';

const UriProduct = '/product';

export interface SpecificOption {
  productSpecificId: number;
  name: string;
  isActivated?: boolean;
}

export interface ProductSpecific extends PowerModel {
  productId: number;
  name: string;

  specificOptions?: SpecificOption[];
}

export interface ListProductSpecificsPageRequest {
  ids?: number[];
  productId: number;
  pageIndex?: number;
  pageSize?: number;
}

export interface ListProductSpecificsPageReply {
  list: ProductSpecific[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export function listProductSpecifics(request: ListProductSpecificsPageRequest) {
  return axios.get<ListProductSpecificsPageReply>(
    `${PrefixUriAdmin + UriProduct}/product-specifics/page-list`,
    {
      params: request,
    }
  );
}

export interface ConfigProductSpecificRequest {
  productSpecifics: ProductSpecific[];
}
export interface ConfigProductSpecificReply {
  result: boolean;
}

export function configProductSpecific(request: ConfigProductSpecificRequest) {
  return axios.post<ConfigProductSpecificReply>(
    `${PrefixUriAdmin + UriProduct}/product-specifics/config`,
    request
  );
}

export type UpdateProductSpecificRequest = ProductSpecific;

export interface UpdateProductSpecificReply {
  id: number;
}

export function updateProductSpecific(request: UpdateProductSpecificRequest) {
  return axios.post<UpdateProductSpecificReply>(
    `${PrefixUriAdmin + UriProduct}/product-specifics/${request.id}`,
    request
  );
}

export interface DeleteProductSpecificRequest {
  id: number;
}

export interface DeleteProductSpecificReply {
  id: number;
}

export function deleteProductSpecific(request: DeleteProductSpecificRequest) {
  return axios.delete<DeleteProductSpecificReply>(
    `${PrefixUriAdmin + UriProduct}/product-specifics/${request.id}`
  );
}
