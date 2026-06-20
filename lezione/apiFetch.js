function apiFetch(url, options = {}) {
    const defaultOptions = {
        ...options,
        headers: {
            ...options.headers,
        }
    };

    return fetch(url, defaultOptions)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
            }
            const contentType = res.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                return res.json();
            }
            return res.text();
        });
}