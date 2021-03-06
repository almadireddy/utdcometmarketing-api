'use strict';

/**
 * Designproject.js controller
 *
 * @description: A set of functions called "actions" for managing `Designproject`.
 */

module.exports = {

  /**
   * Retrieve designproject records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.designproject.search(ctx.query);
    } else {
      return strapi.services.designproject.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a designproject record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params.slug.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)) {
      return ctx.notFound();
    }

    return strapi.services.designproject.fetch(ctx.params);
  },

  /**
   * Count designproject records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.designproject.count(ctx.query);
  },

  /**
   * Create a/an designproject record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.designproject.add(ctx.request.body);
  },

  /**
   * Update a/an designproject record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.designproject.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an designproject record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.designproject.remove(ctx.params);
  }
};
