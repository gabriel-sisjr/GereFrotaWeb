import { IconType } from 'react-icons';
import { AiFillCar } from 'react-icons/ai';
import { RiHome2Fill, RiToolsLine } from 'react-icons/ri';
import { BiBuildingHouse } from 'react-icons/bi';
import { FaRegIdCard } from 'react-icons/fa';

interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}
const LinkItemsList: Array<LinkItemProps> = [
  { name: 'Usar Veículos', icon: RiHome2Fill, route: '/home' },
  { name: 'Manutenção', icon: RiToolsLine, route: '/manutencoes' },
]
const LinkItemsRegistration: Array<LinkItemProps> = [
  { name: 'Veículos', icon: AiFillCar, route: '/veiculos' },
  { name: 'Condutores', icon: FaRegIdCard, route: '/condutores' },
  { name: 'Unidades', icon: BiBuildingHouse, route: '/unidades' },
]

export { LinkItemsList, LinkItemsRegistration };