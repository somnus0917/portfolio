export type ProjectTag = "科研项目" | "学科竞赛" | "交通感知" | "机器人视觉";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tags: ProjectTag[];
  image: string;
  imageTone: string;
  outcomes: string[];
};

export const projectTags: Array<ProjectTag | "全部"> = [
  "全部",
  "科研项目",
  "学科竞赛",
  "交通感知",
  "机器人视觉",
];

export const projects: Project[] = [
  {
    title: "路网多尺度感知",
    subtitle: "国家级大学生创新创业项目",
    description:
      "面向城市多源交通数据，融合机理模型与数据驱动模型，构建实时交通态势感知方法，支撑路网流量一致性估计与 MFD 态势分析。",
    role:
      "作为项目负责人参与任务分配，负责卡口摄像头数据处理、车辆识别计数与路网流量模型构建。",
    tags: ["科研项目", "交通感知"],
    image: "/projects/traffic-network.png",
    imageTone: "from-sky-500/25 via-cyan-200/10 to-emerald-400/25",
    outcomes: [
      "两篇专利",
      "一篇论文已投稿",
      "一项专利进入实质审查",
      "MFD 控制仿真差异小于 3%",
    ],
  },
  {
    title: "Robocon 飞身上篮机器人",
    subtitle: "全国大学生机器人大赛国家二等奖",
    description:
      "围绕机器人篮球竞技任务，设计视觉定位与目标识别方案，实现机器人全局位姿追踪、篮筐相对位置感知与机器人间协同传球。",
    role:
      "作为视觉组核心成员参与机器人定位方案设计和联合调试，负责激光雷达、点云识别与坐标共享链路。",
    tags: ["学科竞赛", "机器人视觉"],
    image: "/projects/robocon-basketball.png",
    imageTone: "from-orange-400/25 via-rose-200/10 to-sky-400/25",
    outcomes: [
      "Robocon 国家二等奖",
      "2D 激光雷达直线拟合",
      "Fast-LIO + Mid-360 点云定位",
      "PCL 篮筐识别与 UDP 坐标共享",
    ],
  },
];
