const STATIC = require("./static");

const PUBLIC_DIR = STATIC.PUBLIC_DIR;

STATIC.BUILD("index",{},"./public/index.html");
STATIC.BUILD("archive",{},"./public/archive/index.html");
STATIC.BUILD("category",{},"./public/category/index.html");
STATIC.BUILD("about",{post:STATIC.ABOUT},"./public/about/index.html");

STATIC.POSTS.forEach(item => {
    STATIC.BUILD("post",{post:item},`${PUBLIC_DIR}/${item.path}`);
});

STATIC.ENDING;