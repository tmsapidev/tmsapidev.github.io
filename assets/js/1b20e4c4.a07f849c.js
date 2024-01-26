"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8313],{675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>g,default:()=>T,frontMatter:()=>u,metadata:()=>k,toc:()=>y});var s=t(87462),m=(t(67294),t(3905)),n=t(58219),i=(t(62316),t(51039)),l=t.n(i),r=(t(82723),t(9487)),o=t(41429),d=t(5397),p=t(4667),c=t(9472),h=t(85162);const u={id:"delete-merchant",title:"Delete a merchant",description:"This endpoint will delete the merchant profile from the terminal management system.  If the merchant has terminals assigned when trying to delete it, you will receive an error.  Terminals assigned to the merchant first need to be unassigned before the merchant can be deleted.",sidebar_label:"Delete a merchant",hide_title:!0,hide_table_of_contents:!0,api:"eJztV91v2zgM/1cEPbVAlqS728MFw4Bu6d1l12JDm2E49Pqg2HSszZY8Su6WGf7fR8of+Wx723OeLEskRf5ISj9VMgYXoS68tkZO5DzVToCJC6uNF191lokYMvAgfAoiB4xSRQsF2kRnIBK0eVjxgLk2KhO5MmoJOZCQWzkP+VCIWbKtnSrXKzihnNNLA7H4moIRHlfaLIW33b7aD8TKlo0vCBHoexDKCEC0SMbn+4ZIeWu/RKPzwkCztABRml52AYnFnegiMk9SjQPx8D8jB9IWgIpBmsUEU7N01SrQsldLJye3sp+6G8hCocpJDHmlkoZ+SJVmvQEkMwOJ8KXUCGTRYwkDqU0Q8CmtbeflX1uiaFXFbDokARelkCs5qaRfFWzZeSTo9lRnU2EThnBtoEvfCQ3udcwwrMTfqk37aQg4V98uwSzJl8mLMf1q0/2eUbjaZ7zl+zaYqazrQR9iB+RPxjinHDTObmWjSVmXjJ8J3AsqZkXZ1l9KWMfHm1DSt3YZUJ2JvKQyCeURFFSE1jlxfnkp5lc3vaijolvbCmXZwkh7oTJL4BBmU6rxVPXFVDpCudmVnCpKLKyD4S7Szx9EuiusADUVl4OoRO1XobReg0LA85J1bu94GcEV1jhwDNPz8Zg/2+i8+0fWA/n7oaXXKhbXlDZwXNqRNZ7amcVUUWQ6Cm0w+uRYttrPhl18gogVCRVqGq8bJyIbw9M5u+CuFiw7ZPcQVLvN42rXQa4rneZoYP0cnKPj6K9Sx08buWqExZKkd03V60wEF2mmDvCd7cP3wSjKhEX9HeIjfk/g99s+fn9aXOg4BnME7wnw/tgH7401CcF0bNzHsXtx6NybEV7IJOYG8J6uyUbhCOTDQIYN6KxbcyKOmi/3iRy1bKP/Vj31qUfdZTqq1mSh5rs9IN8QphIzMpN6X7jJaFRY9Cobpt3NO4xsvhcAAR6L8/czsVAOeh4rNy/MG85Wk5DNa7OHhvfrSAb/L4IQzTQDOpxyRaUg336cB1C0SWxQb8Hp+Chx1Fh0t7a4WtPim0CLxQlxilPxERbsL5nnsJsgxsPx8OzZ9Zuz8UGKxFyEQ1wSEXYbTKRF14Wsbah1iewZrAtUmOgIUytIEh1p8itbtdydhTWu6U4IpKfrTFkoamIvnsQ58Jb0TRu6rnrFXeerdR8dnxkPPTPaIvTwzY+KTOkAdmiEqu2r2+4FETqtG002nxUbGZhscHFqgpTSxiaqihvkA2Z1zdNE9ZCZJA3vFWq14EqmDoy14zF1d0KRwyMJPbluaf6pOPBUORhVO6nMiqtfZSX/0fAzrLaeSfyw+CVH/u974he820C1viPpFFRMeWDMGoHzKILCb6juXRx8JvVn5/Ti8mJ+QeJq+zDaOXzCBgc9e9mcZWJuP4N51fvp+ZddrOsfaI6CeA==",sidebar_class_name:"delete api-method",info_path:"tmsapi/terminal-and-merchant-management-system-tms-web-api",custom_edit_url:null,sidebar_position:9},g=void 0,k={unversionedId:"tmsapi/delete-merchant",id:"tmsapi/delete-merchant",title:"Delete a merchant",description:"This endpoint will delete the merchant profile from the terminal management system.  If the merchant has terminals assigned when trying to delete it, you will receive an error.  Terminals assigned to the merchant first need to be unassigned before the merchant can be deleted.",source:"@site/docs/tmsapi/delete-merchant.api.mdx",sourceDirName:"tmsapi",slug:"/tmsapi/delete-merchant",permalink:"/tmsapi/delete-merchant",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"delete-merchant",title:"Delete a merchant",description:"This endpoint will delete the merchant profile from the terminal management system.  If the merchant has terminals assigned when trying to delete it, you will receive an error.  Terminals assigned to the merchant first need to be unassigned before the merchant can be deleted.",sidebar_label:"Delete a merchant",hide_title:!0,hide_table_of_contents:!0,api:"eJztV91v2zgM/1cEPbVAlqS728MFw4Bu6d1l12JDm2E49Pqg2HSszZY8Su6WGf7fR8of+Wx723OeLEskRf5ISj9VMgYXoS68tkZO5DzVToCJC6uNF191lokYMvAgfAoiB4xSRQsF2kRnIBK0eVjxgLk2KhO5MmoJOZCQWzkP+VCIWbKtnSrXKzihnNNLA7H4moIRHlfaLIW33b7aD8TKlo0vCBHoexDKCEC0SMbn+4ZIeWu/RKPzwkCztABRml52AYnFnegiMk9SjQPx8D8jB9IWgIpBmsUEU7N01SrQsldLJye3sp+6G8hCocpJDHmlkoZ+SJVmvQEkMwOJ8KXUCGTRYwkDqU0Q8CmtbeflX1uiaFXFbDokARelkCs5qaRfFWzZeSTo9lRnU2EThnBtoEvfCQ3udcwwrMTfqk37aQg4V98uwSzJl8mLMf1q0/2eUbjaZ7zl+zaYqazrQR9iB+RPxjinHDTObmWjSVmXjJ8J3AsqZkXZ1l9KWMfHm1DSt3YZUJ2JvKQyCeURFFSE1jlxfnkp5lc3vaijolvbCmXZwkh7oTJL4BBmU6rxVPXFVDpCudmVnCpKLKyD4S7Szx9EuiusADUVl4OoRO1XobReg0LA85J1bu94GcEV1jhwDNPz8Zg/2+i8+0fWA/n7oaXXKhbXlDZwXNqRNZ7amcVUUWQ6Cm0w+uRYttrPhl18gogVCRVqGq8bJyIbw9M5u+CuFiw7ZPcQVLvN42rXQa4rneZoYP0cnKPj6K9Sx08buWqExZKkd03V60wEF2mmDvCd7cP3wSjKhEX9HeIjfk/g99s+fn9aXOg4BnME7wnw/tgH7401CcF0bNzHsXtx6NybEV7IJOYG8J6uyUbhCOTDQIYN6KxbcyKOmi/3iRy1bKP/Vj31qUfdZTqq1mSh5rs9IN8QphIzMpN6X7jJaFRY9Cobpt3NO4xsvhcAAR6L8/czsVAOeh4rNy/MG85Wk5DNa7OHhvfrSAb/L4IQzTQDOpxyRaUg336cB1C0SWxQb8Hp+Chx1Fh0t7a4WtPim0CLxQlxilPxERbsL5nnsJsgxsPx8OzZ9Zuz8UGKxFyEQ1wSEXYbTKRF14Wsbah1iewZrAtUmOgIUytIEh1p8itbtdydhTWu6U4IpKfrTFkoamIvnsQ58Jb0TRu6rnrFXeerdR8dnxkPPTPaIvTwzY+KTOkAdmiEqu2r2+4FETqtG002nxUbGZhscHFqgpTSxiaqihvkA2Z1zdNE9ZCZJA3vFWq14EqmDoy14zF1d0KRwyMJPbluaf6pOPBUORhVO6nMiqtfZSX/0fAzrLaeSfyw+CVH/u974he820C1viPpFFRMeWDMGoHzKILCb6juXRx8JvVn5/Ti8mJ+QeJq+zDaOXzCBgc9e9mcZWJuP4N51fvp+ZddrOsfaI6CeA==",sidebar_class_name:"delete api-method",info_path:"tmsapi/terminal-and-merchant-management-system-tms-web-api",custom_edit_url:null,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Delete a payment terminal",permalink:"/tmsapi/delete-unassigned-terminal"},next:{title:"Create a cloud API key for a merchant",permalink:"/tmsapi/create-merchant-api-key"}},b={},y=[{value:"Request",id:"request",level:2}],f={toc:y};function T(e){let{components:a,...t}=e;return(0,m.kt)("wrapper",(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Delete a merchant"),(0,m.kt)(l(),{method:"delete",path:"/partner/partner/{partnerId}/merchant/{merchantId}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"This endpoint will delete the merchant profile from the terminal management system.  If the merchant has terminals assigned when trying to delete it, you will receive an error.  Terminals assigned to the merchant first need to be unassigned before the merchant can be deleted."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(o.Z,{className:"paramsItem",param:{name:"partnerId",required:!0,in:"path",description:"Your partner ID.",schema:{type:"string",description:"ID of your partner profile (provided by Handpoint)\n",maxLength:50,minLength:1,title:"PartnerID"}},mdxType:"ParamsItem"}),(0,m.kt)(o.Z,{className:"paramsItem",param:{name:"merchantId",required:!0,in:"path",description:"The ID of the merchant to be deleted.",schema:{type:"string",description:"It is a unique Handpoint ID for the merchant, it must be unique across ALL TMS merchants.  Handpoint will provide a range of IDs that can be used for this purpose.\n",maxLength:20,minLength:1,title:"MerchantID"}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(n.Z,{mdxType:"ApiTabs"},(0,m.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null)),(0,m.kt)(h.default,{label:"400",value:"400",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Bad Request")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error code."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason of the error."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"messageGuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Message guid of the error."},mdxType:"SchemaItem"})))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'{\n  "code": "string",\n  "reason": "string",\n  "messageGuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error code."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason of the error."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"messageGuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Message guid of the error."},mdxType:"SchemaItem"})))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'{\n  "code": "string",\n  "reason": "string",\n  "messageGuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"403",value:"403",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Forbidden")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error code."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason of the error."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"messageGuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Message guid of the error."},mdxType:"SchemaItem"})))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'{\n  "code": "string",\n  "reason": "string",\n  "messageGuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"409",value:"409",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Conflict")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error code."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason of the error."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"messageGuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Message guid of the error."},mdxType:"SchemaItem"})))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'{\n  "code": "string",\n  "reason": "string",\n  "messageGuid": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"500",value:"500",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Internal Server Error")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Error code."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Reason of the error."},mdxType:"SchemaItem"}),(0,m.kt)(p.Z,{collapsible:!1,name:"messageGuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Message guid of the error."},mdxType:"SchemaItem"})))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(d.Z,{responseExample:'{\n  "code": "string",\n  "reason": "string",\n  "messageGuid": "string"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);