import{e as t,r as k}from"./iframe-DLhPWxyK.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-DNdReU5t.js";import{R as b}from"./arrayEqualityCheck-m1RhjOmx.js";import{A as a}from"./Area-CzXzvydB.js";import{L as C}from"./Legend-dB7LAjtZ.js";import{X as g}from"./XAxis-sgPLB-rr.js";import{Y as h}from"./YAxis-BkUnmSc2.js";import{T as u}from"./Tooltip-DUsq4-kv.js";import{R as y}from"./RechartsHookInspector-HNjcmSsy.js";import{A as v}from"./AreaChart-C1_SGHis.js";import{C as T}from"./CartesianGrid-Bs1CS7L4.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./Curve-DeIwtCC2.js";import"./types-DGdi1KYp.js";import"./Layer-T-_zDyRj.js";import"./ReactUtils-CkbQi9iw.js";import"./Label-Cfm9uiYS.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./ZIndexLayer-CE4rF1P8.js";import"./ActivePoints-CMJVeQ-U.js";import"./Dot-BSI9AMQL.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./useAnimationId-CcCb5ZgY.js";import"./getRadiusAndStrokeWidthFromDot-CualhsEn.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./Symbols-CNkEhL1u.js";import"./useElementOffset-CebiNadU.js";import"./iteratee-B5VvVAP5.js";import"./CartesianAxis-DsXxqkAo.js";import"./Cross-B3vZI2Mu.js";import"./Rectangle-DFsdprJS.js";import"./Sector-tN30gQok.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
