import{e as t,r as k}from"./iframe-BzK4IM4O.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-DeS0V09V.js";import{R as b}from"./arrayEqualityCheck-DntSlYRe.js";import{A as a}from"./Area-BB2K6nN0.js";import{L as C}from"./Legend-BSKRxihT.js";import{X as g}from"./XAxis-BEioX7l9.js";import{Y as h}from"./YAxis-FFHKkbRQ.js";import{T as u}from"./Tooltip-DG0VLx16.js";import{R as y}from"./RechartsHookInspector-Blpd2IS8.js";import{A as v}from"./AreaChart-CRn0taj6.js";import{C as T}from"./CartesianGrid-D-ISYqWZ.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-G-7uZuvB.js";import"./hooks-VI0oeyv4.js";import"./axisSelectors-FRDErLTA.js";import"./zIndexSlice-CDkWNK3b.js";import"./resolveDefaultProps-DxvkoyFj.js";import"./PolarUtils-CkcjhAmg.js";import"./CartesianChart-LpoIcLQ4.js";import"./chartDataContext-DMRgNTR6.js";import"./CategoricalChart-DIHkHBGg.js";import"./Curve-Cez8Njk6.js";import"./types-CR25OGX1.js";import"./Layer-D3djBZrj.js";import"./ReactUtils-BdJFLjIw.js";import"./Label-Cw9dZn4K.js";import"./Text-2hmmkMzb.js";import"./DOMUtils-DhJGRkcK.js";import"./ZIndexLayer-CvqQuagi.js";import"./ActivePoints-Dcm7tES9.js";import"./Dot-CeVvwLNa.js";import"./RegisterGraphicalItemId-BlwXRQ76.js";import"./GraphicalItemClipPath-C1-ivBuq.js";import"./SetGraphicalItem-DxeqcNbM.js";import"./useAnimationId-BpCcKQdg.js";import"./getRadiusAndStrokeWidthFromDot-XEghJGNu.js";import"./graphicalItemSelectors-BRf_76Py.js";import"./Symbols-C_2JILz4.js";import"./useElementOffset-a9sy_bGO.js";import"./iteratee-D-fyWy_G.js";import"./CartesianAxis-Bvc9afGW.js";import"./Cross-BYH-rkpi.js";import"./Rectangle-CHjVgmr4.js";import"./Sector-BXKtHGMH.js";import"./index-977mc2AH.js";import"./ChartSizeDimensions-D2LiT7mU.js";import"./OffsetShower-0fHUvhro.js";import"./PlotAreaShower-DvSB-8u7.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
