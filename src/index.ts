export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description?: string | null;
  user: {
    name: string;
  };
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

export interface ErrorMessageProps {
  message: string;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface FetchImagesResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
