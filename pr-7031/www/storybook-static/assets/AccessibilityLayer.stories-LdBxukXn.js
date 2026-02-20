import{e as t,r as A}from"./iframe-d3qCsCxk.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-D8dIpZCb.js";import{R as E}from"./arrayEqualityCheck-BSeezrw4.js";import{A as a}from"./Area-3cxiA99z.js";import{L as b}from"./Legend-Bx9chdmL.js";import{X as d}from"./XAxis-BmRFblia.js";import{Y as g}from"./YAxis-BYMuo7gN.js";import{T as h}from"./Tooltip-BMDJQrmc.js";import{R as u}from"./RechartsHookInspector-ILLh7APk.js";import{A as v}from"./AreaChart-DPhze7gZ.js";import{C as T}from"./CartesianGrid-DEXLWDCT.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3juZhR0.js";import"./hooks-BtAJA35U.js";import"./axisSelectors-dcntBxT_.js";import"./zIndexSlice-umaRj-LL.js";import"./renderedTicksSlice--Joe2iCZ.js";import"./resolveDefaultProps-BEotyltG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BmufPzla.js";import"./chartDataContext-DW0jkWxK.js";import"./CategoricalChart-0siU3dfK.js";import"./Curve-D8rLd4C3.js";import"./types-B3TZRrDh.js";import"./Layer-CUjYvDWI.js";import"./ReactUtils-DxKtCUtQ.js";import"./Label-oam-p3Cf.js";import"./Text-Bh5Zv3nu.js";import"./DOMUtils-ClX6mTKm.js";import"./ZIndexLayer-D3LUzJCs.js";import"./ActivePoints-2SOqbbwT.js";import"./Dot-BxRgbJKp.js";import"./RegisterGraphicalItemId-CAywyS_0.js";import"./GraphicalItemClipPath-BCrb_h12.js";import"./SetGraphicalItem-CRxXrGVb.js";import"./useAnimationId-OmpdHa5n.js";import"./getRadiusAndStrokeWidthFromDot-BjqSPYty.js";import"./graphicalItemSelectors-CKDXMRcS.js";import"./Symbols-XJ3mO982.js";import"./useElementOffset-DxduRCjN.js";import"./iteratee-BsAJ3adM.js";import"./CartesianAxis-CyPlzw3T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-BQuZq6jv.js";import"./Rectangle-D73JO-29.js";import"./Sector-VkuL4GRN.js";import"./index-DStWVrKL.js";import"./ChartSizeDimensions-B6KXJ3cA.js";import"./OffsetShower-BqFAEUk2.js";import"./PlotAreaShower-CwAbREDh.js";const Tt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Kt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Kt as __namedExportsOrder,Tt as default};
