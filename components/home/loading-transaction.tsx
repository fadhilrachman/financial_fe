import React from "react";
import { Skeleton, List, Avatar, Divider } from "antd";

const LoadingSkeleton: React.FC = () => {
  // Dummy data untuk simulasi skeleton item
  const skeletonItems = [1, 2, 3];

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={skeletonItems}
        renderItem={() => (
          <>
            <List.Item style={{ padding: "16px 0" }}>
              <List.Item.Meta
                avatar={<Skeleton.Avatar active size="large" shape="square" />}
                title={
                  <Skeleton.Input
                    style={{ width: "150px" }}
                    active
                    size="small"
                  />
                }
                description={
                  <Skeleton.Input
                    style={{ width: "250px" }}
                    active
                    size="small"
                  />
                }
              />
              <Skeleton.Button
                style={{ width: "80px", height: "24px" }}
                active
              />
            </List.Item>
            <Divider style={{ margin: 0 }} />
          </>
        )}
      />
    </div>
  );
};

export default LoadingSkeleton;
