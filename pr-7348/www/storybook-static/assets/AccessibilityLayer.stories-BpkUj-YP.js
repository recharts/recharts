import{u as A,e as t}from"./iframe-CUlKjRv5.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-D68WBCYe.js";import{A as E}from"./AreaChart-B3V5iyRE.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Thm5ek-6.js";import{X as g}from"./XAxis-CO_kz_i5.js";import{Y as h}from"./YAxis-CKyv_Ble.js";import{A as a}from"./Area-CzwNi6ZD.js";import{T as u}from"./Tooltip-CNAuMk0m.js";import{R as y}from"./RechartsHookInspector-DIUnr0hb.js";import{g as v}from"./arrayEqualityCheck-DBgCs58d.js";import{L as T}from"./Legend-BqAOIfma.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./immer-DSTsi-PZ.js";import"./hooks-CnLCGSHs.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./zIndexSlice-ygbvIPwo.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./resolveDefaultProps-_1GgMiat.js";import"./CartesianAxis-BeQQMY3-.js";import"./Layer-BRPUehgK.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./Label-CsCoT34Y.js";import"./ZIndexLayer-Dzag2pwA.js";import"./types-cseKagnM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Dj9MPAvc.js";import"./step-ndBpbuBv.js";import"./ReactUtils-Dhd-bIVM.js";import"./ActivePoints-CrLAHFM3.js";import"./Dot-Cv9C9-P8.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./useAnimationId-527k5CUF.js";import"./getRadiusAndStrokeWidthFromDot-CsjgyuMP.js";import"./graphicalItemSelectors-ByldMGNB.js";import"./useElementOffset-Crgg6g68.js";import"./uniqBy-BeSJAQ9R.js";import"./iteratee-D8Z_DKuL.js";import"./Cross-B6AOWwW3.js";import"./Rectangle-BeDuyTKv.js";import"./Sector-DGUTJhGS.js";import"./index-CsGwSrdN.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./OffsetShower-CPkU8Ejw.js";import"./PlotAreaShower-BQaO0vts.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
