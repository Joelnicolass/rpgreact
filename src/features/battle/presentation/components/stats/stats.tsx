import React from "react";

interface Item {
  name: string;
  color: string;
  max: number;
  current: number;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  dataBars: Item[];
  dataStats?: Item[];

  renderBarItem: (item: {
    name: string;
    color: string;
    max: number;
    current: number;
  }) => React.ReactNode;
}

const Stats = ({ renderBarItem, dataBars, dataStats, ...props }: Props) => {
  return (
    <div {...props}>
      {dataBars.map((item) => renderBarItem(item))}

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {dataStats &&
          dataStats.map((item) => (
            <p key={item.name}>
              {item.name}: {item.current}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Stats;
