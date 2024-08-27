import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user} header={<h1 className="title"> <b>PEARL  PARADISE</b></h1>} >
            <Head title="Dashboard" />

            <div className="conteiner">
                <div className="con"> </div>
                <div className="nav">
                    <nav className="navbar">
                        <Link href={route('about')} className="about" > <b> Что такое жемчуг, откуда берется и куда девается?</b> </Link>

                        <br></br>
                        <br></br>

                        <Link
                            href={route('history')}
                            className="history"
                        ><b>
                                Жемчуг на Руси</b>
                        </Link>
                        <br></br>
                        <br></br>
                        <Link
                            href={route('type')}
                            className="type"
                        ><b>
                                Невероятно красивые виды жемчуга</b>
                        </Link>
                        <br></br>
                        <br></br>

                        <Link
                            href={route('inshop')}
                            className="inshop"
                        ><b>
                                Наши предложения. Ювелирные изделия с жемчугом</b>
                        </Link>

                    </nav>
                </div>
                <div className="futer">
                    <h3 className='h4'>
                        <b> 350000, Россия, г. Краснодар, ул. Красивая, д,7 оф.71, 72,73
                            <br></br>
                            телефон: (861) 274-77-17(доб.17,27), 8-800-807-07-77,   Email: perl@gmail.com</b></h3>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
