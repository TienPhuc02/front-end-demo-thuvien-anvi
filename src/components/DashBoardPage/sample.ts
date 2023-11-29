interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
  subtasks?: Task[];
}
[];

export const DATA_FAKE_LOCAL: Task[] = [
  {
    id: 1,
    title: "Lập kế hoạch ngày",
    subtasks: [
      {
        id: 101,
        title: "Tạo danh sách công việc",
        completed: true,
      },
      {
        id: 102,
        title: "Ưu tiên công việc",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Thực hiện công việc",

    subtasks: [
      {
        id: 201,
        title: "Viết báo cáo",
        completed: false,
      },
      {
        id: 202,
        title: "Kiểm tra email",
        completed: true,
      },
    ],
  },
  {
    id: 3,
    title: "Kiểm tra kết quả",
    subtasks: [
      {
        id: 301,
        title: "So sánh với kế hoạch",
        completed: false,
      },
      {
        id: 302,
        title: "Tính toán hiệu suất",
        completed: true,
      },
    ],
  },
];

export const DATA_FAKE_SERVER: Task[] = [
  {
    id: 1,
    title: "Lập kế hoạch ngày",
    subtasks: [
      {
        id: 101,
        title: "Tạo danh sách mục tiêu",
        completed: true,
      },
      {
        id: 102,
        title: "Đặt ưu tiên mục tiêu",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "",
    subtasks: [
      {
        id: 201,
        title: "Học một kỹ năng mới",
        completed: false,
      },
      {
        id: 202,
        title: "Gym hoặc tập thể dục",
        completed: true,
      },
    ],
  },
  {
    id: 3,
    title: "Đánh giá kết quả",
    subtasks: [
      {
        id: 301,
        title: "Tổng hợp kết quả",
        completed: false,
      },
      {
        id: 302,
        title: "Lên kế hoạch cho ngày tiếp theo",
        completed: true,
      },
    ],
  },
];
