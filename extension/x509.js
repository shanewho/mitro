(function(){function u(k){function r(a,f){"string"===typeof f&&(f={shortName:f});for(var b=null,e,g=0;null===b&&g<a.attributes.length;++g)e=a.attributes[g],f.type&&f.type===e.type?b=e:f.name&&f.name===e.name?b=e:f.shortName&&f.shortName===e.shortName&&(b=e);return b}function p(c){var f=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]),b;c=c.attributes;for(var e=0;e<c.length;++e){b=c[e];var g=b.value,d=a.Type.PRINTABLESTRING;"valueTagClass"in b&&(d=b.valueTagClass,d===a.Type.UTF8&&(g=k.util.encodeUtf8(g)));
b=a.create(a.Class.UNIVERSAL,a.Type.SET,!0,[a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(b.type).getBytes()),a.create(a.Class.UNIVERSAL,d,!1,g)])]);f.value.push(b)}return f}function A(c){var f=a.create(a.Class.CONTEXT_SPECIFIC,3,!0,[]),b=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]);f.value.push(b);for(var e,g,d=0;d<c.length;++d){e=c[d];g=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]);b.value.push(g);g.value.push(a.create(a.Class.UNIVERSAL,
a.Type.OID,!1,a.oidToDer(e.id).getBytes()));e.critical&&g.value.push(a.create(a.Class.UNIVERSAL,a.Type.BOOLEAN,!1,String.fromCharCode(255)));var l=e.value;"string"!==typeof e.value&&(l=a.toDer(l).getBytes());g.value.push(a.create(a.Class.UNIVERSAL,a.Type.OCTETSTRING,!1,l))}return f}function s(a){for(var f,b=0;b<a.length;++b){f=a[b];"undefined"===typeof f.name&&(f.type&&f.type in h.oids?f.name=h.oids[f.type]:f.shortName&&f.shortName in m&&(f.name=h.oids[m[f.shortName]]));if("undefined"===typeof f.type)if(f.name&&
f.name in h.oids)f.type=h.oids[f.name];else throw{message:"Attribute type not specified.",attribute:f};"undefined"===typeof f.shortName&&f.name&&f.name in m&&(f.shortName=m[f.name]);if("undefined"===typeof f.value)throw{message:"Attribute value not specified.",attribute:f};}}function v(c,f){switch(c){case n["RSASSA-PSS"]:var b=[];void 0!==f.hash.algorithmOid&&b.push(a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(f.hash.algorithmOid).getBytes()),
a.create(a.Class.UNIVERSAL,a.Type.NULL,!1,"")])]));void 0!==f.mgf.algorithmOid&&b.push(a.create(a.Class.CONTEXT_SPECIFIC,1,!0,[a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(f.mgf.algorithmOid).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(f.mgf.hash.algorithmOid).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.NULL,!1,"")])])]));void 0!==f.saltLength&&b.push(a.create(a.Class.CONTEXT_SPECIFIC,
2,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(f.saltLength).getBytes())]));return a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,b);default:return a.create(a.Class.UNIVERSAL,a.Type.NULL,!1,"")}}function u(c){var f=a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[]);if(0===c.attributes.length)return f;c=c.attributes;for(var b=0;b<c.length;++b){var e=c[b],g=e.value,d=a.Type.UTF8;"valueTagClass"in e&&(d=e.valueTagClass);d===a.Type.UTF8&&(g=k.util.encodeUtf8(g));e=a.create(a.Class.UNIVERSAL,
a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(e.type).getBytes()),a.create(a.Class.UNIVERSAL,a.Type.SET,!0,[a.create(a.Class.UNIVERSAL,d,!1,g)])]);f.value.push(e)}return f}var a=k.asn1,h=k.pki=k.pki||{},n=h.oids,m={};m.CN=n.commonName;m.commonName="CN";m.C=n.countryName;m.countryName="C";m.L=n.localityName;m.localityName="L";m.ST=n.stateOrProvinceName;m.stateOrProvinceName="ST";m.O=n.organizationName;m.organizationName="O";m.OU=n.organizationalUnitName;m.organizationalUnitName=
"OU";m.E=n.emailAddress;m.emailAddress="E";var t=k.pki.rsa.publicKeyValidator,x={name:"Certificate",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:a.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:a.Class.UNIVERSAL,type:a.Type.INTEGER,
constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:a.Class.UNIVERSAL,type:a.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:a.Class.UNIVERSAL,
optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:a.Class.UNIVERSAL,type:a.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{name:"Certificate.TBSCertificate.validity.notBefore (generalized)",
tagClass:a.Class.UNIVERSAL,type:a.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:a.Class.UNIVERSAL,type:a.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:a.Class.UNIVERSAL,type:a.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{name:"Certificate.TBSCertificate.subject",
tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},t,{name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:a.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:a.Class.UNIVERSAL,type:a.Type.BITSTRING,constructed:!1,capture:"certIssuerUniqueId"}]},{name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:a.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",
tagClass:a.Class.UNIVERSAL,type:a.Type.BITSTRING,constructed:!1,capture:"certSubjectUniqueId"}]},{name:"Certificate.TBSCertificate.extensions",tagClass:a.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{name:"Certificate.signatureAlgorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.signatureAlgorithm.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",
tagClass:a.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{name:"Certificate.signatureValue",tagClass:a.Class.UNIVERSAL,type:a.Type.BITSTRING,constructed:!1,capture:"certSignature"}]},y={name:"rsapss",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:a.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:a.Class.UNIVERSAL,type:a.Class.SEQUENCE,constructed:!0,optional:!0,
value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:a.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:a.Class.UNIVERSAL,type:a.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"maskGenOid"},
{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:a.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:a.Class.UNIVERSAL,type:a.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",
tagClass:a.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:a.Class.UNIVERSAL,type:a.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},z={name:"CertificationRequest",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[{name:"CertificationRequestInfo",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:a.Class.UNIVERSAL,
type:a.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{name:"CertificationRequestInfo.subject",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},t,{name:"CertificationRequestInfo.attributes",tagClass:a.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,
value:[{name:"CertificationRequestInfo.attributes.type",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:a.Class.UNIVERSAL,type:a.Type.SET,constructed:!0}]}]}]},{name:"CertificationRequest.signatureAlgorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:a.Class.UNIVERSAL,type:a.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",
tagClass:a.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{name:"CertificationRequest.signature",tagClass:a.Class.UNIVERSAL,type:a.Type.BITSTRING,constructed:!1,capture:"csrSignature"}]};h.RDNAttributesAsArray=function(c,f){for(var b=[],e,g,d,l=0;l<c.value.length;++l){e=c.value[l];for(var k=0;k<e.value.length;++k)d={},g=e.value[k],d.type=a.derToOid(g.value[0].value),d.value=g.value[1].value,d.valueTagClass=g.value[1].type,d.type in n&&(d.name=n[d.type],d.name in m&&(d.shortName=m[d.name])),
f&&(f.update(d.type),f.update(d.value)),b.push(d)}return b};h.CRIAttributesAsArray=function(c){for(var f=[],b=0;b<c.length;++b)for(var e=c[b],g=a.derToOid(e.value[0].value),e=e.value[1].value,d=0;d<e.length;++d){var l={};l.type=g;l.value=e[d].value;l.valueTagClass=e[d].type;l.type in n&&(l.name=n[l.type],l.name in m&&(l.shortName=m[l.name]));f.push(l)}return f};var B=function(c){for(var f=[],b,e,g,d=0;d<c.value.length;++d){g=c.value[d];for(var l=0;l<g.value.length;++l){e=g.value[l];b={};b.id=a.derToOid(e.value[0].value);
b.critical=!1;e.value[1].type===a.Type.BOOLEAN?(b.critical=0!==e.value[1].value.charCodeAt(0),b.value=e.value[2].value):b.value=e.value[1].value;if(b.id in n)if(b.name=n[b.id],"keyUsage"===b.name){e=a.fromDer(b.value);var h=0,m=0;1<e.value.length&&(h=e.value.charCodeAt(1),m=2<e.value.length?e.value.charCodeAt(2):0);b.digitalSignature=128===(h&128);b.nonRepudiation=64===(h&64);b.keyEncipherment=32===(h&32);b.dataEncipherment=16===(h&16);b.keyAgreement=8===(h&8);b.keyCertSign=4===(h&4);b.cRLSign=2===
(h&2);b.encipherOnly=1===(h&1);b.decipherOnly=128===(m&128)}else if("basicConstraints"===b.name)e=a.fromDer(b.value),b.cA=0<e.value.length&&e.value[0].type===a.Type.BOOLEAN?0!==e.value[0].value.charCodeAt(0):!1,h=null,0<e.value.length&&e.value[0].type===a.Type.INTEGER?h=e.value[0].value:1<e.value.length&&(h=e.value[1].value),null!==h&&(b.pathLenConstraint=a.derToInteger(h));else if("extKeyUsage"===b.name)for(e=a.fromDer(b.value),h=0;h<e.value.length;++h)m=a.derToOid(e.value[h].value),m in n?b[n[m]]=
!0:b[m]=!0;else if("nsCertType"===b.name)e=a.fromDer(b.value),h=0,1<e.value.length&&(h=e.value.charCodeAt(1)),b.client=128===(h&128),b.server=64===(h&64),b.email=32===(h&32),b.objsign=16===(h&16),b.reserved=8===(h&8),b.sslCA=4===(h&4),b.emailCA=2===(h&2),b.objCA=1===(h&1);else if("subjectAltName"===b.name||"issuerAltName"===b.name)for(b.altNames=[],e=a.fromDer(b.value),m=0;m<e.value.length;++m){var h=e.value[m],q={type:h.type,value:h.value};b.altNames.push(q);switch(h.type){case 7:q.ip=k.util.bytesToIP(h.value);
break;case 8:q.oid=a.derToOid(h.value)}}else"subjectKeyIdentifier"===b.name&&(e=a.fromDer(b.value),b.subjectKeyIdentifier=k.util.bytesToHex(e.value));f.push(b)}}return f},w=function(c,f,b){var e={};if(c!==n["RSASSA-PSS"])return e;b&&(e={hash:{algorithmOid:n.sha1},mgf:{algorithmOid:n.mgf1,hash:{algorithmOid:n.sha1}},saltLength:20});c={};b=[];if(!a.validate(f,y,c,b))throw{message:"Cannot read RSASSA-PSS parameter block.",errors:b};void 0!==c.hashOid&&(e.hash=e.hash||{},e.hash.algorithmOid=a.derToOid(c.hashOid));
void 0!==c.maskGenOid&&(e.mgf=e.mgf||{},e.mgf.algorithmOid=a.derToOid(c.maskGenOid),e.mgf.hash=e.mgf.hash||{},e.mgf.hash.algorithmOid=a.derToOid(c.maskGenHashOid));void 0!==c.saltLength&&(e.saltLength=c.saltLength.charCodeAt(0));return e};h.certificateFromPem=function(c,f,b){c=k.pem.decode(c)[0];if("CERTIFICATE"!==c.type&&"X509 CERTIFICATE"!==c.type&&"TRUSTED CERTIFICATE"!==c.type)throw{message:'Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".',
headerType:c.type};if(c.procType&&"ENCRYPTED"===c.procType.type)throw{message:"Could not convert certificate from PEM; PEM is encrypted."};b=a.fromDer(c.body,b);return h.certificateFromAsn1(b,f)};h.certificateToPem=function(c,f){var b={type:"CERTIFICATE",body:a.toDer(h.certificateToAsn1(c)).getBytes()};return k.pem.encode(b,{maxline:f})};h.publicKeyFromPem=function(c){c=k.pem.decode(c)[0];if("PUBLIC KEY"!==c.type&&"RSA PUBLIC KEY"!==c.type)throw{message:'Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".',
headerType:c.type};if(c.procType&&"ENCRYPTED"===c.procType.type)throw{message:"Could not convert public key from PEM; PEM is encrypted."};c=a.fromDer(c.body);return h.publicKeyFromAsn1(c)};h.publicKeyToPem=function(c,f){var b={type:"PUBLIC KEY",body:a.toDer(h.publicKeyToAsn1(c)).getBytes()};return k.pem.encode(b,{maxline:f})};h.publicKeyToRSAPublicKeyPem=function(c,f){var b={type:"RSA PUBLIC KEY",body:a.toDer(h.publicKeyToRSAPublicKey(c)).getBytes()};return k.pem.encode(b,{maxline:f})};h.certificationRequestFromPem=
function(c,f,b){c=k.pem.decode(c)[0];if("CERTIFICATE REQUEST"!==c.type)throw{message:'Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".',headerType:c.type};if(c.procType&&"ENCRYPTED"===c.procType.type)throw{message:"Could not convert certification request from PEM; PEM is encrypted."};b=a.fromDer(c.body,b);return h.certificationRequestFromAsn1(b,f)};h.certificationRequestToPem=function(c,f){var b={type:"CERTIFICATE REQUEST",body:a.toDer(h.certificationRequestToAsn1(c)).getBytes()};
return k.pem.encode(b,{maxline:f})};h.createCertificate=function(){var c={version:2,serialNumber:"00",signatureOid:null,signature:null,siginfo:{}};c.siginfo.algorithmOid=null;c.validity={};c.validity.notBefore=new Date;c.validity.notAfter=new Date;c.issuer={};c.issuer.getField=function(a){return r(c.issuer,a)};c.issuer.addField=function(a){s([a]);c.issuer.attributes.push(a)};c.issuer.attributes=[];c.issuer.hash=null;c.subject={};c.subject.getField=function(a){return r(c.subject,a)};c.subject.addField=
function(a){s([a]);c.subject.attributes.push(a)};c.subject.attributes=[];c.subject.hash=null;c.extensions=[];c.publicKey=null;c.md=null;c.setSubject=function(a,b){s(a);c.subject.attributes=a;delete c.subject.uniqueId;b&&(c.subject.uniqueId=b);c.subject.hash=null};c.setIssuer=function(a,b){s(a);c.issuer.attributes=a;delete c.issuer.uniqueId;b&&(c.issuer.uniqueId=b);c.issuer.hash=null};c.setExtensions=function(f){for(var b,e=0;e<f.length;++e){b=f[e];"undefined"===typeof b.name&&b.id&&b.id in h.oids&&
(b.name=h.oids[b.id]);if("undefined"===typeof b.id)if(b.name&&b.name in h.oids)b.id=h.oids[b.name];else throw{message:"Extension ID not specified.",extension:b};if("undefined"===typeof b.value){if("keyUsage"===b.name){var g=0,d=0,l=0;b.digitalSignature&&(d|=128,g=7);b.nonRepudiation&&(d|=64,g=6);b.keyEncipherment&&(d|=32,g=5);b.dataEncipherment&&(d|=16,g=4);b.keyAgreement&&(d|=8,g=3);b.keyCertSign&&(d|=4,g=2);b.cRLSign&&(d|=2,g=1);b.encipherOnly&&(d|=1,g=0);b.decipherOnly&&(l|=128,g=7);g=String.fromCharCode(g);
0!==l?g+=String.fromCharCode(d)+String.fromCharCode(l):0!==d&&(g+=String.fromCharCode(d));b.value=a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,g)}else if("basicConstraints"===b.name)b.value=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]),b.cA&&b.value.value.push(a.create(a.Class.UNIVERSAL,a.Type.BOOLEAN,!1,String.fromCharCode(255))),"pathLenConstraint"in b&&b.value.value.push(a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(b.pathLenConstraint).getBytes()));else if("extKeyUsage"===
b.name){b.value=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]);var g=b.value.value,m;for(m in b)!0===b[m]&&(m in n?g.push(a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(n[m]).getBytes())):-1!==m.indexOf(".")&&g.push(a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(m).getBytes())))}else if("nsCertType"===b.name)d=g=0,b.client&&(d|=128,g=7),b.server&&(d|=64,g=6),b.email&&(d|=32,g=5),b.objsign&&(d|=16,g=4),b.reserved&&(d|=8,g=3),b.sslCA&&(d|=4,g=2),b.emailCA&&(d|=2,g=1),b.objCA&&(d|=1,g=0),
g=String.fromCharCode(g),0!==d&&(g+=String.fromCharCode(d)),b.value=a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,g);else if("subjectAltName"===b.name||"issuerAltName"===b.name)for(b.value=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[]),l=0;l<b.altNames.length;++l){d=b.altNames[l];g=d.value;if(7===d.type&&d.ip){if(g=k.util.bytesFromIP(d.ip),null===g)throw{message:'Extension "ip" value is not a valid IPv4 or IPv6 address.',extension:b};}else 8===d.type&&(g=d.oid?a.oidToDer(a.oidToDer(d.oid)):a.oidToDer(g));
b.value.value.push(a.create(a.Class.CONTEXT_SPECIFIC,d.type,!1,g))}else"subjectKeyIdentifier"===b.name&&(g=c.generateSubjectKeyIdentifier(),b.subjectKeyIdentifier=g.toHex(),b.value=a.create(a.Class.UNIVERSAL,a.Type.OCTETSTRING,!1,g.getBytes()));if("undefined"===typeof b.value)throw{message:"Extension value not specified.",extension:b};}}c.extensions=f};c.getExtension=function(a){"string"===typeof a&&(a={name:a});for(var b=null,e,g=0;null===b&&g<c.extensions.length;++g)e=c.extensions[g],a.id&&e.id===
a.id?b=e:a.name&&e.name===a.name&&(b=e);return b};c.sign=function(f,b){c.md=b||k.md.sha1.create();var e=n[c.md.algorithm+"WithRSAEncryption"];if(!e)throw{message:"Could not compute certificate digest. Unknown message digest algorithm OID.",algorithm:c.md.algorithm};c.signatureOid=c.siginfo.algorithmOid=e;c.tbsCertificate=h.getTBSCertificate(c);e=a.toDer(c.tbsCertificate);c.md.update(e.getBytes());c.signature=f.sign(c.md)};c.verify=function(f){var b=!1;if(!c.issued(f))throw{message:"The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.",
expectedIssuer:f.issuer.attributes,actualIssuer:c.subject.attributes};var e=f.md;if(null===e){if(f.signatureOid in n)switch(n[f.signatureOid]){case "sha1WithRSAEncryption":e=k.md.sha1.create();break;case "md5WithRSAEncryption":e=k.md.md5.create();break;case "sha256WithRSAEncryption":e=k.md.sha256.create();break;case "RSASSA-PSS":e=k.md.sha256.create()}if(null===e)throw{message:"Could not compute certificate digest. Unknown signature OID.",signatureOid:f.signatureOid};var g=f.tbsCertificate||h.getTBSCertificate(f),
g=a.toDer(g);e.update(g.getBytes())}if(null!==e){b=void 0;switch(f.signatureOid){case n.sha1WithRSAEncryption:b=void 0;break;case n["RSASSA-PSS"]:b=n[f.signatureParameters.mgf.hash.algorithmOid];if(void 0===b||void 0===k.md[b])throw{message:"Unsupported MGF hash function.",oid:f.signatureParameters.mgf.hash.algorithmOid,name:b};g=n[f.signatureParameters.mgf.algorithmOid];if(void 0===g||void 0===k.mgf[g])throw{message:"Unsupported MGF function.",oid:f.signatureParameters.mgf.algorithmOid,name:g};g=
k.mgf[g].create(k.md[b].create());b=n[f.signatureParameters.hash.algorithmOid];if(void 0===b||void 0===k.md[b])throw{message:"Unsupported RSASSA-PSS hash function.",oid:f.signatureParameters.hash.algorithmOid,name:b};b=k.pss.create(k.md[b].create(),g,f.signatureParameters.saltLength)}b=c.publicKey.verify(e.digest().getBytes(),f.signature,b)}return b};c.isIssuer=function(a){var b=!1,e=c.issuer;a=a.subject;if(e.hash&&a.hash)b=e.hash===a.hash;else if(e.attributes.length===a.attributes.length)for(var b=
!0,g,d,h=0;b&&h<e.attributes.length;++h)if(g=e.attributes[h],d=a.attributes[h],g.type!==d.type||g.value!==d.value)b=!1;return b};c.issued=function(a){return a.isIssuer(c)};c.generateSubjectKeyIdentifier=function(){var f=a.toDer(h.publicKeyToRSAPublicKey(c.publicKey)),b=k.md.sha1.create();b.update(f.getBytes());return b.digest()};c.verifySubjectKeyIdentifier=function(){for(var a=n.subjectKeyIdentifier,b=0;b<c.extensions.length;++b){var e=c.extensions[b];if(e.id===a)return a=c.generateSubjectKeyIdentifier().getBytes(),
k.util.hexToBytes(e.subjectKeyIdentifier)===a}return!1};return c};h.certificateFromAsn1=function(c,f){var b={},e=[];if(!a.validate(c,x,b,e))throw{message:"Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.",errors:e};if("string"!==typeof b.certSignature){for(var e="\x00",g=0;g<b.certSignature.length;++g)e+=a.toDer(b.certSignature[g]).getBytes();b.certSignature=e}e=a.derToOid(b.publicKeyOid);if(e!==h.oids.rsaEncryption)throw{message:"Cannot read public key. OID is not RSA."};
var d=h.createCertificate();d.version=b.certVersion?b.certVersion.charCodeAt(0):0;e=k.util.createBuffer(b.certSerialNumber);d.serialNumber=e.toHex();d.signatureOid=k.asn1.derToOid(b.certSignatureOid);d.signatureParameters=w(d.signatureOid,b.certSignatureParams,!0);d.siginfo.algorithmOid=k.asn1.derToOid(b.certinfoSignatureOid);d.siginfo.parameters=w(d.siginfo.algorithmOid,b.certinfoSignatureParams,!1);e=k.util.createBuffer(b.certSignature);++e.read;d.signature=e.getBytes();e=[];void 0!==b.certValidity1UTCTime&&
e.push(a.utcTimeToDate(b.certValidity1UTCTime));void 0!==b.certValidity2GeneralizedTime&&e.push(a.generalizedTimeToDate(b.certValidity2GeneralizedTime));void 0!==b.certValidity3UTCTime&&e.push(a.utcTimeToDate(b.certValidity3UTCTime));void 0!==b.certValidity4GeneralizedTime&&e.push(a.generalizedTimeToDate(b.certValidity4GeneralizedTime));if(2<e.length)throw{message:"Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate."};if(2>e.length)throw{message:"Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime."};
d.validity.notBefore=e[0];d.validity.notAfter=e[1];d.tbsCertificate=b.tbsCertificate;if(f){d.md=null;if(d.signatureOid in n)switch(e=n[d.signatureOid],e){case "sha1WithRSAEncryption":d.md=k.md.sha1.create();break;case "md5WithRSAEncryption":d.md=k.md.md5.create();break;case "sha256WithRSAEncryption":d.md=k.md.sha256.create();break;case "RSASSA-PSS":d.md=k.md.sha256.create()}if(null===d.md)throw{message:"Could not compute certificate digest. Unknown signature OID.",signatureOid:d.signatureOid};e=a.toDer(d.tbsCertificate);
d.md.update(e.getBytes())}e=k.md.sha1.create();d.issuer.getField=function(a){return r(d.issuer,a)};d.issuer.addField=function(a){s([a]);d.issuer.attributes.push(a)};d.issuer.attributes=h.RDNAttributesAsArray(b.certIssuer,e);b.certIssuerUniqueId&&(d.issuer.uniqueId=b.certIssuerUniqueId);d.issuer.hash=e.digest().toHex();e=k.md.sha1.create();d.subject.getField=function(a){return r(d.subject,a)};d.subject.addField=function(a){s([a]);d.subject.attributes.push(a)};d.subject.attributes=h.RDNAttributesAsArray(b.certSubject,
e);b.certSubjectUniqueId&&(d.subject.uniqueId=b.certSubjectUniqueId);d.subject.hash=e.digest().toHex();d.extensions=b.certExtensions?B(b.certExtensions):[];d.publicKey=h.publicKeyFromAsn1(b.subjectPublicKeyInfo);return d};h.certificationRequestFromAsn1=function(c,f){var b={},e=[];if(!a.validate(c,z,b,e))throw{message:"Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.",errors:e};if("string"!==typeof b.csrSignature){for(var e="\x00",g=0;g<b.csrSignature.length;++g)e+=
a.toDer(b.csrSignature[g]).getBytes();b.csrSignature=e}e=a.derToOid(b.publicKeyOid);if(e!==h.oids.rsaEncryption)throw{message:"Cannot read public key. OID is not RSA."};var d=h.createCertificationRequest();d.version=b.csrVersion?b.csrVersion.charCodeAt(0):0;d.signatureOid=k.asn1.derToOid(b.csrSignatureOid);d.signatureParameters=w(d.signatureOid,b.csrSignatureParams,!0);d.siginfo.algorithmOid=k.asn1.derToOid(b.csrSignatureOid);d.siginfo.parameters=w(d.siginfo.algorithmOid,b.csrSignatureParams,!1);
e=k.util.createBuffer(b.csrSignature);++e.read;d.signature=e.getBytes();d.certificationRequestInfo=b.certificationRequestInfo;if(f){d.md=null;if(d.signatureOid in n)switch(e=n[d.signatureOid],e){case "sha1WithRSAEncryption":d.md=k.md.sha1.create();break;case "md5WithRSAEncryption":d.md=k.md.md5.create();break;case "sha256WithRSAEncryption":d.md=k.md.sha256.create();break;case "RSASSA-PSS":d.md=k.md.sha256.create()}if(null===d.md)throw{message:"Could not compute certification request digest. Unknown signature OID.",
signatureOid:d.signatureOid};e=a.toDer(d.certificationRequestInfo);d.md.update(e.getBytes())}e=k.md.sha1.create();d.subject.getField=function(a){return r(d.subject,a)};d.subject.addField=function(a){s([a]);d.subject.attributes.push(a)};d.subject.attributes=h.RDNAttributesAsArray(b.certificationRequestInfoSubject,e);d.subject.hash=e.digest().toHex();d.publicKey=h.publicKeyFromAsn1(b.subjectPublicKeyInfo);d.getAttribute=function(a){return r(d.attributes,a)};d.addAttribute=function(a){s([a]);d.attributes.push(a)};
d.attributes=h.CRIAttributesAsArray(b.certificationRequestInfoAttributes||[]);return d};h.createCertificationRequest=function(){var c={version:0,signatureOid:null,signature:null,siginfo:{}};c.siginfo.algorithmOid=null;c.subject={};c.subject.getField=function(a){return r(c.subject,a)};c.subject.addField=function(a){s([a]);c.subject.attributes.push(a)};c.subject.attributes=[];c.subject.hash=null;c.publicKey=null;c.attributes=[];c.getAttribute=function(a){return r(c.attributes,a)};c.addAttribute=function(a){s([a]);
c.attributes.push(a)};c.md=null;c.setSubject=function(a){s(a);c.subject.attributes=a;c.subject.hash=null};c.setAttributes=function(a){s(a);c.attributes=a};c.sign=function(f,b){c.md=b||k.md.sha1.create();var e=n[c.md.algorithm+"WithRSAEncryption"];if(!e)throw{message:"Could not compute certification request digest. Unknown message digest algorithm OID.",algorithm:c.md.algorithm};c.signatureOid=c.siginfo.algorithmOid=e;c.certificationRequestInfo=h.getCertificationRequestInfo(c);e=a.toDer(c.certificationRequestInfo);
c.md.update(e.getBytes());c.signature=f.sign(c.md)};c.verify=function(){var f=!1,b=c.md;if(null===b){if(c.signatureOid in n)switch(n[c.signatureOid]){case "sha1WithRSAEncryption":b=k.md.sha1.create();break;case "md5WithRSAEncryption":b=k.md.md5.create();break;case "sha256WithRSAEncryption":b=k.md.sha256.create();break;case "RSASSA-PSS":b=k.md.sha256.create()}if(null===b)throw{message:"Could not compute certification request digest. Unknown signature OID.",signatureOid:c.signatureOid};var e=c.certificationRequestInfo||
h.getCertificationRequestInfo(c),e=a.toDer(e);b.update(e.getBytes())}if(null!==b){var g;switch(c.signatureOid){case n["RSASSA-PSS"]:f=n[c.signatureParameters.mgf.hash.algorithmOid];if(void 0===f||void 0===k.md[f])throw{message:"Unsupported MGF hash function.",oid:c.signatureParameters.mgf.hash.algorithmOid,name:f};g=n[c.signatureParameters.mgf.algorithmOid];if(void 0===g||void 0===k.mgf[g])throw{message:"Unsupported MGF function.",oid:c.signatureParameters.mgf.algorithmOid,name:g};g=k.mgf[g].create(k.md[f].create());
f=n[c.signatureParameters.hash.algorithmOid];if(void 0===f||void 0===k.md[f])throw{message:"Unsupported RSASSA-PSS hash function.",oid:c.signatureParameters.hash.algorithmOid,name:f};g=k.pss.create(k.md[f].create(),g,c.signatureParameters.saltLength)}f=c.publicKey.verify(b.digest().getBytes(),c.signature,g)}return f};return c};h.getTBSCertificate=function(c){var f=a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.CONTEXT_SPECIFIC,0,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(c.version).getBytes())]),
a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,k.util.hexToBytes(c.serialNumber)),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(c.siginfo.algorithmOid).getBytes()),v(c.siginfo.algorithmOid,c.siginfo.parameters)]),p(c.issuer),a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.UTCTIME,!1,a.dateToUtcTime(c.validity.notBefore)),a.create(a.Class.UNIVERSAL,a.Type.UTCTIME,!1,a.dateToUtcTime(c.validity.notAfter))]),p(c.subject),
h.publicKeyToAsn1(c.publicKey)]);c.issuer.uniqueId&&f.value.push(a.create(a.Class.CONTEXT_SPECIFIC,1,!0,[a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,String.fromCharCode(0)+c.issuer.uniqueId)]));c.subject.uniqueId&&f.value.push(a.create(a.Class.CONTEXT_SPECIFIC,2,!0,[a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,String.fromCharCode(0)+c.subject.uniqueId)]));0<c.extensions.length&&f.value.push(A(c.extensions));return f};h.getCertificationRequestInfo=function(c){return a.create(a.Class.UNIVERSAL,
a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.INTEGER,!1,a.integerToDer(c.version).getBytes()),p(c.subject),h.publicKeyToAsn1(c.publicKey),u(c)])};h.distinguishedNameToAsn1=function(a){return p(a)};h.certificateToAsn1=function(c){var f=c.tbsCertificate||h.getTBSCertificate(c);return a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[f,a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(c.signatureOid).getBytes()),v(c.signatureOid,c.signatureParameters)]),
a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,String.fromCharCode(0)+c.signature)])};h.certificationRequestToAsn1=function(c){var f=c.certificationRequestInfo||h.getCertificationRequestInfo(c);return a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[f,a.create(a.Class.UNIVERSAL,a.Type.SEQUENCE,!0,[a.create(a.Class.UNIVERSAL,a.Type.OID,!1,a.oidToDer(c.signatureOid).getBytes()),v(c.signatureOid,c.signatureParameters)]),a.create(a.Class.UNIVERSAL,a.Type.BITSTRING,!1,String.fromCharCode(0)+c.signature)])};
h.createCaStore=function(a){var f={certs:{},getIssuer:function(a){var b=null;if(!a.issuer.hash){var c=k.md.sha1.create();a.issuer.attributes=h.RDNAttributesAsArray(p(a.issuer),c);a.issuer.hash=c.digest().toHex()}if(a.issuer.hash in f.certs&&(b=f.certs[a.issuer.hash],k.util.isArray(b)))throw{message:"Resolving multiple issuer matches not implemented yet."};return b},addCertificate:function(a){"string"===typeof a&&(a=k.pki.certificateFromPem(a));if(!a.subject.hash){var b=k.md.sha1.create();a.subject.attributes=
h.RDNAttributesAsArray(p(a.subject),b);a.subject.hash=b.digest().toHex()}a.subject.hash in f.certs?(b=f.certs[a.subject.hash],k.util.isArray(b)||(b=[b]),b.push(a)):f.certs[a.subject.hash]=a}};if(a)for(var b=0;b<a.length;++b)f.addCertificate(a[b]);return f};h.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",
unknown_ca:"forge.pki.UnknownCertificateAuthority"};h.verifyCertificateChain=function(a,f,b){f=f.slice(0);var e=f.slice(0),g=new Date,d=!0,l=null,n=0,m=null;do{var q=f.shift();if(g<q.validity.notBefore||g>q.validity.notAfter)l={message:"Certificate is not valid yet or has expired.",error:h.certificateError.certificate_expired,notBefore:q.validity.notBefore,notAfter:q.validity.notAfter,now:g};else{var p=!1;if(0<f.length){m=f[0];try{p=m.verify(q)}catch(s){}}else{var r=a.getIssuer(q);if(null===r)l={message:"Certificate is not trusted.",
error:h.certificateError.unknown_ca};else for(k.util.isArray(r)||(r=[r]);!p&&0<r.length;){m=r.shift();try{p=m.verify(q)}catch(v){}}}null!==l||p||(l={message:"Certificate signature is invalid.",error:h.certificateError.bad_certificate})}null!==l||q.isIssuer(m)||(l={message:"Certificate issuer is invalid.",error:h.certificateError.bad_certificate});if(null===l)for(r={keyUsage:!0,basicConstraints:!0},p=0;null===l&&p<q.extensions.length;++p){var t=q.extensions[p];!t.critical||t.name in r||(l={message:"Certificate has an unsupported critical extension.",
error:h.certificateError.unsupported_certificate})}if(!d||0===f.length&&!m)if(d=q.getExtension("basicConstraints"),q=q.getExtension("keyUsage"),null!==q&&(q.keyCertSign&&null!==d||(l={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:h.certificateError.bad_certificate})),null!==l||null===d||d.cA||(l={message:"Certificate basicConstraints indicates the certificate is not a CA.",
error:h.certificateError.bad_certificate}),null===l&&null!==q&&"pathLenConstraint"in d){q=0;for(p=1;p<f.length-1;++p)f[p].isIssuer(f[p])&&++q;f.length-q>d.pathLenConstraint+1&&(l={message:"Certificate basicConstraints pathLenConstraint violated.",error:h.certificateError.bad_certificate})}q=null===l?!0:l.error;d=b?b(q,n,e):q;if(!0===d)l=null;else{!0===q&&(l={message:"The application rejected the certificate.",error:h.certificateError.bad_certificate});if(d||0===d)"object"!==typeof d||k.util.isArray(d)?
"string"===typeof d&&(l.error=d):(d.message&&(l.message=d.message),d.error&&(l.error=d.error));throw l;}d=!1;++n}while(0<f.length);return!0}}if("function"!==typeof define)if("object"===typeof module&&module.exports){var y=!0;define=function(k,r){r(require,module)}}else return"undefined"===typeof forge&&(forge={}),u(forge);var t,z=function(k,r){r.exports=function(p){var r=t.map(function(p){return k(p)}).concat(u);p=p||{};p.defined=p.defined||{};if(p.defined.x509)return p.x509;p.defined.x509=!0;for(var s=
0;s<r.length;++s)r[s](p);return p.pki}},x=define;define=function(k,r){t="string"===typeof k?r.slice(2):k.slice(2);if(y)return delete define,x.apply(null,Array.prototype.slice.call(arguments,0));define=x;return define.apply(null,Array.prototype.slice.call(arguments,0))};define("require module ./aes ./asn1 ./des ./md ./mgf ./oids ./pem ./pss ./rsa ./util".split(" "),function(){z.apply(null,Array.prototype.slice.call(arguments,0))})})();