import{r as A,e as t}from"./iframe-DhkZ2o0m.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BeMXkwbT.js";import{A as E}from"./AreaChart-CS3gY26z.js";import{C as b}from"./CartesianGrid-fnsXYIZE.js";import{X as d}from"./XAxis-C7MynCpy.js";import{Y as g}from"./YAxis-BaziairH.js";import{A as a}from"./Area-jezJ_I_u.js";import{T as h}from"./Tooltip-aXw6ArRT.js";import{R as u}from"./RechartsHookInspector-BuoZ4ObR.js";import{R as v}from"./arrayEqualityCheck-DiorVL0F.js";import{L as T}from"./Legend-eI72Uvww.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CmxS5fzr.js";import"./index-SD_aaOBA.js";import"./immer-Bkx33mOQ.js";import"./hooks-OILl07sr.js";import"./axisSelectors-Cvg0ebzb.js";import"./d3-scale-q2jyLF3t.js";import"./zIndexSlice-DaOHrDE6.js";import"./renderedTicksSlice-D1lm_SFB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-aiKFXcKI.js";import"./chartDataContext-B8muVvAS.js";import"./CategoricalChart-BQJMywxR.js";import"./resolveDefaultProps-CSGl7VrG.js";import"./CartesianAxis-Cd-ivPq_.js";import"./Layer-d6_qX3Uw.js";import"./Text-DrfD7ZzH.js";import"./DOMUtils-qE1uPIkW.js";import"./Label-5AtDVNzN.js";import"./ZIndexLayer-CshXapoA.js";import"./types-BTJpC2jO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B6e_2wmJ.js";import"./step-BPbIkI3w.js";import"./ReactUtils-BqOB82pn.js";import"./ActivePoints-DHfGIbeU.js";import"./Dot-IQBfyTf2.js";import"./RegisterGraphicalItemId--Yyxg6pn.js";import"./GraphicalItemClipPath-yVVA2tQv.js";import"./SetGraphicalItem-_G_kPX0B.js";import"./useAnimationId-C7zWi5EW.js";import"./getRadiusAndStrokeWidthFromDot-CKsNqEkn.js";import"./graphicalItemSelectors-CKbyLoaV.js";import"./useElementOffset-3zZsr7Mt.js";import"./uniqBy-urIHRb66.js";import"./iteratee-4UOx2hxl.js";import"./Cross-Cq1_dEfO.js";import"./Rectangle-C8JV8bc4.js";import"./Sector-8SUCxTQC.js";import"./index-CflVzEfn.js";import"./ChartSizeDimensions-lGHONQf_.js";import"./OffsetShower-DEQj44LB.js";import"./PlotAreaShower-DvHNujuQ.js";import"./Symbols-BdtXuEdD.js";import"./symbol-DeXXZ1mf.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
