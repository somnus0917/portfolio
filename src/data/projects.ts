export type ProjectTag = "科研项目" | "学科竞赛" | "交通感知" | "机器人视觉";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tags: ProjectTag[];
  image: string;
  imageTone: string;
  outcomes: string[];
  detail: {
    overview: string;
    sections: Array<{
      title: string;
      body: string;
    }>;
    highlights: string[];
  };
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
    slug: "traffic-network-awareness",
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
    detail: {
      overview:
        "该项目面向城市级实时交通态势感知，尝试把传统交通机理模型与多源数据驱动方法结合起来，用有限卡口、道路拥堵指数和浮动车数据推断更完整的路网运行状态。",
      sections: [
        {
          title: "研究目标",
          body:
            "项目希望克服传统交通态势感知方法依赖单一数据源、局部观测不稳定的问题，构建一套基于城市多源大数据的实时交通态势感知理论与方法。",
        },
        {
          title: "负责工作",
          body:
            "我作为项目负责人参与任务分配，并重点负责卡口摄像头数据处理、车辆识别计数、原始流量数据整理，以及基于容斥原理的路网流量模型构建。",
        },
        {
          title: "方法与验证",
          body:
            "在流量观测部分，采用最小二乘法构建线性方程组，尝试用有限卡口数量估计小时级路网总流量；在 MFD 研究中，通过临界点归一化和单调变换验证 V-D 与 n-P 两类 MFD 的等价性。",
        },
      ],
      highlights: [
        "面向卡口监测波动性，追求长期稳定、一致的路网车流量观测值。",
        "用有限卡口数据进行以偏推全的小时级路网总流量估计。",
        "对成都路网数据进行序一致、结构一致与控制决策一致性验证。",
        "控制策略仿真中，两类 MFD 带来的运行效率差异小于 3%。",
      ],
    },
  },
  {
    slug: "robocon-basketball-robot",
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
    detail: {
      overview:
        "该项目来自全国大学生机器人大赛 Robocon“飞身上篮”机器人篮球竞技赛，任务是让机器人车完成投篮、运球、扣篮与对抗协作。我参与视觉定位方案设计和机器人联合调试。",
      sections: [
        {
          title: "比赛任务",
          body:
            "比赛要求设计两辆可以分别或同时完成投篮、运球、扣篮等功能的机器人车，在场地中完成对抗任务，对定位精度、目标感知和机器人协同提出了很高要求。",
        },
        {
          title: "绝对坐标感知",
          body:
            "初始化阶段使用 2D 激光雷达扫描场地边界，通过直线拟合算法解算场地直角特征，标定机器人全局初始位姿；运行阶段依赖 Fast-LIO 激光雷达里程计处理 Mid-360 的 3D 点云数据。",
        },
        {
          title: "目标相对定位与协同",
          body:
            "为适应场地搭建误差，方案不依赖预设篮筐绝对坐标，而是通过 PCL 分析实时点云，识别并解算篮筐在 Fast-LIO 坐标系下的相对位置；机器人间通过 UDP 网络实时共享全局坐标。",
        },
      ],
      highlights: [
        "作为视觉组核心成员参与定位方案设计和机器人联合调试。",
        "结合 2D 激光雷达直线拟合与 Fast-LIO，实现全局初始位姿标定和连续追踪。",
        "使用 PCL 从实时点云中识别篮筐相对位置，降低对场地预设坐标的依赖。",
        "通过 UDP 坐标共享支撑机器人间协同传球，最终获得 Robocon 国家二等奖。",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
