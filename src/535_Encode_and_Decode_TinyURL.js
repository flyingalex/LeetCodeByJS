const urls = {};
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function(longUrl) {
    let uniqueKey = Date.now().toString(36);
    urls[uniqueKey] = longUrl;
    return "http://tinyurl.com/" + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function(shortUrl) {
    return urls[shortUrl.split("com/")[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */