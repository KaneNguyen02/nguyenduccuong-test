import React from "react";

interface DetailProps {
  params: { slug: string };
}
const DetailPage: React.FC<DetailProps> = ({ params }) => {
  return (
    <>
      <div>My blog: {params.slug}</div>
      <div>DetailPage</div>
    </>
  );
};

export default DetailPage;
