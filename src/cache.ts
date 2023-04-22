import NodeCache from 'node-cache';

export const cache = new NodeCache({ stdTTL: 10 }); // TTL to unlimited

const SIXTY_DAYS = 60 * 24 * 60 * 60;

export function checkKeyIfNotSetIt<T = any>(key: string, value?: T, ttl?: NodeCache.Options['stdTTL']): T | undefined {
  if (cache.has(key)) return cache.get(key)!;
  cache.set(key, value, ttl ?? SIXTY_DAYS);
  return value;
}
