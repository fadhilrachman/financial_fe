export interface BaseResponseListType<T> {
  result: T[];
  pagination: {
    current: number;
    total_page: number;
    total_data: number;
  };
}

export interface BaseResponseDetailType<T> {
  result: T;
}

export interface ImgType {
  id: string;
  name: string;
  url: string;
}
