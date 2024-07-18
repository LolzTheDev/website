---
editUrl: false
next: false
prev: false
title: "PresenceResult"
---

## Properties

### activities?

> `optional` **activities**: `ActivitiesOptions`[]

#### Source

[src/core/presences.ts:11](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L11)

***

### afk?

> `optional` **afk**: `boolean`

#### Source

[src/core/presences.ts:10](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L10)

***

### onRepeat()?

> `optional` **onRepeat**: (`previous`) => [`PresenceResult`](/v4/api/interfaces/presenceresult/)

#### Parameters

• **previous**: [`PresenceResult`](/v4/api/interfaces/presenceresult/)

#### Returns

[`PresenceResult`](/v4/api/interfaces/presenceresult/)

#### Source

[src/core/presences.ts:14](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L14)

***

### repeat?

> `optional` **repeat**: `number` \| [[`Emitter`](/v4/api/interfaces/emitter/), `string`]

#### Source

[src/core/presences.ts:13](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L13)

***

### shardId?

> `optional` **shardId**: `number`[]

#### Source

[src/core/presences.ts:12](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L12)

***

### status?

> `optional` **status**: `Status`

#### Source

[src/core/presences.ts:9](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L9)
