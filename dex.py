from curl_cffi import requests # pip install curl_cffi

headers = {
    'authority': 'io.dexscreener.com',
    'accept': '*/*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'origin': 'https://dexscreener.com',
    'pragma': 'no-cache',
    'referer': 'https://dexscreener.com/',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
}

params = {
    'q': 'So11111111111111111111111111111111111111112',
    'c': '1',
}



response = requests.get(
    'https://io.dexscreener.com/dex/log/amm/v2/solamm/all/solana/A7MgeybYcTzWeWN2T5Ysaon9RgjEaCWvj6Ph3jvZ1fWz',
    params=params,
    headers=headers,
)

print(response.text)