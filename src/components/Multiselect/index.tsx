import type { FC } from 'react';
import { useState, ChangeEvent, useEffect } from 'react';
import Icons from '../Icons';

interface MultiselectProps {
  label?: string;
  options: string[];
  maxSelected?: number;
  onChange?: any
}

const Multiselect: FC<MultiselectProps> = (props: MultiselectProps) => {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const {
    label = '',
    options,
    maxSelected = 0,
    onChange = () => {}
  } = props;


  const filteredTags = options.filter(
    (item: string) =>
      item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
      !selected.includes(item)
  );

  const handleAddOption = (option: string) => () => {
    if(maxSelected > 0 && selected.length < maxSelected) {
      setMenuOpen(true);
      setSelected((prev) => [...prev, option]);
      setQuery("");
    }
  }

  const handleRemoveOption = (option: string) => () => setSelected(selected.filter((i) => i !== option))

  useEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <div className="relative text-sm">
      <div className="w-full  svelte-1l8159u">
      <div className="label p-0">
        <span className="label-text">{label}</span>
      </div>
        <div className="mb-4 p-1 pt-3 pb-3 flex border border-gray-200 bg-white rounded-lg">
          <div className="flex flex-auto flex-wrap">
            {selected.map((option) => {
              return (
                <div key={option} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-primary border border-primary ">
                  <div className="text-xs font-normal leading-none max-w-full flex-initial">{option}</div>
                  <div className="flex flex-auto flex-row-reverse">
                    <div
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={handleRemoveOption(option)}
                    >
                      <Icons.Close />
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex-1">
              <input
                placeholder=""
                className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                value={query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value.trimStart())}
                onFocus={() => setMenuOpen(true)}
                onBlur={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Menu's */}
      {menuOpen ? (
        <div className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
          <div className="flex flex-col w-full">
            {filteredTags?.length ? (
              filteredTags.map((option) => (
                <div
                  key={option}
                  className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-primary"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleAddOption(option)}
                >
                  <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-primary-100">
                    <div className="w-full items-center flex">
                      <div className="mx-2 leading-6  ">{option} </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-primary">
                <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-primary">
                  <div className="w-full items-center flex">
                    <div className="mx-2 leading-6  ">No options available </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Multiselect;
