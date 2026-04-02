import AWS from "@aws-sdk/client-dynamodb";
import dynamoUtill from "@aws-sdk/util-dynamodb";
const DynamoDBClient:any = AWS.DynamoDBClient;
const paginateScan = AWS.paginateScan;
const tableName = "article";

import { createRouter, defineEventHandler, useBase, readBody } from 'h3'

const menus = {
      '1':{
        name:'ギョーザ',        
      },
      '2':{
        name:'肉と卵の炒り付け',
      },
      '3':{
        name:'カニ玉',
      },
      '4':{
        name:'麻婆豆腐',
      },
    }

const router = createRouter()

router.get('/hello',defineEventHandler(()=>{
  return Object.entries(menus).map(([key,data])=>({...data,id:key}))
}))
// import getArticleDetail from "./handler/getArticleDetail.js";
// import getProduct from "./handler/getProduct.js";
// import getProductDetail from "./handler/getProductDetail.js";
// import getNews from "./handler/getNews.js";
// import getNewsDetail from "./handler/getNewsDetail.js";
// import getInstagramArticle from "./handler/getInstagramArticle.js";

// export default eventHandler(async (event) => {
//   const query = getQuery(event);
//   console.log(query);
//   console.log(query.article_id);
//   const model = { article_id : query.article_id };
//   const items:any = await getArticle(model);
//   let result = JSON.parse(JSON.stringify(items))
//   console.log(result);
//   return result;
// });



// const getArticle = async(model:any) =>{
//   const paginatorConfig = {
//     client: new DynamoDBClient({
//       region: process.env.AWS_REGION,
//     }),
//     pageSize: 5,
//   };

//   const params = {
//     TableName: tableName,//テーブル名の指定
//     ExpressionAttributeNames: {
//       "#AT": "article_id", 
//       "#ST": "sort_id",
//       "#title": "title",
//       "#detail": "detail"
//      }, 
//      ExpressionAttributeValues: {
//       ":a": {
//         S: model.article_id
//        }
//      }, 
//      FilterExpression: "article_id = :a", 
//      ProjectionExpression: "#ST, #AT, #title, #detail", 
//    };

//   const paginator = paginateScan(paginatorConfig, params);
//   const items = [];  
//   console.log(paginator)
//     try{
//       for await (const page of paginator) {
//         if(page.Items && page.Items.length){          
//           console.log(page);
//           const itemArray = [];
//           for(const item of page.Items){
//             itemArray.push(dynamoUtill.unmarshall(item))
//           }
//           items.push(itemArray);
//         }
//       }
//       return items;
//     }catch(e){
//       return { message: e };
//     }
// }
// // import express from "express";
// // import getArticle from "/getArticle.js";
// // import getArticleDetail from "/getArticleDetail.js";
// // import getProduct from "/getProduct.js";
// // import getProductDetail from "/getProductDetail.js";
// // import getNews from "/getNews.js";
// // import getNewsDetail from "/getNewsDetail.js";
// // import getInstagramArticle from "/getInstagramArticle.js";
// // import sendContactForm from "/sendContactForm.js";
// // import serverlessHttp from "/serverless-http";

// // const serverless = serverlessHttp;
// // const app = express();
// // const router = express.Router();
// // app.use("/server", router);
  
// // // const options = {
// // //   type: 'application/octet-stream',
// // // };

// // // app.use(bodyParser.raw(options));
// // // /**
// // // * 
// // // */
// // app.use(express.json());
// // app.use(express.urlencoded({
// //     extended: true
// // }));
// // app.use(function(req, res, next) {
// //   res.header('Access-Control-Allow-Origin', '*');
// //   res.header(
// //     'Access-Control-Allow-Headers',
// //     'Origin, X-Requested-With, Content-Type, Accept',
// //   );
// //   next();
// // });

// // /**
// //  * 
// //  */
// // app.get("/article", async (req, res) => {
// //    const model = { article_id :req.query.article_id };
// //    const items = await getArticle(req,model);
// //    res.status(200).send({items});
// // });

// //  app.get("/article_detail", async (req, res) => {
// //   const model = setModel(req);
// //   const items = await getArticleDetail(req,model);
// //    res.status(200).send({items});
// //  });

// //  app.get("/product", async (req, res) => {
// //   const model = { product_id :req.query.product_id };
// //   const items = await getProduct(req,model);
// //   res.status(200).send({item:items});
// // });

// // app.get("/product_detail", async (req, res) => {
// //   const model = { product_id :req.query.product_id,sort_id:req.query.sort_id };
// //   const items = await getProductDetail(req,model);
// //   res.status(200).send({items});
// // });

// // app.get("/news", async (req, res) => {
// //   const model = { news_id :req.query.news_id};
// //   const items = await getNews(req,model);
// //   res.status(200).send({items});
// // });

// // app.get("/news_detail", async (req, res) => {
// //   const model = { news_id :req.query.news_id,sort_id:req.query.sort_id };
// //   const items = await getNewsDetail(req,model);
// //   res.status(200).send({items});
// // });

// // app.get("/insta_article", async (req, res) => {
// //   console.log("呼ばれたよ")
// //   const items = await getInstagramArticle();
// //   console.log(items);
// //   res.status(200).send({items});
// // });

// // app.post("/send_contact_form", async (req, res) => {
// //   const model = req.body;
// //   const items = await sendContactForm(req,model);
// //   res.status(200).send({items});
// // });

// //  const setModel = (req) => {
// //   return {
// //     article_id :req.query.article_id,
// //     sort_id : req.query.sort_id
// //   }    
// //  }

 
// //  export default defineEventHandler(() => app);
// // //export default app; 
// // // export const handler =  serverless(app);

// // //serverless(app);

// // // import express from "express";
// // // import AWS from "@aws-sdk/client-dynamodb";
// // // import serverlessHttp from 'serverless-http';
// // // const serverless = serverlessHttp;
// // // const DynamoDBClient = AWS.DynamoDBClient;
// // // const ScanCommandInput = AWS.ScanCommandInput;
// // // const paginateScan = AWS.paginateScan;
// // // const app = express();

// // // app.use(function(req, res, next) {
// // //   res.header('Access-Control-Allow-Origin', '*');
// // //   res.header(
// // //     'Access-Control-Allow-Headers',
// // //     'Origin, X-Requested-With, Content-Type, Accept',
// // //   );
// // //   next();
// // // });

// // // app.get("/", async (req, res) => {
// // //   const data = await getUsers(req);
// // //   res.status(200).json({ data });
// // // });


// // // const getUsers = async (req) => {
// // //   const tableName = "article";
 
// // //   const paginatorConfig = {
// // //     client: new DynamoDBClient({
// // //       region: process.env.AWS_REGION,
// // //     }),
// // //     pageSize: 2,
// // //   };

// // //   const params = {
// // //     TableName: tableName,
// // //   };

// // //   try{
// // //     const paginator = paginateScan(paginatorConfig, params);
// // //     let i = 1;

// // //     const items = [];
// // //     for await (const page of paginator) {
// // //       console.log(...page.Items);
// // //       items.push(...page.Items);
// // //     }
// // //     return items;
// // //   }catch(e){
// // //      return { message: e };
// // //   }
// // // };

// // // export const handler =  serverless(app);

