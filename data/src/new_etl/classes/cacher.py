import os
from enum import Enum

import geopandas as gpd


class RunMode(Enum):
    NO_CACHE = "no cache"
    CACHE_SMALL = "cache small"
    FRESH_DATA = "fresh data"


class Cacher:
    def __init__(self, run_mode: RunMode):
        self.run_mode = run_mode

        current_dir = os.path.dirname(os.path.abspath(__file__))
        temp_dir = os.path.join(current_dir, "tmp")

        self.cache_dir = temp_dir

    def get_cache_file(self, name: str, mode: RunMode) -> str:
        filepath = os.path.join(self.cache_dir, name)
        return filepath

    def load_cache(self, name: str) -> gpd.GeoDataFrame:
        return gpd.read_file(self.get_cache_file(name))
