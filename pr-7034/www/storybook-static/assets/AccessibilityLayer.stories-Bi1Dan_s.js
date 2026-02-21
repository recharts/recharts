import{e as t,r as A}from"./iframe-DAZKVxz9.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DTJu-yAB.js";import{R as E}from"./arrayEqualityCheck-dPOQS8pO.js";import{A as a}from"./Area-D8rK5gd9.js";import{L as b}from"./Legend-BPG9fpN3.js";import{X as d}from"./XAxis-DrBlWbCQ.js";import{Y as g}from"./YAxis-BKsd-W4f.js";import{T as h}from"./Tooltip-wkyfqa1M.js";import{R as u}from"./RechartsHookInspector-B2Mat80Z.js";import{A as v}from"./AreaChart-B2aICeuy.js";import{C as T}from"./CartesianGrid-B_MixTEO.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjWlMXU1.js";import"./index-D3IpfJcR.js";import"./immer-4-TXwIq-.js";import"./hooks-Dot9B-8s.js";import"./axisSelectors-DztuZ7GM.js";import"./d3-scale-ChhyAw2W.js";import"./zIndexSlice-D3HE9JYU.js";import"./renderedTicksSlice-BvtRkGHb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKg6csWi.js";import"./chartDataContext-DGYaAAtE.js";import"./CategoricalChart-DeG47lga.js";import"./resolveDefaultProps-Xx_SsgwN.js";import"./Curve-ZE8xv1Ny.js";import"./types-4_oq0AJp.js";import"./step-DOJR22o0.js";import"./Layer-B5mQaLs_.js";import"./ReactUtils-CccuW9N4.js";import"./Label-DNW4k13o.js";import"./Text-CNFMu9xe.js";import"./DOMUtils-Dpu0-rWt.js";import"./ZIndexLayer-CksZ3gAG.js";import"./ActivePoints-bxmGK7jd.js";import"./Dot-CM5RhIFl.js";import"./RegisterGraphicalItemId-NvV6Z6oD.js";import"./GraphicalItemClipPath-Dp6p8o2v.js";import"./SetGraphicalItem-D9fO1f5d.js";import"./useAnimationId-Bfut_0eb.js";import"./getRadiusAndStrokeWidthFromDot-D5fiNOfX.js";import"./graphicalItemSelectors-CXD6VIxA.js";import"./Symbols-D-cPayMS.js";import"./symbol-BHK6xqri.js";import"./useElementOffset-DSukcBOs.js";import"./uniqBy-Djo4Qg9a.js";import"./iteratee-BMo5X6Qr.js";import"./CartesianAxis-B8h3nSA3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BB4UF5Li.js";import"./Rectangle-nMN8f2_i.js";import"./Sector-DBc0T8Rp.js";import"./index-B6PIiwfp.js";import"./ChartSizeDimensions-BLB7KQxE.js";import"./OffsetShower-DvPblFBG.js";import"./PlotAreaShower-CQAhfZmY.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
