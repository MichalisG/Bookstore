import type { FC } from 'react';
import { useState } from 'react';
import BookPlaceholderImage from '../../assets/book-cover-placeholder.png'

interface ImagePickerProps {
  onChange: any;
  label?: string;
}

const ImagePicker: FC<ImagePickerProps> = ({ onChange, label }) => {
  const [image, setImage] = useState<File | null>(null)

  const handleImageChange = async ({ currentTarget: input }: React.ChangeEvent<HTMLInputElement>) => {
    if (input.files === null) return;

    setImage(input.files[0]);
    onChange(input.files[0])
  }

  return (
    <div>
      <div className="label p-0">
        <span className="label-text">{label}</span>
      </div>
      <div className="w-full max-w-xs border border-gray-200 rounded-lg">
        <div className="flex w-full justify-center">
          <img className="flex w-28" src={image === null ? BookPlaceholderImage : URL.createObjectURL(image)} alt='book cover' />
        </div>
        <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          className="file-input w-full max-w-xs  border border-gray-200 rounded-lg"
        />
      </div>
    </div>
  );
}

export default ImagePicker;
