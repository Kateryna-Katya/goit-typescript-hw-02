import { FC, FormEvent, ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { SearchBarProps } from "../../index";
import style from "./SearchBar.module.css";

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      toast.error("Please enter your term");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <button type="submit" className={style.button}>
          🔍
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
