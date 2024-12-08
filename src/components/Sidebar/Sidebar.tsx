import React from 'react';
import './styles.css';
import { Categories } from '/src/entities/Categories.ts';
import { ApplyFilters } from '../ProductList/ProductList.tsx';

interface SidebarProps {
  isOpen: boolean;
}

const clearSearch = (inputElement: HTMLInputElement | null): void => {
  if (inputElement) {
    inputElement.value = '';
  }
};

const resetCheckbox = (checkboxElement: HTMLInputElement | null): void => {
  if (checkboxElement) {
    checkboxElement.checked = false;
  }
};

const setDefaultCategory = (selectElement: HTMLSelectElement | null): void => {
  if (selectElement) {
    selectElement.value = selectElement.options[0].value;
  }
};

const resetAll = (
  inputElement: HTMLInputElement | null,
  checkboxElement: HTMLInputElement | null,
  selectElement: HTMLSelectElement | null
): void => {
  clearSearch(inputElement);
  resetCheckbox(checkboxElement);
  setDefaultCategory(selectElement);
};

const Search = (
  inputElement: HTMLInputElement,
  checkboxElement: HTMLInputElement,
  selectElement: HTMLSelectElement
): void => {
  ApplyFilters(
    inputElement.value,
    checkboxElement.checked,
    selectElement.value
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const CategoryOptions = Object.keys(Categories) as Array<
    keyof typeof Categories
  >;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const handleClearSearch = (): void => {
    clearSearch(inputRef.current);
  };
  const handleSetDefaultCategory = (): void => {
    setDefaultCategory(selectRef.current);
  };
  const handleResetAll = (): void => {
    resetAll(inputRef.current, checkboxRef.current, selectRef.current);
  };
  const handleSearch = (): void => {
    Search(inputRef.current, checkboxRef.current, selectRef.current);
  };
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button
        onClick={handleClearSearch}
        className="sidebar-delete-1"
        style={{ width: '30px', backgroundColor: '#eee9e7' }}
      >
        x
      </button>
      <button
        onClick={handleSetDefaultCategory}
        className="sidebar-delete-2"
        style={{ width: '30px', backgroundColor: '#eee9e7' }}
      >
        x
      </button>
      <input type="text" placeholder="Поиск" ref={inputRef} />

      <label className="sidebar-label">
        В наличии
        <input ref={checkboxRef} type="checkbox" className="sidebar-checkbox" />
      </label>
      <select ref={selectRef}>
        <option value="">Любая категория</option>
        {CategoryOptions.map((cat) => (
          <option key={cat} value={Categories[cat]}>
            {Categories[cat]}
          </option>
        ))}
      </select>
      <button onClick={handleResetAll} style={{ backgroundColor: '#eee9e7' }}>
        Сбросить фильтры
      </button>
      <button onClick={handleSearch}>Поиск</button>
    </aside>
  );
};

export default Sidebar;
