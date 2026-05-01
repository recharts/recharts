import{r as A,e as t}from"./iframe-C5l4DaJO.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-OPX83XMh.js";import{A as E}from"./AreaChart-BAEx2dd9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B7NRw-Pr.js";import{X as g}from"./XAxis-ByPIKQU1.js";import{Y as h}from"./YAxis-Bv8R6otu.js";import{A as a}from"./Area-Z9ygwcs1.js";import{T as u}from"./Tooltip-Chh_8w-O.js";import{R as y}from"./RechartsHookInspector-eKcCgGD5.js";import{R as v}from"./arrayEqualityCheck-fM0600Tt.js";import{L as T}from"./Legend-BkA5LrBA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./immer-BjHWRAG8.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./CartesianAxis-DstjLvt8.js";import"./Layer-BQ7ZElOW.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./Label-CxCh3fMv.js";import"./ZIndexLayer-DhZlyZCE.js";import"./types-CjQ8Fnwy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C8kgiu5F.js";import"./step-5ABOenpE.js";import"./ReactUtils-C_GhcNSF.js";import"./ActivePoints-DwJBd7DK.js";import"./Dot-DaM5pVyw.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./useAnimationId-Ivno0Gk6.js";import"./getRadiusAndStrokeWidthFromDot-Cq3JaBlL.js";import"./graphicalItemSelectors-DBcWBwAS.js";import"./useElementOffset-CyBq5cT_.js";import"./uniqBy-BufKpw2a.js";import"./iteratee-CTT2mLKG.js";import"./Cross-CpN4Zqgv.js";import"./Rectangle-BvzLcgoo.js";import"./Sector-BXKHAeCR.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
