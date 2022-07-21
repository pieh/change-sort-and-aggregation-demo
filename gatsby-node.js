exports.sourceNodes = ({ actions }) => {
  console.log(`PID`, process.pid);
  const id = `lot-of-references-example`;

  function generateLotOfLinks(count) {
    const ret = {};

    for (let i = 0; i < count; i++) {
      const isArray = i % 2 === 0;

      ret[`link${i}___NODE`] = isArray ? [id] : id;
    }

    return ret;
  }

  function generateLotOfScalars(count) {
    const ret = {};

    for (let i = 0; i < count; i++) {
      const isArray = i % 2 === 0;

      ret[`scaler${i}`] = isArray ? [`test`] : `test`;
    }

    return ret;
  }

  actions.createNode({
    id,
    ...generateLotOfScalars(25),
    ...generateLotOfLinks(25),
    internal: {
      type: `Demo`,
      contentDigest: `test`,
    },
  });
};
