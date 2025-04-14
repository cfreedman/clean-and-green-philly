import os
from enum import Enum

from featurelayer import Loader


class RunMode(Enum):
    NO_CACHE = "no cache"
    CACHE_SMALL = "cache small"
    FRESH_DATA = "fresh data"


class Cacher:
    def __init__(self, run_mode: RunMode, cache_dir: str):
        self.run_mode = run_mode
        self.cache_dir = cache_dir

    def load_cached_file(self, filename: str):
        filepath = os.path.join(self.cache_dir, filename)
        if not os.path.exists(filepath):
            raise Exception("File does not exist in cache")

    def save_to_cache(self, data: Loader):
        filepath = os.path.join(self.cache_dir, data.altered_name)
        data.gdf.to_parquet(filepath)
