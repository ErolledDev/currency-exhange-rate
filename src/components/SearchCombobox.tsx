import React, { useState, useRef, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';

interface SearchItem {
  id: string;
  name: string;
  symbol: string;
  icon?: string;
}

interface Props {
  items: SearchItem[];
  placeholder: string;
  onSelect: (item: SearchItem) => void;
}

export default function SearchCombobox({ items, placeholder, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputValue) {
      setFiltered(items);
      return;
    }

    const searchValue = inputValue.toLowerCase();
    setFiltered(
      items.filter(
        item =>
          item.name.toLowerCase().includes(searchValue) ||
          item.symbol.toLowerCase().includes(searchValue)
      )
    );
  }, [inputValue, items]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Command>
          <Command.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </Command>
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-auto">
          <Command.List>
            {filtered.map(item => (
              <Command.Item
                key={item.id}
                value={item.id}
                onSelect={() => {
                  onSelect(item);
                  setInputValue('');
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
              >
                {item.icon && <span className="text-xl">{item.icon}</span>}
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.symbol}</div>
                </div>
              </Command.Item>
            ))}
          </Command.List>
        </div>
      )}
    </div>
  );
}