import{P as A,c as t}from"./iframe-BL0vDUY1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CpDFoA5e.js";import{A as E}from"./AreaChart-3YvQJA8b.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-C7YJJUcu.js";import{X as g}from"./XAxis-BqoRDN9a.js";import{Y as h}from"./YAxis-DxphIXAP.js";import{A as a}from"./Area-txJe-hAE.js";import{T as u}from"./Tooltip-oByFuPe7.js";import{g as k}from"./zIndexSlice-DAAOwj36.js";import{L as v}from"./Legend-C8HsLDc1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJ0hXPGE.js";import"./index-C8Q9Qlzv.js";import"./index-B3rgiiof.js";import"./index-vndO0F7c.js";import"./index-BQNr1vMH.js";import"./immer-gfsZ7y3h.js";import"./get-m6Gdqips.js";import"./renderedTicksSlice-DgGULbP3.js";import"./axisSelectors-DLsK43Oc.js";import"./d3-scale-DCyWVOsR.js";import"./resolveDefaultProps-ZSI9VFO3.js";import"./isWellBehavedNumber-C9kFBhSy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BhVqKQAk.js";import"./chartDataContext-BU-8Dj6p.js";import"./CategoricalChart-Dx4CHgqj.js";import"./CartesianAxis-D1s0-vhb.js";import"./Layer-CaYvEIsW.js";import"./Text-0yUJxWRz.js";import"./DOMUtils-DBRkXAWK.js";import"./Label-C0g2piVD.js";import"./ZIndexLayer-BGBBuQwI.js";import"./types-C45pB88z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Cc4T7AcR.js";import"./step-BQd4YsZo.js";import"./path-DyVhHtw_.js";import"./ReactUtils-2UhHZda9.js";import"./ActivePoints-DnbgDyGh.js";import"./Dot-BQDzh87g.js";import"./RegisterGraphicalItemId-CkGBqTpZ.js";import"./GraphicalItemClipPath-CzWahSjY.js";import"./SetGraphicalItem-CpMSDPev.js";import"./useAnimationId-Dpb32_8Y.js";import"./getRadiusAndStrokeWidthFromDot-BPkJ8Kki.js";import"./graphicalItemSelectors-B6Mjt85n.js";import"./useElementOffset-ygCelvpZ.js";import"./uniqBy-BeGOK-hH.js";import"./iteratee-CLiHz7HZ.js";import"./Cross-CPBbOftl.js";import"./Rectangle-DISm3zYB.js";import"./Sector-BuBE9LFV.js";import"./Symbols-DGPx7_yq.js";import"./symbol-Chwe14Vf.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
