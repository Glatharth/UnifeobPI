// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PersonAdd from "@material-ui/icons/PersonAdd";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import AccountBox from "@material-ui/icons/AccountBox";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Patients from "views/Patients/Patients.js";
import PatientCreate from "views/PatientCreate/PatientCreate.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Schedule from "views/Schedule/Schedule.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/patients",
    name: "Pacientes",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Patients,
    layout: "/admin"
  },
  {
    path: "/patientCreate",
    name: "Criar Paciente",
    rtlName: "ملف تعريفي للمستخدم",
    icon: PersonAdd,
    component: PatientCreate,
    layout: "/admin"
  },
  // {
  //   path: "/patientEdit",
  //   name: "Editar Paciente",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: PersonAdd,
  //   component: PatientEdit,
  //   layout: "/admin"
  // },
  {
    path: "/table",
    name: "Formularios",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Agenda",
    rtlName: "إخطارات",
    icon: Notifications,
    component: Schedule,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: AccountBox,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
