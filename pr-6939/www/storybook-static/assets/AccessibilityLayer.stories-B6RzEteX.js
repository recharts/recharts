import{e as t,r as A}from"./iframe-BQPEMrXd.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CjquZQyc.js";import{C as l}from"./ComposedChart-CWFkdeSx.js";import{R as E}from"./arrayEqualityCheck-CslLKJ6H.js";import{A as a}from"./Area-BGHJGXtL.js";import{L as b}from"./Legend-25dK6D8H.js";import{X as d}from"./XAxis-mF1pALMt.js";import{Y as g}from"./YAxis-CIcAGIvo.js";import{T as h}from"./Tooltip-CW0kCRen.js";import{R as u}from"./RechartsHookInspector-DspFoKBX.js";import{A as v}from"./AreaChart-CdNl8DHC.js";import{C as T}from"./CartesianGrid-CXNnKGRI.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DACGaUhd.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./zIndexSlice-CdQy2W3n.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./Curve-CkSquOYK.js";import"./types-BQWi4mRQ.js";import"./Layer-DxbBzKq7.js";import"./ReactUtils-Ctv4TrHD.js";import"./Label-CJDR703l.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./ZIndexLayer-BhdUGqn6.js";import"./ActivePoints-CBPMI_KV.js";import"./Dot-Dad_gt4k.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./useAnimationId-BxGZeVYE.js";import"./getRadiusAndStrokeWidthFromDot-DDWPUI43.js";import"./graphicalItemSelectors-CbXQMkVw.js";import"./Symbols-zJ2C1Rrw.js";import"./useElementOffset-CQ61oo7Y.js";import"./iteratee-Bw969CDs.js";import"./CartesianAxis-CNEc1nbZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-V_DJv579.js";import"./Rectangle-BmEiGd0_.js";import"./Sector-gJW5kDSo.js";import"./index-DIjwufBA.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./OffsetShower-DTE5GBb5.js";import"./PlotAreaShower-6AA0_a8Q.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
