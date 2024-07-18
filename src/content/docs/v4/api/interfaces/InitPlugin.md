---
editUrl: false
next: false
prev: false
title: "InitPlugin"
---

## Extends

- [`Plugin`](/v4/api/interfaces/plugin/)\<`Args`\>

## Type parameters

• **Args** *extends* `any`[] = `any`[]

## Properties

### execute()

> **execute**: (...`args`) => [`PluginResult`](/v4/api/type-aliases/pluginresult/)

#### Parameters

• ...**args**: `Args`

#### Returns

[`PluginResult`](/v4/api/type-aliases/pluginresult/)

#### Overrides

[`Plugin`](/v4/api/interfaces/plugin/).[`execute`](/v4/api/interfaces/plugin/#execute)

#### Source

[src/types/core-plugin.ts:48](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-plugin.ts#L48)

***

### type

> **type**: [`Init`](/v4/api/enumerations/plugintype/#init)

#### Overrides

[`Plugin`](/v4/api/interfaces/plugin/).[`type`](/v4/api/interfaces/plugin/#type)

#### Source

[src/types/core-plugin.ts:47](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-plugin.ts#L47)
