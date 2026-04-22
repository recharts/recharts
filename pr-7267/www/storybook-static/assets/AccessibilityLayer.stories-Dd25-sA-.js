import{r as A,e as t}from"./iframe-CIRDBmnY.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-D2raJxM1.js";import{A as E}from"./AreaChart-aqvfDgtA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CXFgbD5_.js";import{X as g}from"./XAxis-Bxd0aLo-.js";import{Y as h}from"./YAxis-Cm87CNGN.js";import{A as a}from"./Area-HGKcluAT.js";import{T as u}from"./Tooltip-L8szJqhB.js";import{R as y}from"./RechartsHookInspector-CW5oWR2W.js";import{R as v}from"./arrayEqualityCheck-Ccl-pv9u.js";import{L as T}from"./Legend-6kHrldid.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-G6A0M6aO.js";import"./index-BtQYyCmS.js";import"./immer-CEyiSkJ_.js";import"./hooks-CXRZ7L0i.js";import"./axisSelectors-BG6ANmCy.js";import"./d3-scale-DeHMkDWI.js";import"./zIndexSlice-Dncpv5eL.js";import"./renderedTicksSlice-D7QGUU6q.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DU23w57v.js";import"./chartDataContext-CjureaJk.js";import"./CategoricalChart-0dU2cdKG.js";import"./resolveDefaultProps-WvlII-Nx.js";import"./CartesianAxis-DDkNiZWI.js";import"./Layer-Ba8IePkn.js";import"./Text-DFNv1G75.js";import"./DOMUtils-U3UN3Upo.js";import"./Label-DBOJ1SQQ.js";import"./ZIndexLayer-BEbEcElf.js";import"./types-Tac8hqr1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-D42dBTuL.js";import"./step-Db3ooEEu.js";import"./ReactUtils-B6lO7UVh.js";import"./ActivePoints-ASRgwgve.js";import"./Dot-qDjeeFl4.js";import"./RegisterGraphicalItemId-CcpQzZXr.js";import"./GraphicalItemClipPath-DsfyRwV1.js";import"./SetGraphicalItem-KCmHDaFB.js";import"./useAnimationId-8KJrDx3h.js";import"./getRadiusAndStrokeWidthFromDot-C6XbVpCy.js";import"./graphicalItemSelectors-BtmGdkTu.js";import"./useElementOffset-B6mSnTrH.js";import"./uniqBy-yRET8Vgl.js";import"./iteratee-C1yu3gaY.js";import"./Cross-C54iSCB1.js";import"./Rectangle-BSNMtd6V.js";import"./Sector-DxkSpspk.js";import"./index-CZZFGVCv.js";import"./ChartSizeDimensions-DXL_JkvM.js";import"./OffsetShower-BD7Cp3wL.js";import"./PlotAreaShower-lKDhtFbm.js";import"./Symbols-CshwXNPg.js";import"./symbol-BUAsdTvL.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
