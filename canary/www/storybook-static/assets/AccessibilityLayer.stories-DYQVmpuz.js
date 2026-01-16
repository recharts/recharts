import{e as t,r as A}from"./iframe-BhN7WL5Z.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-MPi4Nq7B.js";import{R as E}from"./arrayEqualityCheck-D4vVSxnz.js";import{A as a}from"./Area-BQgHKYuy.js";import{L as b}from"./Legend-Do489A0F.js";import{X as d}from"./XAxis-BkxM2U5C.js";import{Y as g}from"./YAxis-CLDqs-dP.js";import{T as h}from"./Tooltip-CNEd35QC.js";import{R as u}from"./RechartsHookInspector-DuzZFa2V.js";import{A as v}from"./AreaChart-9o9B8drv.js";import{C as T}from"./CartesianGrid-BaKHie_g.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ngVbXQIL.js";import"./hooks-EmXHGT5T.js";import"./axisSelectors-BCCMRHlB.js";import"./zIndexSlice-wy9BZePe.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./PolarUtils-DA1Z2LDM.js";import"./CartesianChart-DIFYt1Ja.js";import"./chartDataContext-Dmy6E_I7.js";import"./CategoricalChart-BDJKnV04.js";import"./Curve-BUxUFTVS.js";import"./types-D2HNEHHU.js";import"./Layer-CfPqbk4S.js";import"./ReactUtils-C4jZBCSK.js";import"./Label-DbCyuY2T.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./ZIndexLayer-C8mR-iMG.js";import"./ActivePoints-C2WvuJKe.js";import"./Dot-DJcxz675.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./GraphicalItemClipPath-DtY2K5G-.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./useAnimationId-BWf0K4Q5.js";import"./getRadiusAndStrokeWidthFromDot-CK7f_m59.js";import"./graphicalItemSelectors-GuUi1bBK.js";import"./Symbols-BSDl9S1a.js";import"./useElementOffset-Chq47f3C.js";import"./iteratee-DHMA5jED.js";import"./CartesianAxis-CsSTEuVM.js";import"./Cross-C5WS2Xdo.js";import"./Rectangle-BXwR0_dr.js";import"./Sector-DW4oDqQS.js";import"./index-AX7IXW21.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
