import{e as t,r as k}from"./iframe-D9q7UUmi.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-BrSXjugh.js";import{R as b}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{A as a}from"./Area-CaWpIja3.js";import{L as C}from"./Legend-D31ymzRq.js";import{X as g}from"./XAxis-Dxn9Zo0N.js";import{Y as h}from"./YAxis-Ds2QNT8w.js";import{T as u}from"./Tooltip-BLBubyYz.js";import{R as y}from"./RechartsHookInspector-Btgon49z.js";import{A as v}from"./AreaChart-BtjsgXBS.js";import{C as T}from"./CartesianGrid-ocgArU4K.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./zIndexSlice-CxekzBSL.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./Curve-DEESCjbc.js";import"./types-FPdAMXDy.js";import"./Layer-CUKLQgPC.js";import"./ReactUtils-CfRgqXT5.js";import"./Label-CDSn628C.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./ZIndexLayer-CtgCGO4x.js";import"./ActivePoints-B6AA5Rbz.js";import"./Dot-CrGRPD2L.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./useAnimationId-DeN0uxUI.js";import"./getRadiusAndStrokeWidthFromDot-Ct_S_qD5.js";import"./graphicalItemSelectors-BoZBMBth.js";import"./Symbols-B3oT9PiF.js";import"./useElementOffset-D1mKrQqH.js";import"./iteratee-JJOOie1Z.js";import"./CartesianAxis-DBnbCnpE.js";import"./Cross-Cb3_Opci.js";import"./Rectangle-aQPjrzEG.js";import"./Sector-BIUbLnT5.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
