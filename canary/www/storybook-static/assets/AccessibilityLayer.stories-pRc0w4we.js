import{e as t,r as k}from"./iframe-B8wZLo82.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-BcqGzy_j.js";import{R as b}from"./arrayEqualityCheck-mQHvFPpg.js";import{A as a}from"./Area-B9VPBSJg.js";import{L as C}from"./Legend-nundP5JZ.js";import{X as g}from"./XAxis-BVtf3sZB.js";import{Y as h}from"./YAxis-DRyjSKtp.js";import{T as u}from"./Tooltip-CQ99GayR.js";import{R as y}from"./RechartsHookInspector-GmoDPQRs.js";import{A as v}from"./AreaChart-DwNXw4rO.js";import{C as T}from"./CartesianGrid-C9NEb3ca.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBigNIyW.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./zIndexSlice-vxKp5epo.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./PolarUtils-DHvcKc2n.js";import"./CartesianChart-o83YROHa.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./Curve-CMsBNtPf.js";import"./types-DiGBS5_O.js";import"./Layer-BJUTpLkJ.js";import"./ReactUtils-Dj7f4Iqr.js";import"./Label-DvY0zh6c.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./ZIndexLayer-DdiLICHA.js";import"./ActivePoints-D4-LWpJq.js";import"./Dot-DaV-kn_2.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./GraphicalItemClipPath-BYlHtFhX.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./useAnimationId-Dy4qDS51.js";import"./getRadiusAndStrokeWidthFromDot-7lS6mcqR.js";import"./graphicalItemSelectors-DZbwE9ZQ.js";import"./Symbols-CZWpR43S.js";import"./useElementOffset-CA4uogOE.js";import"./iteratee-1BNukA-G.js";import"./CartesianAxis-B9jPSK4o.js";import"./Cross-C1H0FFXN.js";import"./Rectangle-Bg6726WX.js";import"./Sector-B3KOtxMp.js";import"./index-DUOpxgLn.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./OffsetShower-DE0ZkW5V.js";import"./PlotAreaShower-ZBvPTwOe.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
