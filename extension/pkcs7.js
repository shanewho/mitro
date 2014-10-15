(function(){function n(c){var a=c.asn1,g=c.pkcs7=c.pkcs7||{};g.messageFromPem=function(b){b=c.pem.decode(b)[0];if("PKCS7"!==b.type)throw{message:'Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".',headerType:b.type};if(b.procType&&"ENCRYPTED"===b.procType.type)throw{message:"Could not convert PKCS#7 message from PEM; PEM is encrypted."};b=a.fromDer(b.body);return g.messageFromAsn1(b)};g.messageToPem=function(b,d){var f={type:"PKCS7",body:a.toDer(b.toAsn1()).getBytes()};return c.pem.encode(f,
{maxline:d})};g.messageFromAsn1=function(b){var d={},f=[];if(!a.validate(b,g.asn1.contentInfoValidator,d,f))throw{message:"Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.",errors:f};b=a.derToOid(d.contentType);switch(b){case c.pki.oids.envelopedData:b=g.createEnvelopedData();break;case c.pki.oids.encryptedData:b=g.createEncryptedData();break;case c.pki.oids.signedData:b=g.createSignedData();break;default:throw{message:"Cannot read PKCS#7 message. ContentType with OID "+b+" is not (yet) supported."};
}b.fromAsn1(d.content.value[0]);return b};var p=function(b){var d={},f=[];if(!a.validate(b,g.asn1.recipientInfoValidator,d,f))throw{message:"Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 EnvelopedData.",errors:f};return{version:d.version.charCodeAt(0),issuer:c.pki.RDNAttributesAsArray(d.issuer),serialNumber:c.util.createBuffer(d.serial).toHex(),encryptedContent:{algorithm:a.derToOid(d.encAlgorithm),parameter:d.encParameter.value,content:d.encKey}}},k=function(b){return a.create(a.Class.UNIVERSAL,
a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(b.version).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[c.pki.distinguishedNameToAsn1({attributes:b.issuer}),a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,c.util.hexToBytes(b.serialNumber))]),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(b.encryptedContent.algorithm).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.NULL,!1,"")]),a.create(a.Class.UNIVERSAL,
a.Type.OCTETSTRING,!1,b.encryptedContent.content)])},t=function(a){for(var d=[],c=0;c<a.length;c++)d.push(k(a[c]));return d},n=function(b){return[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(c.pki.oids.data).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(b.algorithm).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.OCTETSTRING,!1,b.parameter.getBytes())]),a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,a.Type.OCTETSTRING,
!1,b.content.getBytes())])]},r=function(b,d,f){var e={},g=[];if(!a.validate(d,f,e,g))throw{message:"Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.",errors:g};if(a.derToOid(e.contentType)!==c.pki.oids.data)throw{message:"Unsupported PKCS#7 message. Only wrapped ContentType Data supported."};if(e.encryptedContent){d="";if(c.util.isArray(e.encryptedContent))for(f=0;f<e.encryptedContent.length;++f){if(e.encryptedContent[f].type!==a.Type.OCTETSTRING)throw{message:"Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects."};
d+=e.encryptedContent[f].value}else d=e.encryptedContent;b.encryptedContent={algorithm:a.derToOid(e.encAlgorithm),parameter:c.util.createBuffer(e.encParameter.value),content:c.util.createBuffer(d)}}if(e.content){d="";if(c.util.isArray(e.content))for(f=0;f<e.content.length;++f){if(e.content[f].type!==a.Type.OCTETSTRING)throw{message:"Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects."};d+=e.content[f].value}else d=e.content;b.content=c.util.createBuffer(d)}b.version=
e.version.charCodeAt(0);return b.rawCapture=e},m=function(a){if(void 0===a.encryptedContent.key)throw{message:"Symmetric key not available."};if(void 0===a.content){var d;switch(a.encryptedContent.algorithm){case c.pki.oids["aes128-CBC"]:case c.pki.oids["aes192-CBC"]:case c.pki.oids["aes256-CBC"]:d=c.aes.createDecryptionCipher(a.encryptedContent.key);break;case c.pki.oids.desCBC:case c.pki.oids["des-EDE3-CBC"]:d=c.des.createDecryptionCipher(a.encryptedContent.key);break;default:throw{message:"Unsupported symmetric cipher, OID "+
a.encryptedContent.algorithm};}d.start(a.encryptedContent.parameter);d.update(a.encryptedContent.content);if(!d.finish())throw{message:"Symmetric decryption failed."};a.content=d.output}};g.createSignedData=function(){var b=null;return b={type:c.pki.oids.signedData,version:1,certificates:[],crls:[],digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(a){r(b,a,g.asn1.signedDataValidator);b.certificates=[];b.crls=[];b.digestAlgorithmIdentifiers=[];b.contentInfo=null;b.signerInfos=
[];a=b.rawCapture.certificates.value;for(var f=0;f<a.length;++f)b.certificates.push(c.pki.certificateFromAsn1(a[f]))},toAsn1:function(){if("content"in b)throw"Signing PKCS#7 content not yet implemented.";b.contentInfo||b.sign();for(var d=[],f=0;f<b.certificates.length;++f)d.push(c.pki.certificateToAsn1(b.certificates[0]));return a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(b.type).getBytes()),a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,
a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(b.version).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SET,!0,b.digestAlgorithmIdentifiers),b.contentInfo,a.create(a.Class.CONTEXT_SPECIFIC,0,!0,d),a.create(a.Class.CONTEXT_SPECIFIC,1,!0,[]),a.create(a.Class.UNIVERSAL,a.Type.SET,!0,b.signerInfos)])])])},sign:function(d){if("content"in b)throw"PKCS#7 signing not yet implemented.";"object"!==typeof b.content&&(b.contentInfo=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,
[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(c.pki.oids.data).getBytes())]),"content"in b&&b.contentInfo.value.push(a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,a.Type.OCTETSTRING,!1,b.content)])))},verify:function(){throw"PKCS#7 signature verification not yet implemented.";},addCertificate:function(a){"string"===typeof a&&(a=c.pki.certificateFromPem(a));b.certificates.push(a)},addCertificateRevokationList:function(a){throw"PKCS#7 CRL support not yet implemented.";}}};
g.createEncryptedData=function(){var a=null;return a={type:c.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:c.pki.oids["aes256-CBC"]},fromAsn1:function(d){r(a,d,g.asn1.encryptedDataValidator)},decrypt:function(d){void 0!==d&&(a.encryptedContent.key=d);m(a)}}};g.createEnvelopedData=function(){var b=null;return b={type:c.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:c.pki.oids["aes256-CBC"]},fromAsn1:function(a){var c=r(b,a,g.asn1.envelopedDataValidator);a=
b;for(var c=c.recipientInfos.value,e=[],q=0;q<c.length;q++)e.push(p(c[q]));a.recipients=e},toAsn1:function(){return a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(b.type).getBytes()),a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(b.version).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SET,!0,t(b.recipients)),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,
!0,n(b.encryptedContent))])])])},findRecipient:function(a){for(var c=a.issuer.attributes,e=0;e<b.recipients.length;++e){var g=b.recipients[e],h=g.issuer;if(g.serialNumber===a.serialNumber&&h.length===c.length){for(var k=!0,l=0;l<c.length;++l)if(h[l].type!==c[l].type||h[l].value!==c[l].value){k=!1;break}if(k)return g}}return null},decrypt:function(a,f){if(void 0===b.encryptedContent.key&&void 0!==a&&void 0!==f)switch(a.encryptedContent.algorithm){case c.pki.oids.rsaEncryption:case c.pki.oids.desCBC:var e=
f.decrypt(a.encryptedContent.content);b.encryptedContent.key=c.util.createBuffer(e);break;default:throw{message:"Unsupported asymmetric cipher, OID "+a.encryptedContent.algorithm};}m(b)},addRecipient:function(a){b.recipients.push({version:0,issuer:a.subject.attributes,serialNumber:a.serialNumber,encryptedContent:{algorithm:c.pki.oids.rsaEncryption,key:a.publicKey}})},encrypt:function(a,f){if(void 0===b.encryptedContent.content){f=f||b.encryptedContent.algorithm;a=a||b.encryptedContent.key;var e,g,
h;switch(f){case c.pki.oids["aes128-CBC"]:g=e=16;h=c.aes.createEncryptionCipher;break;case c.pki.oids["aes192-CBC"]:e=24;g=16;h=c.aes.createEncryptionCipher;break;case c.pki.oids["aes256-CBC"]:e=32;g=16;h=c.aes.createEncryptionCipher;break;case c.pki.oids["des-EDE3-CBC"]:e=24;g=8;h=c.des.createEncryptionCipher;break;default:throw{message:"Unsupported symmetric cipher, OID "+f};}if(void 0===a)a=c.util.createBuffer(c.random.getBytes(e));else if(a.length()!=e)throw{message:"Symmetric key has wrong length, got "+
a.length()+" bytes, expected "+e};b.encryptedContent.algorithm=f;b.encryptedContent.key=a;b.encryptedContent.parameter=c.util.createBuffer(c.random.getBytes(g));e=h(a);e.start(b.encryptedContent.parameter.copy());e.update(b.content);if(!e.finish())throw{message:"Symmetric encryption failed."};b.encryptedContent.content=e.output}for(e=0;e<b.recipients.length;e++)if(g=b.recipients[e],void 0===g.encryptedContent.content)switch(g.encryptedContent.algorithm){case c.pki.oids.rsaEncryption:g.encryptedContent.content=
g.encryptedContent.key.encrypt(b.encryptedContent.key.data);break;default:throw{message:"Unsupported asymmetric cipher, OID "+g.encryptedContent.algorithm};}}}}}if("function"!==typeof define)if("object"===typeof module&&module.exports){var u=!0;define=function(c,a){a(require,module)}}else return"undefined"===typeof forge&&(forge={}),n(forge);var m,v=function(c,a){a.exports=function(a){var p=m.map(function(a){return c(a)}).concat(n);a=a||{};a.defined=a.defined||{};if(a.defined.pkcs7)return a.pkcs7;
a.defined.pkcs7=!0;for(var k=0;k<p.length;++k)p[k](a);return a.pkcs7}},s=define;define=function(c,a){m="string"===typeof c?a.slice(2):c.slice(2);if(u)return delete define,s.apply(null,Array.prototype.slice.call(arguments,0));define=s;return define.apply(null,Array.prototype.slice.call(arguments,0))};define("require module ./aes ./asn1 ./des ./oids ./pem ./pkcs7asn1 ./random ./util ./x509".split(" "),function(){v.apply(null,Array.prototype.slice.call(arguments,0))})})();