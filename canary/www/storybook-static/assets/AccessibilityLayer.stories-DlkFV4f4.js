import{e as t,r as k}from"./iframe-CKmpfOpL.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-CicuSwT1.js";import{R as b}from"./arrayEqualityCheck-CGTamc7H.js";import{A as a}from"./Area-Dx1m5aTo.js";import{L as C}from"./Legend-CE_Ff5Rx.js";import{X as g}from"./XAxis-BBRqfJxe.js";import{Y as h}from"./YAxis-ho-us9Q5.js";import{T as u}from"./Tooltip-DcsIazWj.js";import{R as y}from"./RechartsHookInspector-DZtkbE0Z.js";import{A as v}from"./AreaChart-pNZAdHed.js";import{C as T}from"./CartesianGrid-Cq5KhU9R.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./zIndexSlice-CQqF6s7B.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./PolarUtils-BmD-XZwK.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./Curve-Bys97J5V.js";import"./types-BLY5tRwt.js";import"./Layer-DhYkCEVl.js";import"./ReactUtils-BXryAzdD.js";import"./Label-DnuO6Rjq.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./ZIndexLayer-B_sQwTbu.js";import"./ActivePoints-ClWX87Gp.js";import"./Dot-CHqdM_F0.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./GraphicalItemClipPath-78XXJvtR.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./useAnimationId-DzZ8q-8e.js";import"./getRadiusAndStrokeWidthFromDot-DvxIC_MO.js";import"./graphicalItemSelectors-Cs-wLzyO.js";import"./Symbols-CFHhg7rN.js";import"./useElementOffset-BBYrqTei.js";import"./iteratee-DYyig2D7.js";import"./CartesianAxis-DmTSqBS2.js";import"./Cross-BEdInfga.js";import"./Rectangle-D_zs00yx.js";import"./Sector-DbmZtSEy.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
