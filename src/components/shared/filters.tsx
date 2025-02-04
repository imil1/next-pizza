import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title
                text="Фильтрация"
                size="sm"
                className="mb-5 font-bold"
            />
            {/* Верхние чекбоксы */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox
                    text="Можно собирать"
                    value="1"
                />
                <FilterCheckbox
                    text="Новинки"
                    value="2"
                />
            </div>
            {/* Фильтр цен */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={3000}
                    step={10}
                    value={[0, 3000]}
                />
            </div>
            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Томаты',
                        value: '3',
                    },
                    {
                        text: 'Красный лук',
                        value: '4',
                    },
                    {
                        text: 'Соленные огурчики',
                        value: '5',
                    },
                    {
                        text: 'что то соус',
                        value: '6',
                    },
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Томаты',
                        value: '3',
                    },
                    {
                        text: 'Красный лук',
                        value: '4',
                    },
                    {
                        text: 'Соленные огурчики',
                        value: '5',
                    },
                    {
                        text: 'что то соус',
                        value: '6',
                    },
                    {
                        text: 'показать',
                        value: '7',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Томаты',
                        value: '3',
                    },
                    {
                        text: 'Красный лук',
                        value: '4',
                    },
                    {
                        text: 'Соленные огурчики',
                        value: '5',
                    },
                    {
                        text: 'что то соус',
                        value: '6',
                    },
                    {
                        text: 'показать',
                        value: '7',
                    },
                ]}
            />
        </div>
    );
};
