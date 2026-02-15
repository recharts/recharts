import{e as t,r as A}from"./iframe-CcI14rjx.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-FcFBNN0D.js";import{R as E}from"./arrayEqualityCheck-B8tVyMzV.js";import{A as a}from"./Area-BkDr32fl.js";import{L as b}from"./Legend-BkiUSDO3.js";import{X as d}from"./XAxis-CzdMAN4d.js";import{Y as g}from"./YAxis-CbFx-Oik.js";import{T as h}from"./Tooltip-C7_EF9Yf.js";import{R as u}from"./RechartsHookInspector-BirTV-4S.js";import{A as v}from"./AreaChart-BN_dSihL.js";import{C as T}from"./CartesianGrid-Ck8TjHQ7.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./resolveDefaultProps-po8mUv-4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./Curve-CHXnr1rt.js";import"./types-Ce3J44ym.js";import"./Layer-8dVuGqJD.js";import"./ReactUtils-C84uddRP.js";import"./Label-Dpi6i3BM.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./ZIndexLayer-DuQEL0lP.js";import"./ActivePoints-Ca2XV1yH.js";import"./Dot-B9LqMTkT.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./useAnimationId-B5oI4zFf.js";import"./getRadiusAndStrokeWidthFromDot-TOKn8Uzz.js";import"./graphicalItemSelectors-BKqXZH6g.js";import"./Symbols-CXif55_q.js";import"./useElementOffset-B1zTkUQu.js";import"./iteratee-ljczhaBr.js";import"./CartesianAxis-Vu_uTkrX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B9T7z20x.js";import"./Rectangle-DSZATy_S.js";import"./Sector-DCwH9VE3.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
