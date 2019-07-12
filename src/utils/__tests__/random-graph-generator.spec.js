import randomGraphGenerator from '../random-graph-generator';

describe('util/random-graph-generator', () => {
  it('should generate graph with right params', () => {
    const graph = randomGraphGenerator(10, 20);
    expect(graph.nodes).toHaveLength(10);
    expect(graph.edges).toHaveLength(20);
  });
});
