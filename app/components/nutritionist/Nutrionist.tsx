
import { NutritionistTarget} from "../interfaces";
import { SafeUser } from "../types";

interface NutritionistProps {
  currentUser: SafeUser | null;
  nutrionistTargets: NutritionistTarget[];
}

const Nutrionist: React.FC<NutritionistProps> = ({
  currentUser,
  nutrionist,
}) => {
  return (
    
  );
};

export default Nutrionist;
