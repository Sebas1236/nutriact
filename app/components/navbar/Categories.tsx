'use client';

import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { GiAbdominalArmor, GiLeg } from 'react-icons/gi'

export const categories = [
    {
        label: 'Pecho',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Pierna',
        icon: GiLeg,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Espalda',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Hombro',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Bíceps',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Tríceps',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
    {
        label: 'Cardio',
        icon: GiAbdominalArmor,
        description: 'Ejercicios para el pecho'
    },
]

const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
            >
                {
                    categories.map((item) => (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            selected={item.label === category}
                        />
                    ))}
            </div>
        </Container>
    );
};

export default Categories;