import{e as t,r as k}from"./iframe-DGrXlEkx.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-B5e_pVnj.js";import{R as b}from"./arrayEqualityCheck-DicChNuU.js";import{A as a}from"./Area-DtjZBkWj.js";import{L as C}from"./Legend-CsXa4xxu.js";import{X as g}from"./XAxis-CAsPUI6L.js";import{Y as h}from"./YAxis-m9KoigUY.js";import{T as u}from"./Tooltip-Cyj47X2a.js";import{R as y}from"./RechartsHookInspector-Br39JKkJ.js";import{A as v}from"./AreaChart-BZX-73zo.js";import{C as T}from"./CartesianGrid-BzHr3Sej.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./zIndexSlice-BOlzJk7E.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./Curve-B7GNUcvb.js";import"./types-Byz7h8Fw.js";import"./Layer-D3LXHH9n.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ZIndexLayer-B0lWMP9E.js";import"./ActivePoints-Cg45XT1Q.js";import"./Dot-JJjdvtMS.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./useAnimationId-BLzFnaDj.js";import"./getRadiusAndStrokeWidthFromDot-gCSpblHn.js";import"./graphicalItemSelectors-BPbz2guO.js";import"./Symbols-lPueLsWK.js";import"./useElementOffset-peD2ny1m.js";import"./iteratee-BfALflAJ.js";import"./CartesianAxis-BzLzw--d.js";import"./Cross-DGofQ-D3.js";import"./Rectangle-B_ChE2a8.js";import"./Sector-BiHhGzVm.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
