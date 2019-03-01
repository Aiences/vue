const path = require('path');

module.exports ={
    entry:{
        app:'./app/js/main.js'
    },
    derServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        port:9000
    },
    module:{
        loaders:[{
            test:/\.html$/,
            loader:'html-loader'
        },{
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.scss$/,
            loader:'style-loader!css-loader!sass-loader'  //从右到左加载
        }]
    },
    plugins:[],
    output:{
        filename:'[name].min.js',
        path:path.resolve(__dirname,'dist')   //在项目根目录下创建一个dist目录，输出的文件就在此目录下
    }
}
