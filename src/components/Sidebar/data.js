import home from "../../assets/home.svg";
import dashBar from "../../assets/bar-chart-2.svg";
import users from "../../assets/users.svg";
import settings from "../../assets/settings.svg";
import support from "../../assets/life-buoy.svg";
import tasks from "../../assets/check-square.svg";
import projects from "../../assets/3-layers.svg";
import reports from "../../assets/flag.svg";

export const dashboardSideBarData = {
  topSection: [
    { item: "Home", imgSrc: home },
    { item: "Dashboard", imgSrc: dashBar, count: 10 },
    { item: "Projects", imgSrc: projects },
    { item: "Tasks", imgSrc: tasks },
    { item: "Reporting", imgSrc: reports },
    { item: "Users", imgSrc: users },
  ],
  bottomSection: [
    { item: "Support", imgSrc: support },
    { item: "Settings", imgSrc: settings },
  ],
};
