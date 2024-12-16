import { Modal } from "antd";
import BaseButton from "./base-button";

export const handleTrigerModalDelete = ({
  loading,
  onDelete,
}: {
  loading: boolean;
  onDelete: () => void;
}) => {
  return Modal.confirm({
    title: "Delete Data",
    content: (
      <div>
        Are you sure you want to delete this data?
        <div className="space-x-2 mt-2 flex justify-end">
          <BaseButton
            onClick={() => {
              Modal.destroyAll();
            }}
          >
            Back
          </BaseButton>
          <BaseButton
            //   loading={status == "pending"}
            type="text"
            loading={loading}
            className="bg-red-500 hover:!bg-red-500 text-white hover:!text-white"
            onClick={() => {
              onDelete();
              // handleDeleteNews(id);
            }}
          >
            Delete
          </BaseButton>
        </div>
      </div>
    ),
    footer: false,
  });
};
