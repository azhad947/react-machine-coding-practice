import { useState } from "react";

const longRecord = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
  email: `user${i}@example.com`,
  age: Math.floor(Math.random() * 50) + 18,
}));

const ITEM_HEIGHT = 40;
const CONTAINER_HEIGHT = 800;
const VISIBLE_COUNT = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);

const Virtualization = () => {
  const [visibleList, setVisibleList] = useState(
    longRecord.slice(0, VISIBLE_COUNT)
  );

  const [startIndex, setStartIndex] = useState(0);

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const scrollTop = e.currentTarget.scrollTop;

    const newStartIndex = Math.floor(scrollTop / ITEM_HEIGHT);
    const newEndIndex = newStartIndex + VISIBLE_COUNT;

    setStartIndex(newStartIndex);
    setVisibleList(longRecord.slice(newStartIndex, newEndIndex));
  }

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: `${CONTAINER_HEIGHT}px`,
        backgroundColor: "gray",
        overflow: "auto",
      }}
    >
      {/* Creates the full scrollbar height */}
      <div
        style={{
          height: `${longRecord.length * ITEM_HEIGHT}px`,
          position: "relative",
        }}
      >
        {/* Move visible items to their actual position */}
        <div
          style={{
            transform: `translateY(${startIndex * ITEM_HEIGHT}px)`,
          }}
        >
          {visibleList.map((user) => (
            <div
              key={user.id}
              style={{ height: `${ITEM_HEIGHT}px` }}
            >
              <p>{user.name}</p>
              <p>{user.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Virtualization;