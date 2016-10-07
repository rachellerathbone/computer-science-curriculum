'use strict';

const { expect } = require('chai');
const depthFirst = require('../../src/trees/depth_first');
const Node = require('../../src/trees/node');

describe('depth first search', function() {
  describe('given a tree', function() {
    before(function() {
      this.a = new Node('A');
      const b = new Node('B');
      const c = new Node('C');
      const d = new Node('D');
      const e = new Node('E');

      b.addChild(d);
      b.addChild(e);

      this.a.addChild(b);
      this.a.addChild(c);
    })

    it('returns values ordered by depth first search, pre-order', function() {
      expect(depthFirst.preOrder(this.a)).to.deep.equal(
        ['A', 'B', 'D', 'E', 'C']
      );
    });

    it('returns values ordered by depth first search, in-order', function() {
      expect(depthFirst.inOrder(this.a)).to.deep.equal(
        ['D', 'B', 'E', 'A', 'C']
      );
    });

    it('returns values ordered by depth first search, post-order', function() {
      expect(depthFirst.postOrder(this.a)).to.deep.equal(
        ['D', 'E', 'B', 'C', 'A']
      );
    });
  });
});
