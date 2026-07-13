import{r as A,R as t}from"./iframe-upOKpTfC.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-XkmqlV9y.js";import{A as E}from"./AreaChart-Ar22s4b9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DwehoHuO.js";import{X as g}from"./XAxis-g3--B4Im.js";import{Y as h}from"./YAxis-0bXs_H74.js";import{A as a}from"./Area-D-zLD_JI.js";import{T as u}from"./Tooltip-C4jhTK9Z.js";import{R as k}from"./zIndexSlice-3kJy4_5s.js";import{L as v}from"./Legend-DEGermIn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./throttle-DFA1f5tU.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-_aeWYehA.js";import"./axisSelectors-Bm__5HSH.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./d3-scale-BoRQfYQu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./CartesianAxis-CO3H2wW4.js";import"./Layer-Bv6NwOOo.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./Label-CWWfz4NX.js";import"./ZIndexLayer-CN5osLDH.js";import"./types-Bdshst7h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DNy5Onjp.js";import"./useAnimationId-ypM0JLm_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./Curve-D2bD0YW0.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DPG-mFl6.js";import"./useElementOffset-DhZxMWZm.js";import"./uniqBy-CS9AwGpr.js";import"./iteratee-D3my6Ahn.js";import"./Cross-DaVAVaJo.js";import"./Rectangle-CZyj3XrW.js";import"./util-Dxo8gN5i.js";import"./Sector-BfVnPUMY.js";import"./Symbols-BA34R3qP.js";import"./symbol-DwSoZbA9.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
