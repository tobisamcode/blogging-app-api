const updateOptionForSorting = (sortBy, options) => {
  if (sortBy === "timestamp") options.sort = { timestamp: -1 };
  else if (sortBy === "read-count") options.sort = { read_count: -1 };
  else options.sort = { reading_time: -1 };
};

module.exports = updateOptionForSorting;
