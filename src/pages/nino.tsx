
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { ListProductViews } from '@/components/ListProductViews'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title> Niños </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Container>
                    <ListProductViews
                        productViews={[
                            {
                                img: "/img/trakids/trakiniños1.jpg",
                                name: " Pack Bodies Waffle",
                                description: "Ajustable al crecimiento del bebe",
                                precio: 90000,
                                id: "b1"
                            },
                            {
                                img: "/img/trakids/trakiniños2.jpg",
                                name: "Traje de Baños",
                                description: " Tela unicolor",
                                precio: 300000,
                                id: "b2"
                            },
                            {
                                img: "/img/trakids/trakiniños3.jpg",
                                name: "Combinado julieta",
                                description: "Estampado de short y camisa ",
                                precio: 100000,
                                id: "b3"
                            },
                            {
                                img: "/img/trakids/trakiniños4.jpg",
                                name: "Conjunto Kids",
                                description: "Tela suave,fresca,estampado,",
                                precio: 120000,
                                id: "b4"
                            },
                            {
                                img: "/img/trakids/trakiniños6.jpg",
                                name: "Conjunto sueter-bermuda",
                                description: "Versatil,tela fresca",
                                precio: 13000,
                                id: "b6"
                            },
                            {
                                img: "/img/trakids/trakiniños7.jfif",
                                name: "Sueter Spiderman",
                                description: "Ideal para el frio",
                                precio: 50000,
                                id: "b7"
                            },
                            {
                                img: "/img/trakids/trakiniños8.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: "Tela fresca, estampada",
                                precio: 80000,
                                id: "b8"
                            },
                            {
                                img: "/img/trakids/trakiniños9.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: " Tela fresca, estampada",
                                precio: 80000,
                                id: "b9"
                            },
                            {
                                img: "/img/trakids/trakiniños10.jpg",
                                name: "Camisa Oxford",
                                description: "Camisa con cuello solapas y manga larga",
                                precio: 20000,
                                id: "b10"
                            },
                            {
                                img: "/img/trakids/krakiniños11.jpg",
                                name: "Conjunto Oxford",
                                description: "Combinacion basico y bermuda ",
                                precio: 180000,
                                id: "b11"
                            },
                            {
                                img: "/img/trakids/trakiniños12.jpg",
                                name: "Conjunto mode on",
                                description: " Combinacion basico y casuales",
                                precio: 150000,
                                id: "b12"
                            },
                            {
                                img: "/img/trakids/trakiniños13.jpg",
                                name: "Conjunto texto",
                                description: "Tela fresca,unicolor",
                                precio: 250000,
                                id: "b13"
                            },
                            {
                                img: "/img/trakids/trakiniños14.jpg",
                                name: "Conjunto Sprint",
                                description: "Outfit casual",
                                precio: 25000,
                                id: "b14"
                            },
                            {
                                img: "/img/trakids/trakiniños15.jpg",
                                name: "Camisa Nylon Bolsillo",
                                description: "Unicolor,versatiles",
                                precio: 20000,
                                id: "b15"
                            },
                            {
                                img: "/img/trakids/trakiniños1.jpg",
                                name: " Pack Bodies Waffle",
                                description: "Ajustable al crecimiento del bebe",
                                precio: 90000,
                                id: "b1"
                            },
                            {
                                img: "/img/trakids/trakiniños2.jpg",
                                name: "Traje de Baños",
                                description: " Tela unicolor",
                                precio: 300000,
                                id: "b2"
                            },
                            {
                                img: "/img/trakids/trakiniños3.jpg",
                                name: "Combinado julieta",
                                description: "Estampado de short y camisa ",
                                precio: 100000,
                                id: "b3"
                            },
                            {
                                img: "/img/trakids/trakiniños4.jpg",
                                name: "Conjunto Kids",
                                description: "Tela suave,fresca,estampado,",
                                precio: 120000,
                                id: "b4"
                            },
                            {
                                img: "/img/trakids/trakiniños6.jpg",
                                name: "Conjunto sueter-bermuda",
                                description: "Versatil,tela fresca",
                                precio: 13000,
                                id: "b6"
                            },
                            {
                                img: "/img/trakids/trakiniños7.jfif",
                                name: "Sueter Spiderman",
                                description: "Ideal para el frio",
                                precio: 50000,
                                id: "b7"
                            },
                            {
                                img: "/img/trakids/trakiniños8.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: "Tela fresca, estampada",
                                precio: 80000,
                                id: "b8"
                            },
                            {
                                img: "/img/trakids/trakiniños9.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: " Tela fresca, estampada",
                                precio: 80000,
                                id: "b9"
                            },
                            {
                                img: "/img/trakids/trakiniños10.jpg",
                                name: "Camisa Oxford",
                                description: "Camisa con cuello solapas y manga larga",
                                precio: 20000,
                                id: "b10"
                            },
                            {
                                img: "/img/trakids/krakiniños11.jpg",
                                name: "Conjunto Oxford",
                                description: "Combinacion basico y bermuda ",
                                precio: 180000,
                                id: "b11"
                            },
                            {
                                img: "/img/trakids/trakiniños12.jpg",
                                name: "Conjunto mode on",
                                description: " Combinacion basico y casuales",
                                precio: 150000,
                                id: "b12"
                            },
                            {
                                img: "/img/trakids/trakiniños13.jpg",
                                name: "Conjunto texto",
                                description: "Tela fresca,unicolor",
                                precio: 250000,
                                id: "b13"
                            },
                            {
                                img: "/img/trakids/trakiniños14.jpg",
                                name: "Conjunto Sprint",
                                description: "Outfit casual",
                                precio: 25000,
                                id: "b14"
                            },
                            {
                                img: "/img/trakids/trakiniños15.jpg",
                                name: "Camisa Nylon Bolsillo",
                                description: "Unicolor,versatiles",
                                precio: 20000,
                                id: "b15"
                            },
                            {
                                img: "/img/trakids/trakiniños1.jpg",
                                name: " Pack Bodies Waffle",
                                description: "Ajustable al crecimiento del bebe",
                                precio: 90000,
                                id: "b1"
                            },
                            {
                                img: "/img/trakids/trakiniños2.jpg",
                                name: "Traje de Baños",
                                description: " Tela unicolor",
                                precio: 300000,
                                id: "b2"
                            },
                            {
                                img: "/img/trakids/trakiniños3.jpg",
                                name: "Combinado julieta",
                                description: "Estampado de short y camisa ",
                                precio: 100000,
                                id: "b3"
                            },
                            {
                                img: "/img/trakids/trakiniños4.jpg",
                                name: "Conjunto Kids",
                                description: "Tela suave,fresca,estampado,",
                                precio: 120000,
                                id: "b4"
                            },
                            {
                                img: "/img/trakids/trakiniños6.jpg",
                                name: "Conjunto sueter-bermuda",
                                description: "Versatil,tela fresca",
                                precio: 13000,
                                id: "b6"
                            },
                            {
                                img: "/img/trakids/trakiniños7.jfif",
                                name: "Sueter Spiderman",
                                description: "Ideal para el frio",
                                precio: 50000,
                                id: "b7"
                            },
                            {
                                img: "/img/trakids/trakiniños8.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: "Tela fresca, estampada",
                                precio: 80000,
                                id: "b8"
                            },
                            {
                                img: "/img/trakids/trakiniños9.jpg",
                                name: "Camiseta Foil BARBIE",
                                description: " Tela fresca, estampada",
                                precio: 80000,
                                id: "b9"
                            },
                            {
                                img: "/img/trakids/trakiniños10.jpg",
                                name: "Camisa Oxford",
                                description: "Camisa con cuello solapas y manga larga",
                                precio: 20000,
                                id: "b10"
                            },
                            {
                                img: "/img/trakids/krakiniños11.jpg",
                                name: "Conjunto Oxford",
                                description: "Combinacion basico y bermuda ",
                                precio: 180000,
                                id: "b11"
                            },
                            {
                                img: "/img/trakids/trakiniños12.jpg",
                                name: "Conjunto mode on",
                                description: " Combinacion basico y casuales",
                                precio: 150000,
                                id: "b12"
                            },
                            {
                                img: "/img/trakids/trakiniños13.jpg",
                                name: "Conjunto texto",
                                description: "Tela fresca,unicolor",
                                precio: 250000,
                                id: "b13"
                            },
                            {
                                img: "/img/trakids/trakiniños14.jpg",
                                name: "Conjunto Sprint",
                                description: "Outfit casual",
                                precio: 25000,
                                id: "b14"
                            },
                            {
                                img: "/img/trakids/trakiniños15.jpg",
                                name: "Camisa Nylon Bolsillo",
                                description: "Unicolor,versatiles",
                                precio: 20000,
                                id: "b15"
                            },
                           
                           

                        ]}

                    />
                </Container>

            </Layout>

        </>
    )
}
