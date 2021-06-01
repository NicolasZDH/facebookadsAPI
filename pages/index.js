function Home() {
    const client_id = process.env.FACEBOOK_CLIENT_ID;
    const redirect_uri = "https://auth.pivotdata.com.br/login";
    const response_type = 'code';
    const state = "{st=state123abc,ds=123456789}";

    const dialogbox = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${client_id}&display=popup&response_type=${response_type}&redirect_uri=${redirect_uri}&state=${state}`;

    return (<div>
        <a target="_blank" href={dialogbox} rel="noopener noreferrer">
            <button type="button">Login Facebook</button>
        </a>

    </div>)
}

export default Home

