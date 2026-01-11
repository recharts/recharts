import{e as t,r as k}from"./iframe-BMyqBDY5.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-3iTOeyaD.js";import{R as b}from"./arrayEqualityCheck-DuyxfREv.js";import{A as a}from"./Area-gOldl2eR.js";import{L as C}from"./Legend-DsekqhC3.js";import{X as g}from"./XAxis-DrX_bmOT.js";import{Y as h}from"./YAxis-gYPGT0Um.js";import{T as u}from"./Tooltip-C6aJHee-.js";import{R as y}from"./RechartsHookInspector-B_A0Uap_.js";import{A as v}from"./AreaChart-nZpuFOfB.js";import{C as T}from"./CartesianGrid-DttEQ19N.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./Curve-CP_WuQoJ.js";import"./types-C28cLjqk.js";import"./Layer-DWAVkTpZ.js";import"./ReactUtils-DZSdNGLK.js";import"./Label-Cc8j6S_C.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./ZIndexLayer-BHQIN7jK.js";import"./ActivePoints-lrJOuCF1.js";import"./Dot-DwmjpDDG.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./useAnimationId-MgACKJ1I.js";import"./getRadiusAndStrokeWidthFromDot-CRLHMYWi.js";import"./graphicalItemSelectors-DzsJ6D8k.js";import"./Symbols-DAD_VKXg.js";import"./useElementOffset-DF2WTDjY.js";import"./iteratee-C5e8BY8E.js";import"./CartesianAxis-zlmGf0lm.js";import"./Cross-C0Wr0_cY.js";import"./Rectangle-MMr5z6jI.js";import"./Sector-Dnl75ukO.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
