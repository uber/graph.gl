// Basic data structure of an edge
export default class Edge {
  /**
   * The constructor
   * @param  {String|Number} options.id - the unique ID of the edge
   * @param  {String|Number} options.sourceId - the ID of the source node
   * @param  {String|Number} options.targetId - the ID of the target node
   * @param  {Boolean} options.directed - whether the edge is directed or not
   * @param  {Any} options.data - origin data reference
   */
  constructor({id, sourceId, targetId, data, directed = false}) {
    // the unique uuid of the edge
    this.id = id;
    // the ID of the source node
    this._sourceId = sourceId;
    // the ID of the target node
    this._targetId = targetId;
    // whether the edge is directed or not
    this._directed = directed;
    // origin data reference of the edge
    this._data = data;
    // check the type of the object when picking engine gets it.
    this.isEdge = true;
  }

  /**
   * Return the ID of the edge
   * @return {String|Number} - the ID of the edge.
   */
  getId() {
    return this.id;
  }

  /**
   * Return whether the edge is directed or not.
   * @return {Boolean} true if the edge is directed.
   */
  isDirected() {
    return this._directed;
  }

  /**
   * Get the ID of the source node.
   * @return {String|Number} the ID of the source node.
   */
  getSourceNodeId() {
    return this._sourceId;
  }

  /**
   * Get the ID of the target node.
   * @return {String|Number} the ID of the target node.
   */
  getTargetNodeId() {
    return this._targetId;
  }

  /**
   * Return of the value of the selected property key.
   * @param  {String} key - property key.
   * @return {Any} - the value of the property.
   */
  getPropertyValue(key) {
    // try to search the key within this object
    if (this.hasOwnProperty(key)) {
      return this[key];
    }
    // try to search the key in the original data reference
    else if (this._data.hasOwnProperty(key)) {
      return this._data[key];
    }
    // otherwise, not found
    return undefined;
  }

  /**
   * Set the origin data as a reference.
   * @param {Any} data - the origin data.
   */
  setData(data) {
    this._data = data;
  }

  /**
   * Update a data property.
   * @param {String} key - the key of the property
   * @param {Any} value - the value of the property.
   */
  setDataProperty(key, value) {
    this._data[key] = value;
  }
}
