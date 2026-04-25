import{r as A,e as t}from"./iframe-CPCZOK1n.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BjaTFdDo.js";import{A as E}from"./AreaChart-h6yaqdKq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BkCl4ydr.js";import{X as g}from"./XAxis-DvE2ctn8.js";import{Y as h}from"./YAxis-D_9Qs3qD.js";import{A as a}from"./Area-BAz4VNqS.js";import{T as u}from"./Tooltip-DrbRbgOP.js";import{R as y}from"./RechartsHookInspector-BtGo_ncg.js";import{R as v}from"./arrayEqualityCheck-8pkbG_5i.js";import{L as T}from"./Legend-D6iqxHJh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kO2YHyse.js";import"./index-DASNqNcn.js";import"./immer-BU-gze6F.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./zIndexSlice-CzIf2J47.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./resolveDefaultProps-oWFt7rla.js";import"./CartesianAxis-hOqGK2-F.js";import"./Layer-DgSzLvrX.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./Label-CTXaFaVv.js";import"./ZIndexLayer-PN2_dLzy.js";import"./types-tTbnguye.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Bm35dzge.js";import"./step-B2es0Z9s.js";import"./ReactUtils-CSglJ9G5.js";import"./ActivePoints-MCeE4Hpe.js";import"./Dot-Drgga1HN.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./useAnimationId-BOEFbdDG.js";import"./getRadiusAndStrokeWidthFromDot-DT85GWcH.js";import"./graphicalItemSelectors-D0v11jcu.js";import"./useElementOffset-SI6UVV-i.js";import"./uniqBy-vQ_AcU9k.js";import"./iteratee-BsseB_NT.js";import"./Cross-CeLqr8lV.js";import"./Rectangle-BBBYhjQV.js";import"./Sector-BjRPzYK4.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
