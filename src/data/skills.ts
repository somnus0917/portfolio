import type { ComponentType } from "react";
import {
  Activity,
  Binary,
  Camera,
  GitBranch,
  Gauge,
  GitMerge,
  LocateFixed,
  Network,
  Radar,
  Route,
  ScanLine,
  Sigma,
  Target,
  Terminal,
  Waves,
} from "lucide-react";

export type SkillCategory = "交通建模" | "机器人视觉" | "工程工具";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: ComponentType<{ className?: string }>;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "卡口数据处理",
    category: "交通建模",
    icon: Camera,
    description: "处理卡口摄像头数据，完成车辆识别、计数与多点交叉原始流量整理。",
  },
  {
    name: "路网流量建模",
    category: "交通建模",
    icon: Route,
    description: "构建基于容斥原理的线性方程组，实现路网流量整体一致性估计。",
  },
  {
    name: "MFD 态势分析",
    category: "交通建模",
    icon: Gauge,
    description: "对比 V-D 与 n-P 两类 MFD，验证序一致、结构一致与控制决策一致。",
  },
  {
    name: "最小二乘法",
    category: "交通建模",
    icon: Sigma,
    description: "用于路网流量观测模型求解，提升有限卡口条件下的估计稳定性。",
  },
  {
    name: "路网数据融合",
    category: "交通建模",
    icon: GitMerge,
    description: "面向坐标系差异和路段分割不一致问题，进行跨源路网匹配与属性传递。",
  },
  {
    name: "2D 激光雷达",
    category: "机器人视觉",
    icon: Radar,
    description: "初始化阶段扫描场地边界，通过直线拟合算法标定机器人全局初始位姿。",
  },
  {
    name: "Fast-LIO",
    category: "机器人视觉",
    icon: LocateFixed,
    description: "处理 Mid-360 的 3D 点云数据，实现连续、高精度的绝对位置追踪。",
  },
  {
    name: "Mid-360 点云",
    category: "机器人视觉",
    icon: Waves,
    description: "采集场地与目标点云，为定位、篮筐识别和坐标转换提供实时数据。",
  },
  {
    name: "PCL 点云库",
    category: "机器人视觉",
    icon: ScanLine,
    description: "分析实时点云，直接识别并解算篮筐在 Fast-LIO 坐标系下的相对位置。",
  },
  {
    name: "目标相对定位",
    category: "机器人视觉",
    icon: Target,
    description: "避免依赖预设篮筐坐标，适应场地搭建误差并按需转换全局坐标。",
  },
  {
    name: "Git 版本管理",
    category: "工程工具",
    icon: GitBranch,
    description: "管理项目代码、实验记录和协作变更，保持工程过程可追踪。",
  },
  {
    name: "Python 数据处理",
    category: "工程工具",
    icon: Binary,
    description: "用于交通数据清洗、实验计算、图表分析和算法验证脚本。",
  },
  {
    name: "ROS / RViz",
    category: "工程工具",
    icon: Terminal,
    description: "参与机器人联合调试，观察点云、坐标系和定位状态。",
  },
  {
    name: "UDP 通信",
    category: "工程工具",
    icon: Network,
    description: "机器人间实时共享全局坐标，支撑协同传球与对抗任务执行。",
  },
  {
    name: "实验评估",
    category: "工程工具",
    icon: Activity,
    description: "通过相关系数、关键参数、滞回面积和控制仿真验证模型有效性。",
  },
];
