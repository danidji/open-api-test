import express from 'express';
import {
    processCreateUser,
    processReadAllUsers,
    processReadOneUser,
    processUpdateUser,
    processDeleteUser,
} from './controllers/user.controller';
import { validateUserFields } from './middlewares/validation.middleware';

const router = express.Router();

router.get('/users/', processReadAllUsers);
router.get('/users/:id', processReadOneUser);
router.post('/users/', validateUserFields, processCreateUser);
router.put('/users/:id', validateUserFields, processUpdateUser);
router.delete('/users/:id', processDeleteUser);


export default router;

/* eslint no-trailing-spaces: ["error", { "ignoreComments": true }] */
/**
* @openapi
*components:
*   schemas:
*       Users:
*           type: object
*           required:
*               - email
*               - name
*           properties:
*               id:
*                   type: string
*                   description: Auto-generated when user is created
*               email:
*                   type: string
*                   description: user email
*               name: 
*                   type: string
*               age :
*                   type : number
*/

/**
 * @openapi
 * tags: 
 *      name: Users
 *      description: The users could connect to the api
 */

/**
 * @openapi
 *  /api/users/ :
 *      get: 
 *          summary: Get list of all users
 *          tags: [Users]    
 *          responses: 
 *              200: 
 *                  description : List of all users
 *                  content:
 *                      application/json :
 *                          schema:
 *                              type: "array"
 *                              items:
 *                                  $ref: '#components/schemas/Users'
 *              500 : 
 *                  description : Server errors   
 */

/**
 * @openapi
 *  /api/users/{id} :
 *      get: 
 *          summary: Get one user by id
 *          tags: [Users]    
 *          parameters: 
 *              - in path: 
 *                name: id
 *                required: true
 *                type: string
 *                minimum: 1
 *                description: User ID  
 *          responses: 
 *              200: 
 *                  description : User
 *                  content:
 *                      application/json :
 *                          schema:
 *                              $ref: '#components/schemas/Users'
 *              500 : 
 *                  description : Server errors   
 *              404 : 
 *                  description : User id don't exist on database             
 */

/**
 * @openapi
 *  /api/users:
 *      post:
 *          summary: Create a new user 
 *          tags: [Users]
 *          requestBody: 
 *              required: true
 *              content:
 *                  application/json : 
 *                      schema:
 *                          $ref: '#components/schemas/Users'
 *          responses:
 *              201 :   
 *                  description : The user is added
 *                  content:
 *                      application/json :
 *                          schema:
 *                              $ref: '#components/schemas/Users'
 *              500 : 
 *                  description : Server errors
 */

/**
 * @openapi
 *  /api/users/{id}:
 *      put:
 *          summary: Update user 
 *          tags: [Users]
 *          parameters: 
 *              - in path: 
 *                name: id
 *                required: true
 *                type: string
 *                minimum: 1
 *                description: User ID         
 *          requestBody: 
 *              required: true
 *              content:
 *                  application/json : 
 *                      schema:
 *                          $ref: '#components/schemas/Users'
 *          responses:
 *              200 :   
 *                  description : Update user information
 *                  content:
 *                      application/json :
 *                          schema:
 *                              $ref: '#components/schemas/Users'
 *              404 : 
 *                  description : User id don't exist on database
 *              500 : 
 *                  description : Server errors
 *      
 * 
 */

/**
 * @openapi
 *  /api/users/{id} :
 *      delete: 
 *          summary: Delete user
 *          tags: [Users]    
 *          parameters:
 *              - name: userId
 *                description : User ID 
 *                in : "params"
 *                required: true
 *                type: "string"
 *          responses: 
 *              204: 
 *                  description: The user is delete
 *              500 : 
 *                  description : Server errors   
 *              404 : 
 *                  description : User id don't exist on database             
 */
