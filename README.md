TypeScript Jest Spy On Mobx Computed Field Demo
===========================

直接使用`jest.spyOn`来mock一个computed field, 会得到以下错误：

```
doubleValue is not declared configurable
```

需要按这里做法，进行设置：

https://github.com/mobxjs/mobx/issues/1867#issuecomment-518987737

注意：
该设置只在旧版本的mobx（支持IE11）中需要，新版本已经被设为默认值，不再需要


```
npm install
npm test
```
