import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./componetns/SearchBar/SearchBar";
import ImageGallery from "./componetns/ImageGallery/ImageGallery";
import Loader from "./componetns/Loader/Loader";
import LoadMoreBtn from "./componetns/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./componetns/ErrorMessage/ErrorMessage";
import { Image } from "./index";
import ImageModal from "./componetns/ImageModal/ImageModal";

axios.defaults.baseURL = `https://api.unsplash.com`;

const API_KEY = `Ho75YQ174NzlkoOxkHTr6Id6eAukC4HGLacHmF6CR9A`;

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/search/photos", {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });

        const newImages = response.data.results as Image[];
        const total = response.data.total as number;

        setImages((prevImages) => [...prevImages, ...newImages]);
        setTotalResults(total);
      } catch (error) {
        setError("Failed to fetch images. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setTotalResults(0);
  };

  const loadMoreImages = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image): void => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const allImagesLoaded = images.length >= totalResults;

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {loading && <Loader />}
          {!allImagesLoaded && images.length > 0 && (
            <LoadMoreBtn onClick={loadMoreImages} />
          )}
          {showModal && (
            <ImageModal image={selectedImage} onClose={closeModal} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
