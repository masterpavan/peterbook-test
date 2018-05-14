(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const admin = __webpack_require__(16);
exports.adminDB = admin.initializeApp(Object.assign({}, functions.config().firebase, { databaseAuthVariableOverride: 'admin' }));
exports.firestoreDB = exports.adminDB.firestore();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const socialError_1 = __webpack_require__(18);
exports.SocialError = socialError_1.SocialError;
const baseDomain_1 = __webpack_require__(19);
exports.BaseDomain = baseDomain_1.BaseDomain;
const feed_1 = __webpack_require__(20);
exports.Feed = feed_1.Feed;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Http status codes
 * Thanks to https://msdn.microsoft.com/en-us/library/ee434093.aspx
 */
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    HttpStatusCode[HttpStatusCode["Ambiguous"] = 300] = "Ambiguous";
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["Moved"] = 301] = "Moved";
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpStatusCode[HttpStatusCode["Redirect"] = 302] = "Redirect";
    HttpStatusCode[HttpStatusCode["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
    HttpStatusCode[HttpStatusCode["RedirectMethod"] = 303] = "RedirectMethod";
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCode[HttpStatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Verification {
    constructor(id, code, target, creationDate, remoteIpAddress, userId, isVerified = false) {
        this.id = id;
        this.code = code;
        this.target = target;
        this.creationDate = creationDate;
        this.remoteIpAddress = remoteIpAddress;
        this.userId = userId;
        this.isVerified = isVerified;
    }
}
exports.Verification = Verification;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const nodemailer = __webpack_require__(23);
// Set variable for this project
// firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
/**
 * Send email
 */
const sendEmail = (email) => {
    return new Promise((resolve, reject) => {
        const mailOptions = {
            from: email.from,
            to: email.to,
            subject: email.subject,
            html: email.html
        };
        mailTransport.sendMail(mailOptions)
            .then(() => {
            console.log(`New subscription confirmation email sent to: ${email.to}`);
            resolve();
        })
            .catch((error) => {
            console.error('There was an error while sending the email:', error);
            reject(error);
        });
    });
};
exports.emailAPI = {
    sendEmail
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(from, to, subject, html, text) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.html = html;
        this.text = text;
    }
}
exports.Email = Email;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Authorize
 */
var authorizeService_1 = __webpack_require__(15);
exports.onUserCreate = authorizeService_1.onUserCreate;
exports.auth = authorizeService_1.auth;
var publicAuthService_1 = __webpack_require__(22);
exports.publicAuth = publicAuthService_1.publicAuth;
/**
 * Users
 */
var userService_1 = __webpack_require__(24);
exports.users = userService_1.users;
exports.onUpdateUserInfo = userService_1.onUpdateUserInfo;
/**
 * Common
 */
var mailService_1 = __webpack_require__(25);
exports.onCreateFeedback = mailService_1.onCreateFeedback;
/**
 * Comments
 */
var commentService_1 = __webpack_require__(26);
exports.onAddComment = commentService_1.onAddComment;
exports.onDeleteComment = commentService_1.onDeleteComment;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const index_1 = __webpack_require__(1);
const circle_1 = __webpack_require__(17);
const moment = __webpack_require__(5);
const express = __webpack_require__(3);
const bodyParser = __webpack_require__(6);
const index_2 = __webpack_require__(2);
const verification_1 = __webpack_require__(7);
const httpStatusCode_1 = __webpack_require__(4);
const plivo = __webpack_require__(21);
const request = __webpack_require__(8);
const cookieParser = __webpack_require__(9)();
const bcrypt = __webpack_require__(10);
const saltRounds = 10;
const appName = functions.config().setting.appname;
/**
 * Handle on user create
 */
exports.onUserCreate = functions.auth.user().onCreate((event) => {
    return new Promise((resolve, reject) => {
        const user = event.data;
        const followingCircle = new circle_1.Circle();
        followingCircle.creationDate = moment().unix();
        followingCircle.name = `Following`;
        followingCircle.ownerId = user.uid;
        followingCircle.isSystem = true;
        return index_1.firestoreDB.collection(`users`).doc(user.uid).collection(`circles`).add(Object.assign({}, followingCircle))
            .then((result) => {
            resolve();
        }).catch(reject);
    });
});
// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const validateFirebaseIdToken = (req, res, next) => {
    console.log('Check if request is authorized with Firebase ID token');
    if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
        !req.cookies.__session) {
        console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.', 'Make sure you authorize your request by providing the following HTTP header:', 'Authorization: Bearer <Firebase ID Token>', 'or by passing a "__session" cookie.');
        res.status(httpStatusCode_1.HttpStatusCode.Forbidden).send(new index_2.SocialError("ServerError/Unauthorized", "User is Unauthorized!"));
        return;
    }
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        console.log('Found "Authorization" header');
        // Read the ID Token from the Authorization header.
        idToken = req.headers.authorization.split('Bearer ')[1];
    }
    else {
        console.log('Found "__session" cookie');
        // Read the ID Token from cookie.
        idToken = req.cookies.__session;
    }
    index_1.adminDB.auth().verifyIdToken(idToken).then((decodedIdToken) => {
        console.log('ID Token correctly decoded', decodedIdToken);
        req.user = decodedIdToken;
        return next();
    }).catch((error) => {
        console.error('Error while verifying Firebase ID token:', error);
        res.status(httpStatusCode_1.HttpStatusCode.Forbidden).send(new index_2.SocialError("ServerError/Unauthorized", "User is Unauthorized!"));
    });
};
const app = express();
const cors = __webpack_require__(11)({ origin: true });
app.disable("x-powered-by");
app.use(cors);
app.use(bodyParser.json());
app.use(cookieParser);
app.use(validateFirebaseIdToken);
app.post('/api/sms-verification', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const gReCaptcha = req.body['g-recaptcha-response'];
    const code = Math.floor(1000 + Math.random() * 9000);
    const sourcePhoneNumber = '+111111';
    const targetPhoneNumber = req.body['phoneNumber'];
    const phoneMessage = `Verification code from ${appName} : <CODE>`;
    const secretKey = functions.config().recaptcha.secretkey;
    const userId = req.user.uid;
    if (gReCaptcha === undefined || gReCaptcha === '' || gReCaptcha === null) {
        return res.json(new index_2.SocialError("ServerError/NullCaptchaValue", "Please select captcha first"));
    }
    const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + gReCaptcha + "&remoteip=" + remoteIpAddress;
    request(verificationURL, (error, response, body) => {
        body = JSON.parse(body);
        if (body.success !== undefined && !body.success) {
            console.log('Captha/responseError', error);
            console.log('Captha/responseError', response);
            console.log('Captha/responseError', body);
            res.status(httpStatusCode_1.HttpStatusCode.BadRequest).json(new index_2.SocialError("ServerError/ResponseCaptchaError", "Failed captcha verification"));
        }
        console.log('Captha/responseSuccess');
        const client = new plivo.Client(functions.config().plivo.authid, functions.config().plivo.authtoken);
        client.messages.create(sourcePhoneNumber, targetPhoneNumber, phoneMessage.replace('<CODE>', String(code)))
            .then(function (message_created) {
            const verifyRef = index_1.firestoreDB.collection('verification').doc(userId).collection('phone')
                .doc();
            const phoneVerification = new verification_1.Verification(verifyRef.id, String(code), targetPhoneNumber, moment().unix(), remoteIpAddress, userId);
            verifyRef.set(Object.assign({}, phoneVerification));
            return res.status(httpStatusCode_1.HttpStatusCode.OK).json({ "verifyId": verifyRef.id });
        });
    });
}));
/**
 * Verify phone code
 */
app.post('/api/verify-phone', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const code = req.body['code'];
    const verifyId = req.body['verifyId'];
    const targetPhoneNumber = req.body['phoneNumber'];
    const userId = req.user.uid;
    const verifyRef = index_1.firestoreDB
        .collection('verification')
        .doc(userId)
        .collection('phone')
        .doc(verifyId);
    return verifyRef.get().then((result) => {
        const phoneVerification = result.data();
        console.log(phoneVerification, req.body, !phoneVerification.isVerified, remoteIpAddress === phoneVerification.remoteIpAddress, targetPhoneNumber === phoneVerification.target, userId === phoneVerification.userId);
        if (!phoneVerification.isVerified
            && remoteIpAddress === phoneVerification.remoteIpAddress
            && targetPhoneNumber === phoneVerification.target
            && userId === phoneVerification.userId) {
            if (Number(phoneVerification.code) === Number(code)) {
                const batch = index_1.firestoreDB.batch();
                batch.update(result.ref, { isVerified: true });
                const protectedUserRef = index_1.firestoreDB
                    .collection('protectedUser')
                    .doc(userId);
                batch.update(protectedUserRef, { phoneVerified: true });
                batch.commit().then(() => {
                    console.log('ServerSuccess/CodeAccepted', 'CodeAccepted');
                    const additionalClaims = {
                        phoneVerified: true
                    };
                    index_1.adminDB.auth().createCustomToken(userId, additionalClaims)
                        .then(function (token) {
                        // Send token back to client
                        return res.status(httpStatusCode_1.HttpStatusCode.OK).json({ token });
                    })
                        .catch(function (error) {
                        console.log("Error creating custom token:", error);
                    });
                })
                    .catch((error) => {
                    console.log('ServerError/CanUpdateState', error);
                    res.json(new index_2.SocialError("ServerError/CanUpdateState", "Can not update user state!"));
                });
            }
            else {
                res.status(httpStatusCode_1.HttpStatusCode.Forbidden).json(new index_2.SocialError("ServerError/WrongCode", "The code is not correct!"));
            }
        }
        else {
            res.status(httpStatusCode_1.HttpStatusCode.Forbidden).send(new index_2.SocialError("ServerError/Unauthorized", "User is Unauthorized!"));
        }
    })
        .catch((error) => {
        console.log('ServerError/VerifyIdNotAccept', error);
        return res.json(new index_2.SocialError("ServerError/VerifyIdNotAccept", "We coudn't for you verification!"));
    });
}));
/**
 * Register user
 */
app.post('/api/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const userName = req.body['userName'];
    const password = req.body['password'];
    const email = req.body['email'];
    const fullName = req.body['fullName'];
    const avatar = req.body['avatar'];
    const userId = req.user.uid;
    index_1.firestoreDB.doc(`userInfo/${userId}`).set({
        id: userId,
        state: 'active',
        avatar,
        fullName,
        creationDate: moment().unix(),
        email
    }).then(() => {
        bcrypt.hash(password, saltRounds, function (error, hash) {
            // Store hash in your password DB.
            index_1.firestoreDB.collection('protectedUser').doc(userId)
                .set({
                userName: userName,
                password: hash,
                phoneVerified: false
            }).then(() => {
                return res.status(httpStatusCode_1.HttpStatusCode.OK).json({});
            }).catch((error) => {
                res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError("ServerError/NotStoreProtectedUser", "Can not store protected user!"));
            });
        });
    }).catch((error) => {
        res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError("ServerError/NotStoreUserInfo", "Can not store user info!"));
    });
}));
/**
 * Register user
 */
app.post('/api/update-password', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const newPassword = req.body['newPassword'];
    const confirmPassword = req.body['confirmPassword'];
    const userId = req.user.uid;
    console.log('userID: ', userId);
    if ((newPassword && confirmPassword)
        && (newPassword.trim() !== '' && confirmPassword.trim() !== '')
        && (confirmPassword === newPassword)) {
        index_1.adminDB.auth().updateUser(userId, {
            password: newPassword
        }).then((updateResult) => {
            bcrypt.hash(newPassword, saltRounds, function (error, hash) {
                // Store hash in your password DB.
                index_1.firestoreDB.collection('protectedUser').doc(userId)
                    .update({
                    password: hash,
                }).then(() => {
                    return res.status(httpStatusCode_1.HttpStatusCode.OK).json({});
                }).catch((error) => {
                    console.log('ServerError/NotStoreProtectedUser', error);
                    res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError("ServerError/NotStoreProtectedUser", "Can not store protected user!"));
                });
            });
        })
            .catch((error) => {
            console.log('UpdateUser/Password', error);
            res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError("ServerError/ErrorUpdateUser", "Can not update user!"));
        });
    }
    else {
        res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError("ServerError/NotEqualConfirmNewPassword", "Confirm password and new password are not equal!"));
    }
}));
/**
 * Phone verification
 */
exports.auth = functions.https.onRequest(app);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(2);
class Circle extends common_1.BaseDomain {
}
exports.Circle = Circle;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SocialError extends Error {
    constructor(_code, _message) {
        super(_message);
        this._code = _code;
        this._message = _message;
        this._isError = true;
    }
    /**
     * Error code
     *
     * @type {string}
     * @memberof SocialError
     */
    get code() {
        return this._code;
    }
    /**
     * Error message
     *
     * @type {string}
     * @memberof SocialError
     */
    get message() {
        return this._message;
    }
    /**
     * If is error {true} if not {false}
     *
     * @type {Boolean}
     * @memberof SocialError
     */
    get isError() {
        return this._isError;
    }
}
exports.SocialError = SocialError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseDomain {
}
exports.BaseDomain = BaseDomain;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Feed {
    /**
     * Constructor
     */
    constructor(
    /**
     * Feed identifier
     */
    id, 
    /**
     * Feed text
     */
    text, 
    /**
     * Feed type
     */
    feedType, 
    /**
     * The user who send the feedback
     */
    user) {
        this.id = id;
        this.text = text;
        this.feedType = feedType;
        this.user = user;
    }
}
exports.Feed = Feed;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("plivo");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const index_1 = __webpack_require__(1);
const moment = __webpack_require__(5);
const express = __webpack_require__(3);
const bodyParser = __webpack_require__(6);
const index_2 = __webpack_require__(2);
const verification_1 = __webpack_require__(7);
const emailAPI_1 = __webpack_require__(12);
const email_1 = __webpack_require__(13);
const httpStatusCode_1 = __webpack_require__(4);
const bcrypt = __webpack_require__(10);
const request = __webpack_require__(8);
const cookieParser = __webpack_require__(9)();
const app = express();
const cors = __webpack_require__(11)({ origin: true });
app.disable('x-powered-by');
app.use(cors);
app.use(bodyParser.json());
app.use(cookieParser);
const gmailEmail = functions.config().gmail.email;
const appName = functions.config().setting.appname;
/**
 * Login user API
 */
app.post('/api/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const userName = req.body['userName'];
    const password = req.body['password'];
    console.log(userName, password);
    index_1.firestoreDB.collection('protectedUser').where('userName', '==', userName)
        .get().then((result) => {
        console.log('result', result.size, result.empty);
        if (result && !result.empty && result.size === 1) {
            const doc = result.docs[0];
            console.log(doc);
            const data = doc.data();
            console.log('data = ', data);
            bcrypt.compare(password, data.password, (error, isSame) => {
                if (isSame === true) {
                    const additionalClaims = {
                        phoneVerified: data.phoneVerified,
                        userName: data.userName
                    };
                    index_1.adminDB.auth().createCustomToken(doc.id, additionalClaims)
                        .then((token) => {
                        // Send token back to client
                        return res.status(httpStatusCode_1.HttpStatusCode.OK).json({ token });
                    })
                        .catch((error) => {
                        console.log('Error creating custom token:', error);
                        return res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError('ServerError/CreateToke', 'Error on creating token!'));
                    });
                }
                else {
                    return res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError('ServerError/WrongPassword', 'Password is wrong!'));
                }
            });
        }
        else {
            return res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError('ServerError/WrongUserName', 'User name is wrong!'));
        }
    })
        .catch((error) => {
        return res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).send(new index_2.SocialError('ServerError/FirestoreGetData', error));
    });
}));
/**
 * Verify phone code
 */
app.post('/api/verify-email', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const code = req.body['code'];
    const verifyId = req.body['verifyId'];
    const targetEmail = req.body['email'];
    index_1.firestoreDB.collection('userInfo').where('email', '==', targetEmail)
        .get().then((userInfo) => {
        console.log('userInfo', userInfo.size, userInfo.empty);
        if (userInfo && !userInfo.empty && userInfo.size === 1) {
            const doc = userInfo.docs[0];
            const userId = doc.id;
            console.log(doc);
            const data = doc.data();
            console.log('data = ', data);
            const verifyRef = index_1.firestoreDB
                .collection('verification')
                .doc(userId)
                .collection('resetPassword')
                .doc(verifyId);
            return verifyRef.get().then((result) => {
                const verification = result.data();
                console.log(verification, req.body, !verification.isVerified, remoteIpAddress === verification.remoteIpAddress, targetEmail === verification.target, userId === verification.userId);
                if (!verification.isVerified
                    && remoteIpAddress === verification.remoteIpAddress
                    && targetEmail === verification.target
                    && userId === verification.userId) {
                    if (Number(verification.code) === Number(code)) {
                        index_1.firestoreDB.collection('protectedUser').doc(userId)
                            .get().then((protectedUserResult) => {
                            let phoneVerified = false;
                            if (protectedUserResult.exists && protectedUserResult.data().phoneVerified) {
                                phoneVerified = true;
                            }
                            console.log('ServerSuccess/CodeAccepted', 'CodeAccepted', phoneVerified);
                            const additionalClaims = {
                                phoneVerified: phoneVerified,
                                userName: data.email,
                                resetPasswordVerified: true
                            };
                            index_1.adminDB.auth().createCustomToken(userId, additionalClaims)
                                .then((token) => {
                                // Send token back to client
                                return res.status(httpStatusCode_1.HttpStatusCode.OK).json({ token });
                            })
                                .catch((error) => {
                                console.log('Error creating custom token:', error);
                                res.status(httpStatusCode_1.HttpStatusCode.InternalServerError).json(new index_2.SocialError('ServerError/CreateCustomToken', 'Create custom token error!'));
                            });
                        });
                    }
                    else {
                        res.status(httpStatusCode_1.HttpStatusCode.Forbidden).json(new index_2.SocialError('ServerError/WrongCode', 'The code is not correct!'));
                    }
                }
                else {
                    res.status(httpStatusCode_1.HttpStatusCode.Forbidden).send(new index_2.SocialError('ServerError/Unauthorized', 'User is Unauthorized!'));
                }
            })
                .catch((error) => {
                console.log('ServerError/VerifyIdNotAccept', error);
                return res.json(new index_2.SocialError('ServerError/VerifyIdNotAccept', "We coudn't for you verification!"));
            });
        }
        else {
            res.status(httpStatusCode_1.HttpStatusCode.NotFound).send(new index_2.SocialError('ServerError/EmailNotFound', 'Email not found!'));
        }
    })
        .catch((error) => {
        res.status(httpStatusCode_1.HttpStatusCode.NotFound).send(new index_2.SocialError('ServerError/EmailNotFound', 'Email not found!'));
    });
}));
/**
 * Reset password API
 */
app.post('/api/email-verification-code', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const remoteIpAddress = req.connection.remoteAddress;
    const gReCaptcha = req.body['g-recaptcha-response'];
    const code = Math.floor(1000 + Math.random() * 9000);
    const targetEmail = req.body['email'];
    const secretKey = functions.config().recaptcha.secretkey;
    const from = `${appName} Reset Password <${gmailEmail}>`;
    const to = targetEmail;
    const subject = `Reset your password for ${appName}`;
    index_1.firestoreDB.collection('userInfo').where('email', '==', targetEmail)
        .get().then((userInfoList) => {
        if (userInfoList.size === 1) {
            const user = userInfoList.docs[0].data();
            const userId = userInfoList.docs[0].id;
            const html = `
                <html xmlns="http://www.w3.org/1999/xhtml">

                <body>
                <div>
                    <h4>Hello ${user.fullName},</h4>

                    <p>Enter verification code in your reset password page to reset your ${appName} password for your ${targetEmail} account.</p>

                    <h3>Verification Code: ${code}</h3>

                    <p>If you didn’t ask to reset your password, you can ignore this email.</p>

                    <h4>Thanks,</h4>

                    <h4>Your ${appName} team</h4>
                </div>
                </body>
                </html>
                        `;
            if (gReCaptcha === undefined || gReCaptcha === '' || gReCaptcha === null) {
                return res.json(new index_2.SocialError('ServerError/NullCaptchaValue', 'Please select captcha first'));
            }
            const verificationURL = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretKey + '&response=' + gReCaptcha + '&remoteip=' + remoteIpAddress;
            request(verificationURL, (error, response, body) => {
                body = JSON.parse(body);
                if (body.success !== undefined && !body.success) {
                    console.log('Captha/responseError', error);
                    return res.json(new index_2.SocialError('ServerError/ResponseCaptchaError', 'Failed captcha verification'));
                }
                console.log('Captha/responseSuccess');
                emailAPI_1.emailAPI.sendEmail(new email_1.Email(from, to, subject, html)).then(function (messageCreated) {
                    const verifyRef = index_1.firestoreDB.collection('verification').doc(userId).collection('resetPassword')
                        .doc();
                    const resetPasswordVerification = new verification_1.Verification(verifyRef.id, String(code), targetEmail, moment().unix(), remoteIpAddress, userId);
                    verifyRef.set(Object.assign({}, resetPasswordVerification));
                    return res.status(httpStatusCode_1.HttpStatusCode.OK).json({ 'verifyId': verifyRef.id });
                }).catch((error) => {
                    res.status(httpStatusCode_1.HttpStatusCode.ServiceUnavailable).send(new index_2.SocialError('ServerError/EmailNotSent', 'Email service error. Email has not sent!'));
                });
            });
        }
        else {
            res.status(httpStatusCode_1.HttpStatusCode.NotFound).send(new index_2.SocialError('ServerError/EmailNotFound', 'Email not found!'));
        }
    })
        .catch((error) => {
        res.status(httpStatusCode_1.HttpStatusCode.NotFound).send(new index_2.SocialError('ServerError/EmailNotFound', 'With DB error. Email not found!'));
    });
}));
/**
 * Phone verification
 */
exports.publicAuth = functions.https.onRequest(app);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const index_1 = __webpack_require__(1);
const express = __webpack_require__(3);
const httpStatusCode_1 = __webpack_require__(4);
const index_2 = __webpack_require__(2);
const app = express();
app.disable("x-powered-by");
/**
 * Get users by user identifier list
 * @param userIdList A list of user key
 */
const getUserByListId = (userIdList) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        let users = {};
        if (userIdList && userIdList.length > 0) {
            userIdList.forEach((userId) => {
                index_1.firestoreDB.collection('userInfo').doc(userId).get().then((result) => {
                    let user = result.data();
                    users = Object.assign({}, users, { [userId]: Object.assign({}, user) });
                }).catch(reject);
            });
            resolve(users);
        }
    });
});
/**
 * Get users by  http trigget
 * Route ['users/']
 * Method [POST]
 */
app.post('/', (request, response) => __awaiter(this, void 0, void 0, function* () {
    const userIdList = JSON.parse(request.body);
    if (userIdList && Array.isArray(userIdList) && userIdList.length > 0) {
        getUserByListId(userIdList)
            .then((users) => {
            response.status(httpStatusCode_1.HttpStatusCode.OK).send(users);
        });
    }
    else {
        // Send baack bad request happened
        return response.status(httpStatusCode_1.HttpStatusCode.BadRequest)
            .send(new index_2.SocialError('UserService/UserIdListNotValid', `
        User list is undefined or not array or the length of array is not grater than zero!
        ${JSON.stringify(userIdList)}
        `));
    }
}));
/**
 * Routing posts
 */
exports.users = functions.https.onRequest(app);
/**
 * Handle on update user information
 */
exports.onUpdateUserInfo = functions.firestore.document('userInfo/{userId}')
    .onUpdate((event) => {
    return new Promise((resolve, reject) => {
        const userId = event.params.userId;
        const previousUserInfo = event.data.previous.data();
        const userInfo = event.data.data();
        if (previousUserInfo.avatar === userInfo.avatar && previousUserInfo.fullName === userInfo.fullName) {
            resolve();
        }
        else {
            const postsRef = index_1.firestoreDB.collection('posts').where('ownerUserId', '==', userId);
            const commentsRef = index_1.firestoreDB.collection('comments').where('userId', '==', userId);
            const leftUserTieRef = index_1.firestoreDB.collection('graphs:users').where('leftNode', '==', userId);
            const rightUserTieRef = index_1.firestoreDB.collection('graphs:users').where('rightNode', '==', userId);
            // Get a new write batch
            var batch = index_1.firestoreDB.batch();
            postsRef.get().then((posts) => {
                commentsRef.get().then((comments) => {
                    leftUserTieRef.get().then((leftTies) => {
                        rightUserTieRef.get().then((rightTies) => {
                            // Set update batch for posts
                            posts.forEach((post) => {
                                const updatedPost = post.data();
                                updatedPost.ownerAvatar = userInfo.avatar;
                                updatedPost.ownerDisplayName = userInfo.fullName;
                                batch.update(post.ref, updatedPost);
                            });
                            // Set update batch for comments
                            comments.forEach((comment) => {
                                const updatedComment = comment.data();
                                updatedComment.userDisplayName = userInfo.avatar;
                                updatedComment.userDisplayName = userInfo.fullName;
                                batch.update(comment.ref, updatedComment);
                            });
                            // Set update batch for leftTies
                            leftTies.forEach((leftTie) => {
                                const updatedGraph = leftTie.data();
                                const updatedLeftTie = updatedGraph.LeftMetadata;
                                updatedLeftTie.avatar = userInfo.avatar;
                                updatedLeftTie.fullName = userInfo.fullName;
                                updatedGraph.LeftMetadata = updatedLeftTie;
                                batch.update(leftTie.ref, updatedGraph);
                            });
                            // Set update batch for rightTies
                            rightTies.forEach((rightTie) => {
                                const updatedGraph = rightTie.data();
                                const updatedRightTie = updatedGraph.rightMetadata;
                                updatedRightTie.avatar = userInfo.avatar;
                                updatedRightTie.fullName = userInfo.fullName;
                                updatedGraph.rightMetadata = updatedRightTie;
                                batch.update(rightTie.ref, updatedGraph);
                            });
                            batch.commit().then(() => {
                                resolve();
                            })
                                .catch(reject);
                        });
                    });
                });
            });
        }
    });
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const emailAPI_1 = __webpack_require__(12);
const email_1 = __webpack_require__(13);
const gmailEmail = functions.config().gmail.email;
const appName = functions.config().setting.appname;
exports.onCreateFeedback = functions.firestore
    .document(`feeds/{feedId}`)
    .onCreate((event) => {
    return new Promise((resolve, reject) => {
        const feed = event.data.data();
        const from = `${appName} Feedback <${gmailEmail}>`;
        const to = "amir.gholzam@gmail.com";
        const subject = `${feed.feedType} -${feed.user.email} - ${event.data.createTime}`;
        const text = `
    Feedback type: ${feed.feedType}
    Feedback ID: ${feed.id}
  
    User Email: ${feed.user.email}
    User Fullname: ${feed.user.fullName}
    User ID: ${feed.user.userId}
  
    Feedback: ${feed.text}
    `;
        /**
         * Send email
         */
        emailAPI_1.emailAPI.sendEmail(new email_1.Email(from, to, subject, text)).then(() => {
            resolve();
        }).catch((error) => {
            reject();
        });
    });
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const index_1 = __webpack_require__(1);
const _ = __webpack_require__(27);
/**
 * Add comment
 */
exports.onAddComment = functions.firestore
    .document(`comments/{commentId}`)
    .onCreate(event => {
    var newValue = event.data.data();
    const commentId = event.params.commentId;
    if (newValue) {
        const postRef = index_1.firestoreDB.doc(`posts/${newValue.postId}`);
        // Get post
        var postId = newValue.postId;
        /**
         * Increase comment counter and create three comments' slide preview
         */
        return index_1.firestoreDB.runTransaction((transaction) => {
            return transaction.get(postRef).then((postDoc) => {
                if (postDoc.exists) {
                    const postData = postDoc.data();
                    const commentCount = postData.commentCounter + 1;
                    transaction.update(postRef, { commentCounter: commentCount });
                    let comments = postData.comments;
                    if (!comments) {
                        comments = {};
                    }
                    if (commentCount < 4) {
                        transaction.update(postRef, { comments: Object.assign({}, comments, { [commentId]: newValue }) });
                    }
                    else {
                        let sortedObjects = Object.assign({}, comments, { [commentId]: newValue });
                        // Sort posts with creation date
                        sortedObjects = _.fromPairs(_.toPairs(sortedObjects)
                            .sort((a, b) => parseInt(b[1].creationDate, 10) - parseInt(a[1].creationDate, 10)).slice(0, 3));
                        transaction.update(postRef, { comments: Object.assign({}, sortedObjects) });
                    }
                }
            });
        });
    }
});
/**
 * Delete comment
 */
exports.onDeleteComment = functions.firestore
    .document(`comments/{commentId}`)
    .onDelete(event => {
    return new Promise((resolve, reject) => {
        const deletedComment = event.data.previous.data();
        const commentId = event.params.commentId;
        const postId = deletedComment.postId;
        const postRef = index_1.firestoreDB.doc(`posts/${postId}`);
        index_1.firestoreDB.collection(`comments`)
            .where(`postId`, `==`, postId)
            .orderBy('creationDate', 'desc')
            .get().then((result) => {
            let parsedData = {};
            let index = 0;
            result.forEach((comment) => {
                if (index < 3) {
                    const commentData = comment.data();
                    commentData.id = comment.id;
                    parsedData = Object.assign({}, parsedData, { [comment.id]: Object.assign({}, commentData) });
                }
                index++;
            });
            postRef.update({ comments: parsedData, commentCounter: result.size })
                .then(() => {
                resolve();
            });
        }).catch(reject);
    });
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ])));