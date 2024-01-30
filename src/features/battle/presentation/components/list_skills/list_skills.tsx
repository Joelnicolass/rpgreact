import React from "react";

interface Item {
  name: string;
  image: string;
  force?: number;
  cost?: number;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: Item[];
  renderItem: (data: Item) => React.ReactNode;
}

const ListSkills = ({ data, renderItem, ...props }: Props) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        ...props.style,
      }}
    >
      {data.map((item, index) => {
        return <div key={index}>{renderItem(item)}</div>;
      })}
    </div>
  );
};

export default ListSkills;
