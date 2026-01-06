import{e as t}from"./iframe-I1Pz45Ny.js";import{T as o}from"./Text-DswTa9RV.js";import{S as s}from"./arrayEqualityCheck-BssfPt5l.js";import{R as i}from"./RechartsHookInspector-CR238VhK.js";const c={lineHeight:{description:"The height of each line of text in CSS units.",defaultValue:"1em",table:{type:{summary:"string"}}},breakAll:{description:"Break words if the text exceeds the width.",defaultValue:!1},maxLines:{description:"The max number of lines for text wrapping.",table:{type:{summary:"number"}}},scaleToFit:{description:"Scale the text to fit the width or not.",table:{type:{summary:"boolean"}},defaultValue:!1},angle:{description:"The rotate angle of Text. (Optional)",defaultValue:0,table:{type:{summary:"number"}}},width:{description:"The width of Text. When the width is specified to be a number, the text will warp auto by calculating the width of text. (Optional)",table:{type:{summary:"number"}}},textAnchor:{table:{type:{summary:"start | middle | end | inherit"}},defaultValue:"start"},verticalAnchor:{table:{type:{summary:"start | middle | end "}},defaultValue:"end"}},m={argTypes:c,component:o},e={render:r=>t.createElement(s,{width:500,height:300},t.createElement(o,{...r},r.content),t.createElement(i,null)),args:{breakAll:!1,lineHeight:"1em",maxLines:3,scaleToFit:!1,textAnchor:"start",verticalAnchor:"start",angle:0,width:200,y:50,x:50,content:"This is really, really, really, really, really, really, really, really, really long text"}};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <Surface width={500} height={300}>
        <Text {...args}>{args.content}</Text>
        <RechartsHookInspector />
      </Surface>;
  },
  args: {
    breakAll: false,
    lineHeight: '1em',
    maxLines: 3,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'start',
    angle: 0,
    width: 200,
    y: 50,
    x: 50,
    content: 'This is really, really, really, really, really, really, really, really, really long text'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const d=["API"],f=Object.freeze(Object.defineProperty({__proto__:null,API:e,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{e as A,f as C};
