import{e,r as w}from"./iframe-Dnh1Ryvb.js";import{g as m}from"./utils-ePvtT4un.js";import{B as l}from"./BarChart-C43X39b8.js";import{p as u,b as T}from"./Page-DPte-9pC.js";import{R as h}from"./arrayEqualityCheck-DCevfetv.js";import{B as a}from"./Bar-CDqjeIGm.js";import{R as d}from"./RechartsHookInspector-DMji7YUm.js";import{X as i}from"./XAxis-CR1tc-KL.js";import{C as B}from"./CartesianGrid-BznzeLYA.js";import{Y as E}from"./YAxis-BShcefNK.js";import{L as k}from"./Legend-DNq5AodR.js";import{T as G}from"./Tooltip-DMtaWOlD.js";const c={accessibilityLayer:{description:"Turn on accessibility support for keyboard-only and screen reader users.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},barCategoryGap:{description:"The gap between two bar categories, which can be a percent value or a fixed value.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"10%"}},defaultValue:"10%"},barGap:{description:"The gap between two bars in the same category.",table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"4"}},defaultValue:4},barSize:{description:`The width or height of each bar. If the barSize is not specified, the size of the
bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.`,table:{type:{summary:"number | string"},category:"General"}},baseValue:{description:"The base value of area.",table:{type:{summary:'"dataMax" | "dataMin" | number'},category:"General"}},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},compact:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},data:{description:`The source data. Each element should be an object.
The properties of each object represent the values of different data dimensions.

Use the \`dataKey\` prop to specify which properties to use.`,table:{type:{summary:"ReadonlyArray<unknown>"},category:"General"}},dataKey:{table:{type:{summary:"Function | number | string"},category:"General"}},desc:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},id:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},layout:{description:"The layout of chart defines the orientation of axes, graphical items, and tooltip.",table:{type:{summary:'"horizontal" | "vertical"'},category:"General",defaultValue:{summary:"horizontal"}},defaultValue:"horizontal"},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},maxBarSize:{description:"The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},onClick:{description:"The customized event handler of click in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onContextMenu:{description:"The customized event handler of contextmenu in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onDoubleClick:{description:"The customized event handler of dblclick in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseDown:{description:"The customized event handler of mousedown in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseMove:{description:"The customized event handler of mousemove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onMouseUp:{description:"The customized event handler of mouseup in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchEnd:{description:"The customized event handler of touchend in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchMove:{description:"The customized event handler of touchmove in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},onTouchStart:{description:"The customized event handler of touchstart in this chart.",table:{type:{summary:"CategoricalChartFunc"},category:"Events"}},responsive:{description:`If true, then it will listen to container size changes and adapt the SVG chart accordingly.
If false, then it renders the chart at the specified width and height and will stay that way
even if the container size changes.

This is similar to ResponsiveContainer but without the need for an extra wrapper component.
The \`responsive\` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).`,control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},reverseStackOrder:{description:"If `false`, stacked items will be rendered left to right.\nIf `true`, stacked items will be rendered right to left.\n\nRender direction affects SVG layering, not x position.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},role:{description:"The ARIA role for the chart, which provides semantic information for screen reader users.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},stackOffset:{description:`The type of offset function used to generate the lower and upper values in the series array.
The types are built-in offsets in d3-shape.
Only applicable for stacked Area or Bar charts.
Has no effect when the stackId prop is not set on Area or Bar components.`,control:{type:"select"},options:["none","sign","expand","wiggle","silhouette","positive"],table:{type:{summary:'"expand" | "none" | "positive" | "sign" | "silhouette" | "wiggle"'},category:"General",defaultValue:{summary:"none"}},defaultValue:"none"},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},syncId:{description:"Charts with the same syncId will synchronize Tooltip and Brush events.",table:{type:{summary:"number | string"},category:"General"}},syncMethod:{description:"Customize how the charts will synchronize tooltips and brushes.\n`index`: synchronize using the data index in the data array. Index expects that all data has the same length.\n`value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).\nfunction: a custom sync method which receives tick and data as argument and returns an index.",table:{type:{summary:'"index" | "value" | Function'},category:"General",defaultValue:{summary:"index"}},defaultValue:"index"},tabIndex:{description:"If and where the chart should appear in the tab order",control:{type:"number"},table:{type:{summary:"number"},category:"General"}},throttleDelay:{control:{type:"number"},table:{type:{summary:"number"},category:"General"}},title:{control:{type:"text"},table:{type:{summary:"string"},category:"General"}},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},V={argTypes:c,component:l},r={name:"Simple",render:t=>e.createElement(w.StrictMode,null,e.createElement(h,{width:"100%",height:400},e.createElement(l,{...t},e.createElement(a,{dataKey:"uv"}),e.createElement(d,null)))),args:{...m(c),data:u,margin:{top:0,right:0,bottom:0,left:0}}},n={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(l,{...t},e.createElement(a,{zIndex:1,dataKey:"uv",fill:"green",xAxisId:"one",barSize:50,label:{position:"insideTop",zIndex:3,fill:"black"}}),e.createElement(a,{zIndex:2,dataKey:"pv",fill:"red",xAxisId:"two",barSize:30,label:{position:"insideTop",zIndex:3,fill:"black"}}),e.createElement(i,{xAxisId:"one"}),e.createElement(i,{xAxisId:"two",hide:!0}),e.createElement(d,null))),args:{...m(c),data:u,margin:{top:0,right:0,bottom:0,left:0}}},o={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(l,{...t},e.createElement(B,{strokeDasharray:"3 3"}),e.createElement(i,{dataKey:"name"}),e.createElement(E,null),e.createElement(k,null),e.createElement(G,null),e.createElement(a,{dataKey:"uv",stackId:"a",fill:"green",barSize:50,name:"UV Bar"}),e.createElement(a,{dataKey:"pv",stackId:"a",fill:"red",barSize:30,name:"PV Bar"}),e.createElement(d,null))),args:{...m(c),data:T,stackOffset:"none",id:"BarChart-Stacked",reverseStackOrder:!1,margin:{top:0,right:0,bottom:0,left:0}}},s={render:t=>e.createElement(l,{...t},e.createElement(a,{dataKey:"uv",xAxisId:2,fill:"blue",barSize:40}),e.createElement(a,{dataKey:"pv",xAxisId:1,fill:"green",barSize:30}),e.createElement(i,{xAxisId:1,type:"number"}),e.createElement(i,{xAxisId:2,type:"number",orientation:"top"}),e.createElement(E,{type:"category"}),e.createElement(d,null)),args:{...m(c),data:u,width:500,height:300,layout:"vertical"}};var p,y,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <StrictMode>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart {...args}>
            <Bar dataKey="uv" />
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </StrictMode>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar zIndex={1} dataKey="uv" fill="green" xAxisId="one" barSize={50} label={{
          position: 'insideTop',
          zIndex: 3,
          fill: 'black'
        }} />
          <Bar zIndex={2} dataKey="pv" fill="red" xAxisId="two" barSize={30} label={{
          position: 'insideTop',
          zIndex: 3,
          fill: 'black'
        }} />
          <XAxis xAxisId="one" />
          <XAxis xAxisId="two" hide />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,C,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="uv" stackId="a" fill="green" barSize={50} name="UV Bar" />
          <Bar dataKey="pv" stackId="a" fill="red" barSize={30} name="PV Bar" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    data: pageDataWithNegativeNumbers,
    stackOffset: 'none',
    id: 'BarChart-Stacked',
    reverseStackOrder: false,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var z,I,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <BarChart {...args}>
        <Bar dataKey="uv" xAxisId={2} fill="blue" barSize={40} />
        <Bar dataKey="pv" xAxisId={1} fill="green" barSize={30} />
        <XAxis xAxisId={1} type="number" />
        <XAxis xAxisId={2} type="number" orientation="top" />
        <YAxis type="category" />
        <RechartsHookInspector />
      </BarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartArgs),
    data: pageData,
    width: 500,
    height: 300,
    layout: 'vertical'
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const R=["API","BarInBar","Stacked","VerticalWithMultipleAxes"],Y=Object.freeze(Object.defineProperty({__proto__:null,API:r,BarInBar:n,Stacked:o,VerticalWithMultipleAxes:s,__namedExportsOrder:R,default:V},Symbol.toStringTag,{value:"Module"}));export{r as A,Y as C};
