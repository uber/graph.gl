import {NODE_STATE} from './constants';

export default class InteractionManager {
  constructor(props, notifyCallback) {
    this.updateProps(props);
    this.notifyCallback = notifyCallback;

    // internal state
    this._lastInteraction = 0;
    this._lastHoveredNode = null;
  }

  updateProps({
    nodeEvents = {},
    edgeEvents = {},
    engine,
    enableDragging,
    resumeLayoutAfterDragging,
  }) {
    this.nodeEvents = nodeEvents;
    this.edgeEvents = edgeEvents;
    this.engine = engine;
    this.enableDragging = enableDragging;
    this.resumeLayoutAfterDragging = resumeLayoutAfterDragging;
  }

  getLastInteraction() {
    return this._lastInteraction;
  }

  onClick(info) {
    if (!info.object) {
      return;
    }

    if (info.object.isNode && this.nodeEvents.onClick) {
      this.nodeEvents.onClick(info);
    }
    if (info.object.isEdge && this.edgeEvents.onClick) {
      this.edgeEvents.onClick(info);
    }
  }

  _mouseLeaveNode() {
    // reset the last hovered node's state
    this._lastHoveredNode.object.setState(NODE_STATE.DEFAULT);
    // trigger the callback if exists
    if (this.nodeEvents.onMouseLeave) {
      this.nodeEvents.onMouseLeave(this._lastHoveredNode);
    }
  }

  _mouseEnterNode(info) {
    // set the node's state to hover
    info.object.setState(NODE_STATE.HOVER);
    // trigger the callback if exists
    if (this.nodeEvents.onMouseEnter) {
      this.nodeEvents.onMouseEnter(info);
    }
    if (this.nodeEvents.onHover) {
      this.nodeEvents.onHover(info);
    }
  }

  onHover(info) {
    if (!info.object) {
      if (this._lastHoveredNode) {
        this._mouseLeaveNode();
        this._lastInteraction = Date.now();
        this._lastHoveredNode = null;
        this.notifyCallback();
      }
      return;
    }

    // hover over on a node
    if (info.object.isNode) {
      const isSameNode =
        this._lastHoveredNode &&
        this._lastHoveredNode.object.id === info.object.id;
      // stay in the same node
      if (isSameNode) {
        return;
      }
      if (this._lastHoveredNode) {
        // reset the previous hovered node's state if not the same node
        this._mouseLeaveNode();
      }
      // enter new node
      this._mouseEnterNode(info);
      this._lastInteraction = Date.now();
      this._lastHoveredNode = info;
      this.notifyCallback();
    }
    if (info.object.isEdge && this.edgeEvents.onHover) {
      this.edgeEvents.onHover(info);
    }
  }

  onDragStart(info, event) {
    // Not used for now.
  }

  onDrag(info, event) {
    // only nodes are draggable
    if (!info.object.isNode || !this.enableDragging) {
      return;
    }
    event.stopImmediatePropagation();
    this.engine.lockNodePosition(
      info.object,
      info.coordinate[0],
      info.coordinate[1]
    );
    info.object.setState(NODE_STATE.DRAGGING);
    this._lastInteraction = Date.now();
    this.notifyCallback();
    if (this.nodeEvents.onDrag) {
      this.nodeEvents.onDrag(info);
    }
  }

  onDragEnd(info, event) {
    if (!info.object.isNode || !this.enableDragging) {
      return;
    }
    if (this.resumeLayoutAfterDragging) {
      this.engine.resume();
    }
    this.engine.unlockNodePosition(info.object);
  }
}
