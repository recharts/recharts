import{r as A,e as t}from"./iframe-Cr_9Zxyz.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BP3-QQ_Z.js";import{A as E}from"./AreaChart-CSFAySZL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BGDg0quO.js";import{X as g}from"./XAxis-DoXEBn_P.js";import{Y as h}from"./YAxis-don10v8F.js";import{A as a}from"./Area-C_kHAqwr.js";import{T as u}from"./Tooltip-YpxbE3PS.js";import{R as y}from"./RechartsHookInspector-CkzoI9c0.js";import{R as v}from"./arrayEqualityCheck-C67VePae.js";import{L as T}from"./Legend-C0TPdzjM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./immer-C4QSyCgb.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./CartesianAxis-D2bUE24b.js";import"./Layer-LRa_hkeo.js";import"./Text-B2FTpI2T.js";import"./DOMUtils-ZnDVm2Wt.js";import"./Label-C4NmpEg6.js";import"./ZIndexLayer-DdInyA8Z.js";import"./types-DtvHHfJA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BqHbKpq8.js";import"./step-BUGJ6v3P.js";import"./ReactUtils-B4MRvMvn.js";import"./ActivePoints-Bn9vOXXn.js";import"./Dot-B1MaLxXk.js";import"./RegisterGraphicalItemId-DimfmF2M.js";import"./GraphicalItemClipPath-CDQxSlO_.js";import"./SetGraphicalItem-CPb0K0Vx.js";import"./useAnimationId-CtG5S8C9.js";import"./getRadiusAndStrokeWidthFromDot-DY-AYx3Z.js";import"./graphicalItemSelectors-wGJA2e4S.js";import"./useElementOffset-BpxKPshg.js";import"./uniqBy-DKNQUoMm.js";import"./iteratee-DFCHVqZZ.js";import"./Cross-B18P-68P.js";import"./Rectangle-CigjyTr6.js";import"./Sector-oF4rAsT4.js";import"./index-BCUg-3d0.js";import"./ChartSizeDimensions-BSIBvgzx.js";import"./OffsetShower-CxfJShSk.js";import"./PlotAreaShower-28Fi8dPq.js";import"./Symbols-Q-kK09Rp.js";import"./symbol-Ch9ZDTsO.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
