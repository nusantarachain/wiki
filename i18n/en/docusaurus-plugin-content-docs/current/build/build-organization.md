---
id: build-organization
title: Organization
sidebar_label: Organization
---

Nuchain supports the creation of organization in the _blockchain_

Organization uses same _address_ as regular acccount. The different is that an organization can not
be controlled directly. Instead, organization is controlled by `admin` or by an account that is
registered as delegated administrator [Decentralized ID](build-did.md).

The existence of organisation is required for accessing digital certificates, supply chain, and
other features.

### Creating organization

Registering organization is started by entering [Nuchain Dashboard](https://nuchain.riset.tech) then
go to menu **Accounts** > **Organizations** and click button **+ Register**.

`NOTE! At the moment, organization and its related features are only available in the Testnet network`

Next stage is filling required data using parameter:

![Set Session Key](https://i.imgur.com/WmVC5CU.png)

Notes:

- `name` - name of the organization
- `description` - short description of the organization
- `admin` - ID account that has access to the organization
- `website` - URL website of the organization
- `email` - Email of the organization

Enter **password** of the account that is assigned as admin, and click the button **Sign and
Submit**.

![Set Session Key](https://i.imgur.com/ks7Hyjh.png)

The created organization will appear in dashboard My organizations.

![Set Session Key](https://i.imgur.com/PSbwVEP.png)

**_Note:_** Creating an organization in Nuchain network **costs 10 ARA** (excluding the transaction
fee). The expenditure of creating organization will be recorded in the treasury.
