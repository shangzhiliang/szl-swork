package com.szl.tools.cache.utils;

public interface JedisClient {

	 public String get(String key);
	 
	 public String set(String key, String value);
	 
	 public String hget(String hkey, String key);
	
	 public Long hset(String hkey, String key, String value);

	 public long incr(String key) ;

	 public long expire(String key, int seconds);

	 public long ttl(String key);
	 
	 public long del(String key);
	 
	 public long hdel(String hkey, String key);
}
