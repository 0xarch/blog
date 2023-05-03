import Config from "./conf.ts";
import * as Path from "https://deno.land/std/path/mod.ts";
import * as tml from "./tml.ts";
import * as match from "./match.ts";
import * as Sort from "./sort.ts";
const Posts = Sort.DefaultPosts;
const About = Sort.About;
const info = Config;

const PublicDir="./public";
const ThemeDir=`./conf/theme/${info.lookAndFeel.theme}`;
const LayoutDir=`./conf/layout/${info.lookAndFeel.layout}`;

async function build(type:string,extra,path:string){
    console.log(`<Progress> Building [${type}] to ${path}`);
    var content = tml.parseTml(type);
    content = tml.parseVar(content,extra);
    if(extra.post==undefined)content = match.parseBuiltin(content,type,undefined);
    else content = match.parseBuiltin(content,type,extra.post.title);
    Deno.mkdir(Path.dirname(path), { recursive: true }, () => { });
    Deno.writeTextFile(`${path}`,content);
}

export{PublicDir,ThemeDir,LayoutDir,build,Posts,About};