import{e}from"./iframe-DP2mOMln.js";import{C as i}from"./CartesianGrid-CwGJdEIL.js";import{R as m}from"./arrayEqualityCheck-5iTHPuD6.js";import{C as p}from"./ComposedChart-D-mUb2sk.js";import{R as y}from"./RechartsHookInspector-DVpbP7qM.js";import{X as g}from"./XAxis-B_VQg86f.js";import{Y as f}from"./YAxis-WXcImUvg.js";import{p as b}from"./Page-Cj8EiXz7.js";const C={x:{description:"The x-coordinate of grid.",table:{type:{summary:"Number"},category:"Position"}},y:{description:"The y-coordinate of grid.",table:{type:{summary:"Number"},category:"Position"}},xAxisId:{description:"The id of x-axis which the grid should be attached to.",table:{type:{summary:"String | Number"},defaultValue:{summary:0},category:"Axis"}},yAxisId:{description:"The id of y-axis which the grid should be attached to.",table:{type:{summary:"String | Number"},defaultValue:{summary:0},category:"Axis"}},width:{description:"The width of grid.",table:{type:{summary:"Number"},category:"Position"}},height:{description:"The height of grid.",table:{type:{summary:"Number"},category:"Position"}},horizontal:{description:"If set false, no horizontal grid lines will be drawn.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0},category:"General"}},vertical:{description:"If set false, no vertical grid lines will be drawn.",control:{type:"boolean"},table:{type:{summary:"Boolean"},defaultValue:{summary:!0},category:"General"}},horizontalPoints:{description:"The y-coordinates of all horizontal lines.",table:{type:{summary:"Array"},defaultValue:{summary:[]},category:"General"}},verticalPoints:{description:"The x-coordinates of all vertical lines.",table:{type:{summary:"Array"},defaultValue:{summary:[]},category:"General"}},strokeDasharray:{description:"The pattern of dashes and gaps used to paint the lines of the grid",table:{type:{summary:"String"},category:"General"}},syncWithTicks:{description:"If true, the grid will align with the axis ticks.",table:{type:{summary:"Boolean"},defaultValue:{summary:!1},category:"General"}}},w={component:i,argTypes:C,args:{horizontal:!0,vertical:!0}},r={render:a=>{const[u,o]=[500,500];return e.createElement(m,{width:"100%",height:o},e.createElement(p,{width:u,height:o},e.createElement(i,{...a}),e.createElement(y,null)))},args:{y:0,x:0,width:500,height:500,fillOpacity:.4,horizontalPoints:[10,20,30,100,400],verticalPoints:[100,200,300,400],verticalFill:["red","#eee"],horizontalFill:["#eee","yellow"],strokeDasharray:"10 10"}},t={render:a=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{width:500,height:500,data:b},e.createElement(g,{dataKey:"name"}),e.createElement(f,{dataKey:"pv"}),a.displayGridA&&e.createElement(i,{verticalFill:["#aaeeee","#eeeeaa"],stroke:"trasparent"}),a.displayGridB&&e.createElement(i,{stroke:"silver",strokeDasharray:"3 3",strokeWidth:3}),e.createElement(y,null))),args:{displayGridA:!0,displayGridB:!0}};var s,l,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [500, 500];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight}>
          <CartesianGrid {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    y: 0,
    x: 0,
    width: 500,
    height: 500,
    fillOpacity: 0.4,
    horizontalPoints: [10, 20, 30, 100, 400],
    verticalPoints: [100, 200, 300, 400],
    verticalFill: ['red', '#eee'],
    horizontalFill: ['#eee', 'yellow'],
    strokeDasharray: '10 10'
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,c,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart width={500} height={500} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="pv" />
          {args.displayGridA && <CartesianGrid verticalFill={['#aaeeee', '#eeeeaa']} stroke="trasparent" />}
          {args.displayGridB && <CartesianGrid stroke="silver" strokeDasharray="3 3" strokeWidth={3} />}
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    displayGridA: true,
    displayGridB: true
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const G=["API","MultipleGrids"],I=Object.freeze(Object.defineProperty({__proto__:null,API:r,MultipleGrids:t,__namedExportsOrder:G,default:w},Symbol.toStringTag,{value:"Module"}));export{r as A,I as C};
