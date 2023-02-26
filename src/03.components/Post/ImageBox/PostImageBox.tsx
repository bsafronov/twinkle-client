import { API_URL } from "@/01.shared/http";
import clsx from "clsx";
import React from "react";
import s from "./PostImageBox.module.scss";

interface PostImageBoxProps {
  images: string[];
}

const PostImageBox: React.FC<PostImageBoxProps> = ({ images }) => {
  const bottomCount = images.length - 2;
  const style = {
    "--columns": bottomCount % 2 === 0 ? bottomCount : bottomCount * 2,
    "--bottom-count": bottomCount,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className={clsx(s.main, {
        [s.single]: images.length === 1,
        [s.double]: images.length === 2 || images.length === 4,
        [s.triple]: images.length === 3,
        [s.nine]: images.length === 9,
        [s.multi]: images.length > 4 && images.length !== 9,
      })}
    >
      {images.map((image, index) => (
        <img src={API_URL + "/" + image} key={index} loading={"lazy"} />
      ))}
    </div>
  );
};

export default PostImageBox;
