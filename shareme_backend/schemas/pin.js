export default{
    title:"Pin",
    name:"pin",
    type:"document",
    fields:[
        {title:"Title",name:"title",type:"string"},
        {title:"About",name:"about",type:"string"},
        {title:"Destination",name:"destination",type:"url"},
        {title:"Category",name:"category",type:"string"},
        {title:"Image",name:"image",type:"image",options:{hotspot:true}},
        {title:"UserID",name:"userId",type:"string"},
        {title:"PostedBy",name:"postedBy",type:"postedBy"},
        {title:"Save",name:"save",type:"array", of:[{type: "save"}]},
        {title:"Comment",name:"comment", type:"array", of:[{type:"comment"}]},
    ]

}