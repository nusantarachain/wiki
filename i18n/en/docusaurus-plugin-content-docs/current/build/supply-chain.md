---
id: supply-chain
title: Supply Chain
sidebar_label: Supply Chain
---

Nuchain supports functions for building supply chain systems.

The code for building supply chain systems can be found in the following two modules:

- [Product Registry](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry).
- [Product Tracking](https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking).

:::info

To be able to follow this section make sure you have read the section
[Getting Started](../learn/main.md) and [Build](build-intro.md).

:::

The supply chain system requires organizations as product holders. About the organization and how to
create it can be found in section [Organization](build-organization.md)

Broadly speaking, the supply chain system at Nuchain is controlled by the organization. You can use
organizations for:

1. Product registration.
2. Registration _tracking_.
3. Grant access for _tracker_.

_**Tracker**_ is an entity/individual that can do _update_ status _tracking_ with access permission
from the organization via [DID](build-did.md).

![Nuchain Supply Chain](/img/nuchain-supply-chain.png)

_(image: supply chain in Nuchain)_

Every _update_ done by _tracker_ will produce _event_ and _event_ will be held by
[off-chain worker](../general/glossary.md#off-chain-worker) to generate notification.Then the
notification will be _pushed_ via _webhook_.

## Workflow

1. **Registering the product**, the product needs to be registered by sending a transaction using
   functions [extrinsic](../learn/learn-extrinsic.md) `productRegistry.register` with parameter:

   - `id` - this is the id product. It can be numeric, alpha-numeric, GS1 GTIN (Global Trade Item
     Number) or ASIN (Amazon Standard Identification Number).
   - `org_id` - is the ID of the organization/agency that represents ownership of the products.
   - `props` - a list of data containing key values ​​that describe the product. It usually contains
     at least the SKU or description of the product. It can also contains other information such as
     product's content, expiration date, weight, agricultural origin, harvest time, etc.

2. **Registering tracking**, the product that will be \_track_ed needs to be registered first. Use
   the function [extrinsic](../learn/learn-extrinsic.md) `productTracking.register` with parameter:

   - `id` - its _tracking_ id.
   - `org_id` - the ID of the organization/agency that represents ownership of the product.
   - `year` - _tracking_ initiation year, e.g. "2021".
   - `products` - list/array ID of the product to be registered.

3. **Doing status updates**, updating the status of each process that has been passed by the product
   by sending transactions using the function [extrinsic](../learn/learn-extrinsic.md)
   `productTracking.updateStatus` with parameters:

   - `id` - ID code tracking.
   - `status` - (string) the status to be given.
   - `timestamp` - timestamp (in milliseconds).
   - `location` - the location where _tracking_ is performed.
   - `readings` - additional information about the product.

To be able to _update status_, _caller_ must have access as _tracker_ assigned by the organization
to the designated account. To give an access, you can use extrinsic function `did.createDelegate` of
type `ProductTracker` that is located in module `did`. This access can be granted on a limited basis
(with _expiration time_) or unlimited (without _expiration time_).

## Verification

Verifying is possible by doing _query_ using the function _query_ `productTracking.tracking(ID)`.
This function can be used to get detailed tracking data that contain _metadata_ and a list of
included product IDs.

Meanwhile, to get the _events_ that occur in the _tracking_ object, you can use the function _query_
`productTracking.eventsOfTracking(ID)`. The function only returns the ID of the event. To get the
details of the event, you can _query_ using the function `productTracking.eventByIdx(IDX)`.

## Notifications

Nuchain can send real-time notifications out of the network (_off-chain_) using _Web hook_ for every
_event_ that occurs on _tracking_ on the _blockchain_ network.

Nuchain uses _Off-chain Worker_ for this purpose.

## Demo

Examples of the code can be found on Github
[supplychain-sample-py](https://github.com/nusantarachain/supplychain-sample-py).
