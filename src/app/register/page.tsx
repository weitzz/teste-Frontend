import Container from '@/components/container'
import Form from './form'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Register = async () => {
    const session = await getServerSession();
    if (session) {
        redirect('/');
    }

    return (

        <Container>
            <h2 className='flex items-center justify-center mt-4 text-lg text-slate-700'>Registar</h2>
            <Form />

        </Container>


    )
}

export default Register