#数据结构及接口

````
// 接口
const interface = {
    'carousel': '/carousel',
    'categories': '/categories',
    'products': '/categories/{categorieName}/products',
    'product': '/categories/{categorieName}/products/{productName}'
}

// 数据结构
// 轮播框数据结构，待定
const carousel = {
    uuid,
    items: [
        {
            uuid,
            productName,
            description,
            ...
        },
        {
            uuid,
            productName,
            description,
            ...
        }
    ]
}
const categories = {
    uuid,
    type: categorie,
}
// '洗碗机用'，‘洗衣机用’，‘冰箱用’
const categorie = {
    uuid,
    name, 
    products: products
}
// 洗碗机： 洗碗粉，洗碗块，洗碗盐...
const products = {
    uuid,
    name,
    product: product
}
// 产品详情, 待定...
const product = {
    uuid,
    name,
    imgRef,
    description,
    label, //多效合一，超级无敌强等
    ...
}
````

#已完成
1. 轮播图
2. 产品展示图

#待完成
1. 产品详情描述页（弹出框形式）
2. 非产品信息页面
3. ...