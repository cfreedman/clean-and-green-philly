from enum import Enum


enum RunMode(Enum):
    NO_CACHE = "no cache"
    CACHE_SMALL = "cache small"
    FRESH_DATA = "fresh data"

class Cacher:
    def __init__(self):
        pass

    def get_cache_file(name: str, mode: RunMode) -> str:
        
