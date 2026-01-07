import{e as t,r as k}from"./iframe-CjnSqbHY.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-C1GJHbWV.js";import{R as b}from"./arrayEqualityCheck-Cu3uzYRG.js";import{A as a}from"./Area-bApm-z2W.js";import{L as C}from"./Legend-DJReSB-1.js";import{X as g}from"./XAxis-BjLd7C2C.js";import{Y as h}from"./YAxis-CfoOURqB.js";import{T as u}from"./Tooltip-CCoxC8s7.js";import{R as y}from"./RechartsHookInspector-Df5OjUd3.js";import{A as v}from"./AreaChart-Dfk8nAe1.js";import{C as T}from"./CartesianGrid-OW63ZEb5.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bjy9O6Bl.js";import"./hooks-z5iYR9uK.js";import"./axisSelectors-2WFqeeny.js";import"./zIndexSlice-B31h325U.js";import"./resolveDefaultProps-B-Bnboba.js";import"./PolarUtils-Dtm6FADD.js";import"./CartesianChart-QvBm8Fl6.js";import"./chartDataContext-OrqrGnHW.js";import"./CategoricalChart-CVHNAiHm.js";import"./Curve-5ylBOp_W.js";import"./types-BYGLnYta.js";import"./Layer-BPLY51e7.js";import"./ReactUtils-Bdj2Y15E.js";import"./Label-DvPPISHS.js";import"./Text-CLMmVwol.js";import"./DOMUtils-Bui7kyZ-.js";import"./ZIndexLayer-6i7cawcn.js";import"./ActivePoints-Djyh2ioT.js";import"./Dot-BiSTmROa.js";import"./RegisterGraphicalItemId-B25edjY0.js";import"./GraphicalItemClipPath-BH8EdR6E.js";import"./SetGraphicalItem-RCHMBw2A.js";import"./useAnimationId-BIU6gnQ_.js";import"./getRadiusAndStrokeWidthFromDot-DJkck7K5.js";import"./graphicalItemSelectors-CBa9ilJj.js";import"./Symbols-wzrVuNDj.js";import"./useElementOffset-CJI6xldx.js";import"./iteratee-DiI7B68t.js";import"./CartesianAxis-D2VxaDmK.js";import"./Cross-BEO3jmNv.js";import"./Rectangle-DRbwIDD9.js";import"./Sector-CCKEyOJh.js";import"./index-BmN97iZD.js";import"./ChartSizeDimensions-BYQzTjU5.js";import"./OffsetShower-BP7aiJM0.js";import"./PlotAreaShower-CvhWYGuu.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(General)
  },
  parameters: {
    controls: {
      include: Object.keys(General)
    },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,Ct as default};
