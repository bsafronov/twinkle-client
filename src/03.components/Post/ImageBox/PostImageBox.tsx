import clsx from "clsx";
import React from "react";
import s from "./PostImageBox.module.scss";

interface PostImageBoxProps {}

const PostImageBox: React.FC<PostImageBoxProps> = ({}) => {
  const images = [
    "/img-test.jpg",
    "/img-test.jpg",
    "/img-test.jpg",
    "/img-test.jpg",
    "/img-test.jpg",
    // "/img-test.jpg",
    // "/img-test.jpg",
    // "/img-test.jpg",
    // "/img-test.jpg",
  ];
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
        <img src={image} key={index} />
      ))}
    </div>
  );
};

export default PostImageBox;
