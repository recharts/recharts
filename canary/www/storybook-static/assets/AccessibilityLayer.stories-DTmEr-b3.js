import{r as A,R as t}from"./iframe-BaK-xze-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DhdbIgqC.js";import{A as E}from"./AreaChart-Hv7ZUGtA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DcR9ERDS.js";import{X as g}from"./XAxis-CTevCFW7.js";import{Y as h}from"./YAxis-CUt8Xelm.js";import{A as a}from"./Area-B2NCGYvz.js";import{T as u}from"./Tooltip-BBj8J94A.js";import{R as k}from"./zIndexSlice-DrFw0t7C.js";import{L as v}from"./Legend-B6lWfqzL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZM6L-T3.js";import"./resolveDefaultProps-Cil0S8B-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CnfYSHLW.js";import"./throttle-CYt85Ar6.js";import"./index-CnYYSSY1.js";import"./index-CtznlYAS.js";import"./isWellBehavedNumber-Bo5UiCAJ.js";import"./d3-scale-_8yp9yQE.js";import"./index-Dlm-5Ij4.js";import"./index-Dw-ed78r.js";import"./renderedTicksSlice-CNPiGgUW.js";import"./index-B4hxfgtn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGaTNHvY.js";import"./chartDataContext-DqcmhhuQ.js";import"./CategoricalChart-MBo-iukw.js";import"./CartesianAxis-CSk3G5Bd.js";import"./Layer-C6rljEkC.js";import"./Text-CdbyXNxn.js";import"./pageBackground-CV09xolb.js";import"./useId-s-O1vSWD.js";import"./useBackwardsCompatibleTheme-B3pLDlIF.js";import"./Label-cKDNSGIr.js";import"./ZIndexLayer-Byqn6KnA.js";import"./types-DSy0pRW3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-CZlzjGsD.js";import"./useAnimationId-B-391LIn.js";import"./dataEntryStyles-IDu762UD.js";import"./ActivePoints-Bf2N-qWJ.js";import"./Dot-DhzFrZOP.js";import"./GraphicalItemClipPath-BvdkjIlE.js";import"./SetGraphicalItem-BAL-rDyp.js";import"./getRadiusAndStrokeWidthFromDot-SwZ9tKTP.js";import"./ActiveShapeUtils-DuzIRyyx.js";import"./Curve-sUBaLFrc.js";import"./step-BZZY1s9U.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-lq0ydW3i.js";import"./useElementOffset-DuSny-9b.js";import"./uniqBy-FpCdKt82.js";import"./iteratee-COMggJ3D.js";import"./Cross-CqZ9nDQr.js";import"./Rectangle-2t7WTJbT.js";import"./util-Dxo8gN5i.js";import"./Sector-TKfoXJRP.js";import"./Symbols-BqROoHzJ.js";import"./symbol-BXhlSx3K.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
