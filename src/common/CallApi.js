export async function callApi(url) {
    const token = localStorage.getItem('token')
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        // if (!response.ok) {
        //     // throw new (response.status)
        // }
        return await response.json()
    } catch (error) {
        console.error('API request failed:', error)
        throw error
    }
}



