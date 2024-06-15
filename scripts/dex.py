# Curl cffi somehow doesnt trigger cloudflare protection, so thats why its used instead of reqeusts or httpx

from curl_cffi import requests

cookies = {
    '_ga': 'GA1.1.862199785.1717694499',
    'cf_clearance': 'URQoLET4BOtUomxLPXJGSZjNHWPVbGZIQDpT14oiZAg-1718466640-1.0.1.1-PVSbHxenqFQgwIQO6liOOLC0HxomMy6PcQe0bbmrm8hof.R20FlnwmPasd31RysG6LIM6FYvy2lspJwPSe2.6A',
    '__cflb': '0H28vzQ7jjUXq92cxrkXEKALtbS6AuECbgnpuJ8NjnV',
    '__cf_bm': 'eOh8CD0pFQsLivb4z6gkbS3Xfa74LdR0Xo8cOKNmfds-1718466679-1.0.1.1-XbWSEnlkJPFw0k9_KdeWF8tkA2nwlQPClkAMCrS0hzxycR24JeeAxgPEJxldyPD0qRlBJ1uFsiSnv8v4CO5Q.TlEza0KCJVMaTDX.KLFqDM',
    '_ga_532KFVB4WT': 'GS1.1.1718466640.7.1.1718466745.60.0.0',
}

headers = {
    'accept': '*/*',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'origin': 'https://dexscreener.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://dexscreener.com/',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
}

def search_pairs(token_or_address: str, output_file: str = 'pairs.bin'):
    params = {
        'q': token_or_address,
    }
    response = requests.get('https://io.dexscreener.com/dex/search/v5/pairs', params=params, cookies=cookies, headers=headers)

    # Write response to a bytes file
    with open(output_file, 'wb') as f:
        f.write(response.content)
    

def get_transaction_history(output_file: str = "logs.bin"):
    """ Gets transaction history for a given address, and writes it to a bytes file """

    params = {
        'abn': '20097763',
        'res': '15',
        'cb': '2',
        'q': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    }

    response = requests.get(
        'https://io.dexscreener.com/dex/chart/amm/v3/uniswap/bars/ethereum/0x3f645E37AB5e56cea43e3AE9A9ff92297C59e233',
        params=params,
        headers=headers,
    )

    # Write response to a bytes file
    with open(output_file, 'wb') as f:
        f.write(response.content)


if __name__ == "__main__":
    search_pairs('eaveai')
    get_transaction_history()
    