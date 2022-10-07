import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookIcon from '@mui/icons-material/Book';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 
export const navData = [
    {
        id: 0,
        icon: <PersonIcon className='icon-menu'/>,
        text: "Dados Pessoais",
        link: "/",
        icon1: <KeyboardArrowDownIcon />
        
    },
    {
        id: 1,
        icon: <SchoolIcon className='icon-menu'/>,
        text: "Atividades Acadê",
        link: "explore",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 2,
        icon: <SchoolIcon className='icon-menu'/>,
        text: "Vida Acadêmica",
        link: "statistics",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 3,
        icon: <DescriptionIcon className='icon-menu'/>,
        text: "Protocolos",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 4,
        icon: <AttachMoneyIcon className='icon-menu'/>,
        text: "Atividades Financ",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 5,
        icon: <AttachMoneyIcon className='icon-menu'/>,
        text: "Vida Financeira",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 6,
        icon: <BookIcon className='icon-menu'/>,
        text: "Biblioteca",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 7,
        icon: <PictureAsPdfIcon className='icon-menu'/>,
        text: "Declarações",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 8,
        icon: <LogoutIcon className='icon-menu'/>,
        text: "Importação",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 9,
        icon: <DescriptionIcon className='icon-menu'/>,
        text: "Avaliação Instituci",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
    {
        id: 9,
        icon: <DescriptionIcon className='icon-menu'/>,
        text: "Configuração",
        link: "settings",
        icon1: <KeyboardArrowDownIcon />
    },
]