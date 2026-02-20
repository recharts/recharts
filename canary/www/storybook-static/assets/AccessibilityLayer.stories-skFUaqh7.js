import{e as t,r as A}from"./iframe-uVZDwAjj.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-C98EWxS3.js";import{R as E}from"./arrayEqualityCheck-BVLp_fP4.js";import{A as a}from"./Area-DCYAiNW3.js";import{L as b}from"./Legend-Bnopc26h.js";import{X as d}from"./XAxis-DDi_F3ms.js";import{Y as g}from"./YAxis-2LEHyJIA.js";import{T as h}from"./Tooltip-C8tgEoay.js";import{R as u}from"./RechartsHookInspector-B8IZQaM2.js";import{A as v}from"./AreaChart-v7ePJhnm.js";import{C as T}from"./CartesianGrid-BRZTTi6Z.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./immer-ChwPqFH_.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./Curve-BRxcZY_5.js";import"./types-B-Xhkkhb.js";import"./step-Prvlnfgp.js";import"./Layer-kSeehgUS.js";import"./ReactUtils-CdVDZBtJ.js";import"./Label-PDV3rnUf.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./ZIndexLayer-B6kXppYb.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./useAnimationId-CLB64h0U.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./graphicalItemSelectors-BE5LE8v2.js";import"./Symbols-DYdrpw_H.js";import"./symbol-D_mOxO35.js";import"./useElementOffset-BuGSMy6j.js";import"./uniqBy-DdcvsSSb.js";import"./iteratee-C0JMveWz.js";import"./CartesianAxis-D-nGvafv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-Bonq6Yvc.js";import"./Rectangle-GgKpEWLk.js";import"./Sector-CYoBZdRL.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
