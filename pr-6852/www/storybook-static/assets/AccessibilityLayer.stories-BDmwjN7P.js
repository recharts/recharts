import{e as t,r as k}from"./iframe-CCMJ-7V4.js";import{G as n}from"./CartesianComponentShared-BGjrRDZW.js";import{g as E}from"./utils-ePvtT4un.js";import{C as d}from"./ComposedChart-C6h9PwcP.js";import{R as b}from"./arrayEqualityCheck-EU51TFpx.js";import{A as a}from"./Area-BU6_CltG.js";import{L as C}from"./Legend-B9rhwJLc.js";import{X as g}from"./XAxis-R7Vv75w5.js";import{Y as h}from"./YAxis-BsjRKKqi.js";import{T as u}from"./Tooltip-BPXKEL5o.js";import{R as y}from"./RechartsHookInspector-CT184sGb.js";import{A as v}from"./AreaChart-DYYgWDyr.js";import{C as T}from"./CartesianGrid-DyGIfdDj.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./hooks--Mj4Y-hQ.js";import"./axisSelectors-Bwyl_l9L.js";import"./zIndexSlice-D6TWR_2-.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./PolarUtils-JMmyzBBh.js";import"./CartesianChart-BWh3hsiv.js";import"./chartDataContext-BB33_ty3.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./Curve-CWiUvZCK.js";import"./types-CfBor7-V.js";import"./Layer-BEqohIF5.js";import"./ReactUtils-CeY657n5.js";import"./Label-DYpMY_OX.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./ZIndexLayer-DTuo7Di4.js";import"./ActivePoints-DMWv0p30.js";import"./Dot-BPrJu2iO.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./GraphicalItemClipPath-CYG_pIwh.js";import"./SetGraphicalItem-DBanf2OA.js";import"./useAnimationId-C67C_3Vf.js";import"./getRadiusAndStrokeWidthFromDot-BG_1nnLU.js";import"./graphicalItemSelectors-Bgnz89JK.js";import"./Symbols-BjLEgnQl.js";import"./useElementOffset-CesAmAsq.js";import"./iteratee-DuUSmLFC.js";import"./CartesianAxis-CjO0kaDg.js";import"./Cross-Cn3uXrmE.js";import"./Rectangle-DFaFQv7g.js";import"./Sector-CvpK-Ylm.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";const Ct={component:d},r={render:e=>t.createElement(b,{width:"100%",height:300},t.createElement(d,{margin:{top:20,right:20,bottom:20,left:20},data:f},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(C,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:{...E(n)},parameters:{controls:{include:Object.keys(n)},docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,A]=k.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>A(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:f,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
