import React, { useEffect, useState } from "react";
import { Button, message, Modal, Steps, theme } from "antd";
import { DATA_FAKE_LOCAL, DATA_FAKE_SERVER } from "./sample";
interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
  subtasks?: Task[];
}
[];
interface SubTasks {
  id: number;
  title: string;
  completed?: boolean;
}

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const DashBoardContent: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "500px",
    textAlign: "center",
    color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const handleCompareDataClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    function recursiveMerge(localData: Task[], serverData: Task[]): void {
      // Loop through tasks in localData
      localData?.forEach((localTask: Task) => {
        // Find corresponding task in serverData
        const serverTask = serverData.find(
          (task: Task) => task.id === localTask.id
        );

        // If serverTask exists
        if (serverTask) {
          // Check if titles are different
          if (serverTask.title !== localTask.title) {
            // Update title with localData title
            serverTask.title = localTask.title;
          }

          // Recursively merge subtasks
          if (localTask.subtasks && serverTask.subtasks) {
            console.log(
              "🚀 ~ file: index.tsx:74 ~ localData?.tasks?.forEach ~ serverTask.subtasks:",
              serverTask.subtasks
            );
            console.log(
              "🚀 ~ file: index.tsx:74 ~ localData?.tasks?.forEach ~ localTask.subtasks:",
              localTask.subtasks
            );
            recursiveMerge(localTask?.subtasks, serverTask.subtasks);
          } else if (localTask.subtasks) {
            // If serverTask doesn't have subtasks, assign local subtasks
            serverTask.subtasks = localTask.subtasks;
          }
        } else {
          // If no corresponding task in serverData, add local task
          serverData.push(localTask);
        }
      });
    }
    // Example usage
    recursiveMerge(DATA_FAKE_LOCAL, DATA_FAKE_SERVER);
    console.log(
      "🚀 ~ file: index.tsx:87 ~ DATA_FAKE_SERVER:",
      DATA_FAKE_SERVER
    );
  };
  console.log("🚀 ~ file: index.tsx:87 ~ DATA_FAKE_LOCAL:", DATA_FAKE_LOCAL);
  console.log("🚀 ~ file: index.tsx:87 ~ DATA_FAKE_SERVER:", DATA_FAKE_SERVER);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle} onClick={handleCompareDataClick}>
        compare data{" "}
      </div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            className="bg-[#1677ff]"
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            className="bg-[#1677ff]"
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            className="text-[#1677ff] border-[#1677ff]"
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        okButtonProps={{ style: { background: "#1677ff" } }}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        okText="Tôi cần hướng dẫn"
        cancelText="Tôi đã nắm được cách sử dụng"
      >
        <p>giới thiệu về phần mềm....</p>
      </Modal>
    </>
  );
};

export default DashBoardContent;
