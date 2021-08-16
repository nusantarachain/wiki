---
id: build-certificate
title: Digital certificate
sidebar_label: Digital certificate
---

Nuchain supports creating digital certificate.

Certificate data in Nuchain is eternal --_once it is written, it can not be erased_, but the validity can still be revoked.

:::info

Certificate in Nuchain is _platform for storage only_, it is not an authority. However, the data in the _blockchain_, that has eternal nature, can be used to prove the existence of the certificate digitally.

:::

## Creating certificates

Creating certificates requires an organisation, a holder of certificate issuer. Further details about creating organisation can be found at [Organisation](build-organization.md).


The steps of creating certificates in Nuchain are:

![Nuchain Certificate](/img/nuchain-certificate.svg)

1. The organisation needs to generate a certificate (as a _template_). The template then will be used in issuing certificates. The access of creating certificate is only available for account `admin` of the organisation and for accounts that has [DId](build-did.md) access to the organisation. Creating certificate is also possible using the extrinsic function `certificate.create`.

2. The organisation issues a certificate for a recipient by using extrinsic function `certificate.issue`.

## Checking the certificates 

Created and issued certificates are written on the _blockchain_ and its existence can be proven by querying using the function `certificate.issuedCert(ID)`.

The validity of the certificates can be proven by ensuring that
1. the certificates are not revoked
2. the certificates does not expire

Example of getting information of issued certificate using the javascript API: 

```javascript
let cert = await api.query.certificate.issuedCert("A35tYxqSP6i");
```

## Revoking the certificates

The issued certificates are able to be revoked. Revoking the certificates will make them invalid. Use extrinsic function `certificate.revoke` to revoke the certificates.

## Expiration of certificates

In Nuchain, the certificate issuer is able to set expiration time of the digital certificates by filling the parameter of `expired` when issuing a certificate.