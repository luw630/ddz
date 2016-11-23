/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.isDef=function(a){return void 0!==a};

goog.map = function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split():a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};

goog.isString=function(a){return"string"==typeof a};

goog.exportSymbol('proto.AwardItem', null, global);
goog.exportSymbol('proto.CardsPuts', null, global);
goog.exportSymbol('proto.ClientMsgHead', null, global);
goog.exportSymbol('proto.ConfBase', null, global);
goog.exportSymbol('proto.CreateFriendTableReq', null, global);
goog.exportSymbol('proto.CreateFriendTableRes', null, global);
goog.exportSymbol('proto.DealCardsEndNtc', null, global);
goog.exportSymbol('proto.DealCardsNtc', null, global);
goog.exportSymbol('proto.DeleteMailReq', null, global);
goog.exportSymbol('proto.DeleteMailRes', null, global);
goog.exportSymbol('proto.DeliverGoodsNtc', null, global);
goog.exportSymbol('proto.DoReadyNtc', null, global);
goog.exportSymbol('proto.DoactionNtc', null, global);
goog.exportSymbol('proto.DoactionReq', null, global);
goog.exportSymbol('proto.DoactionRes', null, global);
goog.exportSymbol('proto.DoactionResultNtc', null, global);
goog.exportSymbol('proto.DownloadCfgReq', null, global);
goog.exportSymbol('proto.DownloadCfgRes', null, global);
goog.exportSymbol('proto.EMsgType', null, global);
goog.exportSymbol('proto.EnterGameReq', null, global);
goog.exportSymbol('proto.EnterGameRes', null, global);
goog.exportSymbol('proto.EnterTableReq', null, global);
goog.exportSymbol('proto.EnterTableRes', null, global);
goog.exportSymbol('proto.GameEndResultNtc', null, global);
goog.exportSymbol('proto.GameInfo', null, global);
goog.exportSymbol('proto.GameReadyReq', null, global);
goog.exportSymbol('proto.GameReadyRes', null, global);
goog.exportSymbol('proto.GameReadyResultNtc', null, global);
goog.exportSymbol('proto.GameStartNtc', null, global);
goog.exportSymbol('proto.GateSvrItem', null, global);
goog.exportSymbol('proto.GetFriendTableListReq', null, global);
goog.exportSymbol('proto.GetFriendTableListRes', null, global);
goog.exportSymbol('proto.GetGameRoomsReq', null, global);
goog.exportSymbol('proto.GetGameRoomsRes', null, global);
goog.exportSymbol('proto.GetMailsReq', null, global);
goog.exportSymbol('proto.GetMailsRes', null, global);
goog.exportSymbol('proto.GetTableStateByCreateIdReq', null, global);
goog.exportSymbol('proto.GetTableStateByCreateIdRes', null, global);
goog.exportSymbol('proto.GetmailItemsReq', null, global);
goog.exportSymbol('proto.GetmailItemsRes', null, global);
goog.exportSymbol('proto.HeartReq', null, global);
goog.exportSymbol('proto.HeartRes', null, global);
goog.exportSymbol('proto.LeaveTableReq', null, global);
goog.exportSymbol('proto.LeaveTableRes', null, global);
goog.exportSymbol('proto.LoginReq', null, global);
goog.exportSymbol('proto.LoginRes', null, global);
goog.exportSymbol('proto.MailItem', null, global);
goog.exportSymbol('proto.PlayerBaseInfoNtc', null, global);
goog.exportSymbol('proto.PlayerBaseinfo', null, global);
goog.exportSymbol('proto.PlayerBaseinfoReq', null, global);
goog.exportSymbol('proto.PlayerBaseinfoRes', null, global);
goog.exportSymbol('proto.PlayerGameRecordinfo', null, global);
goog.exportSymbol('proto.PlayerGameRecordinfoReq', null, global);
goog.exportSymbol('proto.PlayerGameRecordinfoRes', null, global);
goog.exportSymbol('proto.PlayerInfoInGameEnd', null, global);
goog.exportSymbol('proto.PlayerLevelTableNtc', null, global);
goog.exportSymbol('proto.PlayerTableMessageNtc', null, global);
goog.exportSymbol('proto.PushhandsNumNtc', null, global);
goog.exportSymbol('proto.QiniuUploadReq', null, global);
goog.exportSymbol('proto.QiniuUploadRes', null, global);
goog.exportSymbol('proto.QuickStartReq', null, global);
goog.exportSymbol('proto.QuickStartRes', null, global);
goog.exportSymbol('proto.RechargeReq', null, global);
goog.exportSymbol('proto.RechargeRes', null, global);
goog.exportSymbol('proto.ReenterTableNtc', null, global);
goog.exportSymbol('proto.ReenterTableReq', null, global);
goog.exportSymbol('proto.ReenterTableRes', null, global);
goog.exportSymbol('proto.RepeatNtc', null, global);
goog.exportSymbol('proto.SeatInfo', null, global);
goog.exportSymbol('proto.SendMessageReq', null, global);
goog.exportSymbol('proto.SendMessageRes', null, global);
goog.exportSymbol('proto.SitdownTableNtc', null, global);
goog.exportSymbol('proto.SitdownTableReq', null, global);
goog.exportSymbol('proto.SitdownTableRes', null, global);
goog.exportSymbol('proto.StandupTableNtc', null, global);
goog.exportSymbol('proto.StandupTableReq', null, global);
goog.exportSymbol('proto.StandupTableRes', null, global);
goog.exportSymbol('proto.StartGameReq', null, global);
goog.exportSymbol('proto.StartGameRes', null, global);
goog.exportSymbol('proto.TablePlayerInfo', null, global);
goog.exportSymbol('proto.TableStateItem', null, global);
goog.exportSymbol('proto.UpdateinfoReq', null, global);
goog.exportSymbol('proto.UpdateinfoRes', null, global);
goog.exportSymbol('proto.Version', null, global);
goog.exportSymbol('proto.playerRecordinfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientMsgHead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientMsgHead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ClientMsgHead.displayName = 'proto.ClientMsgHead';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientMsgHead.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientMsgHead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientMsgHead} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ClientMsgHead.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgtype: jspb.Message.getField(msg, 1),
    msgname: jspb.Message.getField(msg, 2),
    svr_id: jspb.Message.getField(msg, 3),
    service_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.ClientMsgHead}
 */
proto.ClientMsgHead.fromObject = function(obj) {
  var f, msg = new proto.ClientMsgHead();
  goog.isDef(obj.msgtype) && jspb.Message.setField(msg, 1, obj.msgtype);
  goog.isDef(obj.msgname) && jspb.Message.setField(msg, 2, obj.msgname);
  goog.isDef(obj.svr_id) && jspb.Message.setField(msg, 3, obj.svr_id);
  goog.isDef(obj.service_address) && jspb.Message.setField(msg, 4, obj.service_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientMsgHead}
 */
proto.ClientMsgHead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientMsgHead;
  return proto.ClientMsgHead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientMsgHead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientMsgHead}
 */
proto.ClientMsgHead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmsgtype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setmsgname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setservice_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ClientMsgHead} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClientMsgHead.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientMsgHead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ClientMsgHead.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ClientMsgHead} The clone.
 */
proto.ClientMsgHead.prototype.cloneMessage = function() {
  return /** @type {!proto.ClientMsgHead} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 msgtype = 1;
 * @return {number}
 */
proto.ClientMsgHead.prototype.getmsgtype = function() {
  return /** @type {number} */ (!this.hasmsgtype() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.ClientMsgHead.prototype.setmsgtype = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.ClientMsgHead.prototype.clearmsgtype = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClientMsgHead.prototype.hasmsgtype = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msgname = 2;
 * @return {string}
 */
proto.ClientMsgHead.prototype.getmsgname = function() {
  return /** @type {string} */ (!this.hasmsgname() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.ClientMsgHead.prototype.setmsgname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.ClientMsgHead.prototype.clearmsgname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClientMsgHead.prototype.hasmsgname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string svr_id = 3;
 * @return {string}
 */
proto.ClientMsgHead.prototype.getsvr_id = function() {
  return /** @type {string} */ (!this.hassvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.ClientMsgHead.prototype.setsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.ClientMsgHead.prototype.clearsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClientMsgHead.prototype.hassvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 service_address = 4;
 * @return {number}
 */
proto.ClientMsgHead.prototype.getservice_address = function() {
  return /** @type {number} */ (!this.hasservice_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.ClientMsgHead.prototype.setservice_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.ClientMsgHead.prototype.clearservice_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ClientMsgHead.prototype.hasservice_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Version = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Version.displayName = 'proto.Version';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Version.prototype.toObject = function(opt_includeInstance) {
  return proto.Version.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Version} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Version.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getField(msg, 1),
    channel: jspb.Message.getField(msg, 2),
    version: jspb.Message.getField(msg, 3),
    authtype: jspb.Message.getField(msg, 4),
    regfrom: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.Version}
 */
proto.Version.fromObject = function(obj) {
  var f, msg = new proto.Version();
  goog.isDef(obj.platform) && jspb.Message.setField(msg, 1, obj.platform);
  goog.isDef(obj.channel) && jspb.Message.setField(msg, 2, obj.channel);
  goog.isDef(obj.version) && jspb.Message.setField(msg, 3, obj.version);
  goog.isDef(obj.authtype) && jspb.Message.setField(msg, 4, obj.authtype);
  goog.isDef(obj.regfrom) && jspb.Message.setField(msg, 5, obj.regfrom);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Version}
 */
proto.Version.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Version;
  return proto.Version.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Version}
 */
proto.Version.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setplatform(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setchannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setversion(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setauthtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setregfrom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Version} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Version.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Version.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Version.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Version} The clone.
 */
proto.Version.prototype.cloneMessage = function() {
  return /** @type {!proto.Version} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 platform = 1;
 * @return {number}
 */
proto.Version.prototype.getplatform = function() {
  return /** @type {number} */ (!this.hasplatform() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.Version.prototype.setplatform = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.Version.prototype.clearplatform = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Version.prototype.hasplatform = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 channel = 2;
 * @return {number}
 */
proto.Version.prototype.getchannel = function() {
  return /** @type {number} */ (!this.haschannel() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.Version.prototype.setchannel = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.Version.prototype.clearchannel = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Version.prototype.haschannel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.Version.prototype.getversion = function() {
  return /** @type {string} */ (!this.hasversion() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.Version.prototype.setversion = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.Version.prototype.clearversion = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Version.prototype.hasversion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 authtype = 4;
 * @return {number}
 */
proto.Version.prototype.getauthtype = function() {
  return /** @type {number} */ (!this.hasauthtype() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.Version.prototype.setauthtype = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.Version.prototype.clearauthtype = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Version.prototype.hasauthtype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 regfrom = 5;
 * @return {number}
 */
proto.Version.prototype.getregfrom = function() {
  return /** @type {number} */ (!this.hasregfrom() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.Version.prototype.setregfrom = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.Version.prototype.clearregfrom = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Version.prototype.hasregfrom = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GateSvrItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GateSvrItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GateSvrItem.displayName = 'proto.GateSvrItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GateSvrItem.prototype.toObject = function(opt_includeInstance) {
  return proto.GateSvrItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GateSvrItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GateSvrItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getField(msg, 1),
    port: jspb.Message.getField(msg, 2),
    updatetime: jspb.Message.getField(msg, 3),
    onlinenum: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GateSvrItem}
 */
proto.GateSvrItem.fromObject = function(obj) {
  var f, msg = new proto.GateSvrItem();
  goog.isDef(obj.ip) && jspb.Message.setField(msg, 1, obj.ip);
  goog.isDef(obj.port) && jspb.Message.setField(msg, 2, obj.port);
  goog.isDef(obj.updatetime) && jspb.Message.setField(msg, 3, obj.updatetime);
  goog.isDef(obj.onlinenum) && jspb.Message.setField(msg, 4, obj.onlinenum);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GateSvrItem}
 */
proto.GateSvrItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GateSvrItem;
  return proto.GateSvrItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GateSvrItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GateSvrItem}
 */
proto.GateSvrItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setip(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setport(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setupdatetime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setonlinenum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GateSvrItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GateSvrItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GateSvrItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GateSvrItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GateSvrItem} The clone.
 */
proto.GateSvrItem.prototype.cloneMessage = function() {
  return /** @type {!proto.GateSvrItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.GateSvrItem.prototype.getip = function() {
  return /** @type {string} */ (!this.hasip() ? "" : jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.GateSvrItem.prototype.setip = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GateSvrItem.prototype.clearip = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GateSvrItem.prototype.hasip = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 port = 2;
 * @return {number}
 */
proto.GateSvrItem.prototype.getport = function() {
  return /** @type {number} */ (!this.hasport() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GateSvrItem.prototype.setport = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GateSvrItem.prototype.clearport = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GateSvrItem.prototype.hasport = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 updatetime = 3;
 * @return {number}
 */
proto.GateSvrItem.prototype.getupdatetime = function() {
  return /** @type {number} */ (!this.hasupdatetime() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.GateSvrItem.prototype.setupdatetime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.GateSvrItem.prototype.clearupdatetime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GateSvrItem.prototype.hasupdatetime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 onlinenum = 4;
 * @return {number}
 */
proto.GateSvrItem.prototype.getonlinenum = function() {
  return /** @type {number} */ (!this.hasonlinenum() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.GateSvrItem.prototype.setonlinenum = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.GateSvrItem.prototype.clearonlinenum = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GateSvrItem.prototype.hasonlinenum = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerBaseinfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerBaseinfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerBaseinfo.displayName = 'proto.PlayerBaseinfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerBaseinfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerBaseinfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerBaseinfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerBaseinfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    rolename: jspb.Message.getField(msg, 2),
    logo: jspb.Message.getField(msg, 3),
    phone: jspb.Message.getField(msg, 4),
    totalgamenum: jspb.Message.getField(msg, 5),
    winnum: jspb.Message.getField(msg, 6),
    sex: jspb.Message.getField(msg, 7),
    coins: jspb.Message.getField(msg, 8),
    diamonds: jspb.Message.getField(msg, 9),
    highwininseries: jspb.Message.getField(msg, 10),
    maxcoinnum: jspb.Message.getField(msg, 11)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerBaseinfo}
 */
proto.PlayerBaseinfo.fromObject = function(obj) {
  var f, msg = new proto.PlayerBaseinfo();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 2, obj.rolename);
  goog.isDef(obj.logo) && jspb.Message.setField(msg, 3, obj.logo);
  goog.isDef(obj.phone) && jspb.Message.setField(msg, 4, obj.phone);
  goog.isDef(obj.totalgamenum) && jspb.Message.setField(msg, 5, obj.totalgamenum);
  goog.isDef(obj.winnum) && jspb.Message.setField(msg, 6, obj.winnum);
  goog.isDef(obj.sex) && jspb.Message.setField(msg, 7, obj.sex);
  goog.isDef(obj.coins) && jspb.Message.setField(msg, 8, obj.coins);
  goog.isDef(obj.diamonds) && jspb.Message.setField(msg, 9, obj.diamonds);
  goog.isDef(obj.highwininseries) && jspb.Message.setField(msg, 10, obj.highwininseries);
  goog.isDef(obj.maxcoinnum) && jspb.Message.setField(msg, 11, obj.maxcoinnum);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerBaseinfo}
 */
proto.PlayerBaseinfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerBaseinfo;
  return proto.PlayerBaseinfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerBaseinfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerBaseinfo}
 */
proto.PlayerBaseinfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setphone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settotalgamenum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setwinnum(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setsex(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcoins(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setdiamonds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.sethighwininseries(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmaxcoinnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerBaseinfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerBaseinfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = jspb.Message.getField(this, 10);
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = jspb.Message.getField(this, 11);
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerBaseinfo} The clone.
 */
proto.PlayerBaseinfo.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerBaseinfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerBaseinfo.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rolename = 2;
 * @return {string}
 */
proto.PlayerBaseinfo.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.PlayerBaseinfo.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerBaseinfo.prototype.clearrolename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string logo = 3;
 * @return {string}
 */
proto.PlayerBaseinfo.prototype.getlogo = function() {
  return /** @type {string} */ (!this.haslogo() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.PlayerBaseinfo.prototype.setlogo = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.PlayerBaseinfo.prototype.clearlogo = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.haslogo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.PlayerBaseinfo.prototype.getphone = function() {
  return /** @type {string} */ (!this.hasphone() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.PlayerBaseinfo.prototype.setphone = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.PlayerBaseinfo.prototype.clearphone = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hasphone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 totalgamenum = 5;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.gettotalgamenum = function() {
  return /** @type {number} */ (!this.hastotalgamenum() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.settotalgamenum = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.PlayerBaseinfo.prototype.cleartotalgamenum = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hastotalgamenum = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 winnum = 6;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getwinnum = function() {
  return /** @type {number} */ (!this.haswinnum() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setwinnum = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.PlayerBaseinfo.prototype.clearwinnum = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.haswinnum = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 sex = 7;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getsex = function() {
  return /** @type {number} */ (!this.hassex() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setsex = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.PlayerBaseinfo.prototype.clearsex = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hassex = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 coins = 8;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getcoins = function() {
  return /** @type {number} */ (!this.hascoins() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setcoins = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.PlayerBaseinfo.prototype.clearcoins = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hascoins = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 diamonds = 9;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getdiamonds = function() {
  return /** @type {number} */ (!this.hasdiamonds() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setdiamonds = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.PlayerBaseinfo.prototype.cleardiamonds = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hasdiamonds = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 highwininseries = 10;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.gethighwininseries = function() {
  return /** @type {number} */ (!this.hashighwininseries() ? 0 : jspb.Message.getField(this, 10));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.sethighwininseries = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.PlayerBaseinfo.prototype.clearhighwininseries = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hashighwininseries = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 maxcoinnum = 11;
 * @return {number}
 */
proto.PlayerBaseinfo.prototype.getmaxcoinnum = function() {
  return /** @type {number} */ (!this.hasmaxcoinnum() ? 0 : jspb.Message.getField(this, 11));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfo.prototype.setmaxcoinnum = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.PlayerBaseinfo.prototype.clearmaxcoinnum = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfo.prototype.hasmaxcoinnum = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TableStateItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TableStateItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TableStateItem.displayName = 'proto.TableStateItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TableStateItem.prototype.toObject = function(opt_includeInstance) {
  return proto.TableStateItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TableStateItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TableStateItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    state: jspb.Message.getField(msg, 2),
    name: jspb.Message.getField(msg, 3),
    room_type: jspb.Message.getField(msg, 4),
    game_type: jspb.Message.getField(msg, 5),
    max_player_num: jspb.Message.getField(msg, 6),
    cur_player_num: jspb.Message.getField(msg, 7),
    retain_to_time: jspb.Message.getField(msg, 8),
    create_user_rid: jspb.Message.getField(msg, 9),
    create_user_rolename: jspb.Message.getField(msg, 10),
    create_time: jspb.Message.getField(msg, 11),
    create_table_id: jspb.Message.getField(msg, 12),
    roomsvr_id: jspb.Message.getField(msg, 13),
    roomsvr_table_address: jspb.Message.getField(msg, 14),
    action_timeout: jspb.Message.getField(msg, 15),
    action_timeout_count: jspb.Message.getField(msg, 16),
    create_user_logo: jspb.Message.getField(msg, 17),
    min_carry_coin: jspb.Message.getField(msg, 18),
    max_carry_coin: jspb.Message.getField(msg, 19),
    base_coin: jspb.Message.getField(msg, 20),
    common_times: jspb.Message.getField(msg, 21),
    totalplayernum: jspb.Message.getField(msg, 22),
    distribute_playernum: jspb.Message.getField(msg, 23)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.TableStateItem}
 */
proto.TableStateItem.fromObject = function(obj) {
  var f, msg = new proto.TableStateItem();
  goog.isDef(obj.id) && jspb.Message.setField(msg, 1, obj.id);
  goog.isDef(obj.state) && jspb.Message.setField(msg, 2, obj.state);
  goog.isDef(obj.name) && jspb.Message.setField(msg, 3, obj.name);
  goog.isDef(obj.room_type) && jspb.Message.setField(msg, 4, obj.room_type);
  goog.isDef(obj.game_type) && jspb.Message.setField(msg, 5, obj.game_type);
  goog.isDef(obj.max_player_num) && jspb.Message.setField(msg, 6, obj.max_player_num);
  goog.isDef(obj.cur_player_num) && jspb.Message.setField(msg, 7, obj.cur_player_num);
  goog.isDef(obj.retain_to_time) && jspb.Message.setField(msg, 8, obj.retain_to_time);
  goog.isDef(obj.create_user_rid) && jspb.Message.setField(msg, 9, obj.create_user_rid);
  goog.isDef(obj.create_user_rolename) && jspb.Message.setField(msg, 10, obj.create_user_rolename);
  goog.isDef(obj.create_time) && jspb.Message.setField(msg, 11, obj.create_time);
  goog.isDef(obj.create_table_id) && jspb.Message.setField(msg, 12, obj.create_table_id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 13, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 14, obj.roomsvr_table_address);
  goog.isDef(obj.action_timeout) && jspb.Message.setField(msg, 15, obj.action_timeout);
  goog.isDef(obj.action_timeout_count) && jspb.Message.setField(msg, 16, obj.action_timeout_count);
  goog.isDef(obj.create_user_logo) && jspb.Message.setField(msg, 17, obj.create_user_logo);
  goog.isDef(obj.min_carry_coin) && jspb.Message.setField(msg, 18, obj.min_carry_coin);
  goog.isDef(obj.max_carry_coin) && jspb.Message.setField(msg, 19, obj.max_carry_coin);
  goog.isDef(obj.base_coin) && jspb.Message.setField(msg, 20, obj.base_coin);
  goog.isDef(obj.common_times) && jspb.Message.setField(msg, 21, obj.common_times);
  goog.isDef(obj.totalplayernum) && jspb.Message.setField(msg, 22, obj.totalplayernum);
  goog.isDef(obj.distribute_playernum) && jspb.Message.setField(msg, 23, obj.distribute_playernum);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TableStateItem}
 */
proto.TableStateItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TableStateItem;
  return proto.TableStateItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TableStateItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TableStateItem}
 */
proto.TableStateItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setstate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroom_type(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgame_type(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmax_player_num(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcur_player_num(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setretain_to_time(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_user_rid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_user_rolename(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_time(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_table_id(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_timeout(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_timeout_count(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_user_logo(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmin_carry_coin(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmax_carry_coin(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbase_coin(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcommon_times(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settotalplayernum(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setdistribute_playernum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TableStateItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TableStateItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TableStateItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TableStateItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = jspb.Message.getField(this, 10);
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = jspb.Message.getField(this, 11);
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = jspb.Message.getField(this, 12);
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = jspb.Message.getField(this, 13);
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = jspb.Message.getField(this, 14);
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = jspb.Message.getField(this, 15);
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = jspb.Message.getField(this, 16);
  if (f != null) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = jspb.Message.getField(this, 17);
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = jspb.Message.getField(this, 18);
  if (f != null) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = jspb.Message.getField(this, 19);
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = jspb.Message.getField(this, 20);
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = jspb.Message.getField(this, 21);
  if (f != null) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = jspb.Message.getField(this, 22);
  if (f != null) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = jspb.Message.getField(this, 23);
  if (f != null) {
    writer.writeInt32(
      23,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TableStateItem} The clone.
 */
proto.TableStateItem.prototype.cloneMessage = function() {
  return /** @type {!proto.TableStateItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.TableStateItem.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.TableStateItem.prototype.clearid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.TableStateItem.prototype.getstate = function() {
  return /** @type {number} */ (!this.hasstate() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setstate = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.TableStateItem.prototype.clearstate = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasstate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.TableStateItem.prototype.getname = function() {
  return /** @type {string} */ (!this.hasname() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.TableStateItem.prototype.setname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.TableStateItem.prototype.clearname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 room_type = 4;
 * @return {number}
 */
proto.TableStateItem.prototype.getroom_type = function() {
  return /** @type {number} */ (!this.hasroom_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setroom_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.TableStateItem.prototype.clearroom_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasroom_type = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 game_type = 5;
 * @return {number}
 */
proto.TableStateItem.prototype.getgame_type = function() {
  return /** @type {number} */ (!this.hasgame_type() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setgame_type = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.TableStateItem.prototype.cleargame_type = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasgame_type = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 max_player_num = 6;
 * @return {number}
 */
proto.TableStateItem.prototype.getmax_player_num = function() {
  return /** @type {number} */ (!this.hasmax_player_num() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setmax_player_num = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.TableStateItem.prototype.clearmax_player_num = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasmax_player_num = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 cur_player_num = 7;
 * @return {number}
 */
proto.TableStateItem.prototype.getcur_player_num = function() {
  return /** @type {number} */ (!this.hascur_player_num() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setcur_player_num = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.TableStateItem.prototype.clearcur_player_num = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascur_player_num = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 retain_to_time = 8;
 * @return {number}
 */
proto.TableStateItem.prototype.getretain_to_time = function() {
  return /** @type {number} */ (!this.hasretain_to_time() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setretain_to_time = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.TableStateItem.prototype.clearretain_to_time = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasretain_to_time = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 create_user_rid = 9;
 * @return {number}
 */
proto.TableStateItem.prototype.getcreate_user_rid = function() {
  return /** @type {number} */ (!this.hascreate_user_rid() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setcreate_user_rid = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.TableStateItem.prototype.clearcreate_user_rid = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascreate_user_rid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string create_user_rolename = 10;
 * @return {string}
 */
proto.TableStateItem.prototype.getcreate_user_rolename = function() {
  return /** @type {string} */ (!this.hascreate_user_rolename() ? "" : jspb.Message.getField(this, 10));
};


/** @param {string?|undefined} value  */
proto.TableStateItem.prototype.setcreate_user_rolename = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.TableStateItem.prototype.clearcreate_user_rolename = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascreate_user_rolename = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 create_time = 11;
 * @return {number}
 */
proto.TableStateItem.prototype.getcreate_time = function() {
  return /** @type {number} */ (!this.hascreate_time() ? 0 : jspb.Message.getField(this, 11));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setcreate_time = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.TableStateItem.prototype.clearcreate_time = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascreate_time = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string create_table_id = 12;
 * @return {string}
 */
proto.TableStateItem.prototype.getcreate_table_id = function() {
  return /** @type {string} */ (!this.hascreate_table_id() ? "" : jspb.Message.getField(this, 12));
};


/** @param {string?|undefined} value  */
proto.TableStateItem.prototype.setcreate_table_id = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.TableStateItem.prototype.clearcreate_table_id = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascreate_table_id = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string roomsvr_id = 13;
 * @return {string}
 */
proto.TableStateItem.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 13));
};


/** @param {string?|undefined} value  */
proto.TableStateItem.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.TableStateItem.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 roomsvr_table_address = 14;
 * @return {number}
 */
proto.TableStateItem.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 14));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.TableStateItem.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 action_timeout = 15;
 * @return {number}
 */
proto.TableStateItem.prototype.getaction_timeout = function() {
  return /** @type {number} */ (!this.hasaction_timeout() ? 0 : jspb.Message.getField(this, 15));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setaction_timeout = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.TableStateItem.prototype.clearaction_timeout = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasaction_timeout = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 action_timeout_count = 16;
 * @return {number}
 */
proto.TableStateItem.prototype.getaction_timeout_count = function() {
  return /** @type {number} */ (!this.hasaction_timeout_count() ? 0 : jspb.Message.getField(this, 16));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setaction_timeout_count = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.TableStateItem.prototype.clearaction_timeout_count = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasaction_timeout_count = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string create_user_logo = 17;
 * @return {string}
 */
proto.TableStateItem.prototype.getcreate_user_logo = function() {
  return /** @type {string} */ (!this.hascreate_user_logo() ? "" : jspb.Message.getField(this, 17));
};


/** @param {string?|undefined} value  */
proto.TableStateItem.prototype.setcreate_user_logo = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.TableStateItem.prototype.clearcreate_user_logo = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascreate_user_logo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 min_carry_coin = 18;
 * @return {number}
 */
proto.TableStateItem.prototype.getmin_carry_coin = function() {
  return /** @type {number} */ (!this.hasmin_carry_coin() ? 0 : jspb.Message.getField(this, 18));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setmin_carry_coin = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.TableStateItem.prototype.clearmin_carry_coin = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasmin_carry_coin = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 max_carry_coin = 19;
 * @return {number}
 */
proto.TableStateItem.prototype.getmax_carry_coin = function() {
  return /** @type {number} */ (!this.hasmax_carry_coin() ? 0 : jspb.Message.getField(this, 19));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setmax_carry_coin = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.TableStateItem.prototype.clearmax_carry_coin = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasmax_carry_coin = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 base_coin = 20;
 * @return {number}
 */
proto.TableStateItem.prototype.getbase_coin = function() {
  return /** @type {number} */ (!this.hasbase_coin() ? 0 : jspb.Message.getField(this, 20));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setbase_coin = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.TableStateItem.prototype.clearbase_coin = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasbase_coin = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int32 common_times = 21;
 * @return {number}
 */
proto.TableStateItem.prototype.getcommon_times = function() {
  return /** @type {number} */ (!this.hascommon_times() ? 0 : jspb.Message.getField(this, 21));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setcommon_times = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.TableStateItem.prototype.clearcommon_times = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hascommon_times = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional int32 totalplayernum = 22;
 * @return {number}
 */
proto.TableStateItem.prototype.gettotalplayernum = function() {
  return /** @type {number} */ (!this.hastotalplayernum() ? 0 : jspb.Message.getField(this, 22));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.settotalplayernum = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.TableStateItem.prototype.cleartotalplayernum = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hastotalplayernum = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional int32 distribute_playernum = 23;
 * @return {number}
 */
proto.TableStateItem.prototype.getdistribute_playernum = function() {
  return /** @type {number} */ (!this.hasdistribute_playernum() ? 0 : jspb.Message.getField(this, 23));
};


/** @param {number?|undefined} value  */
proto.TableStateItem.prototype.setdistribute_playernum = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.TableStateItem.prototype.cleardistribute_playernum = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TableStateItem.prototype.hasdistribute_playernum = function() {
  return jspb.Message.getField(this, 23) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SeatInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeatInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeatInfo.displayName = 'proto.SeatInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SeatInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SeatInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeatInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeatInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    index: jspb.Message.getField(msg, 2),
    state: jspb.Message.getField(msg, 3),
    is_tuoguan: jspb.Message.getField(msg, 4),
    coin: jspb.Message.getField(msg, 5),
    jdztag: jspb.Message.getField(msg, 6),
    isdz: jspb.Message.getField(msg, 7),
    ready_to_time: jspb.Message.getField(msg, 8),
    cardsnum: jspb.Message.getField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SeatInfo}
 */
proto.SeatInfo.fromObject = function(obj) {
  var f, msg = new proto.SeatInfo();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.index) && jspb.Message.setField(msg, 2, obj.index);
  goog.isDef(obj.state) && jspb.Message.setField(msg, 3, obj.state);
  goog.isDef(obj.is_tuoguan) && jspb.Message.setField(msg, 4, obj.is_tuoguan);
  goog.isDef(obj.coin) && jspb.Message.setField(msg, 5, obj.coin);
  goog.isDef(obj.jdztag) && jspb.Message.setField(msg, 6, obj.jdztag);
  goog.isDef(obj.isdz) && jspb.Message.setField(msg, 7, obj.isdz);
  goog.isDef(obj.ready_to_time) && jspb.Message.setField(msg, 8, obj.ready_to_time);
  goog.isDef(obj.cardsnum) && jspb.Message.setField(msg, 9, obj.cardsnum);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SeatInfo}
 */
proto.SeatInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeatInfo;
  return proto.SeatInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeatInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeatInfo}
 */
proto.SeatInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setindex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setstate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setis_tuoguan(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcoin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setjdztag(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setisdz(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setready_to_time(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcardsnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SeatInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeatInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SeatInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeatInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SeatInfo} The clone.
 */
proto.SeatInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.SeatInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.SeatInfo.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SeatInfo.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.SeatInfo.prototype.getindex = function() {
  return /** @type {number} */ (!this.hasindex() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setindex = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SeatInfo.prototype.clearindex = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasindex = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 state = 3;
 * @return {number}
 */
proto.SeatInfo.prototype.getstate = function() {
  return /** @type {number} */ (!this.hasstate() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setstate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SeatInfo.prototype.clearstate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasstate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 is_tuoguan = 4;
 * @return {number}
 */
proto.SeatInfo.prototype.getis_tuoguan = function() {
  return /** @type {number} */ (!this.hasis_tuoguan() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setis_tuoguan = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SeatInfo.prototype.clearis_tuoguan = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasis_tuoguan = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 coin = 5;
 * @return {number}
 */
proto.SeatInfo.prototype.getcoin = function() {
  return /** @type {number} */ (!this.hascoin() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setcoin = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SeatInfo.prototype.clearcoin = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hascoin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 jdztag = 6;
 * @return {number}
 */
proto.SeatInfo.prototype.getjdztag = function() {
  return /** @type {number} */ (!this.hasjdztag() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setjdztag = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SeatInfo.prototype.clearjdztag = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasjdztag = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 isdz = 7;
 * @return {number}
 */
proto.SeatInfo.prototype.getisdz = function() {
  return /** @type {number} */ (!this.hasisdz() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setisdz = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SeatInfo.prototype.clearisdz = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasisdz = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 ready_to_time = 8;
 * @return {number}
 */
proto.SeatInfo.prototype.getready_to_time = function() {
  return /** @type {number} */ (!this.hasready_to_time() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setready_to_time = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SeatInfo.prototype.clearready_to_time = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hasready_to_time = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 cardsnum = 9;
 * @return {number}
 */
proto.SeatInfo.prototype.getcardsnum = function() {
  return /** @type {number} */ (!this.hascardsnum() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.SeatInfo.prototype.setcardsnum = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.SeatInfo.prototype.clearcardsnum = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SeatInfo.prototype.hascardsnum = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TablePlayerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TablePlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TablePlayerInfo.displayName = 'proto.TablePlayerInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TablePlayerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.TablePlayerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TablePlayerInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.TablePlayerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    rolename: jspb.Message.getField(msg, 2),
    logo: jspb.Message.getField(msg, 3),
    sex: jspb.Message.getField(msg, 4),
    totalgamenum: jspb.Message.getField(msg, 5),
    winnum: jspb.Message.getField(msg, 6),
    coins: jspb.Message.getField(msg, 7),
    diamonds: jspb.Message.getField(msg, 8),
    highwininseries: jspb.Message.getField(msg, 9),
    maxcoinnum: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.TablePlayerInfo}
 */
proto.TablePlayerInfo.fromObject = function(obj) {
  var f, msg = new proto.TablePlayerInfo();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 2, obj.rolename);
  goog.isDef(obj.logo) && jspb.Message.setField(msg, 3, obj.logo);
  goog.isDef(obj.sex) && jspb.Message.setField(msg, 4, obj.sex);
  goog.isDef(obj.totalgamenum) && jspb.Message.setField(msg, 5, obj.totalgamenum);
  goog.isDef(obj.winnum) && jspb.Message.setField(msg, 6, obj.winnum);
  goog.isDef(obj.coins) && jspb.Message.setField(msg, 7, obj.coins);
  goog.isDef(obj.diamonds) && jspb.Message.setField(msg, 8, obj.diamonds);
  goog.isDef(obj.highwininseries) && jspb.Message.setField(msg, 9, obj.highwininseries);
  goog.isDef(obj.maxcoinnum) && jspb.Message.setField(msg, 10, obj.maxcoinnum);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TablePlayerInfo}
 */
proto.TablePlayerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TablePlayerInfo;
  return proto.TablePlayerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TablePlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TablePlayerInfo}
 */
proto.TablePlayerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setsex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settotalgamenum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setwinnum(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcoins(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setdiamonds(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.sethighwininseries(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmaxcoinnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.TablePlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.TablePlayerInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TablePlayerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.TablePlayerInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = jspb.Message.getField(this, 10);
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.TablePlayerInfo} The clone.
 */
proto.TablePlayerInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.TablePlayerInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.TablePlayerInfo.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rolename = 2;
 * @return {string}
 */
proto.TablePlayerInfo.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.TablePlayerInfo.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.TablePlayerInfo.prototype.clearrolename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string logo = 3;
 * @return {string}
 */
proto.TablePlayerInfo.prototype.getlogo = function() {
  return /** @type {string} */ (!this.haslogo() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.TablePlayerInfo.prototype.setlogo = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.TablePlayerInfo.prototype.clearlogo = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.haslogo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 sex = 4;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getsex = function() {
  return /** @type {number} */ (!this.hassex() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setsex = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.TablePlayerInfo.prototype.clearsex = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hassex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 totalgamenum = 5;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.gettotalgamenum = function() {
  return /** @type {number} */ (!this.hastotalgamenum() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.settotalgamenum = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.TablePlayerInfo.prototype.cleartotalgamenum = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hastotalgamenum = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 winnum = 6;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getwinnum = function() {
  return /** @type {number} */ (!this.haswinnum() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setwinnum = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.TablePlayerInfo.prototype.clearwinnum = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.haswinnum = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 coins = 7;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getcoins = function() {
  return /** @type {number} */ (!this.hascoins() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setcoins = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.TablePlayerInfo.prototype.clearcoins = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hascoins = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 diamonds = 8;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getdiamonds = function() {
  return /** @type {number} */ (!this.hasdiamonds() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setdiamonds = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.TablePlayerInfo.prototype.cleardiamonds = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hasdiamonds = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 highwininseries = 9;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.gethighwininseries = function() {
  return /** @type {number} */ (!this.hashighwininseries() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.sethighwininseries = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.TablePlayerInfo.prototype.clearhighwininseries = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hashighwininseries = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 maxcoinnum = 10;
 * @return {number}
 */
proto.TablePlayerInfo.prototype.getmaxcoinnum = function() {
  return /** @type {number} */ (!this.hasmaxcoinnum() ? 0 : jspb.Message.getField(this, 10));
};


/** @param {number?|undefined} value  */
proto.TablePlayerInfo.prototype.setmaxcoinnum = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.TablePlayerInfo.prototype.clearmaxcoinnum = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.TablePlayerInfo.prototype.hasmaxcoinnum = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GameInfo.repeatedFields_, null);
};
goog.inherits(proto.GameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameInfo.displayName = 'proto.GameInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GameInfo.repeatedFields_ = [27,28];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.GameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    state: jspb.Message.getField(msg, 2),
    name: jspb.Message.getField(msg, 3),
    room_type: jspb.Message.getField(msg, 4),
    game_type: jspb.Message.getField(msg, 5),
    max_player_num: jspb.Message.getField(msg, 6),
    cur_player_num: jspb.Message.getField(msg, 7),
    retain_to_time: jspb.Message.getField(msg, 8),
    create_user_rid: jspb.Message.getField(msg, 9),
    create_user_rolename: jspb.Message.getField(msg, 10),
    create_time: jspb.Message.getField(msg, 11),
    create_table_id: jspb.Message.getField(msg, 12),
    roomsvr_id: jspb.Message.getField(msg, 13),
    roomsvr_table_address: jspb.Message.getField(msg, 14),
    action_timeout: jspb.Message.getField(msg, 15),
    action_timeout_count: jspb.Message.getField(msg, 16),
    create_user_logo: jspb.Message.getField(msg, 17),
    min_carry_coin: jspb.Message.getField(msg, 18),
    max_carry_coin: jspb.Message.getField(msg, 19),
    base_coin: jspb.Message.getField(msg, 20),
    common_times: jspb.Message.getField(msg, 21),
    all_times: jspb.Message.getField(msg, 22),
    action_seat_index: jspb.Message.getField(msg, 23),
    action_to_time: jspb.Message.getField(msg, 24),
    action_type: jspb.Message.getField(msg, 25),
    dz_seat_index: jspb.Message.getField(msg, 26),
    seats: jspb.Message.toObjectList(msg.getseats(),
    proto.SeatInfo.toObject, includeInstance),
    tableplayerinfos: jspb.Message.toObjectList(msg.gettableplayerinfos(),
    proto.TablePlayerInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameInfo}
 */
proto.GameInfo.fromObject = function(obj) {
  var f, msg = new proto.GameInfo();
  goog.isDef(obj.id) && jspb.Message.setField(msg, 1, obj.id);
  goog.isDef(obj.state) && jspb.Message.setField(msg, 2, obj.state);
  goog.isDef(obj.name) && jspb.Message.setField(msg, 3, obj.name);
  goog.isDef(obj.room_type) && jspb.Message.setField(msg, 4, obj.room_type);
  goog.isDef(obj.game_type) && jspb.Message.setField(msg, 5, obj.game_type);
  goog.isDef(obj.max_player_num) && jspb.Message.setField(msg, 6, obj.max_player_num);
  goog.isDef(obj.cur_player_num) && jspb.Message.setField(msg, 7, obj.cur_player_num);
  goog.isDef(obj.retain_to_time) && jspb.Message.setField(msg, 8, obj.retain_to_time);
  goog.isDef(obj.create_user_rid) && jspb.Message.setField(msg, 9, obj.create_user_rid);
  goog.isDef(obj.create_user_rolename) && jspb.Message.setField(msg, 10, obj.create_user_rolename);
  goog.isDef(obj.create_time) && jspb.Message.setField(msg, 11, obj.create_time);
  goog.isDef(obj.create_table_id) && jspb.Message.setField(msg, 12, obj.create_table_id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 13, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 14, obj.roomsvr_table_address);
  goog.isDef(obj.action_timeout) && jspb.Message.setField(msg, 15, obj.action_timeout);
  goog.isDef(obj.action_timeout_count) && jspb.Message.setField(msg, 16, obj.action_timeout_count);
  goog.isDef(obj.create_user_logo) && jspb.Message.setField(msg, 17, obj.create_user_logo);
  goog.isDef(obj.min_carry_coin) && jspb.Message.setField(msg, 18, obj.min_carry_coin);
  goog.isDef(obj.max_carry_coin) && jspb.Message.setField(msg, 19, obj.max_carry_coin);
  goog.isDef(obj.base_coin) && jspb.Message.setField(msg, 20, obj.base_coin);
  goog.isDef(obj.common_times) && jspb.Message.setField(msg, 21, obj.common_times);
  goog.isDef(obj.all_times) && jspb.Message.setField(msg, 22, obj.all_times);
  goog.isDef(obj.action_seat_index) && jspb.Message.setField(msg, 23, obj.action_seat_index);
  goog.isDef(obj.action_to_time) && jspb.Message.setField(msg, 24, obj.action_to_time);
  goog.isDef(obj.action_type) && jspb.Message.setField(msg, 25, obj.action_type);
  goog.isDef(obj.dz_seat_index) && jspb.Message.setField(msg, 26, obj.dz_seat_index);
  goog.isDef(obj.seats) && jspb.Message.setRepeatedWrapperField(
      msg, 27, goog.map(obj.seats, function(i) {
        return proto.SeatInfo.fromObject(i);
      }));
  goog.isDef(obj.tableplayerinfos) && jspb.Message.setRepeatedWrapperField(
      msg, 28, goog.map(obj.tableplayerinfos, function(i) {
        return proto.TablePlayerInfo.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameInfo}
 */
proto.GameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameInfo;
  return proto.GameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameInfo}
 */
proto.GameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setstate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroom_type(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgame_type(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmax_player_num(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcur_player_num(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setretain_to_time(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_user_rid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_user_rolename(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_time(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_table_id(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_timeout(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_timeout_count(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_user_logo(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmin_carry_coin(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setmax_carry_coin(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbase_coin(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcommon_times(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setall_times(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_seat_index(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_to_time(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_type(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setdz_seat_index(value);
      break;
    case 27:
      var value = new proto.SeatInfo;
      reader.readMessage(value,proto.SeatInfo.deserializeBinaryFromReader);
      msg.getseats().push(value);
      msg.setseats(msg.getseats());
      break;
    case 28:
      var value = new proto.TablePlayerInfo;
      reader.readMessage(value,proto.TablePlayerInfo.deserializeBinaryFromReader);
      msg.gettableplayerinfos().push(value);
      msg.settableplayerinfos(msg.gettableplayerinfos());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = jspb.Message.getField(this, 10);
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = jspb.Message.getField(this, 11);
  if (f != null) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = jspb.Message.getField(this, 12);
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = jspb.Message.getField(this, 13);
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = jspb.Message.getField(this, 14);
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = jspb.Message.getField(this, 15);
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = jspb.Message.getField(this, 16);
  if (f != null) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = jspb.Message.getField(this, 17);
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = jspb.Message.getField(this, 18);
  if (f != null) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = jspb.Message.getField(this, 19);
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = jspb.Message.getField(this, 20);
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = jspb.Message.getField(this, 21);
  if (f != null) {
    writer.writeInt32(
      21,
      f
    );
  }
  f = jspb.Message.getField(this, 22);
  if (f != null) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = jspb.Message.getField(this, 23);
  if (f != null) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = jspb.Message.getField(this, 24);
  if (f != null) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = jspb.Message.getField(this, 25);
  if (f != null) {
    writer.writeInt32(
      25,
      f
    );
  }
  f = jspb.Message.getField(this, 26);
  if (f != null) {
    writer.writeInt32(
      26,
      f
    );
  }
  f = this.getseats();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      27,
      f,
      proto.SeatInfo.serializeBinaryToWriter
    );
  }
  f = this.gettableplayerinfos();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto.TablePlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameInfo} The clone.
 */
proto.GameInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.GameInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.GameInfo.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GameInfo.prototype.clearid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 state = 2;
 * @return {number}
 */
proto.GameInfo.prototype.getstate = function() {
  return /** @type {number} */ (!this.hasstate() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setstate = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GameInfo.prototype.clearstate = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasstate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.GameInfo.prototype.getname = function() {
  return /** @type {string} */ (!this.hasname() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.GameInfo.prototype.setname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.GameInfo.prototype.clearname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 room_type = 4;
 * @return {number}
 */
proto.GameInfo.prototype.getroom_type = function() {
  return /** @type {number} */ (!this.hasroom_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setroom_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.GameInfo.prototype.clearroom_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasroom_type = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 game_type = 5;
 * @return {number}
 */
proto.GameInfo.prototype.getgame_type = function() {
  return /** @type {number} */ (!this.hasgame_type() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setgame_type = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.GameInfo.prototype.cleargame_type = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasgame_type = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 max_player_num = 6;
 * @return {number}
 */
proto.GameInfo.prototype.getmax_player_num = function() {
  return /** @type {number} */ (!this.hasmax_player_num() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setmax_player_num = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.GameInfo.prototype.clearmax_player_num = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasmax_player_num = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 cur_player_num = 7;
 * @return {number}
 */
proto.GameInfo.prototype.getcur_player_num = function() {
  return /** @type {number} */ (!this.hascur_player_num() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setcur_player_num = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.GameInfo.prototype.clearcur_player_num = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascur_player_num = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 retain_to_time = 8;
 * @return {number}
 */
proto.GameInfo.prototype.getretain_to_time = function() {
  return /** @type {number} */ (!this.hasretain_to_time() ? 0 : jspb.Message.getField(this, 8));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setretain_to_time = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.GameInfo.prototype.clearretain_to_time = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasretain_to_time = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 create_user_rid = 9;
 * @return {number}
 */
proto.GameInfo.prototype.getcreate_user_rid = function() {
  return /** @type {number} */ (!this.hascreate_user_rid() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setcreate_user_rid = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.GameInfo.prototype.clearcreate_user_rid = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascreate_user_rid = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string create_user_rolename = 10;
 * @return {string}
 */
proto.GameInfo.prototype.getcreate_user_rolename = function() {
  return /** @type {string} */ (!this.hascreate_user_rolename() ? "" : jspb.Message.getField(this, 10));
};


/** @param {string?|undefined} value  */
proto.GameInfo.prototype.setcreate_user_rolename = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.GameInfo.prototype.clearcreate_user_rolename = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascreate_user_rolename = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional int32 create_time = 11;
 * @return {number}
 */
proto.GameInfo.prototype.getcreate_time = function() {
  return /** @type {number} */ (!this.hascreate_time() ? 0 : jspb.Message.getField(this, 11));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setcreate_time = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.GameInfo.prototype.clearcreate_time = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascreate_time = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string create_table_id = 12;
 * @return {string}
 */
proto.GameInfo.prototype.getcreate_table_id = function() {
  return /** @type {string} */ (!this.hascreate_table_id() ? "" : jspb.Message.getField(this, 12));
};


/** @param {string?|undefined} value  */
proto.GameInfo.prototype.setcreate_table_id = function(value) {
  jspb.Message.setField(this, 12, value);
};


proto.GameInfo.prototype.clearcreate_table_id = function() {
  jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascreate_table_id = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string roomsvr_id = 13;
 * @return {string}
 */
proto.GameInfo.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 13));
};


/** @param {string?|undefined} value  */
proto.GameInfo.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 13, value);
};


proto.GameInfo.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 roomsvr_table_address = 14;
 * @return {number}
 */
proto.GameInfo.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 14));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 14, value);
};


proto.GameInfo.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 action_timeout = 15;
 * @return {number}
 */
proto.GameInfo.prototype.getaction_timeout = function() {
  return /** @type {number} */ (!this.hasaction_timeout() ? 0 : jspb.Message.getField(this, 15));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setaction_timeout = function(value) {
  jspb.Message.setField(this, 15, value);
};


proto.GameInfo.prototype.clearaction_timeout = function() {
  jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasaction_timeout = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 action_timeout_count = 16;
 * @return {number}
 */
proto.GameInfo.prototype.getaction_timeout_count = function() {
  return /** @type {number} */ (!this.hasaction_timeout_count() ? 0 : jspb.Message.getField(this, 16));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setaction_timeout_count = function(value) {
  jspb.Message.setField(this, 16, value);
};


proto.GameInfo.prototype.clearaction_timeout_count = function() {
  jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasaction_timeout_count = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string create_user_logo = 17;
 * @return {string}
 */
proto.GameInfo.prototype.getcreate_user_logo = function() {
  return /** @type {string} */ (!this.hascreate_user_logo() ? "" : jspb.Message.getField(this, 17));
};


/** @param {string?|undefined} value  */
proto.GameInfo.prototype.setcreate_user_logo = function(value) {
  jspb.Message.setField(this, 17, value);
};


proto.GameInfo.prototype.clearcreate_user_logo = function() {
  jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascreate_user_logo = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional int32 min_carry_coin = 18;
 * @return {number}
 */
proto.GameInfo.prototype.getmin_carry_coin = function() {
  return /** @type {number} */ (!this.hasmin_carry_coin() ? 0 : jspb.Message.getField(this, 18));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setmin_carry_coin = function(value) {
  jspb.Message.setField(this, 18, value);
};


proto.GameInfo.prototype.clearmin_carry_coin = function() {
  jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasmin_carry_coin = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 max_carry_coin = 19;
 * @return {number}
 */
proto.GameInfo.prototype.getmax_carry_coin = function() {
  return /** @type {number} */ (!this.hasmax_carry_coin() ? 0 : jspb.Message.getField(this, 19));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setmax_carry_coin = function(value) {
  jspb.Message.setField(this, 19, value);
};


proto.GameInfo.prototype.clearmax_carry_coin = function() {
  jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasmax_carry_coin = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 base_coin = 20;
 * @return {number}
 */
proto.GameInfo.prototype.getbase_coin = function() {
  return /** @type {number} */ (!this.hasbase_coin() ? 0 : jspb.Message.getField(this, 20));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setbase_coin = function(value) {
  jspb.Message.setField(this, 20, value);
};


proto.GameInfo.prototype.clearbase_coin = function() {
  jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasbase_coin = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int32 common_times = 21;
 * @return {number}
 */
proto.GameInfo.prototype.getcommon_times = function() {
  return /** @type {number} */ (!this.hascommon_times() ? 0 : jspb.Message.getField(this, 21));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setcommon_times = function(value) {
  jspb.Message.setField(this, 21, value);
};


proto.GameInfo.prototype.clearcommon_times = function() {
  jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hascommon_times = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional int32 all_times = 22;
 * @return {number}
 */
proto.GameInfo.prototype.getall_times = function() {
  return /** @type {number} */ (!this.hasall_times() ? 0 : jspb.Message.getField(this, 22));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setall_times = function(value) {
  jspb.Message.setField(this, 22, value);
};


proto.GameInfo.prototype.clearall_times = function() {
  jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasall_times = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional int32 action_seat_index = 23;
 * @return {number}
 */
proto.GameInfo.prototype.getaction_seat_index = function() {
  return /** @type {number} */ (!this.hasaction_seat_index() ? 0 : jspb.Message.getField(this, 23));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setaction_seat_index = function(value) {
  jspb.Message.setField(this, 23, value);
};


proto.GameInfo.prototype.clearaction_seat_index = function() {
  jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasaction_seat_index = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional int32 action_to_time = 24;
 * @return {number}
 */
proto.GameInfo.prototype.getaction_to_time = function() {
  return /** @type {number} */ (!this.hasaction_to_time() ? 0 : jspb.Message.getField(this, 24));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setaction_to_time = function(value) {
  jspb.Message.setField(this, 24, value);
};


proto.GameInfo.prototype.clearaction_to_time = function() {
  jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasaction_to_time = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional int32 action_type = 25;
 * @return {number}
 */
proto.GameInfo.prototype.getaction_type = function() {
  return /** @type {number} */ (!this.hasaction_type() ? 0 : jspb.Message.getField(this, 25));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setaction_type = function(value) {
  jspb.Message.setField(this, 25, value);
};


proto.GameInfo.prototype.clearaction_type = function() {
  jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasaction_type = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional int32 dz_seat_index = 26;
 * @return {number}
 */
proto.GameInfo.prototype.getdz_seat_index = function() {
  return /** @type {number} */ (!this.hasdz_seat_index() ? 0 : jspb.Message.getField(this, 26));
};


/** @param {number?|undefined} value  */
proto.GameInfo.prototype.setdz_seat_index = function(value) {
  jspb.Message.setField(this, 26, value);
};


proto.GameInfo.prototype.cleardz_seat_index = function() {
  jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameInfo.prototype.hasdz_seat_index = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * repeated SeatInfo seats = 27;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.SeatInfo>}
 */
proto.GameInfo.prototype.getseats = function() {
  return /** @type{!Array.<!proto.SeatInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SeatInfo, 27));
};


/** @param {Array.<!proto.SeatInfo>} value  */
proto.GameInfo.prototype.setseats = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 27, value);
};


proto.GameInfo.prototype.clearseats = function() {
  this.setseats([]);
};


/**
 * repeated TablePlayerInfo tableplayerinfos = 28;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.TablePlayerInfo>}
 */
proto.GameInfo.prototype.gettableplayerinfos = function() {
  return /** @type{!Array.<!proto.TablePlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TablePlayerInfo, 28));
};


/** @param {Array.<!proto.TablePlayerInfo>} value  */
proto.GameInfo.prototype.settableplayerinfos = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 28, value);
};


proto.GameInfo.prototype.cleartableplayerinfos = function() {
  this.settableplayerinfos([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AwardItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AwardItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AwardItem.displayName = 'proto.AwardItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AwardItem.prototype.toObject = function(opt_includeInstance) {
  return proto.AwardItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AwardItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.AwardItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    num: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.AwardItem}
 */
proto.AwardItem.fromObject = function(obj) {
  var f, msg = new proto.AwardItem();
  goog.isDef(obj.id) && jspb.Message.setField(msg, 1, obj.id);
  goog.isDef(obj.num) && jspb.Message.setField(msg, 2, obj.num);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AwardItem}
 */
proto.AwardItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AwardItem;
  return proto.AwardItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AwardItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AwardItem}
 */
proto.AwardItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.AwardItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.AwardItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AwardItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.AwardItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.AwardItem} The clone.
 */
proto.AwardItem.prototype.cloneMessage = function() {
  return /** @type {!proto.AwardItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.AwardItem.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.AwardItem.prototype.setid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.AwardItem.prototype.clearid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.AwardItem.prototype.hasid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 num = 2;
 * @return {number}
 */
proto.AwardItem.prototype.getnum = function() {
  return /** @type {number} */ (!this.hasnum() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.AwardItem.prototype.setnum = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.AwardItem.prototype.clearnum = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.AwardItem.prototype.hasnum = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LoginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LoginReq.displayName = 'proto.LoginReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LoginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    deviceinfo: jspb.Message.getField(msg, 2),
    uid: jspb.Message.getField(msg, 3),
    uidtype: jspb.Message.getField(msg, 4),
    thirdtoken: jspb.Message.getField(msg, 5),
    username: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.LoginReq}
 */
proto.LoginReq.fromObject = function(obj) {
  var f, msg = new proto.LoginReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.deviceinfo) && jspb.Message.setField(msg, 2, obj.deviceinfo);
  goog.isDef(obj.uid) && jspb.Message.setField(msg, 3, obj.uid);
  goog.isDef(obj.uidtype) && jspb.Message.setField(msg, 4, obj.uidtype);
  goog.isDef(obj.thirdtoken) && jspb.Message.setField(msg, 5, obj.thirdtoken);
  goog.isDef(obj.username) && jspb.Message.setField(msg, 6, obj.username);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginReq}
 */
proto.LoginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginReq;
  return proto.LoginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginReq}
 */
proto.LoginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setdeviceinfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setuidtype(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setthirdtoken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setusername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LoginReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LoginReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LoginReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.LoginReq} The clone.
 */
proto.LoginReq.prototype.cloneMessage = function() {
  return /** @type {!proto.LoginReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.LoginReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.LoginReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.LoginReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string deviceinfo = 2;
 * @return {string}
 */
proto.LoginReq.prototype.getdeviceinfo = function() {
  return /** @type {string} */ (!this.hasdeviceinfo() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.LoginReq.prototype.setdeviceinfo = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.LoginReq.prototype.cleardeviceinfo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasdeviceinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 uid = 3;
 * @return {number}
 */
proto.LoginReq.prototype.getuid = function() {
  return /** @type {number} */ (!this.hasuid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.LoginReq.prototype.setuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.LoginReq.prototype.clearuid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasuid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 uidtype = 4;
 * @return {number}
 */
proto.LoginReq.prototype.getuidtype = function() {
  return /** @type {number} */ (!this.hasuidtype() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.LoginReq.prototype.setuidtype = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.LoginReq.prototype.clearuidtype = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasuidtype = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string thirdtoken = 5;
 * @return {string}
 */
proto.LoginReq.prototype.getthirdtoken = function() {
  return /** @type {string} */ (!this.hasthirdtoken() ? "" : jspb.Message.getField(this, 5));
};


/** @param {string?|undefined} value  */
proto.LoginReq.prototype.setthirdtoken = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.LoginReq.prototype.clearthirdtoken = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasthirdtoken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string username = 6;
 * @return {string}
 */
proto.LoginReq.prototype.getusername = function() {
  return /** @type {string} */ (!this.hasusername() ? "" : jspb.Message.getField(this, 6));
};


/** @param {string?|undefined} value  */
proto.LoginReq.prototype.setusername = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.LoginReq.prototype.clearusername = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginReq.prototype.hasusername = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LoginRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LoginRes.repeatedFields_, null);
};
goog.inherits(proto.LoginRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LoginRes.displayName = 'proto.LoginRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LoginRes.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LoginRes.prototype.toObject = function(opt_includeInstance) {
  return proto.LoginRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LoginRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LoginRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    uid: jspb.Message.getField(msg, 3),
    rid: jspb.Message.getField(msg, 4),
    logintoken: jspb.Message.getField(msg, 5),
    expiretime: jspb.Message.getField(msg, 6),
    gatesvrs: jspb.Message.toObjectList(msg.getgatesvrs(),
    proto.GateSvrItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.LoginRes}
 */
proto.LoginRes.fromObject = function(obj) {
  var f, msg = new proto.LoginRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.uid) && jspb.Message.setField(msg, 3, obj.uid);
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 4, obj.rid);
  goog.isDef(obj.logintoken) && jspb.Message.setField(msg, 5, obj.logintoken);
  goog.isDef(obj.expiretime) && jspb.Message.setField(msg, 6, obj.expiretime);
  goog.isDef(obj.gatesvrs) && jspb.Message.setRepeatedWrapperField(
      msg, 7, goog.map(obj.gatesvrs, function(i) {
        return proto.GateSvrItem.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LoginRes}
 */
proto.LoginRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LoginRes;
  return proto.LoginRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LoginRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LoginRes}
 */
proto.LoginRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogintoken(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setexpiretime(value);
      break;
    case 7:
      var value = new proto.GateSvrItem;
      reader.readMessage(value,proto.GateSvrItem.deserializeBinaryFromReader);
      msg.getgatesvrs().push(value);
      msg.setgatesvrs(msg.getgatesvrs());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LoginRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LoginRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LoginRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LoginRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getgatesvrs();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.GateSvrItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.LoginRes} The clone.
 */
proto.LoginRes.prototype.cloneMessage = function() {
  return /** @type {!proto.LoginRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.LoginRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.LoginRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.LoginRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.LoginRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.LoginRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.LoginRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 uid = 3;
 * @return {number}
 */
proto.LoginRes.prototype.getuid = function() {
  return /** @type {number} */ (!this.hasuid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.LoginRes.prototype.setuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.LoginRes.prototype.clearuid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.hasuid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 rid = 4;
 * @return {number}
 */
proto.LoginRes.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.LoginRes.prototype.setrid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.LoginRes.prototype.clearrid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.hasrid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string logintoken = 5;
 * @return {string}
 */
proto.LoginRes.prototype.getlogintoken = function() {
  return /** @type {string} */ (!this.haslogintoken() ? "" : jspb.Message.getField(this, 5));
};


/** @param {string?|undefined} value  */
proto.LoginRes.prototype.setlogintoken = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.LoginRes.prototype.clearlogintoken = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.haslogintoken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 expiretime = 6;
 * @return {number}
 */
proto.LoginRes.prototype.getexpiretime = function() {
  return /** @type {number} */ (!this.hasexpiretime() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.LoginRes.prototype.setexpiretime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.LoginRes.prototype.clearexpiretime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LoginRes.prototype.hasexpiretime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated GateSvrItem gatesvrs = 7;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.GateSvrItem>}
 */
proto.LoginRes.prototype.getgatesvrs = function() {
  return /** @type{!Array.<!proto.GateSvrItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.GateSvrItem, 7));
};


/** @param {Array.<!proto.GateSvrItem>} value  */
proto.LoginRes.prototype.setgatesvrs = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


proto.LoginRes.prototype.cleargatesvrs = function() {
  this.setgatesvrs([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HeartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HeartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.HeartReq.displayName = 'proto.HeartReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HeartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.HeartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HeartReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.HeartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.HeartReq}
 */
proto.HeartReq.fromObject = function(obj) {
  var f, msg = new proto.HeartReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HeartReq}
 */
proto.HeartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HeartReq;
  return proto.HeartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HeartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HeartReq}
 */
proto.HeartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.HeartReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.HeartReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HeartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.HeartReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.HeartReq} The clone.
 */
proto.HeartReq.prototype.cloneMessage = function() {
  return /** @type {!proto.HeartReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.HeartReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.HeartReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.HeartReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.HeartReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HeartRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HeartRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.HeartRes.displayName = 'proto.HeartRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HeartRes.prototype.toObject = function(opt_includeInstance) {
  return proto.HeartRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HeartRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.HeartRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    servertime: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.HeartRes}
 */
proto.HeartRes.fromObject = function(obj) {
  var f, msg = new proto.HeartRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.servertime) && jspb.Message.setField(msg, 3, obj.servertime);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HeartRes}
 */
proto.HeartRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HeartRes;
  return proto.HeartRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HeartRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HeartRes}
 */
proto.HeartRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setservertime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.HeartRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.HeartRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HeartRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.HeartRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.HeartRes} The clone.
 */
proto.HeartRes.prototype.cloneMessage = function() {
  return /** @type {!proto.HeartRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.HeartRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.HeartRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.HeartRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.HeartRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.HeartRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.HeartRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.HeartRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.HeartRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 servertime = 3;
 * @return {number}
 */
proto.HeartRes.prototype.getservertime = function() {
  return /** @type {number} */ (!this.hasservertime() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.HeartRes.prototype.setservertime = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.HeartRes.prototype.clearservertime = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.HeartRes.prototype.hasservertime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QiniuUploadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QiniuUploadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.QiniuUploadReq.displayName = 'proto.QiniuUploadReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QiniuUploadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.QiniuUploadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QiniuUploadReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.QiniuUploadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    uploadlogo: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.QiniuUploadReq}
 */
proto.QiniuUploadReq.fromObject = function(obj) {
  var f, msg = new proto.QiniuUploadReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.uploadlogo) && jspb.Message.setField(msg, 2, obj.uploadlogo);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QiniuUploadReq}
 */
proto.QiniuUploadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QiniuUploadReq;
  return proto.QiniuUploadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QiniuUploadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QiniuUploadReq}
 */
proto.QiniuUploadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setuploadlogo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.QiniuUploadReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.QiniuUploadReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QiniuUploadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.QiniuUploadReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.QiniuUploadReq} The clone.
 */
proto.QiniuUploadReq.prototype.cloneMessage = function() {
  return /** @type {!proto.QiniuUploadReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.QiniuUploadReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.QiniuUploadReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.QiniuUploadReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QiniuUploadReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uploadlogo = 2;
 * @return {string}
 */
proto.QiniuUploadReq.prototype.getuploadlogo = function() {
  return /** @type {string} */ (!this.hasuploadlogo() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.QiniuUploadReq.prototype.setuploadlogo = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.QiniuUploadReq.prototype.clearuploadlogo = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QiniuUploadReq.prototype.hasuploadlogo = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QiniuUploadRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QiniuUploadRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.QiniuUploadRes.displayName = 'proto.QiniuUploadRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QiniuUploadRes.prototype.toObject = function(opt_includeInstance) {
  return proto.QiniuUploadRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QiniuUploadRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.QiniuUploadRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    uploadtoken: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.QiniuUploadRes}
 */
proto.QiniuUploadRes.fromObject = function(obj) {
  var f, msg = new proto.QiniuUploadRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.uploadtoken) && jspb.Message.setField(msg, 3, obj.uploadtoken);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QiniuUploadRes}
 */
proto.QiniuUploadRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QiniuUploadRes;
  return proto.QiniuUploadRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QiniuUploadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QiniuUploadRes}
 */
proto.QiniuUploadRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setuploadtoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.QiniuUploadRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.QiniuUploadRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QiniuUploadRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.QiniuUploadRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.QiniuUploadRes} The clone.
 */
proto.QiniuUploadRes.prototype.cloneMessage = function() {
  return /** @type {!proto.QiniuUploadRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.QiniuUploadRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.QiniuUploadRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.QiniuUploadRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QiniuUploadRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.QiniuUploadRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.QiniuUploadRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.QiniuUploadRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QiniuUploadRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string uploadtoken = 3;
 * @return {string}
 */
proto.QiniuUploadRes.prototype.getuploadtoken = function() {
  return /** @type {string} */ (!this.hasuploadtoken() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.QiniuUploadRes.prototype.setuploadtoken = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.QiniuUploadRes.prototype.clearuploadtoken = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QiniuUploadRes.prototype.hasuploadtoken = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnterGameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnterGameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EnterGameReq.displayName = 'proto.EnterGameReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnterGameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.EnterGameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnterGameReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EnterGameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    device_info: jspb.Message.getField(msg, 2),
    uid: jspb.Message.getField(msg, 3),
    rid: jspb.Message.getField(msg, 4),
    expiretime: jspb.Message.getField(msg, 5),
    logintoken: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.EnterGameReq}
 */
proto.EnterGameReq.fromObject = function(obj) {
  var f, msg = new proto.EnterGameReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.device_info) && jspb.Message.setField(msg, 2, obj.device_info);
  goog.isDef(obj.uid) && jspb.Message.setField(msg, 3, obj.uid);
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 4, obj.rid);
  goog.isDef(obj.expiretime) && jspb.Message.setField(msg, 5, obj.expiretime);
  goog.isDef(obj.logintoken) && jspb.Message.setField(msg, 6, obj.logintoken);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnterGameReq}
 */
proto.EnterGameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnterGameReq;
  return proto.EnterGameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnterGameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnterGameReq}
 */
proto.EnterGameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setdevice_info(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setexpiretime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogintoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EnterGameReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterGameReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnterGameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterGameReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EnterGameReq} The clone.
 */
proto.EnterGameReq.prototype.cloneMessage = function() {
  return /** @type {!proto.EnterGameReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.EnterGameReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.EnterGameReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.EnterGameReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string device_info = 2;
 * @return {string}
 */
proto.EnterGameReq.prototype.getdevice_info = function() {
  return /** @type {string} */ (!this.hasdevice_info() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.EnterGameReq.prototype.setdevice_info = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.EnterGameReq.prototype.cleardevice_info = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.hasdevice_info = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 uid = 3;
 * @return {number}
 */
proto.EnterGameReq.prototype.getuid = function() {
  return /** @type {number} */ (!this.hasuid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.EnterGameReq.prototype.setuid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.EnterGameReq.prototype.clearuid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.hasuid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 rid = 4;
 * @return {number}
 */
proto.EnterGameReq.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.EnterGameReq.prototype.setrid = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.EnterGameReq.prototype.clearrid = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.hasrid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 expiretime = 5;
 * @return {number}
 */
proto.EnterGameReq.prototype.getexpiretime = function() {
  return /** @type {number} */ (!this.hasexpiretime() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.EnterGameReq.prototype.setexpiretime = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.EnterGameReq.prototype.clearexpiretime = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.hasexpiretime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string logintoken = 6;
 * @return {string}
 */
proto.EnterGameReq.prototype.getlogintoken = function() {
  return /** @type {string} */ (!this.haslogintoken() ? "" : jspb.Message.getField(this, 6));
};


/** @param {string?|undefined} value  */
proto.EnterGameReq.prototype.setlogintoken = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.EnterGameReq.prototype.clearlogintoken = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameReq.prototype.haslogintoken = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnterGameRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnterGameRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EnterGameRes.displayName = 'proto.EnterGameRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnterGameRes.prototype.toObject = function(opt_includeInstance) {
  return proto.EnterGameRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnterGameRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EnterGameRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    isreauth: jspb.Message.getField(msg, 3),
    servertime: jspb.Message.getField(msg, 4),
    baseinfo: (f = msg.getbaseinfo()) && proto.PlayerBaseinfo.toObject(includeInstance, f),
    ip: jspb.Message.getField(msg, 6),
    port: jspb.Message.getField(msg, 7),
    roomsvr_id: jspb.Message.getField(msg, 8),
    roomsvr_table_address: jspb.Message.getField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.EnterGameRes}
 */
proto.EnterGameRes.fromObject = function(obj) {
  var f, msg = new proto.EnterGameRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.isreauth) && jspb.Message.setField(msg, 3, obj.isreauth);
  goog.isDef(obj.servertime) && jspb.Message.setField(msg, 4, obj.servertime);
  goog.isDef(obj.baseinfo) && jspb.Message.setWrapperField(
      msg, 5, proto.PlayerBaseinfo.fromObject(obj.baseinfo));
  goog.isDef(obj.ip) && jspb.Message.setField(msg, 6, obj.ip);
  goog.isDef(obj.port) && jspb.Message.setField(msg, 7, obj.port);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 8, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 9, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnterGameRes}
 */
proto.EnterGameRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnterGameRes;
  return proto.EnterGameRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnterGameRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnterGameRes}
 */
proto.EnterGameRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setisreauth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setservertime(value);
      break;
    case 5:
      var value = new proto.PlayerBaseinfo;
      reader.readMessage(value,proto.PlayerBaseinfo.deserializeBinaryFromReader);
      msg.setbaseinfo(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setip(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setport(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EnterGameRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterGameRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnterGameRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterGameRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getbaseinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.PlayerBaseinfo.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = jspb.Message.getField(this, 8);
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = jspb.Message.getField(this, 9);
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EnterGameRes} The clone.
 */
proto.EnterGameRes.prototype.cloneMessage = function() {
  return /** @type {!proto.EnterGameRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.EnterGameRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.EnterGameRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.EnterGameRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.EnterGameRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.EnterGameRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.EnterGameRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 isreauth = 3;
 * @return {number}
 */
proto.EnterGameRes.prototype.getisreauth = function() {
  return /** @type {number} */ (!this.hasisreauth() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.EnterGameRes.prototype.setisreauth = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.EnterGameRes.prototype.clearisreauth = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasisreauth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 servertime = 4;
 * @return {number}
 */
proto.EnterGameRes.prototype.getservertime = function() {
  return /** @type {number} */ (!this.hasservertime() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.EnterGameRes.prototype.setservertime = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.EnterGameRes.prototype.clearservertime = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasservertime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PlayerBaseinfo baseinfo = 5;
 * @return {proto.PlayerBaseinfo}
 */
proto.EnterGameRes.prototype.getbaseinfo = function() {
  return /** @type{proto.PlayerBaseinfo} */ (
    jspb.Message.getWrapperField(this, proto.PlayerBaseinfo, 5));
};


/** @param {proto.PlayerBaseinfo|undefined} value  */
proto.EnterGameRes.prototype.setbaseinfo = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.EnterGameRes.prototype.clearbaseinfo = function() {
  this.setbaseinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasbaseinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string ip = 6;
 * @return {string}
 */
proto.EnterGameRes.prototype.getip = function() {
  return /** @type {string} */ (!this.hasip() ? "" : jspb.Message.getField(this, 6));
};


/** @param {string?|undefined} value  */
proto.EnterGameRes.prototype.setip = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.EnterGameRes.prototype.clearip = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasip = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 port = 7;
 * @return {number}
 */
proto.EnterGameRes.prototype.getport = function() {
  return /** @type {number} */ (!this.hasport() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.EnterGameRes.prototype.setport = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.EnterGameRes.prototype.clearport = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasport = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string roomsvr_id = 8;
 * @return {string}
 */
proto.EnterGameRes.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 8));
};


/** @param {string?|undefined} value  */
proto.EnterGameRes.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.EnterGameRes.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 roomsvr_table_address = 9;
 * @return {number}
 */
proto.EnterGameRes.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 9));
};


/** @param {number?|undefined} value  */
proto.EnterGameRes.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.EnterGameRes.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterGameRes.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerBaseinfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerBaseinfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerBaseinfoReq.displayName = 'proto.PlayerBaseinfoReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerBaseinfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerBaseinfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerBaseinfoReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerBaseinfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    rid: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerBaseinfoReq}
 */
proto.PlayerBaseinfoReq.fromObject = function(obj) {
  var f, msg = new proto.PlayerBaseinfoReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 2, obj.rid);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerBaseinfoReq}
 */
proto.PlayerBaseinfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerBaseinfoReq;
  return proto.PlayerBaseinfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerBaseinfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerBaseinfoReq}
 */
proto.PlayerBaseinfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerBaseinfoReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfoReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerBaseinfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfoReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerBaseinfoReq} The clone.
 */
proto.PlayerBaseinfoReq.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerBaseinfoReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.PlayerBaseinfoReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.PlayerBaseinfoReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.PlayerBaseinfoReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfoReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 rid = 2;
 * @return {number}
 */
proto.PlayerBaseinfoReq.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfoReq.prototype.setrid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerBaseinfoReq.prototype.clearrid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfoReq.prototype.hasrid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerBaseinfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerBaseinfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerBaseinfoRes.displayName = 'proto.PlayerBaseinfoRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerBaseinfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerBaseinfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerBaseinfoRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerBaseinfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    baseinfo: (f = msg.getbaseinfo()) && proto.PlayerBaseinfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerBaseinfoRes}
 */
proto.PlayerBaseinfoRes.fromObject = function(obj) {
  var f, msg = new proto.PlayerBaseinfoRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.baseinfo) && jspb.Message.setWrapperField(
      msg, 3, proto.PlayerBaseinfo.fromObject(obj.baseinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerBaseinfoRes}
 */
proto.PlayerBaseinfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerBaseinfoRes;
  return proto.PlayerBaseinfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerBaseinfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerBaseinfoRes}
 */
proto.PlayerBaseinfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.PlayerBaseinfo;
      reader.readMessage(value,proto.PlayerBaseinfo.deserializeBinaryFromReader);
      msg.setbaseinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerBaseinfoRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfoRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerBaseinfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseinfoRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getbaseinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PlayerBaseinfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerBaseinfoRes} The clone.
 */
proto.PlayerBaseinfoRes.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerBaseinfoRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.PlayerBaseinfoRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerBaseinfoRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerBaseinfoRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfoRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.PlayerBaseinfoRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.PlayerBaseinfoRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerBaseinfoRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfoRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PlayerBaseinfo baseinfo = 3;
 * @return {proto.PlayerBaseinfo}
 */
proto.PlayerBaseinfoRes.prototype.getbaseinfo = function() {
  return /** @type{proto.PlayerBaseinfo} */ (
    jspb.Message.getWrapperField(this, proto.PlayerBaseinfo, 3));
};


/** @param {proto.PlayerBaseinfo|undefined} value  */
proto.PlayerBaseinfoRes.prototype.setbaseinfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.PlayerBaseinfoRes.prototype.clearbaseinfo = function() {
  this.setbaseinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseinfoRes.prototype.hasbaseinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateinfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateinfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UpdateinfoReq.displayName = 'proto.UpdateinfoReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateinfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateinfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateinfoReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.UpdateinfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    rolename: jspb.Message.getField(msg, 2),
    logo: jspb.Message.getField(msg, 3),
    phone: jspb.Message.getField(msg, 4),
    sex: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.UpdateinfoReq}
 */
proto.UpdateinfoReq.fromObject = function(obj) {
  var f, msg = new proto.UpdateinfoReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 2, obj.rolename);
  goog.isDef(obj.logo) && jspb.Message.setField(msg, 3, obj.logo);
  goog.isDef(obj.phone) && jspb.Message.setField(msg, 4, obj.phone);
  goog.isDef(obj.sex) && jspb.Message.setField(msg, 5, obj.sex);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateinfoReq}
 */
proto.UpdateinfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateinfoReq;
  return proto.UpdateinfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateinfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateinfoReq}
 */
proto.UpdateinfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setphone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setsex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.UpdateinfoReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateinfoReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateinfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateinfoReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.UpdateinfoReq} The clone.
 */
proto.UpdateinfoReq.prototype.cloneMessage = function() {
  return /** @type {!proto.UpdateinfoReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.UpdateinfoReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.UpdateinfoReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.UpdateinfoReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rolename = 2;
 * @return {string}
 */
proto.UpdateinfoReq.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoReq.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.UpdateinfoReq.prototype.clearrolename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoReq.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string logo = 3;
 * @return {string}
 */
proto.UpdateinfoReq.prototype.getlogo = function() {
  return /** @type {string} */ (!this.haslogo() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoReq.prototype.setlogo = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.UpdateinfoReq.prototype.clearlogo = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoReq.prototype.haslogo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.UpdateinfoReq.prototype.getphone = function() {
  return /** @type {string} */ (!this.hasphone() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoReq.prototype.setphone = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.UpdateinfoReq.prototype.clearphone = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoReq.prototype.hasphone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 sex = 5;
 * @return {number}
 */
proto.UpdateinfoReq.prototype.getsex = function() {
  return /** @type {number} */ (!this.hassex() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.UpdateinfoReq.prototype.setsex = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.UpdateinfoReq.prototype.clearsex = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoReq.prototype.hassex = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateinfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateinfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UpdateinfoRes.displayName = 'proto.UpdateinfoRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateinfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateinfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateinfoRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.UpdateinfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    rolename: jspb.Message.getField(msg, 3),
    logo: jspb.Message.getField(msg, 4),
    phone: jspb.Message.getField(msg, 5),
    sex: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.UpdateinfoRes}
 */
proto.UpdateinfoRes.fromObject = function(obj) {
  var f, msg = new proto.UpdateinfoRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 3, obj.rolename);
  goog.isDef(obj.logo) && jspb.Message.setField(msg, 4, obj.logo);
  goog.isDef(obj.phone) && jspb.Message.setField(msg, 5, obj.phone);
  goog.isDef(obj.sex) && jspb.Message.setField(msg, 6, obj.sex);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateinfoRes}
 */
proto.UpdateinfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateinfoRes;
  return proto.UpdateinfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateinfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateinfoRes}
 */
proto.UpdateinfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setlogo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setphone(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setsex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.UpdateinfoRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateinfoRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateinfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.UpdateinfoRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.UpdateinfoRes} The clone.
 */
proto.UpdateinfoRes.prototype.cloneMessage = function() {
  return /** @type {!proto.UpdateinfoRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.UpdateinfoRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.UpdateinfoRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.UpdateinfoRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.UpdateinfoRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.UpdateinfoRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string rolename = 3;
 * @return {string}
 */
proto.UpdateinfoRes.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoRes.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.UpdateinfoRes.prototype.clearrolename = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string logo = 4;
 * @return {string}
 */
proto.UpdateinfoRes.prototype.getlogo = function() {
  return /** @type {string} */ (!this.haslogo() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoRes.prototype.setlogo = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.UpdateinfoRes.prototype.clearlogo = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.haslogo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string phone = 5;
 * @return {string}
 */
proto.UpdateinfoRes.prototype.getphone = function() {
  return /** @type {string} */ (!this.hasphone() ? "" : jspb.Message.getField(this, 5));
};


/** @param {string?|undefined} value  */
proto.UpdateinfoRes.prototype.setphone = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.UpdateinfoRes.prototype.clearphone = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.hasphone = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 sex = 6;
 * @return {number}
 */
proto.UpdateinfoRes.prototype.getsex = function() {
  return /** @type {number} */ (!this.hassex() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.UpdateinfoRes.prototype.setsex = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.UpdateinfoRes.prototype.clearsex = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.UpdateinfoRes.prototype.hassex = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateFriendTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateFriendTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CreateFriendTableReq.displayName = 'proto.CreateFriendTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateFriendTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateFriendTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateFriendTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CreateFriendTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    action_timeout: jspb.Message.getField(msg, 2),
    retain_time: jspb.Message.getField(msg, 3),
    base_coin: jspb.Message.getField(msg, 4),
    iscontrol: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.CreateFriendTableReq}
 */
proto.CreateFriendTableReq.fromObject = function(obj) {
  var f, msg = new proto.CreateFriendTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.action_timeout) && jspb.Message.setField(msg, 2, obj.action_timeout);
  goog.isDef(obj.retain_time) && jspb.Message.setField(msg, 3, obj.retain_time);
  goog.isDef(obj.base_coin) && jspb.Message.setField(msg, 4, obj.base_coin);
  goog.isDef(obj.iscontrol) && jspb.Message.setField(msg, 5, obj.iscontrol);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateFriendTableReq}
 */
proto.CreateFriendTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateFriendTableReq;
  return proto.CreateFriendTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateFriendTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateFriendTableReq}
 */
proto.CreateFriendTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_timeout(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setretain_time(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbase_coin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setiscontrol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CreateFriendTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CreateFriendTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateFriendTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CreateFriendTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CreateFriendTableReq} The clone.
 */
proto.CreateFriendTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.CreateFriendTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.CreateFriendTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.CreateFriendTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.CreateFriendTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 action_timeout = 2;
 * @return {number}
 */
proto.CreateFriendTableReq.prototype.getaction_timeout = function() {
  return /** @type {number} */ (!this.hasaction_timeout() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.CreateFriendTableReq.prototype.setaction_timeout = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CreateFriendTableReq.prototype.clearaction_timeout = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableReq.prototype.hasaction_timeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 retain_time = 3;
 * @return {number}
 */
proto.CreateFriendTableReq.prototype.getretain_time = function() {
  return /** @type {number} */ (!this.hasretain_time() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.CreateFriendTableReq.prototype.setretain_time = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CreateFriendTableReq.prototype.clearretain_time = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableReq.prototype.hasretain_time = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 base_coin = 4;
 * @return {number}
 */
proto.CreateFriendTableReq.prototype.getbase_coin = function() {
  return /** @type {number} */ (!this.hasbase_coin() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.CreateFriendTableReq.prototype.setbase_coin = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.CreateFriendTableReq.prototype.clearbase_coin = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableReq.prototype.hasbase_coin = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 iscontrol = 5;
 * @return {number}
 */
proto.CreateFriendTableReq.prototype.getiscontrol = function() {
  return /** @type {number} */ (!this.hasiscontrol() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.CreateFriendTableReq.prototype.setiscontrol = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.CreateFriendTableReq.prototype.cleariscontrol = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableReq.prototype.hasiscontrol = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateFriendTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateFriendTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CreateFriendTableRes.displayName = 'proto.CreateFriendTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateFriendTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateFriendTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateFriendTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CreateFriendTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    create_table_id: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.CreateFriendTableRes}
 */
proto.CreateFriendTableRes.fromObject = function(obj) {
  var f, msg = new proto.CreateFriendTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.create_table_id) && jspb.Message.setField(msg, 3, obj.create_table_id);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateFriendTableRes}
 */
proto.CreateFriendTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateFriendTableRes;
  return proto.CreateFriendTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateFriendTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateFriendTableRes}
 */
proto.CreateFriendTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_table_id(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CreateFriendTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CreateFriendTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateFriendTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CreateFriendTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CreateFriendTableRes} The clone.
 */
proto.CreateFriendTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.CreateFriendTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.CreateFriendTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.CreateFriendTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CreateFriendTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.CreateFriendTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.CreateFriendTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.CreateFriendTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string create_table_id = 3;
 * @return {string}
 */
proto.CreateFriendTableRes.prototype.getcreate_table_id = function() {
  return /** @type {string} */ (!this.hascreate_table_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.CreateFriendTableRes.prototype.setcreate_table_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.CreateFriendTableRes.prototype.clearcreate_table_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CreateFriendTableRes.prototype.hascreate_table_id = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTableStateByCreateIdReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTableStateByCreateIdReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetTableStateByCreateIdReq.displayName = 'proto.GetTableStateByCreateIdReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTableStateByCreateIdReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTableStateByCreateIdReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTableStateByCreateIdReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetTableStateByCreateIdReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    create_table_id: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetTableStateByCreateIdReq}
 */
proto.GetTableStateByCreateIdReq.fromObject = function(obj) {
  var f, msg = new proto.GetTableStateByCreateIdReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.create_table_id) && jspb.Message.setField(msg, 2, obj.create_table_id);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTableStateByCreateIdReq}
 */
proto.GetTableStateByCreateIdReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTableStateByCreateIdReq;
  return proto.GetTableStateByCreateIdReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTableStateByCreateIdReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTableStateByCreateIdReq}
 */
proto.GetTableStateByCreateIdReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setcreate_table_id(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetTableStateByCreateIdReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetTableStateByCreateIdReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTableStateByCreateIdReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetTableStateByCreateIdReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetTableStateByCreateIdReq} The clone.
 */
proto.GetTableStateByCreateIdReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GetTableStateByCreateIdReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GetTableStateByCreateIdReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GetTableStateByCreateIdReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetTableStateByCreateIdReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetTableStateByCreateIdReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string create_table_id = 2;
 * @return {string}
 */
proto.GetTableStateByCreateIdReq.prototype.getcreate_table_id = function() {
  return /** @type {string} */ (!this.hascreate_table_id() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetTableStateByCreateIdReq.prototype.setcreate_table_id = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetTableStateByCreateIdReq.prototype.clearcreate_table_id = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetTableStateByCreateIdReq.prototype.hascreate_table_id = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTableStateByCreateIdRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTableStateByCreateIdRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetTableStateByCreateIdRes.displayName = 'proto.GetTableStateByCreateIdRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTableStateByCreateIdRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTableStateByCreateIdRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTableStateByCreateIdRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetTableStateByCreateIdRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    tablestate: (f = msg.gettablestate()) && proto.TableStateItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetTableStateByCreateIdRes}
 */
proto.GetTableStateByCreateIdRes.fromObject = function(obj) {
  var f, msg = new proto.GetTableStateByCreateIdRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.tablestate) && jspb.Message.setWrapperField(
      msg, 3, proto.TableStateItem.fromObject(obj.tablestate));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTableStateByCreateIdRes}
 */
proto.GetTableStateByCreateIdRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTableStateByCreateIdRes;
  return proto.GetTableStateByCreateIdRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTableStateByCreateIdRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTableStateByCreateIdRes}
 */
proto.GetTableStateByCreateIdRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.TableStateItem;
      reader.readMessage(value,proto.TableStateItem.deserializeBinaryFromReader);
      msg.settablestate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetTableStateByCreateIdRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetTableStateByCreateIdRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTableStateByCreateIdRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetTableStateByCreateIdRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.gettablestate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TableStateItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetTableStateByCreateIdRes} The clone.
 */
proto.GetTableStateByCreateIdRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GetTableStateByCreateIdRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GetTableStateByCreateIdRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GetTableStateByCreateIdRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GetTableStateByCreateIdRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetTableStateByCreateIdRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GetTableStateByCreateIdRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetTableStateByCreateIdRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetTableStateByCreateIdRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetTableStateByCreateIdRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TableStateItem tablestate = 3;
 * @return {proto.TableStateItem}
 */
proto.GetTableStateByCreateIdRes.prototype.gettablestate = function() {
  return /** @type{proto.TableStateItem} */ (
    jspb.Message.getWrapperField(this, proto.TableStateItem, 3));
};


/** @param {proto.TableStateItem|undefined} value  */
proto.GetTableStateByCreateIdRes.prototype.settablestate = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.GetTableStateByCreateIdRes.prototype.cleartablestate = function() {
  this.settablestate(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetTableStateByCreateIdRes.prototype.hastablestate = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetFriendTableListReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetFriendTableListReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetFriendTableListReq.displayName = 'proto.GetFriendTableListReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetFriendTableListReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFriendTableListReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFriendTableListReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetFriendTableListReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetFriendTableListReq}
 */
proto.GetFriendTableListReq.fromObject = function(obj) {
  var f, msg = new proto.GetFriendTableListReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetFriendTableListReq}
 */
proto.GetFriendTableListReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFriendTableListReq;
  return proto.GetFriendTableListReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFriendTableListReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFriendTableListReq}
 */
proto.GetFriendTableListReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetFriendTableListReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetFriendTableListReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetFriendTableListReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetFriendTableListReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetFriendTableListReq} The clone.
 */
proto.GetFriendTableListReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GetFriendTableListReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GetFriendTableListReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GetFriendTableListReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetFriendTableListReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetFriendTableListReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetFriendTableListRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetFriendTableListRes.repeatedFields_, null);
};
goog.inherits(proto.GetFriendTableListRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetFriendTableListRes.displayName = 'proto.GetFriendTableListRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetFriendTableListRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetFriendTableListRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GetFriendTableListRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetFriendTableListRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetFriendTableListRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    tablelist: jspb.Message.toObjectList(msg.gettablelist(),
    proto.TableStateItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetFriendTableListRes}
 */
proto.GetFriendTableListRes.fromObject = function(obj) {
  var f, msg = new proto.GetFriendTableListRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.tablelist) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.tablelist, function(i) {
        return proto.TableStateItem.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetFriendTableListRes}
 */
proto.GetFriendTableListRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetFriendTableListRes;
  return proto.GetFriendTableListRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetFriendTableListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetFriendTableListRes}
 */
proto.GetFriendTableListRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.TableStateItem;
      reader.readMessage(value,proto.TableStateItem.deserializeBinaryFromReader);
      msg.gettablelist().push(value);
      msg.settablelist(msg.gettablelist());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetFriendTableListRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetFriendTableListRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetFriendTableListRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetFriendTableListRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.gettablelist();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.TableStateItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetFriendTableListRes} The clone.
 */
proto.GetFriendTableListRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GetFriendTableListRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GetFriendTableListRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GetFriendTableListRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GetFriendTableListRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetFriendTableListRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GetFriendTableListRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetFriendTableListRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetFriendTableListRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetFriendTableListRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TableStateItem tablelist = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.TableStateItem>}
 */
proto.GetFriendTableListRes.prototype.gettablelist = function() {
  return /** @type{!Array.<!proto.TableStateItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TableStateItem, 3));
};


/** @param {Array.<!proto.TableStateItem>} value  */
proto.GetFriendTableListRes.prototype.settablelist = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.GetFriendTableListRes.prototype.cleartablelist = function() {
  this.settablelist([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetGameRoomsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetGameRoomsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetGameRoomsReq.displayName = 'proto.GetGameRoomsReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetGameRoomsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetGameRoomsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetGameRoomsReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetGameRoomsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    room_type: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetGameRoomsReq}
 */
proto.GetGameRoomsReq.fromObject = function(obj) {
  var f, msg = new proto.GetGameRoomsReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.room_type) && jspb.Message.setField(msg, 2, obj.room_type);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetGameRoomsReq}
 */
proto.GetGameRoomsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetGameRoomsReq;
  return proto.GetGameRoomsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetGameRoomsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetGameRoomsReq}
 */
proto.GetGameRoomsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroom_type(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetGameRoomsReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetGameRoomsReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetGameRoomsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetGameRoomsReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetGameRoomsReq} The clone.
 */
proto.GetGameRoomsReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GetGameRoomsReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GetGameRoomsReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GetGameRoomsReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetGameRoomsReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetGameRoomsReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 room_type = 2;
 * @return {number}
 */
proto.GetGameRoomsReq.prototype.getroom_type = function() {
  return /** @type {number} */ (!this.hasroom_type() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GetGameRoomsReq.prototype.setroom_type = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetGameRoomsReq.prototype.clearroom_type = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetGameRoomsReq.prototype.hasroom_type = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetGameRoomsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetGameRoomsRes.repeatedFields_, null);
};
goog.inherits(proto.GetGameRoomsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetGameRoomsRes.displayName = 'proto.GetGameRoomsRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetGameRoomsRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetGameRoomsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GetGameRoomsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetGameRoomsRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetGameRoomsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    tablestates: jspb.Message.toObjectList(msg.gettablestates(),
    proto.TableStateItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetGameRoomsRes}
 */
proto.GetGameRoomsRes.fromObject = function(obj) {
  var f, msg = new proto.GetGameRoomsRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.tablestates) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.tablestates, function(i) {
        return proto.TableStateItem.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetGameRoomsRes}
 */
proto.GetGameRoomsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetGameRoomsRes;
  return proto.GetGameRoomsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetGameRoomsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetGameRoomsRes}
 */
proto.GetGameRoomsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.TableStateItem;
      reader.readMessage(value,proto.TableStateItem.deserializeBinaryFromReader);
      msg.gettablestates().push(value);
      msg.settablestates(msg.gettablestates());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetGameRoomsRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetGameRoomsRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetGameRoomsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetGameRoomsRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.gettablestates();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.TableStateItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetGameRoomsRes} The clone.
 */
proto.GetGameRoomsRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GetGameRoomsRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GetGameRoomsRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GetGameRoomsRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GetGameRoomsRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetGameRoomsRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GetGameRoomsRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetGameRoomsRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetGameRoomsRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetGameRoomsRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated TableStateItem tablestates = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.TableStateItem>}
 */
proto.GetGameRoomsRes.prototype.gettablestates = function() {
  return /** @type{!Array.<!proto.TableStateItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.TableStateItem, 3));
};


/** @param {Array.<!proto.TableStateItem>} value  */
proto.GetGameRoomsRes.prototype.settablestates = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.GetGameRoomsRes.prototype.cleartablestates = function() {
  this.settablestates([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QuickStartReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QuickStartReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.QuickStartReq.displayName = 'proto.QuickStartReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QuickStartReq.prototype.toObject = function(opt_includeInstance) {
  return proto.QuickStartReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QuickStartReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.QuickStartReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    room_type: jspb.Message.getField(msg, 2),
    id: jspb.Message.getField(msg, 3),
    game_type: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.QuickStartReq}
 */
proto.QuickStartReq.fromObject = function(obj) {
  var f, msg = new proto.QuickStartReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.room_type) && jspb.Message.setField(msg, 2, obj.room_type);
  goog.isDef(obj.id) && jspb.Message.setField(msg, 3, obj.id);
  goog.isDef(obj.game_type) && jspb.Message.setField(msg, 4, obj.game_type);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QuickStartReq}
 */
proto.QuickStartReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QuickStartReq;
  return proto.QuickStartReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QuickStartReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QuickStartReq}
 */
proto.QuickStartReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroom_type(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgame_type(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.QuickStartReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.QuickStartReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QuickStartReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.QuickStartReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.QuickStartReq} The clone.
 */
proto.QuickStartReq.prototype.cloneMessage = function() {
  return /** @type {!proto.QuickStartReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.QuickStartReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.QuickStartReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.QuickStartReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 room_type = 2;
 * @return {number}
 */
proto.QuickStartReq.prototype.getroom_type = function() {
  return /** @type {number} */ (!this.hasroom_type() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.QuickStartReq.prototype.setroom_type = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.QuickStartReq.prototype.clearroom_type = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartReq.prototype.hasroom_type = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.QuickStartReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.QuickStartReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.QuickStartReq.prototype.clearid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 game_type = 4;
 * @return {number}
 */
proto.QuickStartReq.prototype.getgame_type = function() {
  return /** @type {number} */ (!this.hasgame_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.QuickStartReq.prototype.setgame_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.QuickStartReq.prototype.cleargame_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartReq.prototype.hasgame_type = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QuickStartRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QuickStartRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.QuickStartRes.displayName = 'proto.QuickStartRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QuickStartRes.prototype.toObject = function(opt_includeInstance) {
  return proto.QuickStartRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QuickStartRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.QuickStartRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    id: jspb.Message.getField(msg, 3),
    roomsvr_id: jspb.Message.getField(msg, 4),
    roomsvr_table_address: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.QuickStartRes}
 */
proto.QuickStartRes.fromObject = function(obj) {
  var f, msg = new proto.QuickStartRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.id) && jspb.Message.setField(msg, 3, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 4, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 5, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QuickStartRes}
 */
proto.QuickStartRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QuickStartRes;
  return proto.QuickStartRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QuickStartRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QuickStartRes}
 */
proto.QuickStartRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.QuickStartRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.QuickStartRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QuickStartRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.QuickStartRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.QuickStartRes} The clone.
 */
proto.QuickStartRes.prototype.cloneMessage = function() {
  return /** @type {!proto.QuickStartRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.QuickStartRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.QuickStartRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.QuickStartRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.QuickStartRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.QuickStartRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.QuickStartRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.QuickStartRes.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.QuickStartRes.prototype.setid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.QuickStartRes.prototype.clearid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartRes.prototype.hasid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string roomsvr_id = 4;
 * @return {string}
 */
proto.QuickStartRes.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.QuickStartRes.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.QuickStartRes.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartRes.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 roomsvr_table_address = 5;
 * @return {number}
 */
proto.QuickStartRes.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.QuickStartRes.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.QuickStartRes.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.QuickStartRes.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnterTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnterTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EnterTableReq.displayName = 'proto.EnterTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnterTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.EnterTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnterTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EnterTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.EnterTableReq}
 */
proto.EnterTableReq.fromObject = function(obj) {
  var f, msg = new proto.EnterTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnterTableReq}
 */
proto.EnterTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnterTableReq;
  return proto.EnterTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnterTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnterTableReq}
 */
proto.EnterTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EnterTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnterTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EnterTableReq} The clone.
 */
proto.EnterTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.EnterTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.EnterTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.EnterTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.EnterTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.EnterTableReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.EnterTableReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.EnterTableReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.EnterTableReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.EnterTableReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.EnterTableReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.EnterTableReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.EnterTableReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.EnterTableReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EnterTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EnterTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EnterTableRes.displayName = 'proto.EnterTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EnterTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.EnterTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EnterTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.EnterTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    gameinfo: (f = msg.getgameinfo()) && proto.GameInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.EnterTableRes}
 */
proto.EnterTableRes.fromObject = function(obj) {
  var f, msg = new proto.EnterTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.gameinfo) && jspb.Message.setWrapperField(
      msg, 3, proto.GameInfo.fromObject(obj.gameinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EnterTableRes}
 */
proto.EnterTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EnterTableRes;
  return proto.EnterTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EnterTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EnterTableRes}
 */
proto.EnterTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.GameInfo;
      reader.readMessage(value,proto.GameInfo.deserializeBinaryFromReader);
      msg.setgameinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.EnterTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EnterTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.EnterTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getgameinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GameInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.EnterTableRes} The clone.
 */
proto.EnterTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.EnterTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.EnterTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.EnterTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.EnterTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.EnterTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.EnterTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.EnterTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GameInfo gameinfo = 3;
 * @return {proto.GameInfo}
 */
proto.EnterTableRes.prototype.getgameinfo = function() {
  return /** @type{proto.GameInfo} */ (
    jspb.Message.getWrapperField(this, proto.GameInfo, 3));
};


/** @param {proto.GameInfo|undefined} value  */
proto.EnterTableRes.prototype.setgameinfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.EnterTableRes.prototype.cleargameinfo = function() {
  this.setgameinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.EnterTableRes.prototype.hasgameinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SitdownTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SitdownTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SitdownTableReq.displayName = 'proto.SitdownTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SitdownTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SitdownTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SitdownTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SitdownTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4),
    roomsvr_seat_index: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SitdownTableReq}
 */
proto.SitdownTableReq.fromObject = function(obj) {
  var f, msg = new proto.SitdownTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 5, obj.roomsvr_seat_index);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SitdownTableReq}
 */
proto.SitdownTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SitdownTableReq;
  return proto.SitdownTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SitdownTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SitdownTableReq}
 */
proto.SitdownTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SitdownTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SitdownTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SitdownTableReq} The clone.
 */
proto.SitdownTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.SitdownTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.SitdownTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.SitdownTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SitdownTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.SitdownTableReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.SitdownTableReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SitdownTableReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.SitdownTableReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.SitdownTableReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SitdownTableReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.SitdownTableReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.SitdownTableReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SitdownTableReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 roomsvr_seat_index = 5;
 * @return {number}
 */
proto.SitdownTableReq.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.SitdownTableReq.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SitdownTableReq.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableReq.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SitdownTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SitdownTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SitdownTableRes.displayName = 'proto.SitdownTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SitdownTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.SitdownTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SitdownTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SitdownTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SitdownTableRes}
 */
proto.SitdownTableRes.fromObject = function(obj) {
  var f, msg = new proto.SitdownTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SitdownTableRes}
 */
proto.SitdownTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SitdownTableRes;
  return proto.SitdownTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SitdownTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SitdownTableRes}
 */
proto.SitdownTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SitdownTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SitdownTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SitdownTableRes} The clone.
 */
proto.SitdownTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.SitdownTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.SitdownTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.SitdownTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SitdownTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.SitdownTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.SitdownTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SitdownTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StandupTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StandupTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.StandupTableReq.displayName = 'proto.StandupTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StandupTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.StandupTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StandupTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.StandupTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.StandupTableReq}
 */
proto.StandupTableReq.fromObject = function(obj) {
  var f, msg = new proto.StandupTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StandupTableReq}
 */
proto.StandupTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StandupTableReq;
  return proto.StandupTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StandupTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StandupTableReq}
 */
proto.StandupTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.StandupTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StandupTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.StandupTableReq} The clone.
 */
proto.StandupTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.StandupTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.StandupTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.StandupTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.StandupTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.StandupTableReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.StandupTableReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.StandupTableReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.StandupTableReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.StandupTableReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.StandupTableReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.StandupTableReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.StandupTableReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.StandupTableReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StandupTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StandupTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.StandupTableRes.displayName = 'proto.StandupTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StandupTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.StandupTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StandupTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.StandupTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.StandupTableRes}
 */
proto.StandupTableRes.fromObject = function(obj) {
  var f, msg = new proto.StandupTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StandupTableRes}
 */
proto.StandupTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StandupTableRes;
  return proto.StandupTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StandupTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StandupTableRes}
 */
proto.StandupTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.StandupTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StandupTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.StandupTableRes} The clone.
 */
proto.StandupTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.StandupTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.StandupTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.StandupTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.StandupTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.StandupTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.StandupTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.StandupTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeaveTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LeaveTableReq.displayName = 'proto.LeaveTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LeaveTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.LeaveTableReq}
 */
proto.LeaveTableReq.fromObject = function(obj) {
  var f, msg = new proto.LeaveTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveTableReq}
 */
proto.LeaveTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveTableReq;
  return proto.LeaveTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveTableReq}
 */
proto.LeaveTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LeaveTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LeaveTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LeaveTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.LeaveTableReq} The clone.
 */
proto.LeaveTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.LeaveTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.LeaveTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.LeaveTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.LeaveTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.LeaveTableReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.LeaveTableReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.LeaveTableReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.LeaveTableReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.LeaveTableReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.LeaveTableReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.LeaveTableReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.LeaveTableReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.LeaveTableReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeaveTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LeaveTableRes.displayName = 'proto.LeaveTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.LeaveTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.LeaveTableRes}
 */
proto.LeaveTableRes.fromObject = function(obj) {
  var f, msg = new proto.LeaveTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveTableRes}
 */
proto.LeaveTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveTableRes;
  return proto.LeaveTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveTableRes}
 */
proto.LeaveTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.LeaveTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.LeaveTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.LeaveTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.LeaveTableRes} The clone.
 */
proto.LeaveTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.LeaveTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.LeaveTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.LeaveTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.LeaveTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.LeaveTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.LeaveTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.LeaveTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.LeaveTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReenterTableReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReenterTableReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReenterTableReq.displayName = 'proto.ReenterTableReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReenterTableReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ReenterTableReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReenterTableReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ReenterTableReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    roomsvr_id: jspb.Message.getField(msg, 2),
    roomsvr_table_address: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.ReenterTableReq}
 */
proto.ReenterTableReq.fromObject = function(obj) {
  var f, msg = new proto.ReenterTableReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 2, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 3, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReenterTableReq}
 */
proto.ReenterTableReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReenterTableReq;
  return proto.ReenterTableReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReenterTableReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReenterTableReq}
 */
proto.ReenterTableReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ReenterTableReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReenterTableReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ReenterTableReq} The clone.
 */
proto.ReenterTableReq.prototype.cloneMessage = function() {
  return /** @type {!proto.ReenterTableReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.ReenterTableReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.ReenterTableReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ReenterTableReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string roomsvr_id = 2;
 * @return {string}
 */
proto.ReenterTableReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.ReenterTableReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.ReenterTableReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 roomsvr_table_address = 3;
 * @return {number}
 */
proto.ReenterTableReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.ReenterTableReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.ReenterTableReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReenterTableRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReenterTableRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReenterTableRes.displayName = 'proto.ReenterTableRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReenterTableRes.prototype.toObject = function(opt_includeInstance) {
  return proto.ReenterTableRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReenterTableRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ReenterTableRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    gameinfo: (f = msg.getgameinfo()) && proto.GameInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.ReenterTableRes}
 */
proto.ReenterTableRes.fromObject = function(obj) {
  var f, msg = new proto.ReenterTableRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.gameinfo) && jspb.Message.setWrapperField(
      msg, 3, proto.GameInfo.fromObject(obj.gameinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReenterTableRes}
 */
proto.ReenterTableRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReenterTableRes;
  return proto.ReenterTableRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReenterTableRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReenterTableRes}
 */
proto.ReenterTableRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.GameInfo;
      reader.readMessage(value,proto.GameInfo.deserializeBinaryFromReader);
      msg.setgameinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ReenterTableRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReenterTableRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getgameinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GameInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ReenterTableRes} The clone.
 */
proto.ReenterTableRes.prototype.cloneMessage = function() {
  return /** @type {!proto.ReenterTableRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.ReenterTableRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.ReenterTableRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.ReenterTableRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.ReenterTableRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.ReenterTableRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.ReenterTableRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GameInfo gameinfo = 3;
 * @return {proto.GameInfo}
 */
proto.ReenterTableRes.prototype.getgameinfo = function() {
  return /** @type{proto.GameInfo} */ (
    jspb.Message.getWrapperField(this, proto.GameInfo, 3));
};


/** @param {proto.GameInfo|undefined} value  */
proto.ReenterTableRes.prototype.setgameinfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ReenterTableRes.prototype.cleargameinfo = function() {
  this.setgameinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableRes.prototype.hasgameinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartGameReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartGameReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.StartGameReq.displayName = 'proto.StartGameReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartGameReq.prototype.toObject = function(opt_includeInstance) {
  return proto.StartGameReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartGameReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.StartGameReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.StartGameReq}
 */
proto.StartGameReq.fromObject = function(obj) {
  var f, msg = new proto.StartGameReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartGameReq}
 */
proto.StartGameReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartGameReq;
  return proto.StartGameReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartGameReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartGameReq}
 */
proto.StartGameReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.StartGameReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.StartGameReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartGameReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.StartGameReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.StartGameReq} The clone.
 */
proto.StartGameReq.prototype.cloneMessage = function() {
  return /** @type {!proto.StartGameReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.StartGameReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.StartGameReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.StartGameReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.StartGameReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.StartGameReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.StartGameReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.StartGameReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.StartGameReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.StartGameReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.StartGameReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.StartGameReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.StartGameReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StartGameRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StartGameRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.StartGameRes.displayName = 'proto.StartGameRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StartGameRes.prototype.toObject = function(opt_includeInstance) {
  return proto.StartGameRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StartGameRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.StartGameRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.StartGameRes}
 */
proto.StartGameRes.fromObject = function(obj) {
  var f, msg = new proto.StartGameRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StartGameRes}
 */
proto.StartGameRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StartGameRes;
  return proto.StartGameRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StartGameRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StartGameRes}
 */
proto.StartGameRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.StartGameRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.StartGameRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StartGameRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.StartGameRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.StartGameRes} The clone.
 */
proto.StartGameRes.prototype.cloneMessage = function() {
  return /** @type {!proto.StartGameRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.StartGameRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.StartGameRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.StartGameRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.StartGameRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.StartGameRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.StartGameRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StartGameRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DoactionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DoactionReq.repeatedFields_, null);
};
goog.inherits(proto.DoactionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DoactionReq.displayName = 'proto.DoactionReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DoactionReq.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DoactionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DoactionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DoactionReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DoactionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4),
    action_type: jspb.Message.getField(msg, 5),
    cards: jspb.Message.getField(msg, 6),
    call_times: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DoactionReq}
 */
proto.DoactionReq.fromObject = function(obj) {
  var f, msg = new proto.DoactionReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  goog.isDef(obj.action_type) && jspb.Message.setField(msg, 5, obj.action_type);
  goog.isDef(obj.cards) && jspb.Message.setField(msg, 6, obj.cards);
  goog.isDef(obj.call_times) && jspb.Message.setField(msg, 7, obj.call_times);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DoactionReq}
 */
proto.DoactionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DoactionReq;
  return proto.DoactionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DoactionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DoactionReq}
 */
proto.DoactionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_type(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getcards().push(value);
      msg.setcards(msg.getcards());
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcall_times(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DoactionReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DoactionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DoactionReq} The clone.
 */
proto.DoactionReq.prototype.cloneMessage = function() {
  return /** @type {!proto.DoactionReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.DoactionReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.DoactionReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DoactionReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.DoactionReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.DoactionReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DoactionReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.DoactionReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.DoactionReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DoactionReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.DoactionReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.DoactionReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DoactionReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 action_type = 5;
 * @return {number}
 */
proto.DoactionReq.prototype.getaction_type = function() {
  return /** @type {number} */ (!this.hasaction_type() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.DoactionReq.prototype.setaction_type = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DoactionReq.prototype.clearaction_type = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hasaction_type = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated int32 cards = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.DoactionReq.prototype.getcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 6));
};


/** @param {Array.<number>} value  */
proto.DoactionReq.prototype.setcards = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


proto.DoactionReq.prototype.clearcards = function() {
  jspb.Message.setField(this, 6, []);
};


/**
 * optional int32 call_times = 7;
 * @return {number}
 */
proto.DoactionReq.prototype.getcall_times = function() {
  return /** @type {number} */ (!this.hascall_times() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.DoactionReq.prototype.setcall_times = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.DoactionReq.prototype.clearcall_times = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionReq.prototype.hascall_times = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DoactionRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DoactionRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DoactionRes.displayName = 'proto.DoactionRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DoactionRes.prototype.toObject = function(opt_includeInstance) {
  return proto.DoactionRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DoactionRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DoactionRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DoactionRes}
 */
proto.DoactionRes.fromObject = function(obj) {
  var f, msg = new proto.DoactionRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DoactionRes}
 */
proto.DoactionRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DoactionRes;
  return proto.DoactionRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DoactionRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DoactionRes}
 */
proto.DoactionRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DoactionRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DoactionRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DoactionRes} The clone.
 */
proto.DoactionRes.prototype.cloneMessage = function() {
  return /** @type {!proto.DoactionRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.DoactionRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DoactionRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DoactionRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.DoactionRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.DoactionRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DoactionRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameReadyReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GameReadyReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameReadyReq.displayName = 'proto.GameReadyReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameReadyReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GameReadyReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameReadyReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameReadyReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    roomsvr_id: jspb.Message.getField(msg, 3),
    roomsvr_table_address: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameReadyReq}
 */
proto.GameReadyReq.fromObject = function(obj) {
  var f, msg = new proto.GameReadyReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.id) && jspb.Message.setField(msg, 2, obj.id);
  goog.isDef(obj.roomsvr_id) && jspb.Message.setField(msg, 3, obj.roomsvr_id);
  goog.isDef(obj.roomsvr_table_address) && jspb.Message.setField(msg, 4, obj.roomsvr_table_address);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameReadyReq}
 */
proto.GameReadyReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameReadyReq;
  return proto.GameReadyReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameReadyReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameReadyReq}
 */
proto.GameReadyReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setroomsvr_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_table_address(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameReadyReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameReadyReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameReadyReq} The clone.
 */
proto.GameReadyReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GameReadyReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GameReadyReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GameReadyReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GameReadyReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.GameReadyReq.prototype.getid = function() {
  return /** @type {number} */ (!this.hasid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GameReadyReq.prototype.setid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GameReadyReq.prototype.clearid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyReq.prototype.hasid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string roomsvr_id = 3;
 * @return {string}
 */
proto.GameReadyReq.prototype.getroomsvr_id = function() {
  return /** @type {string} */ (!this.hasroomsvr_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.GameReadyReq.prototype.setroomsvr_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.GameReadyReq.prototype.clearroomsvr_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyReq.prototype.hasroomsvr_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 roomsvr_table_address = 4;
 * @return {number}
 */
proto.GameReadyReq.prototype.getroomsvr_table_address = function() {
  return /** @type {number} */ (!this.hasroomsvr_table_address() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.GameReadyReq.prototype.setroomsvr_table_address = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.GameReadyReq.prototype.clearroomsvr_table_address = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyReq.prototype.hasroomsvr_table_address = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameReadyRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GameReadyRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameReadyRes.displayName = 'proto.GameReadyRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameReadyRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GameReadyRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameReadyRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameReadyRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameReadyRes}
 */
proto.GameReadyRes.fromObject = function(obj) {
  var f, msg = new proto.GameReadyRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameReadyRes}
 */
proto.GameReadyRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameReadyRes;
  return proto.GameReadyRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameReadyRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameReadyRes}
 */
proto.GameReadyRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameReadyRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameReadyRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameReadyRes} The clone.
 */
proto.GameReadyRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GameReadyRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GameReadyRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GameReadyRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GameReadyRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GameReadyRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GameReadyRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GameReadyRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerGameRecordinfoReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerGameRecordinfoReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerGameRecordinfoReq.displayName = 'proto.PlayerGameRecordinfoReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerGameRecordinfoReq.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerGameRecordinfoReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerGameRecordinfoReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerGameRecordinfoReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    rid: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerGameRecordinfoReq}
 */
proto.PlayerGameRecordinfoReq.fromObject = function(obj) {
  var f, msg = new proto.PlayerGameRecordinfoReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 2, obj.rid);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerGameRecordinfoReq}
 */
proto.PlayerGameRecordinfoReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerGameRecordinfoReq;
  return proto.PlayerGameRecordinfoReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerGameRecordinfoReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerGameRecordinfoReq}
 */
proto.PlayerGameRecordinfoReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerGameRecordinfoReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfoReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerGameRecordinfoReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfoReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerGameRecordinfoReq} The clone.
 */
proto.PlayerGameRecordinfoReq.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerGameRecordinfoReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.PlayerGameRecordinfoReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.PlayerGameRecordinfoReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.PlayerGameRecordinfoReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfoReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 rid = 2;
 * @return {number}
 */
proto.PlayerGameRecordinfoReq.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfoReq.prototype.setrid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerGameRecordinfoReq.prototype.clearrid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfoReq.prototype.hasrid = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.playerRecordinfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.playerRecordinfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.playerRecordinfo.displayName = 'proto.playerRecordinfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.playerRecordinfo.prototype.toObject = function(opt_includeInstance) {
  return proto.playerRecordinfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.playerRecordinfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.playerRecordinfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    currencyid: jspb.Message.getField(msg, 2),
    balancenum: jspb.Message.getField(msg, 3),
    rolename: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.playerRecordinfo}
 */
proto.playerRecordinfo.fromObject = function(obj) {
  var f, msg = new proto.playerRecordinfo();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.currencyid) && jspb.Message.setField(msg, 2, obj.currencyid);
  goog.isDef(obj.balancenum) && jspb.Message.setField(msg, 3, obj.balancenum);
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 4, obj.rolename);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.playerRecordinfo}
 */
proto.playerRecordinfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.playerRecordinfo;
  return proto.playerRecordinfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.playerRecordinfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.playerRecordinfo}
 */
proto.playerRecordinfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcurrencyid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbalancenum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.playerRecordinfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.playerRecordinfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.playerRecordinfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.playerRecordinfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.playerRecordinfo} The clone.
 */
proto.playerRecordinfo.prototype.cloneMessage = function() {
  return /** @type {!proto.playerRecordinfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.playerRecordinfo.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.playerRecordinfo.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.playerRecordinfo.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.playerRecordinfo.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 currencyid = 2;
 * @return {number}
 */
proto.playerRecordinfo.prototype.getcurrencyid = function() {
  return /** @type {number} */ (!this.hascurrencyid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.playerRecordinfo.prototype.setcurrencyid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.playerRecordinfo.prototype.clearcurrencyid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.playerRecordinfo.prototype.hascurrencyid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 balancenum = 3;
 * @return {number}
 */
proto.playerRecordinfo.prototype.getbalancenum = function() {
  return /** @type {number} */ (!this.hasbalancenum() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.playerRecordinfo.prototype.setbalancenum = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.playerRecordinfo.prototype.clearbalancenum = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.playerRecordinfo.prototype.hasbalancenum = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string rolename = 4;
 * @return {string}
 */
proto.playerRecordinfo.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.playerRecordinfo.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.playerRecordinfo.prototype.clearrolename = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.playerRecordinfo.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerGameRecordinfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PlayerGameRecordinfo.repeatedFields_, null);
};
goog.inherits(proto.PlayerGameRecordinfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerGameRecordinfo.displayName = 'proto.PlayerGameRecordinfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PlayerGameRecordinfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerGameRecordinfo.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerGameRecordinfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerGameRecordinfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerGameRecordinfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    table_id: jspb.Message.getField(msg, 1),
    table_create_time: jspb.Message.getField(msg, 2),
    tablecreater_rid: jspb.Message.getField(msg, 3),
    entercosts: jspb.Message.getField(msg, 4),
    recordinfos: jspb.Message.toObjectList(msg.getrecordinfos(),
    proto.playerRecordinfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerGameRecordinfo}
 */
proto.PlayerGameRecordinfo.fromObject = function(obj) {
  var f, msg = new proto.PlayerGameRecordinfo();
  goog.isDef(obj.table_id) && jspb.Message.setField(msg, 1, obj.table_id);
  goog.isDef(obj.table_create_time) && jspb.Message.setField(msg, 2, obj.table_create_time);
  goog.isDef(obj.tablecreater_rid) && jspb.Message.setField(msg, 3, obj.tablecreater_rid);
  goog.isDef(obj.entercosts) && jspb.Message.setField(msg, 4, obj.entercosts);
  goog.isDef(obj.recordinfos) && jspb.Message.setRepeatedWrapperField(
      msg, 5, goog.map(obj.recordinfos, function(i) {
        return proto.playerRecordinfo.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerGameRecordinfo}
 */
proto.PlayerGameRecordinfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerGameRecordinfo;
  return proto.PlayerGameRecordinfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerGameRecordinfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerGameRecordinfo}
 */
proto.PlayerGameRecordinfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settable_id(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settable_create_time(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settablecreater_rid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setentercosts(value);
      break;
    case 5:
      var value = new proto.playerRecordinfo;
      reader.readMessage(value,proto.playerRecordinfo.deserializeBinaryFromReader);
      msg.getrecordinfos().push(value);
      msg.setrecordinfos(msg.getrecordinfos());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerGameRecordinfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerGameRecordinfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getrecordinfos();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.playerRecordinfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerGameRecordinfo} The clone.
 */
proto.PlayerGameRecordinfo.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerGameRecordinfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 table_id = 1;
 * @return {number}
 */
proto.PlayerGameRecordinfo.prototype.gettable_id = function() {
  return /** @type {number} */ (!this.hastable_id() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfo.prototype.settable_id = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerGameRecordinfo.prototype.cleartable_id = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfo.prototype.hastable_id = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 table_create_time = 2;
 * @return {number}
 */
proto.PlayerGameRecordinfo.prototype.gettable_create_time = function() {
  return /** @type {number} */ (!this.hastable_create_time() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfo.prototype.settable_create_time = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerGameRecordinfo.prototype.cleartable_create_time = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfo.prototype.hastable_create_time = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 tablecreater_rid = 3;
 * @return {number}
 */
proto.PlayerGameRecordinfo.prototype.gettablecreater_rid = function() {
  return /** @type {number} */ (!this.hastablecreater_rid() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfo.prototype.settablecreater_rid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.PlayerGameRecordinfo.prototype.cleartablecreater_rid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfo.prototype.hastablecreater_rid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 entercosts = 4;
 * @return {number}
 */
proto.PlayerGameRecordinfo.prototype.getentercosts = function() {
  return /** @type {number} */ (!this.hasentercosts() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfo.prototype.setentercosts = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.PlayerGameRecordinfo.prototype.clearentercosts = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfo.prototype.hasentercosts = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated playerRecordinfo recordinfos = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.playerRecordinfo>}
 */
proto.PlayerGameRecordinfo.prototype.getrecordinfos = function() {
  return /** @type{!Array.<!proto.playerRecordinfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.playerRecordinfo, 5));
};


/** @param {Array.<!proto.playerRecordinfo>} value  */
proto.PlayerGameRecordinfo.prototype.setrecordinfos = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


proto.PlayerGameRecordinfo.prototype.clearrecordinfos = function() {
  this.setrecordinfos([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerGameRecordinfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PlayerGameRecordinfoRes.repeatedFields_, null);
};
goog.inherits(proto.PlayerGameRecordinfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerGameRecordinfoRes.displayName = 'proto.PlayerGameRecordinfoRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PlayerGameRecordinfoRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerGameRecordinfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerGameRecordinfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerGameRecordinfoRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerGameRecordinfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    records: jspb.Message.toObjectList(msg.getrecords(),
    proto.PlayerGameRecordinfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerGameRecordinfoRes}
 */
proto.PlayerGameRecordinfoRes.fromObject = function(obj) {
  var f, msg = new proto.PlayerGameRecordinfoRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.records) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.records, function(i) {
        return proto.PlayerGameRecordinfo.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerGameRecordinfoRes}
 */
proto.PlayerGameRecordinfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerGameRecordinfoRes;
  return proto.PlayerGameRecordinfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerGameRecordinfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerGameRecordinfoRes}
 */
proto.PlayerGameRecordinfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.PlayerGameRecordinfo;
      reader.readMessage(value,proto.PlayerGameRecordinfo.deserializeBinaryFromReader);
      msg.getrecords().push(value);
      msg.setrecords(msg.getrecords());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerGameRecordinfoRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfoRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerGameRecordinfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerGameRecordinfoRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getrecords();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.PlayerGameRecordinfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerGameRecordinfoRes} The clone.
 */
proto.PlayerGameRecordinfoRes.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerGameRecordinfoRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.PlayerGameRecordinfoRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerGameRecordinfoRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerGameRecordinfoRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfoRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.PlayerGameRecordinfoRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.PlayerGameRecordinfoRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerGameRecordinfoRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerGameRecordinfoRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerGameRecordinfo records = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.PlayerGameRecordinfo>}
 */
proto.PlayerGameRecordinfoRes.prototype.getrecords = function() {
  return /** @type{!Array.<!proto.PlayerGameRecordinfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PlayerGameRecordinfo, 3));
};


/** @param {Array.<!proto.PlayerGameRecordinfo>} value  */
proto.PlayerGameRecordinfoRes.prototype.setrecords = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.PlayerGameRecordinfoRes.prototype.clearrecords = function() {
  this.setrecords([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetMailsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMailsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetMailsReq.displayName = 'proto.GetMailsReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMailsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMailsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMailsReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetMailsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    create_time: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetMailsReq}
 */
proto.GetMailsReq.fromObject = function(obj) {
  var f, msg = new proto.GetMailsReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.create_time) && jspb.Message.setField(msg, 2, obj.create_time);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetMailsReq}
 */
proto.GetMailsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMailsReq;
  return proto.GetMailsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMailsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMailsReq}
 */
proto.GetMailsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_time(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetMailsReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMailsReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMailsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMailsReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetMailsReq} The clone.
 */
proto.GetMailsReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GetMailsReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GetMailsReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GetMailsReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetMailsReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetMailsReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 create_time = 2;
 * @return {number}
 */
proto.GetMailsReq.prototype.getcreate_time = function() {
  return /** @type {number} */ (!this.hascreate_time() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GetMailsReq.prototype.setcreate_time = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetMailsReq.prototype.clearcreate_time = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetMailsReq.prototype.hascreate_time = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MailItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MailItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MailItem.displayName = 'proto.MailItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MailItem.prototype.toObject = function(opt_includeInstance) {
  return proto.MailItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MailItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MailItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    mail_key: jspb.Message.getField(msg, 1),
    rid: jspb.Message.getField(msg, 2),
    create_time: jspb.Message.getField(msg, 3),
    content: jspb.Message.getField(msg, 4),
    isattach: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.MailItem}
 */
proto.MailItem.fromObject = function(obj) {
  var f, msg = new proto.MailItem();
  goog.isDef(obj.mail_key) && jspb.Message.setField(msg, 1, obj.mail_key);
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 2, obj.rid);
  goog.isDef(obj.create_time) && jspb.Message.setField(msg, 3, obj.create_time);
  goog.isDef(obj.content) && jspb.Message.setField(msg, 4, obj.content);
  goog.isDef(obj.isattach) && jspb.Message.setField(msg, 5, obj.isattach);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MailItem}
 */
proto.MailItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MailItem;
  return proto.MailItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MailItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MailItem}
 */
proto.MailItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setmail_key(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcreate_time(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setcontent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setisattach(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.MailItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MailItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MailItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.MailItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.MailItem} The clone.
 */
proto.MailItem.prototype.cloneMessage = function() {
  return /** @type {!proto.MailItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string mail_key = 1;
 * @return {string}
 */
proto.MailItem.prototype.getmail_key = function() {
  return /** @type {string} */ (!this.hasmail_key() ? "" : jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.MailItem.prototype.setmail_key = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.MailItem.prototype.clearmail_key = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.MailItem.prototype.hasmail_key = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 rid = 2;
 * @return {number}
 */
proto.MailItem.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.MailItem.prototype.setrid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.MailItem.prototype.clearrid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.MailItem.prototype.hasrid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 create_time = 3;
 * @return {number}
 */
proto.MailItem.prototype.getcreate_time = function() {
  return /** @type {number} */ (!this.hascreate_time() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.MailItem.prototype.setcreate_time = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.MailItem.prototype.clearcreate_time = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.MailItem.prototype.hascreate_time = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.MailItem.prototype.getcontent = function() {
  return /** @type {string} */ (!this.hascontent() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.MailItem.prototype.setcontent = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.MailItem.prototype.clearcontent = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.MailItem.prototype.hascontent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 isattach = 5;
 * @return {number}
 */
proto.MailItem.prototype.getisattach = function() {
  return /** @type {number} */ (!this.hasisattach() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.MailItem.prototype.setisattach = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.MailItem.prototype.clearisattach = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.MailItem.prototype.hasisattach = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetMailsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetMailsRes.repeatedFields_, null);
};
goog.inherits(proto.GetMailsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetMailsRes.displayName = 'proto.GetMailsRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetMailsRes.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMailsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMailsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMailsRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetMailsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    mailitems: jspb.Message.toObjectList(msg.getmailitems(),
    proto.MailItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetMailsRes}
 */
proto.GetMailsRes.fromObject = function(obj) {
  var f, msg = new proto.GetMailsRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.mailitems) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.mailitems, function(i) {
        return proto.MailItem.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetMailsRes}
 */
proto.GetMailsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMailsRes;
  return proto.GetMailsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMailsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMailsRes}
 */
proto.GetMailsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.MailItem;
      reader.readMessage(value,proto.MailItem.deserializeBinaryFromReader);
      msg.getmailitems().push(value);
      msg.setmailitems(msg.getmailitems());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetMailsRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMailsRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMailsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetMailsRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getmailitems();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.MailItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetMailsRes} The clone.
 */
proto.GetMailsRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GetMailsRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GetMailsRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GetMailsRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GetMailsRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetMailsRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GetMailsRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetMailsRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetMailsRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetMailsRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated MailItem mailitems = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.MailItem>}
 */
proto.GetMailsRes.prototype.getmailitems = function() {
  return /** @type{!Array.<!proto.MailItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MailItem, 3));
};


/** @param {Array.<!proto.MailItem>} value  */
proto.GetMailsRes.prototype.setmailitems = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.GetMailsRes.prototype.clearmailitems = function() {
  this.setmailitems([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetmailItemsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetmailItemsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetmailItemsReq.displayName = 'proto.GetmailItemsReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetmailItemsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.GetmailItemsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetmailItemsReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetmailItemsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    mail_key: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetmailItemsReq}
 */
proto.GetmailItemsReq.fromObject = function(obj) {
  var f, msg = new proto.GetmailItemsReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.mail_key) && jspb.Message.setField(msg, 2, obj.mail_key);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetmailItemsReq}
 */
proto.GetmailItemsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetmailItemsReq;
  return proto.GetmailItemsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetmailItemsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetmailItemsReq}
 */
proto.GetmailItemsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setmail_key(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetmailItemsReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetmailItemsReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetmailItemsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetmailItemsReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetmailItemsReq} The clone.
 */
proto.GetmailItemsReq.prototype.cloneMessage = function() {
  return /** @type {!proto.GetmailItemsReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.GetmailItemsReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.GetmailItemsReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GetmailItemsReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mail_key = 2;
 * @return {string}
 */
proto.GetmailItemsReq.prototype.getmail_key = function() {
  return /** @type {string} */ (!this.hasmail_key() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetmailItemsReq.prototype.setmail_key = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetmailItemsReq.prototype.clearmail_key = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsReq.prototype.hasmail_key = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetmailItemsRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetmailItemsRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GetmailItemsRes.displayName = 'proto.GetmailItemsRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetmailItemsRes.prototype.toObject = function(opt_includeInstance) {
  return proto.GetmailItemsRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetmailItemsRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GetmailItemsRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    mail_key: jspb.Message.getField(msg, 3),
    resultdes: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GetmailItemsRes}
 */
proto.GetmailItemsRes.fromObject = function(obj) {
  var f, msg = new proto.GetmailItemsRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.mail_key) && jspb.Message.setField(msg, 3, obj.mail_key);
  goog.isDef(obj.resultdes) && jspb.Message.setField(msg, 4, obj.resultdes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetmailItemsRes}
 */
proto.GetmailItemsRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetmailItemsRes;
  return proto.GetmailItemsRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetmailItemsRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetmailItemsRes}
 */
proto.GetmailItemsRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setmail_key(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setresultdes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GetmailItemsRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetmailItemsRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetmailItemsRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GetmailItemsRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GetmailItemsRes} The clone.
 */
proto.GetmailItemsRes.prototype.cloneMessage = function() {
  return /** @type {!proto.GetmailItemsRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.GetmailItemsRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GetmailItemsRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GetmailItemsRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.GetmailItemsRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.GetmailItemsRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GetmailItemsRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mail_key = 3;
 * @return {string}
 */
proto.GetmailItemsRes.prototype.getmail_key = function() {
  return /** @type {string} */ (!this.hasmail_key() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.GetmailItemsRes.prototype.setmail_key = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.GetmailItemsRes.prototype.clearmail_key = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsRes.prototype.hasmail_key = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string resultdes = 4;
 * @return {string}
 */
proto.GetmailItemsRes.prototype.getresultdes = function() {
  return /** @type {string} */ (!this.hasresultdes() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.GetmailItemsRes.prototype.setresultdes = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.GetmailItemsRes.prototype.clearresultdes = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GetmailItemsRes.prototype.hasresultdes = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteMailReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteMailReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DeleteMailReq.displayName = 'proto.DeleteMailReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteMailReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteMailReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteMailReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DeleteMailReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    mail_key: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DeleteMailReq}
 */
proto.DeleteMailReq.fromObject = function(obj) {
  var f, msg = new proto.DeleteMailReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.mail_key) && jspb.Message.setField(msg, 2, obj.mail_key);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteMailReq}
 */
proto.DeleteMailReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteMailReq;
  return proto.DeleteMailReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteMailReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteMailReq}
 */
proto.DeleteMailReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setmail_key(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DeleteMailReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeleteMailReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteMailReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeleteMailReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DeleteMailReq} The clone.
 */
proto.DeleteMailReq.prototype.cloneMessage = function() {
  return /** @type {!proto.DeleteMailReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.DeleteMailReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.DeleteMailReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DeleteMailReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeleteMailReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string mail_key = 2;
 * @return {string}
 */
proto.DeleteMailReq.prototype.getmail_key = function() {
  return /** @type {string} */ (!this.hasmail_key() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.DeleteMailReq.prototype.setmail_key = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DeleteMailReq.prototype.clearmail_key = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeleteMailReq.prototype.hasmail_key = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteMailRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteMailRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DeleteMailRes.displayName = 'proto.DeleteMailRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteMailRes.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteMailRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteMailRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DeleteMailRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    mail_key: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DeleteMailRes}
 */
proto.DeleteMailRes.fromObject = function(obj) {
  var f, msg = new proto.DeleteMailRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.mail_key) && jspb.Message.setField(msg, 3, obj.mail_key);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteMailRes}
 */
proto.DeleteMailRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteMailRes;
  return proto.DeleteMailRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteMailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteMailRes}
 */
proto.DeleteMailRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setmail_key(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DeleteMailRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeleteMailRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteMailRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeleteMailRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DeleteMailRes} The clone.
 */
proto.DeleteMailRes.prototype.cloneMessage = function() {
  return /** @type {!proto.DeleteMailRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.DeleteMailRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DeleteMailRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DeleteMailRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeleteMailRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.DeleteMailRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.DeleteMailRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DeleteMailRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeleteMailRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string mail_key = 3;
 * @return {string}
 */
proto.DeleteMailRes.prototype.getmail_key = function() {
  return /** @type {string} */ (!this.hasmail_key() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.DeleteMailRes.prototype.setmail_key = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DeleteMailRes.prototype.clearmail_key = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeleteMailRes.prototype.hasmail_key = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SendMessageReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SendMessageReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SendMessageReq.displayName = 'proto.SendMessageReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SendMessageReq.prototype.toObject = function(opt_includeInstance) {
  return proto.SendMessageReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SendMessageReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SendMessageReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    messages: jspb.Message.getField(msg, 2),
    chat_type: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SendMessageReq}
 */
proto.SendMessageReq.fromObject = function(obj) {
  var f, msg = new proto.SendMessageReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.messages) && jspb.Message.setField(msg, 2, obj.messages);
  goog.isDef(obj.chat_type) && jspb.Message.setField(msg, 3, obj.chat_type);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SendMessageReq}
 */
proto.SendMessageReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SendMessageReq;
  return proto.SendMessageReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SendMessageReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SendMessageReq}
 */
proto.SendMessageReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setmessages(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setchat_type(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SendMessageReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SendMessageReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SendMessageReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SendMessageReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SendMessageReq} The clone.
 */
proto.SendMessageReq.prototype.cloneMessage = function() {
  return /** @type {!proto.SendMessageReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.SendMessageReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.SendMessageReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SendMessageReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SendMessageReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string messages = 2;
 * @return {string}
 */
proto.SendMessageReq.prototype.getmessages = function() {
  return /** @type {string} */ (!this.hasmessages() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.SendMessageReq.prototype.setmessages = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SendMessageReq.prototype.clearmessages = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SendMessageReq.prototype.hasmessages = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 chat_type = 3;
 * @return {number}
 */
proto.SendMessageReq.prototype.getchat_type = function() {
  return /** @type {number} */ (!this.haschat_type() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.SendMessageReq.prototype.setchat_type = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SendMessageReq.prototype.clearchat_type = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SendMessageReq.prototype.haschat_type = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SendMessageRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SendMessageRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SendMessageRes.displayName = 'proto.SendMessageRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SendMessageRes.prototype.toObject = function(opt_includeInstance) {
  return proto.SendMessageRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SendMessageRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SendMessageRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SendMessageRes}
 */
proto.SendMessageRes.fromObject = function(obj) {
  var f, msg = new proto.SendMessageRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SendMessageRes}
 */
proto.SendMessageRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SendMessageRes;
  return proto.SendMessageRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SendMessageRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SendMessageRes}
 */
proto.SendMessageRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SendMessageRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SendMessageRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SendMessageRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SendMessageRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SendMessageRes} The clone.
 */
proto.SendMessageRes.prototype.cloneMessage = function() {
  return /** @type {!proto.SendMessageRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.SendMessageRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.SendMessageRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SendMessageRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SendMessageRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.SendMessageRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.SendMessageRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SendMessageRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SendMessageRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RechargeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RechargeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RechargeReq.displayName = 'proto.RechargeReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RechargeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.RechargeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RechargeReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RechargeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    good_id: jspb.Message.getField(msg, 2),
    pay_type: jspb.Message.getField(msg, 3),
    option_data: jspb.Message.getField(msg, 4),
    ios_pay_order: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.RechargeReq}
 */
proto.RechargeReq.fromObject = function(obj) {
  var f, msg = new proto.RechargeReq();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.good_id) && jspb.Message.setField(msg, 2, obj.good_id);
  goog.isDef(obj.pay_type) && jspb.Message.setField(msg, 3, obj.pay_type);
  goog.isDef(obj.option_data) && jspb.Message.setField(msg, 4, obj.option_data);
  goog.isDef(obj.ios_pay_order) && jspb.Message.setField(msg, 5, obj.ios_pay_order);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RechargeReq}
 */
proto.RechargeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RechargeReq;
  return proto.RechargeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RechargeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RechargeReq}
 */
proto.RechargeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgood_id(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setpay_type(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setoption_data(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setios_pay_order(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RechargeReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RechargeReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RechargeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RechargeReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RechargeReq} The clone.
 */
proto.RechargeReq.prototype.cloneMessage = function() {
  return /** @type {!proto.RechargeReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.RechargeReq.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.RechargeReq.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.RechargeReq.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeReq.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 good_id = 2;
 * @return {number}
 */
proto.RechargeReq.prototype.getgood_id = function() {
  return /** @type {number} */ (!this.hasgood_id() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.RechargeReq.prototype.setgood_id = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.RechargeReq.prototype.cleargood_id = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeReq.prototype.hasgood_id = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 pay_type = 3;
 * @return {number}
 */
proto.RechargeReq.prototype.getpay_type = function() {
  return /** @type {number} */ (!this.haspay_type() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.RechargeReq.prototype.setpay_type = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.RechargeReq.prototype.clearpay_type = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeReq.prototype.haspay_type = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string option_data = 4;
 * @return {string}
 */
proto.RechargeReq.prototype.getoption_data = function() {
  return /** @type {string} */ (!this.hasoption_data() ? "" : jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.RechargeReq.prototype.setoption_data = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.RechargeReq.prototype.clearoption_data = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeReq.prototype.hasoption_data = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string ios_pay_order = 5;
 * @return {string}
 */
proto.RechargeReq.prototype.getios_pay_order = function() {
  return /** @type {string} */ (!this.hasios_pay_order() ? "" : jspb.Message.getField(this, 5));
};


/** @param {string?|undefined} value  */
proto.RechargeReq.prototype.setios_pay_order = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.RechargeReq.prototype.clearios_pay_order = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeReq.prototype.hasios_pay_order = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RechargeRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RechargeRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RechargeRes.displayName = 'proto.RechargeRes';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RechargeRes.prototype.toObject = function(opt_includeInstance) {
  return proto.RechargeRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RechargeRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RechargeRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    order_id: jspb.Message.getField(msg, 3),
    pay_type: jspb.Message.getField(msg, 4),
    good_id: jspb.Message.getField(msg, 5),
    option_data: jspb.Message.getField(msg, 6),
    ios_pay_order: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.RechargeRes}
 */
proto.RechargeRes.fromObject = function(obj) {
  var f, msg = new proto.RechargeRes();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.order_id) && jspb.Message.setField(msg, 3, obj.order_id);
  goog.isDef(obj.pay_type) && jspb.Message.setField(msg, 4, obj.pay_type);
  goog.isDef(obj.good_id) && jspb.Message.setField(msg, 5, obj.good_id);
  goog.isDef(obj.option_data) && jspb.Message.setField(msg, 6, obj.option_data);
  goog.isDef(obj.ios_pay_order) && jspb.Message.setField(msg, 7, obj.ios_pay_order);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RechargeRes}
 */
proto.RechargeRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RechargeRes;
  return proto.RechargeRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RechargeRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RechargeRes}
 */
proto.RechargeRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setorder_id(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setpay_type(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgood_id(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setoption_data(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setios_pay_order(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RechargeRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RechargeRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RechargeRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RechargeRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RechargeRes} The clone.
 */
proto.RechargeRes.prototype.cloneMessage = function() {
  return /** @type {!proto.RechargeRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.RechargeRes.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.RechargeRes.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.RechargeRes.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.RechargeRes.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.RechargeRes.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.RechargeRes.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string order_id = 3;
 * @return {string}
 */
proto.RechargeRes.prototype.getorder_id = function() {
  return /** @type {string} */ (!this.hasorder_id() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.RechargeRes.prototype.setorder_id = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.RechargeRes.prototype.clearorder_id = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.hasorder_id = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 pay_type = 4;
 * @return {number}
 */
proto.RechargeRes.prototype.getpay_type = function() {
  return /** @type {number} */ (!this.haspay_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.RechargeRes.prototype.setpay_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.RechargeRes.prototype.clearpay_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.haspay_type = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 good_id = 5;
 * @return {number}
 */
proto.RechargeRes.prototype.getgood_id = function() {
  return /** @type {number} */ (!this.hasgood_id() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.RechargeRes.prototype.setgood_id = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.RechargeRes.prototype.cleargood_id = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.hasgood_id = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string option_data = 6;
 * @return {string}
 */
proto.RechargeRes.prototype.getoption_data = function() {
  return /** @type {string} */ (!this.hasoption_data() ? "" : jspb.Message.getField(this, 6));
};


/** @param {string?|undefined} value  */
proto.RechargeRes.prototype.setoption_data = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.RechargeRes.prototype.clearoption_data = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.hasoption_data = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string ios_pay_order = 7;
 * @return {string}
 */
proto.RechargeRes.prototype.getios_pay_order = function() {
  return /** @type {string} */ (!this.hasios_pay_order() ? "" : jspb.Message.getField(this, 7));
};


/** @param {string?|undefined} value  */
proto.RechargeRes.prototype.setios_pay_order = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.RechargeRes.prototype.clearios_pay_order = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RechargeRes.prototype.hasios_pay_order = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfBase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfBase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ConfBase.displayName = 'proto.ConfBase';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfBase.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfBase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfBase} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ConfBase.toObject = function(includeInstance, msg) {
  var f, obj = {
    changetime: jspb.Message.getField(msg, 1),
    confname: jspb.Message.getField(msg, 2),
    confcontent: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.ConfBase}
 */
proto.ConfBase.fromObject = function(obj) {
  var f, msg = new proto.ConfBase();
  goog.isDef(obj.changetime) && jspb.Message.setField(msg, 1, obj.changetime);
  goog.isDef(obj.confname) && jspb.Message.setField(msg, 2, obj.confname);
  goog.isDef(obj.confcontent) && jspb.Message.setField(msg, 3, obj.confcontent);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfBase}
 */
proto.ConfBase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfBase;
  return proto.ConfBase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfBase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfBase}
 */
proto.ConfBase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setchangetime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setconfname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setconfcontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ConfBase} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ConfBase.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfBase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ConfBase.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ConfBase} The clone.
 */
proto.ConfBase.prototype.cloneMessage = function() {
  return /** @type {!proto.ConfBase} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 changetime = 1;
 * @return {number}
 */
proto.ConfBase.prototype.getchangetime = function() {
  return /** @type {number} */ (!this.haschangetime() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.ConfBase.prototype.setchangetime = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.ConfBase.prototype.clearchangetime = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ConfBase.prototype.haschangetime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string confname = 2;
 * @return {string}
 */
proto.ConfBase.prototype.getconfname = function() {
  return /** @type {string} */ (!this.hasconfname() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.ConfBase.prototype.setconfname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.ConfBase.prototype.clearconfname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ConfBase.prototype.hasconfname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string confcontent = 3;
 * @return {string}
 */
proto.ConfBase.prototype.getconfcontent = function() {
  return /** @type {string} */ (!this.hasconfcontent() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.ConfBase.prototype.setconfcontent = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.ConfBase.prototype.clearconfcontent = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ConfBase.prototype.hasconfcontent = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DownloadCfgRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DownloadCfgRes.repeatedFields_, null);
};
goog.inherits(proto.DownloadCfgRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DownloadCfgRes.displayName = 'proto.DownloadCfgRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DownloadCfgRes.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DownloadCfgRes.prototype.toObject = function(opt_includeInstance) {
  return proto.DownloadCfgRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DownloadCfgRes} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DownloadCfgRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: (f = msg.getversion()) && proto.Version.toObject(includeInstance, f),
    resconfinfos: jspb.Message.toObjectList(msg.getresconfinfos(),
    proto.ConfBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DownloadCfgRes}
 */
proto.DownloadCfgRes.fromObject = function(obj) {
  var f, msg = new proto.DownloadCfgRes();
  goog.isDef(obj.version) && jspb.Message.setWrapperField(
      msg, 1, proto.Version.fromObject(obj.version));
  goog.isDef(obj.resconfinfos) && jspb.Message.setRepeatedWrapperField(
      msg, 2, goog.map(obj.resconfinfos, function(i) {
        return proto.ConfBase.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DownloadCfgRes}
 */
proto.DownloadCfgRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DownloadCfgRes;
  return proto.DownloadCfgRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DownloadCfgRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DownloadCfgRes}
 */
proto.DownloadCfgRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Version;
      reader.readMessage(value,proto.Version.deserializeBinaryFromReader);
      msg.setversion(value);
      break;
    case 2:
      var value = new proto.ConfBase;
      reader.readMessage(value,proto.ConfBase.deserializeBinaryFromReader);
      msg.getresconfinfos().push(value);
      msg.setresconfinfos(msg.getresconfinfos());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DownloadCfgRes} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DownloadCfgRes.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DownloadCfgRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DownloadCfgRes.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getversion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Version.serializeBinaryToWriter
    );
  }
  f = this.getresconfinfos();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ConfBase.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DownloadCfgRes} The clone.
 */
proto.DownloadCfgRes.prototype.cloneMessage = function() {
  return /** @type {!proto.DownloadCfgRes} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Version version = 1;
 * @return {proto.Version}
 */
proto.DownloadCfgRes.prototype.getversion = function() {
  return /** @type{proto.Version} */ (
    jspb.Message.getWrapperField(this, proto.Version, 1));
};


/** @param {proto.Version|undefined} value  */
proto.DownloadCfgRes.prototype.setversion = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.DownloadCfgRes.prototype.clearversion = function() {
  this.setversion(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DownloadCfgRes.prototype.hasversion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ConfBase resconfinfos = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ConfBase>}
 */
proto.DownloadCfgRes.prototype.getresconfinfos = function() {
  return /** @type{!Array.<!proto.ConfBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ConfBase, 2));
};


/** @param {Array.<!proto.ConfBase>} value  */
proto.DownloadCfgRes.prototype.setresconfinfos = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.DownloadCfgRes.prototype.clearresconfinfos = function() {
  this.setresconfinfos([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DownloadCfgReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DownloadCfgReq.repeatedFields_, null);
};
goog.inherits(proto.DownloadCfgReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DownloadCfgReq.displayName = 'proto.DownloadCfgReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DownloadCfgReq.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DownloadCfgReq.prototype.toObject = function(opt_includeInstance) {
  return proto.DownloadCfgReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DownloadCfgReq} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DownloadCfgReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    errcode: jspb.Message.getField(msg, 1),
    errcodedes: jspb.Message.getField(msg, 2),
    reqconfinfos: jspb.Message.toObjectList(msg.getreqconfinfos(),
    proto.ConfBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DownloadCfgReq}
 */
proto.DownloadCfgReq.fromObject = function(obj) {
  var f, msg = new proto.DownloadCfgReq();
  goog.isDef(obj.errcode) && jspb.Message.setField(msg, 1, obj.errcode);
  goog.isDef(obj.errcodedes) && jspb.Message.setField(msg, 2, obj.errcodedes);
  goog.isDef(obj.reqconfinfos) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.reqconfinfos, function(i) {
        return proto.ConfBase.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DownloadCfgReq}
 */
proto.DownloadCfgReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DownloadCfgReq;
  return proto.DownloadCfgReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DownloadCfgReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DownloadCfgReq}
 */
proto.DownloadCfgReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.seterrcode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.seterrcodedes(value);
      break;
    case 3:
      var value = new proto.ConfBase;
      reader.readMessage(value,proto.ConfBase.deserializeBinaryFromReader);
      msg.getreqconfinfos().push(value);
      msg.setreqconfinfos(msg.getreqconfinfos());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DownloadCfgReq} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DownloadCfgReq.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DownloadCfgReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DownloadCfgReq.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getreqconfinfos();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ConfBase.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DownloadCfgReq} The clone.
 */
proto.DownloadCfgReq.prototype.cloneMessage = function() {
  return /** @type {!proto.DownloadCfgReq} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 errcode = 1;
 * @return {number}
 */
proto.DownloadCfgReq.prototype.geterrcode = function() {
  return /** @type {number} */ (!this.haserrcode() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DownloadCfgReq.prototype.seterrcode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DownloadCfgReq.prototype.clearerrcode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DownloadCfgReq.prototype.haserrcode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string errcodedes = 2;
 * @return {string}
 */
proto.DownloadCfgReq.prototype.geterrcodedes = function() {
  return /** @type {string} */ (!this.haserrcodedes() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.DownloadCfgReq.prototype.seterrcodedes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DownloadCfgReq.prototype.clearerrcodedes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DownloadCfgReq.prototype.haserrcodedes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ConfBase reqconfinfos = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ConfBase>}
 */
proto.DownloadCfgReq.prototype.getreqconfinfos = function() {
  return /** @type{!Array.<!proto.ConfBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ConfBase, 3));
};


/** @param {Array.<!proto.ConfBase>} value  */
proto.DownloadCfgReq.prototype.setreqconfinfos = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.DownloadCfgReq.prototype.clearreqconfinfos = function() {
  this.setreqconfinfos([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RepeatNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RepeatNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RepeatNtc.displayName = 'proto.RepeatNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RepeatNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.RepeatNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RepeatNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.RepeatNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.RepeatNtc}
 */
proto.RepeatNtc.fromObject = function(obj) {
  var f, msg = new proto.RepeatNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RepeatNtc}
 */
proto.RepeatNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RepeatNtc;
  return proto.RepeatNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RepeatNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RepeatNtc}
 */
proto.RepeatNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.RepeatNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.RepeatNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RepeatNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.RepeatNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.RepeatNtc} The clone.
 */
proto.RepeatNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.RepeatNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.RepeatNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.RepeatNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.RepeatNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.RepeatNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SitdownTableNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SitdownTableNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SitdownTableNtc.displayName = 'proto.SitdownTableNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SitdownTableNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.SitdownTableNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SitdownTableNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SitdownTableNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    seatinfo: (f = msg.getseatinfo()) && proto.SeatInfo.toObject(includeInstance, f),
    tableplayerinfo: (f = msg.gettableplayerinfo()) && proto.TablePlayerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.SitdownTableNtc}
 */
proto.SitdownTableNtc.fromObject = function(obj) {
  var f, msg = new proto.SitdownTableNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.seatinfo) && jspb.Message.setWrapperField(
      msg, 2, proto.SeatInfo.fromObject(obj.seatinfo));
  goog.isDef(obj.tableplayerinfo) && jspb.Message.setWrapperField(
      msg, 3, proto.TablePlayerInfo.fromObject(obj.tableplayerinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SitdownTableNtc}
 */
proto.SitdownTableNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SitdownTableNtc;
  return proto.SitdownTableNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SitdownTableNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SitdownTableNtc}
 */
proto.SitdownTableNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = new proto.SeatInfo;
      reader.readMessage(value,proto.SeatInfo.deserializeBinaryFromReader);
      msg.setseatinfo(value);
      break;
    case 3:
      var value = new proto.TablePlayerInfo;
      reader.readMessage(value,proto.TablePlayerInfo.deserializeBinaryFromReader);
      msg.settableplayerinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SitdownTableNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SitdownTableNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SitdownTableNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getseatinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SeatInfo.serializeBinaryToWriter
    );
  }
  f = this.gettableplayerinfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TablePlayerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SitdownTableNtc} The clone.
 */
proto.SitdownTableNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.SitdownTableNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.SitdownTableNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.SitdownTableNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SitdownTableNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SeatInfo seatinfo = 2;
 * @return {proto.SeatInfo}
 */
proto.SitdownTableNtc.prototype.getseatinfo = function() {
  return /** @type{proto.SeatInfo} */ (
    jspb.Message.getWrapperField(this, proto.SeatInfo, 2));
};


/** @param {proto.SeatInfo|undefined} value  */
proto.SitdownTableNtc.prototype.setseatinfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SitdownTableNtc.prototype.clearseatinfo = function() {
  this.setseatinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableNtc.prototype.hasseatinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TablePlayerInfo tableplayerinfo = 3;
 * @return {proto.TablePlayerInfo}
 */
proto.SitdownTableNtc.prototype.gettableplayerinfo = function() {
  return /** @type{proto.TablePlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.TablePlayerInfo, 3));
};


/** @param {proto.TablePlayerInfo|undefined} value  */
proto.SitdownTableNtc.prototype.settableplayerinfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SitdownTableNtc.prototype.cleartableplayerinfo = function() {
  this.settableplayerinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.SitdownTableNtc.prototype.hastableplayerinfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StandupTableNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StandupTableNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.StandupTableNtc.displayName = 'proto.StandupTableNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StandupTableNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.StandupTableNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StandupTableNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.StandupTableNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    state: jspb.Message.getField(msg, 3),
    reason: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.StandupTableNtc}
 */
proto.StandupTableNtc.fromObject = function(obj) {
  var f, msg = new proto.StandupTableNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.state) && jspb.Message.setField(msg, 3, obj.state);
  goog.isDef(obj.reason) && jspb.Message.setField(msg, 4, obj.reason);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StandupTableNtc}
 */
proto.StandupTableNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StandupTableNtc;
  return proto.StandupTableNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StandupTableNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StandupTableNtc}
 */
proto.StandupTableNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setstate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setreason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.StandupTableNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StandupTableNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.StandupTableNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.StandupTableNtc} The clone.
 */
proto.StandupTableNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.StandupTableNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.StandupTableNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.StandupTableNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.StandupTableNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.StandupTableNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.StandupTableNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.StandupTableNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 state = 3;
 * @return {number}
 */
proto.StandupTableNtc.prototype.getstate = function() {
  return /** @type {number} */ (!this.hasstate() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.StandupTableNtc.prototype.setstate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.StandupTableNtc.prototype.clearstate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableNtc.prototype.hasstate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 reason = 4;
 * @return {number}
 */
proto.StandupTableNtc.prototype.getreason = function() {
  return /** @type {number} */ (!this.hasreason() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.StandupTableNtc.prototype.setreason = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.StandupTableNtc.prototype.clearreason = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.StandupTableNtc.prototype.hasreason = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DoactionNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DoactionNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DoactionNtc.displayName = 'proto.DoactionNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DoactionNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DoactionNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DoactionNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DoactionNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    action_to_time: jspb.Message.getField(msg, 3),
    action_type: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DoactionNtc}
 */
proto.DoactionNtc.fromObject = function(obj) {
  var f, msg = new proto.DoactionNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.action_to_time) && jspb.Message.setField(msg, 3, obj.action_to_time);
  goog.isDef(obj.action_type) && jspb.Message.setField(msg, 4, obj.action_type);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DoactionNtc}
 */
proto.DoactionNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DoactionNtc;
  return proto.DoactionNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DoactionNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DoactionNtc}
 */
proto.DoactionNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_to_time(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_type(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DoactionNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DoactionNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DoactionNtc} The clone.
 */
proto.DoactionNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DoactionNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.DoactionNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DoactionNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DoactionNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.DoactionNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.DoactionNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DoactionNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 action_to_time = 3;
 * @return {number}
 */
proto.DoactionNtc.prototype.getaction_to_time = function() {
  return /** @type {number} */ (!this.hasaction_to_time() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.DoactionNtc.prototype.setaction_to_time = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DoactionNtc.prototype.clearaction_to_time = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionNtc.prototype.hasaction_to_time = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 action_type = 4;
 * @return {number}
 */
proto.DoactionNtc.prototype.getaction_type = function() {
  return /** @type {number} */ (!this.hasaction_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.DoactionNtc.prototype.setaction_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.DoactionNtc.prototype.clearaction_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionNtc.prototype.hasaction_type = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameStartNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GameStartNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameStartNtc.displayName = 'proto.GameStartNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameStartNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.GameStartNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameStartNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameStartNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameinfo: (f = msg.getgameinfo()) && proto.GameInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameStartNtc}
 */
proto.GameStartNtc.fromObject = function(obj) {
  var f, msg = new proto.GameStartNtc();
  goog.isDef(obj.gameinfo) && jspb.Message.setWrapperField(
      msg, 1, proto.GameInfo.fromObject(obj.gameinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameStartNtc}
 */
proto.GameStartNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameStartNtc;
  return proto.GameStartNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameStartNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameStartNtc}
 */
proto.GameStartNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GameInfo;
      reader.readMessage(value,proto.GameInfo.deserializeBinaryFromReader);
      msg.setgameinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameStartNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameStartNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameStartNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameStartNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getgameinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GameInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameStartNtc} The clone.
 */
proto.GameStartNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.GameStartNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GameInfo gameinfo = 1;
 * @return {proto.GameInfo}
 */
proto.GameStartNtc.prototype.getgameinfo = function() {
  return /** @type{proto.GameInfo} */ (
    jspb.Message.getWrapperField(this, proto.GameInfo, 1));
};


/** @param {proto.GameInfo|undefined} value  */
proto.GameStartNtc.prototype.setgameinfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.GameStartNtc.prototype.cleargameinfo = function() {
  this.setgameinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameStartNtc.prototype.hasgameinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DoactionResultNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DoactionResultNtc.repeatedFields_, null);
};
goog.inherits(proto.DoactionResultNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DoactionResultNtc.displayName = 'proto.DoactionResultNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DoactionResultNtc.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DoactionResultNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DoactionResultNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DoactionResultNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DoactionResultNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    action_type: jspb.Message.getField(msg, 3),
    cards: jspb.Message.getField(msg, 4),
    call_times: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DoactionResultNtc}
 */
proto.DoactionResultNtc.fromObject = function(obj) {
  var f, msg = new proto.DoactionResultNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.action_type) && jspb.Message.setField(msg, 3, obj.action_type);
  goog.isDef(obj.cards) && jspb.Message.setField(msg, 4, obj.cards);
  goog.isDef(obj.call_times) && jspb.Message.setField(msg, 5, obj.call_times);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DoactionResultNtc}
 */
proto.DoactionResultNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DoactionResultNtc;
  return proto.DoactionResultNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DoactionResultNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DoactionResultNtc}
 */
proto.DoactionResultNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_type(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getcards().push(value);
      msg.setcards(msg.getcards());
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setcall_times(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DoactionResultNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionResultNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DoactionResultNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoactionResultNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DoactionResultNtc} The clone.
 */
proto.DoactionResultNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DoactionResultNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.DoactionResultNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DoactionResultNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DoactionResultNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionResultNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.DoactionResultNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.DoactionResultNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DoactionResultNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionResultNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 action_type = 3;
 * @return {number}
 */
proto.DoactionResultNtc.prototype.getaction_type = function() {
  return /** @type {number} */ (!this.hasaction_type() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.DoactionResultNtc.prototype.setaction_type = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DoactionResultNtc.prototype.clearaction_type = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionResultNtc.prototype.hasaction_type = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated int32 cards = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.DoactionResultNtc.prototype.getcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 4));
};


/** @param {Array.<number>} value  */
proto.DoactionResultNtc.prototype.setcards = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


proto.DoactionResultNtc.prototype.clearcards = function() {
  jspb.Message.setField(this, 4, []);
};


/**
 * optional int32 call_times = 5;
 * @return {number}
 */
proto.DoactionResultNtc.prototype.getcall_times = function() {
  return /** @type {number} */ (!this.hascall_times() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.DoactionResultNtc.prototype.setcall_times = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.DoactionResultNtc.prototype.clearcall_times = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoactionResultNtc.prototype.hascall_times = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DealCardsNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DealCardsNtc.repeatedFields_, null);
};
goog.inherits(proto.DealCardsNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DealCardsNtc.displayName = 'proto.DealCardsNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DealCardsNtc.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DealCardsNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DealCardsNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DealCardsNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DealCardsNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    cards: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DealCardsNtc}
 */
proto.DealCardsNtc.fromObject = function(obj) {
  var f, msg = new proto.DealCardsNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.cards) && jspb.Message.setField(msg, 3, obj.cards);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DealCardsNtc}
 */
proto.DealCardsNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DealCardsNtc;
  return proto.DealCardsNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DealCardsNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DealCardsNtc}
 */
proto.DealCardsNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getcards().push(value);
      msg.setcards(msg.getcards());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DealCardsNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DealCardsNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DealCardsNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DealCardsNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DealCardsNtc} The clone.
 */
proto.DealCardsNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DealCardsNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.DealCardsNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DealCardsNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DealCardsNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DealCardsNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.DealCardsNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.DealCardsNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DealCardsNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DealCardsNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated int32 cards = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.DealCardsNtc.prototype.getcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 3));
};


/** @param {Array.<number>} value  */
proto.DealCardsNtc.prototype.setcards = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


proto.DealCardsNtc.prototype.clearcards = function() {
  jspb.Message.setField(this, 3, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DoReadyNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DoReadyNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DoReadyNtc.displayName = 'proto.DoReadyNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DoReadyNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DoReadyNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DoReadyNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DoReadyNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    ready_to_time: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DoReadyNtc}
 */
proto.DoReadyNtc.fromObject = function(obj) {
  var f, msg = new proto.DoReadyNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.ready_to_time) && jspb.Message.setField(msg, 3, obj.ready_to_time);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DoReadyNtc}
 */
proto.DoReadyNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DoReadyNtc;
  return proto.DoReadyNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DoReadyNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DoReadyNtc}
 */
proto.DoReadyNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setready_to_time(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DoReadyNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoReadyNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DoReadyNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DoReadyNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DoReadyNtc} The clone.
 */
proto.DoReadyNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DoReadyNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.DoReadyNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DoReadyNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DoReadyNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoReadyNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.DoReadyNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.DoReadyNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DoReadyNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoReadyNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 ready_to_time = 3;
 * @return {number}
 */
proto.DoReadyNtc.prototype.getready_to_time = function() {
  return /** @type {number} */ (!this.hasready_to_time() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.DoReadyNtc.prototype.setready_to_time = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.DoReadyNtc.prototype.clearready_to_time = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DoReadyNtc.prototype.hasready_to_time = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameReadyResultNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GameReadyResultNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameReadyResultNtc.displayName = 'proto.GameReadyResultNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameReadyResultNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.GameReadyResultNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameReadyResultNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameReadyResultNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    roomsvr_seat_index: jspb.Message.getField(msg, 2),
    isready: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameReadyResultNtc}
 */
proto.GameReadyResultNtc.fromObject = function(obj) {
  var f, msg = new proto.GameReadyResultNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.roomsvr_seat_index) && jspb.Message.setField(msg, 2, obj.roomsvr_seat_index);
  goog.isDef(obj.isready) && jspb.Message.setField(msg, 3, obj.isready);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameReadyResultNtc}
 */
proto.GameReadyResultNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameReadyResultNtc;
  return proto.GameReadyResultNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameReadyResultNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameReadyResultNtc}
 */
proto.GameReadyResultNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setroomsvr_seat_index(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setisready(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameReadyResultNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyResultNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameReadyResultNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameReadyResultNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameReadyResultNtc} The clone.
 */
proto.GameReadyResultNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.GameReadyResultNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.GameReadyResultNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GameReadyResultNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GameReadyResultNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyResultNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 roomsvr_seat_index = 2;
 * @return {number}
 */
proto.GameReadyResultNtc.prototype.getroomsvr_seat_index = function() {
  return /** @type {number} */ (!this.hasroomsvr_seat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GameReadyResultNtc.prototype.setroomsvr_seat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GameReadyResultNtc.prototype.clearroomsvr_seat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyResultNtc.prototype.hasroomsvr_seat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 isready = 3;
 * @return {number}
 */
proto.GameReadyResultNtc.prototype.getisready = function() {
  return /** @type {number} */ (!this.hasisready() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.GameReadyResultNtc.prototype.setisready = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.GameReadyResultNtc.prototype.clearisready = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameReadyResultNtc.prototype.hasisready = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DealCardsEndNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DealCardsEndNtc.repeatedFields_, null);
};
goog.inherits(proto.DealCardsEndNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DealCardsEndNtc.displayName = 'proto.DealCardsEndNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DealCardsEndNtc.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DealCardsEndNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DealCardsEndNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DealCardsEndNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DealCardsEndNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    cards: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DealCardsEndNtc}
 */
proto.DealCardsEndNtc.fromObject = function(obj) {
  var f, msg = new proto.DealCardsEndNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.cards) && jspb.Message.setField(msg, 2, obj.cards);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DealCardsEndNtc}
 */
proto.DealCardsEndNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DealCardsEndNtc;
  return proto.DealCardsEndNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DealCardsEndNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DealCardsEndNtc}
 */
proto.DealCardsEndNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getcards().push(value);
      msg.setcards(msg.getcards());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DealCardsEndNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DealCardsEndNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DealCardsEndNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DealCardsEndNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DealCardsEndNtc} The clone.
 */
proto.DealCardsEndNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DealCardsEndNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.DealCardsEndNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.DealCardsEndNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DealCardsEndNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DealCardsEndNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 cards = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.DealCardsEndNtc.prototype.getcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>} value  */
proto.DealCardsEndNtc.prototype.setcards = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.DealCardsEndNtc.prototype.clearcards = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerInfoInGameEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerInfoInGameEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerInfoInGameEnd.displayName = 'proto.PlayerInfoInGameEnd';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerInfoInGameEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerInfoInGameEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerInfoInGameEnd} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerInfoInGameEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    rolename: jspb.Message.getField(msg, 2),
    allcoins: jspb.Message.getField(msg, 3),
    getcoins: jspb.Message.getField(msg, 4),
    isdz: jspb.Message.getField(msg, 5),
    iswin: jspb.Message.getField(msg, 6),
    seatindex: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerInfoInGameEnd}
 */
proto.PlayerInfoInGameEnd.fromObject = function(obj) {
  var f, msg = new proto.PlayerInfoInGameEnd();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.rolename) && jspb.Message.setField(msg, 2, obj.rolename);
  goog.isDef(obj.allcoins) && jspb.Message.setField(msg, 3, obj.allcoins);
  goog.isDef(obj.getcoins) && jspb.Message.setField(msg, 4, obj.getcoins);
  goog.isDef(obj.isdz) && jspb.Message.setField(msg, 5, obj.isdz);
  goog.isDef(obj.iswin) && jspb.Message.setField(msg, 6, obj.iswin);
  goog.isDef(obj.seatindex) && jspb.Message.setField(msg, 7, obj.seatindex);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerInfoInGameEnd}
 */
proto.PlayerInfoInGameEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerInfoInGameEnd;
  return proto.PlayerInfoInGameEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerInfoInGameEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerInfoInGameEnd}
 */
proto.PlayerInfoInGameEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setrolename(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setallcoins(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setgetcoins(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setisdz(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setiswin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setseatindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerInfoInGameEnd} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerInfoInGameEnd.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerInfoInGameEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerInfoInGameEnd.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = jspb.Message.getField(this, 7);
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerInfoInGameEnd} The clone.
 */
proto.PlayerInfoInGameEnd.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerInfoInGameEnd} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerInfoInGameEnd.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rolename = 2;
 * @return {string}
 */
proto.PlayerInfoInGameEnd.prototype.getrolename = function() {
  return /** @type {string} */ (!this.hasrolename() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setrolename = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerInfoInGameEnd.prototype.clearrolename = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasrolename = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 allcoins = 3;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getallcoins = function() {
  return /** @type {number} */ (!this.hasallcoins() ? 0 : jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setallcoins = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.PlayerInfoInGameEnd.prototype.clearallcoins = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasallcoins = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 getcoins = 4;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getgetcoins = function() {
  return /** @type {number} */ (!this.hasgetcoins() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setgetcoins = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.PlayerInfoInGameEnd.prototype.cleargetcoins = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasgetcoins = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 isdz = 5;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getisdz = function() {
  return /** @type {number} */ (!this.hasisdz() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setisdz = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.PlayerInfoInGameEnd.prototype.clearisdz = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasisdz = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 iswin = 6;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getiswin = function() {
  return /** @type {number} */ (!this.hasiswin() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setiswin = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.PlayerInfoInGameEnd.prototype.cleariswin = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasiswin = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 seatindex = 7;
 * @return {number}
 */
proto.PlayerInfoInGameEnd.prototype.getseatindex = function() {
  return /** @type {number} */ (!this.hasseatindex() ? 0 : jspb.Message.getField(this, 7));
};


/** @param {number?|undefined} value  */
proto.PlayerInfoInGameEnd.prototype.setseatindex = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.PlayerInfoInGameEnd.prototype.clearseatindex = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerInfoInGameEnd.prototype.hasseatindex = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameEndResultNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GameEndResultNtc.repeatedFields_, null);
};
goog.inherits(proto.GameEndResultNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.GameEndResultNtc.displayName = 'proto.GameEndResultNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GameEndResultNtc.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameEndResultNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.GameEndResultNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameEndResultNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.GameEndResultNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    basecoins: jspb.Message.getField(msg, 1),
    times: jspb.Message.getField(msg, 2),
    playerinfos: jspb.Message.toObjectList(msg.getplayerinfos(),
    proto.PlayerInfoInGameEnd.toObject, includeInstance),
    ischuntian: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.GameEndResultNtc}
 */
proto.GameEndResultNtc.fromObject = function(obj) {
  var f, msg = new proto.GameEndResultNtc();
  goog.isDef(obj.basecoins) && jspb.Message.setField(msg, 1, obj.basecoins);
  goog.isDef(obj.times) && jspb.Message.setField(msg, 2, obj.times);
  goog.isDef(obj.playerinfos) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.playerinfos, function(i) {
        return proto.PlayerInfoInGameEnd.fromObject(i);
      }));
  goog.isDef(obj.ischuntian) && jspb.Message.setField(msg, 4, obj.ischuntian);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameEndResultNtc}
 */
proto.GameEndResultNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameEndResultNtc;
  return proto.GameEndResultNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameEndResultNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameEndResultNtc}
 */
proto.GameEndResultNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbasecoins(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settimes(value);
      break;
    case 3:
      var value = new proto.PlayerInfoInGameEnd;
      reader.readMessage(value,proto.PlayerInfoInGameEnd.deserializeBinaryFromReader);
      msg.getplayerinfos().push(value);
      msg.setplayerinfos(msg.getplayerinfos());
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setischuntian(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.GameEndResultNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameEndResultNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameEndResultNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.GameEndResultNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getplayerinfos();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.PlayerInfoInGameEnd.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.GameEndResultNtc} The clone.
 */
proto.GameEndResultNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.GameEndResultNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 basecoins = 1;
 * @return {number}
 */
proto.GameEndResultNtc.prototype.getbasecoins = function() {
  return /** @type {number} */ (!this.hasbasecoins() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.GameEndResultNtc.prototype.setbasecoins = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.GameEndResultNtc.prototype.clearbasecoins = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameEndResultNtc.prototype.hasbasecoins = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 times = 2;
 * @return {number}
 */
proto.GameEndResultNtc.prototype.gettimes = function() {
  return /** @type {number} */ (!this.hastimes() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.GameEndResultNtc.prototype.settimes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.GameEndResultNtc.prototype.cleartimes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameEndResultNtc.prototype.hastimes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerInfoInGameEnd playerinfos = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.PlayerInfoInGameEnd>}
 */
proto.GameEndResultNtc.prototype.getplayerinfos = function() {
  return /** @type{!Array.<!proto.PlayerInfoInGameEnd>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PlayerInfoInGameEnd, 3));
};


/** @param {Array.<!proto.PlayerInfoInGameEnd>} value  */
proto.GameEndResultNtc.prototype.setplayerinfos = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.GameEndResultNtc.prototype.clearplayerinfos = function() {
  this.setplayerinfos([]);
};


/**
 * optional int32 ischuntian = 4;
 * @return {number}
 */
proto.GameEndResultNtc.prototype.getischuntian = function() {
  return /** @type {number} */ (!this.hasischuntian() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.GameEndResultNtc.prototype.setischuntian = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.GameEndResultNtc.prototype.clearischuntian = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.GameEndResultNtc.prototype.hasischuntian = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PushhandsNumNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PushhandsNumNtc.repeatedFields_, null);
};
goog.inherits(proto.PushhandsNumNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PushhandsNumNtc.displayName = 'proto.PushhandsNumNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PushhandsNumNtc.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PushhandsNumNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.PushhandsNumNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PushhandsNumNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PushhandsNumNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    basecoins: jspb.Message.getField(msg, 1),
    times: jspb.Message.getField(msg, 2),
    seats: jspb.Message.toObjectList(msg.getseats(),
    proto.SeatInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PushhandsNumNtc}
 */
proto.PushhandsNumNtc.fromObject = function(obj) {
  var f, msg = new proto.PushhandsNumNtc();
  goog.isDef(obj.basecoins) && jspb.Message.setField(msg, 1, obj.basecoins);
  goog.isDef(obj.times) && jspb.Message.setField(msg, 2, obj.times);
  goog.isDef(obj.seats) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.seats, function(i) {
        return proto.SeatInfo.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PushhandsNumNtc}
 */
proto.PushhandsNumNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PushhandsNumNtc;
  return proto.PushhandsNumNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PushhandsNumNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PushhandsNumNtc}
 */
proto.PushhandsNumNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setbasecoins(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.settimes(value);
      break;
    case 3:
      var value = new proto.SeatInfo;
      reader.readMessage(value,proto.SeatInfo.deserializeBinaryFromReader);
      msg.getseats().push(value);
      msg.setseats(msg.getseats());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PushhandsNumNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PushhandsNumNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PushhandsNumNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PushhandsNumNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getseats();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SeatInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PushhandsNumNtc} The clone.
 */
proto.PushhandsNumNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.PushhandsNumNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 basecoins = 1;
 * @return {number}
 */
proto.PushhandsNumNtc.prototype.getbasecoins = function() {
  return /** @type {number} */ (!this.hasbasecoins() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PushhandsNumNtc.prototype.setbasecoins = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PushhandsNumNtc.prototype.clearbasecoins = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PushhandsNumNtc.prototype.hasbasecoins = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 times = 2;
 * @return {number}
 */
proto.PushhandsNumNtc.prototype.gettimes = function() {
  return /** @type {number} */ (!this.hastimes() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.PushhandsNumNtc.prototype.settimes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PushhandsNumNtc.prototype.cleartimes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PushhandsNumNtc.prototype.hastimes = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated SeatInfo seats = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.SeatInfo>}
 */
proto.PushhandsNumNtc.prototype.getseats = function() {
  return /** @type{!Array.<!proto.SeatInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SeatInfo, 3));
};


/** @param {Array.<!proto.SeatInfo>} value  */
proto.PushhandsNumNtc.prototype.setseats = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.PushhandsNumNtc.prototype.clearseats = function() {
  this.setseats([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CardsPuts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CardsPuts.repeatedFields_, null);
};
goog.inherits(proto.CardsPuts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CardsPuts.displayName = 'proto.CardsPuts';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CardsPuts.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CardsPuts.prototype.toObject = function(opt_includeInstance) {
  return proto.CardsPuts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CardsPuts} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CardsPuts.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    putcards: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.CardsPuts}
 */
proto.CardsPuts.fromObject = function(obj) {
  var f, msg = new proto.CardsPuts();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.putcards) && jspb.Message.setField(msg, 2, obj.putcards);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CardsPuts}
 */
proto.CardsPuts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CardsPuts;
  return proto.CardsPuts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CardsPuts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CardsPuts}
 */
proto.CardsPuts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getputcards().push(value);
      msg.setputcards(msg.getputcards());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.CardsPuts} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CardsPuts.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CardsPuts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.CardsPuts.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getputcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.CardsPuts} The clone.
 */
proto.CardsPuts.prototype.cloneMessage = function() {
  return /** @type {!proto.CardsPuts} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.CardsPuts.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.CardsPuts.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.CardsPuts.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.CardsPuts.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 putcards = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.CardsPuts.prototype.getputcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>} value  */
proto.CardsPuts.prototype.setputcards = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.CardsPuts.prototype.clearputcards = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReenterTableNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ReenterTableNtc.repeatedFields_, null);
};
goog.inherits(proto.ReenterTableNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReenterTableNtc.displayName = 'proto.ReenterTableNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ReenterTableNtc.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReenterTableNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.ReenterTableNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReenterTableNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ReenterTableNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    handcards: jspb.Message.getField(msg, 1),
    dealcards: jspb.Message.getField(msg, 2),
    cardsput: jspb.Message.toObjectList(msg.getcardsput(),
    proto.CardsPuts.toObject, includeInstance),
    action_type: jspb.Message.getField(msg, 4),
    action_to_time: jspb.Message.getField(msg, 5),
    action_seat_index: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.ReenterTableNtc}
 */
proto.ReenterTableNtc.fromObject = function(obj) {
  var f, msg = new proto.ReenterTableNtc();
  goog.isDef(obj.handcards) && jspb.Message.setField(msg, 1, obj.handcards);
  goog.isDef(obj.dealcards) && jspb.Message.setField(msg, 2, obj.dealcards);
  goog.isDef(obj.cardsput) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.cardsput, function(i) {
        return proto.CardsPuts.fromObject(i);
      }));
  goog.isDef(obj.action_type) && jspb.Message.setField(msg, 4, obj.action_type);
  goog.isDef(obj.action_to_time) && jspb.Message.setField(msg, 5, obj.action_to_time);
  goog.isDef(obj.action_seat_index) && jspb.Message.setField(msg, 6, obj.action_seat_index);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReenterTableNtc}
 */
proto.ReenterTableNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReenterTableNtc;
  return proto.ReenterTableNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReenterTableNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReenterTableNtc}
 */
proto.ReenterTableNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.gethandcards().push(value);
      msg.sethandcards(msg.gethandcards());
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.getdealcards().push(value);
      msg.setdealcards(msg.getdealcards());
      break;
    case 3:
      var value = new proto.CardsPuts;
      reader.readMessage(value,proto.CardsPuts.deserializeBinaryFromReader);
      msg.getcardsput().push(value);
      msg.setcardsput(msg.getcardsput());
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_type(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_to_time(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setaction_seat_index(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ReenterTableNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReenterTableNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ReenterTableNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.gethandcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      1,
      f
    );
  }
  f = this.getdealcards();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      2,
      f
    );
  }
  f = this.getcardsput();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.CardsPuts.serializeBinaryToWriter
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = jspb.Message.getField(this, 5);
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = jspb.Message.getField(this, 6);
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ReenterTableNtc} The clone.
 */
proto.ReenterTableNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.ReenterTableNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated int32 handcards = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.ReenterTableNtc.prototype.gethandcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<number>} value  */
proto.ReenterTableNtc.prototype.sethandcards = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.ReenterTableNtc.prototype.clearhandcards = function() {
  jspb.Message.setField(this, 1, []);
};


/**
 * repeated int32 dealcards = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.ReenterTableNtc.prototype.getdealcards = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>} value  */
proto.ReenterTableNtc.prototype.setdealcards = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.ReenterTableNtc.prototype.cleardealcards = function() {
  jspb.Message.setField(this, 2, []);
};


/**
 * repeated CardsPuts cardsput = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.CardsPuts>}
 */
proto.ReenterTableNtc.prototype.getcardsput = function() {
  return /** @type{!Array.<!proto.CardsPuts>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CardsPuts, 3));
};


/** @param {Array.<!proto.CardsPuts>} value  */
proto.ReenterTableNtc.prototype.setcardsput = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.ReenterTableNtc.prototype.clearcardsput = function() {
  this.setcardsput([]);
};


/**
 * optional int32 action_type = 4;
 * @return {number}
 */
proto.ReenterTableNtc.prototype.getaction_type = function() {
  return /** @type {number} */ (!this.hasaction_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.ReenterTableNtc.prototype.setaction_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.ReenterTableNtc.prototype.clearaction_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableNtc.prototype.hasaction_type = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 action_to_time = 5;
 * @return {number}
 */
proto.ReenterTableNtc.prototype.getaction_to_time = function() {
  return /** @type {number} */ (!this.hasaction_to_time() ? 0 : jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.ReenterTableNtc.prototype.setaction_to_time = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.ReenterTableNtc.prototype.clearaction_to_time = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableNtc.prototype.hasaction_to_time = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 action_seat_index = 6;
 * @return {number}
 */
proto.ReenterTableNtc.prototype.getaction_seat_index = function() {
  return /** @type {number} */ (!this.hasaction_seat_index() ? 0 : jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.ReenterTableNtc.prototype.setaction_seat_index = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.ReenterTableNtc.prototype.clearaction_seat_index = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ReenterTableNtc.prototype.hasaction_seat_index = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerTableMessageNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerTableMessageNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerTableMessageNtc.displayName = 'proto.PlayerTableMessageNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerTableMessageNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerTableMessageNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerTableMessageNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerTableMessageNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1),
    seat_index: jspb.Message.getField(msg, 2),
    messages: jspb.Message.getField(msg, 3),
    chat_type: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerTableMessageNtc}
 */
proto.PlayerTableMessageNtc.fromObject = function(obj) {
  var f, msg = new proto.PlayerTableMessageNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  goog.isDef(obj.seat_index) && jspb.Message.setField(msg, 2, obj.seat_index);
  goog.isDef(obj.messages) && jspb.Message.setField(msg, 3, obj.messages);
  goog.isDef(obj.chat_type) && jspb.Message.setField(msg, 4, obj.chat_type);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerTableMessageNtc}
 */
proto.PlayerTableMessageNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerTableMessageNtc;
  return proto.PlayerTableMessageNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerTableMessageNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerTableMessageNtc}
 */
proto.PlayerTableMessageNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setseat_index(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setmessages(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setchat_type(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerTableMessageNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerTableMessageNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerTableMessageNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerTableMessageNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = jspb.Message.getField(this, 3);
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = jspb.Message.getField(this, 4);
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerTableMessageNtc} The clone.
 */
proto.PlayerTableMessageNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerTableMessageNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.PlayerTableMessageNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerTableMessageNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerTableMessageNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerTableMessageNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 seat_index = 2;
 * @return {number}
 */
proto.PlayerTableMessageNtc.prototype.getseat_index = function() {
  return /** @type {number} */ (!this.hasseat_index() ? 0 : jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.PlayerTableMessageNtc.prototype.setseat_index = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.PlayerTableMessageNtc.prototype.clearseat_index = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerTableMessageNtc.prototype.hasseat_index = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string messages = 3;
 * @return {string}
 */
proto.PlayerTableMessageNtc.prototype.getmessages = function() {
  return /** @type {string} */ (!this.hasmessages() ? "" : jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.PlayerTableMessageNtc.prototype.setmessages = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.PlayerTableMessageNtc.prototype.clearmessages = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerTableMessageNtc.prototype.hasmessages = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 chat_type = 4;
 * @return {number}
 */
proto.PlayerTableMessageNtc.prototype.getchat_type = function() {
  return /** @type {number} */ (!this.haschat_type() ? 0 : jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.PlayerTableMessageNtc.prototype.setchat_type = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.PlayerTableMessageNtc.prototype.clearchat_type = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerTableMessageNtc.prototype.haschat_type = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeliverGoodsNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DeliverGoodsNtc.repeatedFields_, null);
};
goog.inherits(proto.DeliverGoodsNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DeliverGoodsNtc.displayName = 'proto.DeliverGoodsNtc';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DeliverGoodsNtc.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeliverGoodsNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.DeliverGoodsNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeliverGoodsNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.DeliverGoodsNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    order_id: jspb.Message.getField(msg, 1),
    option_data: jspb.Message.getField(msg, 2),
    awards: jspb.Message.toObjectList(msg.getawards(),
    proto.AwardItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.DeliverGoodsNtc}
 */
proto.DeliverGoodsNtc.fromObject = function(obj) {
  var f, msg = new proto.DeliverGoodsNtc();
  goog.isDef(obj.order_id) && jspb.Message.setField(msg, 1, obj.order_id);
  goog.isDef(obj.option_data) && jspb.Message.setField(msg, 2, obj.option_data);
  goog.isDef(obj.awards) && jspb.Message.setRepeatedWrapperField(
      msg, 3, goog.map(obj.awards, function(i) {
        return proto.AwardItem.fromObject(i);
      }));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeliverGoodsNtc}
 */
proto.DeliverGoodsNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeliverGoodsNtc;
  return proto.DeliverGoodsNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeliverGoodsNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeliverGoodsNtc}
 */
proto.DeliverGoodsNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setorder_id(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setoption_data(value);
      break;
    case 3:
      var value = new proto.AwardItem;
      reader.readMessage(value,proto.AwardItem.deserializeBinaryFromReader);
      msg.getawards().push(value);
      msg.setawards(msg.getawards());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.DeliverGoodsNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeliverGoodsNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeliverGoodsNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.DeliverGoodsNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = jspb.Message.getField(this, 2);
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getawards();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.AwardItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.DeliverGoodsNtc} The clone.
 */
proto.DeliverGoodsNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.DeliverGoodsNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.DeliverGoodsNtc.prototype.getorder_id = function() {
  return /** @type {string} */ (!this.hasorder_id() ? "" : jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.DeliverGoodsNtc.prototype.setorder_id = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.DeliverGoodsNtc.prototype.clearorder_id = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeliverGoodsNtc.prototype.hasorder_id = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string option_data = 2;
 * @return {string}
 */
proto.DeliverGoodsNtc.prototype.getoption_data = function() {
  return /** @type {string} */ (!this.hasoption_data() ? "" : jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.DeliverGoodsNtc.prototype.setoption_data = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.DeliverGoodsNtc.prototype.clearoption_data = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.DeliverGoodsNtc.prototype.hasoption_data = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated AwardItem awards = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.AwardItem>}
 */
proto.DeliverGoodsNtc.prototype.getawards = function() {
  return /** @type{!Array.<!proto.AwardItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AwardItem, 3));
};


/** @param {Array.<!proto.AwardItem>} value  */
proto.DeliverGoodsNtc.prototype.setawards = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.DeliverGoodsNtc.prototype.clearawards = function() {
  this.setawards([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerBaseInfoNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerBaseInfoNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerBaseInfoNtc.displayName = 'proto.PlayerBaseInfoNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerBaseInfoNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerBaseInfoNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerBaseInfoNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerBaseInfoNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseinfo: (f = msg.getbaseinfo()) && proto.PlayerBaseinfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerBaseInfoNtc}
 */
proto.PlayerBaseInfoNtc.fromObject = function(obj) {
  var f, msg = new proto.PlayerBaseInfoNtc();
  goog.isDef(obj.baseinfo) && jspb.Message.setWrapperField(
      msg, 1, proto.PlayerBaseinfo.fromObject(obj.baseinfo));
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerBaseInfoNtc}
 */
proto.PlayerBaseInfoNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerBaseInfoNtc;
  return proto.PlayerBaseInfoNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerBaseInfoNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerBaseInfoNtc}
 */
proto.PlayerBaseInfoNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PlayerBaseinfo;
      reader.readMessage(value,proto.PlayerBaseinfo.deserializeBinaryFromReader);
      msg.setbaseinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerBaseInfoNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseInfoNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerBaseInfoNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerBaseInfoNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getbaseinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PlayerBaseinfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerBaseInfoNtc} The clone.
 */
proto.PlayerBaseInfoNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerBaseInfoNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional PlayerBaseinfo baseinfo = 1;
 * @return {proto.PlayerBaseinfo}
 */
proto.PlayerBaseInfoNtc.prototype.getbaseinfo = function() {
  return /** @type{proto.PlayerBaseinfo} */ (
    jspb.Message.getWrapperField(this, proto.PlayerBaseinfo, 1));
};


/** @param {proto.PlayerBaseinfo|undefined} value  */
proto.PlayerBaseInfoNtc.prototype.setbaseinfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.PlayerBaseInfoNtc.prototype.clearbaseinfo = function() {
  this.setbaseinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerBaseInfoNtc.prototype.hasbaseinfo = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerLevelTableNtc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerLevelTableNtc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PlayerLevelTableNtc.displayName = 'proto.PlayerLevelTableNtc';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerLevelTableNtc.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerLevelTableNtc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerLevelTableNtc} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PlayerLevelTableNtc.toObject = function(includeInstance, msg) {
  var f, obj = {
    rid: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {
/**
 * Loads data from an object into a new instance of this proto.
 * @param {!Object} obj The object representation of this proto to
 *     load the data from.
 * @return {!proto.PlayerLevelTableNtc}
 */
proto.PlayerLevelTableNtc.fromObject = function(obj) {
  var f, msg = new proto.PlayerLevelTableNtc();
  goog.isDef(obj.rid) && jspb.Message.setField(msg, 1, obj.rid);
  return msg;
};
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerLevelTableNtc}
 */
proto.PlayerLevelTableNtc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerLevelTableNtc;
  return proto.PlayerLevelTableNtc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerLevelTableNtc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerLevelTableNtc}
 */
proto.PlayerLevelTableNtc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setrid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.PlayerLevelTableNtc} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerLevelTableNtc.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerLevelTableNtc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.PlayerLevelTableNtc.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = jspb.Message.getField(this, 1);
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.PlayerLevelTableNtc} The clone.
 */
proto.PlayerLevelTableNtc.prototype.cloneMessage = function() {
  return /** @type {!proto.PlayerLevelTableNtc} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 rid = 1;
 * @return {number}
 */
proto.PlayerLevelTableNtc.prototype.getrid = function() {
  return /** @type {number} */ (!this.hasrid() ? 0 : jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.PlayerLevelTableNtc.prototype.setrid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.PlayerLevelTableNtc.prototype.clearrid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.PlayerLevelTableNtc.prototype.hasrid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.EMsgType = {
  EMSGTYPE_UNKNOWN: 0,
  EMSGTYPE_REQUEST: 1,
  EMSGTYPE_RESPONSE: 2,
  EMSGTYPE_NOTICE: 3
};

goog.object.extend(exports, proto);
