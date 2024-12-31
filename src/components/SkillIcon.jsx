import { FaMicrochip, FaWifi, FaRobot } from 'react-icons/fa';

function SkillIcon({ skill }) {
  const icons = {
    C: <FaMicrochip size={20} className="text-primary" />,
    'C++': <FaRobot size={20} className="text-primary" />,
    Python: <FaWifi size={20} className="text-primary" />,
    'Embedded Systems': <FaMicrochip size={20} className="text-primary" />,
    'IoT Development': <FaWifi size={20} className="text-primary" />,
    Automation: <FaRobot size={20} className="text-primary" />,
    STM32: <FaMicrochip size={20} className="text-primary" />,
    ESP32: <FaWifi size={20} className="text-primary" />,
  };

  return <span>{icons[skill]}</span>;
}

export default SkillIcon;
