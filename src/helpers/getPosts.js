const getPosts = async (page = 1, limit = 10) => {
    try {
        const API_KEY = '6171ab5ca5a267cf424fa283';
        const url = `https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`
        const response = await fetch(url, {
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'app-id':API_KEY
            }
        });
        const posts = await response.json();
        return posts;
    } catch (error) {
        if(error === 'TypeError: Network request failed') {
            alert('Error','No tienes conexión a internet');
            return 'error'
        } else {
            alert('Error','Ha ocurrido un error inesperado');
            return 'error'
        }
    }
}

export default getPosts;