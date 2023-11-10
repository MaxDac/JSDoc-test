// @ts-check

import { something } from "./lib/some-file.js"
import { performLogin } from "./lib/login.js"

/**
 * Dumb (and wrong) function that calls another function with the wrong type.
 * @returns {number} - A number.
 */
const somethingElse = () => something(1)

/**
 * Another dumb function that calls the first one with the wrong parameter count.
 * @returns {number} - A number.
 */
const somethingWeird = () => something()

performLogin({
    email: "aaa@aa.com",
    password: "something"
})