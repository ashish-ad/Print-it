"use strict";
import globalConfig from "../Config/global.config.js";

const OrganizationService = globalConfig.OrganizationService;

class healthCheck{
  
  /**
   * This is the first method which produces health check status when called upon through middleware functions.
   * @param {null} _req 
   * @param {Object} res 
   */
  init0 = async (_req, res) => {
    let response = {};
    try {
      const data = `Ok Health Check`;
      response = {
        statusCode: 200,
        statusMessage: "Ok",
        data: data,
      };
    } catch (err) {
      response = {
        statusCode: err.statusCode,
        status: err.name,
        data: err.message,
      };
    }
    res.status(response.statusCode).json(response);
  }
  
  /**
   * This is second health check method which produces object of the organization the APIs belongs to.
   * @param {null} _req 
   * @param {Object} res 
   */
  init1 = async (_req, res) => {
    let response = {};
    try{
      const data = `Welcome to ${OrganizationService}'s APIs.`;
      response = {
        statusCode: 200,
        statusMessage: "Ok",
        data: data,
      };
      } catch (err) {
        response = {
          statusCode: err.statusCode,
          status: err.name,
          data: err.message,
        };
        throw err.message;
      }
      res.status(response.statusCode).json(response);
    }
}

export default new healthCheck();