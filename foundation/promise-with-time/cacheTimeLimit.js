var TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key) && Date.now() < this.cache.get(key).expiry;
    this.cache.set(key, { value, expiry: Date.now() + duration });
    return exists;
};

TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    const item = this.cache.get(key);
    if (Date.now() > item.expiry) {
        this.cache.delete(key);
        return -1;
    }
    return item.value;
};

TimeLimitedCache.prototype.count = function() {
    let count = 0;
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
        if (now <= item.expiry) count++;
        else this.cache.delete(key);
    }
    return count;
};