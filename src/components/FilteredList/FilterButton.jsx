import React from "react";

export const FilterButton = React.memo(({ onClick, label }) => {
  console.log(`ChildButton render: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});