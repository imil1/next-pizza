import {
    Container,
    Filters,
    ProductsGroupList,
    Title,
    TopBar,
} from '@/components/shared';

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title
                    text="Все пиццы"
                    size="lg"
                    className="font-extrabold"
                />
            </Container>
            <TopBar />

            <Container className="pb-14 mt-10">
                <div className="flex gap-[60px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl:
                                            'https://media.dodostatic.net/image/r:233x233/11EE7D6272AECAE781CA60DC3F81E505.avif',
                                        price: 345,
                                        items: [{ price: 345 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
