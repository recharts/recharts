import{P as A,c as t}from"./iframe-CFdw7OF0.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-Z--IS1CR.js";import{A as E}from"./AreaChart-Ben-Vmhs.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-CObU4swe.js";import{X as g}from"./XAxis-oGl6YnV0.js";import{Y as h}from"./YAxis-BAT_0iNE.js";import{A as a}from"./Area-BdJa1xq5.js";import{T as u}from"./Tooltip-LgSYFZHU.js";import{g as k}from"./zIndexSlice-D5FBk225.js";import{L as v}from"./Legend-C2EvpoVf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./immer-3q52nOMc.js";import"./get-i3QN0OCy.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./axisSelectors-CDxqGeGZ.js";import"./d3-scale-B-4cH8vj.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./Label-2Qw5xNff.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CMXh5glG.js";import"./step-Crajo5M3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CaBU1i2i.js";import"./ActivePoints-BRiCC5vc.js";import"./Dot-BIcdqveY.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./useAnimationId-opl2QVve.js";import"./getRadiusAndStrokeWidthFromDot-DulN0eDG.js";import"./graphicalItemSelectors-3cpOgqVz.js";import"./useElementOffset-C84_aF81.js";import"./uniqBy-Chp8xrv6.js";import"./iteratee-D26QWFLa.js";import"./Cross-DeOAH8tZ.js";import"./Rectangle-Od57b66I.js";import"./Sector-CIx1PkfB.js";import"./Symbols-C2-Wolt1.js";import"./symbol-D61DaMaA.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
