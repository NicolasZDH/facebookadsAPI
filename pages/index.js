import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/signin">
            <a>Login CopyNpaste</a>
        </Link>
    </div>)
}

export default Home;

