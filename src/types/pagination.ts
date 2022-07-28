export interface PaginationParams {
    totalItems: number;
    pageSize: number;
    isValidPage: boolean;
    totalPages: number;
    currentPage: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
  }