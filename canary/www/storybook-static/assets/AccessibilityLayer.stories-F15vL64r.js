import{e as t,r as k}from"./iframe-DkFnKmz6.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-DUjCvTFh.js";import{R as b}from"./arrayEqualityCheck-B_Ane2tr.js";import{A as a}from"./Area-q20VSj4w.js";import{L as C}from"./Legend-BoWv2Urj.js";import{X as g}from"./XAxis-ByDrXS-8.js";import{Y as h}from"./YAxis-CDI-qV1c.js";import{T as u}from"./Tooltip-twZ63P-G.js";import{R as y}from"./RechartsHookInspector-B3tFzt2u.js";import{A as v}from"./AreaChart-BeTOgsH6.js";import{C as T}from"./CartesianGrid-DuRGeQxY.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bs4V9sqh.js";import"./hooks-W6coKbOT.js";import"./axisSelectors-DvTbuhYF.js";import"./zIndexSlice-DVsC50MZ.js";import"./resolveDefaultProps-BEmCTT1M.js";import"./PolarUtils-C_yoPd2g.js";import"./CartesianChart-CvoDLFkd.js";import"./chartDataContext-BD-hpc_7.js";import"./CategoricalChart-CWiOLY2_.js";import"./Curve-CQB8Wbk0.js";import"./types-DoGupJwC.js";import"./Layer-BKurILEC.js";import"./ReactUtils-zV5IbihU.js";import"./Label-mt1d5eVZ.js";import"./Text-mK8iFpSb.js";import"./DOMUtils-8Q3WDKQX.js";import"./ZIndexLayer-CZJ8gmuc.js";import"./ActivePoints-D3N8i5DQ.js";import"./Dot-Bye_ci1V.js";import"./RegisterGraphicalItemId-2BrkyC_A.js";import"./GraphicalItemClipPath-DEpjOnpI.js";import"./SetGraphicalItem-C0TqoRHl.js";import"./useAnimationId-ClFGkqN9.js";import"./getRadiusAndStrokeWidthFromDot-jKYQpOsm.js";import"./graphicalItemSelectors-Bg_bTf37.js";import"./Symbols-BHmBNcPX.js";import"./useElementOffset-DKLV0Pm5.js";import"./iteratee-DprsdLjM.js";import"./CartesianAxis-DgIti1By.js";import"./Cross-DPhAEjaK.js";import"./Rectangle-Bgeub8cz.js";import"./Sector-iBjQq3Q9.js";import"./index-DeWANcHY.js";import"./ChartSizeDimensions-DX00xq4b.js";import"./OffsetShower-B1JfcMLk.js";import"./PlotAreaShower-B1NfTpo7.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
