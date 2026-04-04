import{r as A,e as t}from"./iframe-BA-zV7_F.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DGaIMIIA.js";import{A as E}from"./AreaChart-E7IrCQoV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CBtq2Jrg.js";import{X as g}from"./XAxis-DC7WjUX8.js";import{Y as h}from"./YAxis-32LA6dK9.js";import{A as a}from"./Area-DdEswfX5.js";import{T as u}from"./Tooltip-BVl0tVaV.js";import{R as y}from"./RechartsHookInspector-D0XJS29G.js";import{R as v}from"./arrayEqualityCheck-BqA822v0.js";import{L as T}from"./Legend-CsUHl_0_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./immer-CQr9v0v0.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-CahP5Bvu.js";import"./renderedTicksSlice-CICucQq1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./CartesianAxis-C3WTNiVK.js";import"./Layer-CfzD199M.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./Label-CHedA7kt.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./types-mhJjiQ_4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C9qfySG5.js";import"./step-j_6aZTKG.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./useAnimationId-DojuRQal.js";import"./ActivePoints-hBuzQYc_.js";import"./Dot---bkTzjD.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getRadiusAndStrokeWidthFromDot-7IUVpSgw.js";import"./graphicalItemSelectors-DKq5kTda.js";import"./useElementOffset-ChyJXsRo.js";import"./uniqBy-CagLAZRG.js";import"./iteratee-DxFZgfS6.js";import"./Cross-BhWthZLE.js";import"./Rectangle-Bu9DVT5n.js";import"./Sector-DJLTI9DR.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./OffsetShower-DaLST6nw.js";import"./PlotAreaShower-D2fXHUqq.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
