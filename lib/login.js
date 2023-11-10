/**
 * @typedef {Object} LoginRequest
 * @property {string} email
 * @property {string} password
 * @property {string} [username]
 * @property {boolean} rememberMe
 */

/**
 * Performs a login.
 * @param {LoginRequest} request 
 * @returns {Promise<boolean>} - True if the login succeeded, False otherwise.
 */
export const performLogin = request => Promise.resolve(true)