import{r as A,R as t}from"./iframe-130qk4m_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CjFOZhuN.js";import{A as E}from"./AreaChart-CqeopOIb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Cf2IVwI2.js";import{X as g}from"./XAxis-CZ9F9O5a.js";import{Y as h}from"./YAxis-COXka6w4.js";import{A as a}from"./Area-B7PFFdB7.js";import{T as u}from"./Tooltip-CkBQm10C.js";import{R as k}from"./zIndexSlice-DRUK-Dg-.js";import{L as v}from"./Legend-CWU4XwfA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bo40Do7U.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-X5KptGXH.js";import"./throttle-kCNuVuJ-.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./CartesianAxis-C5WMjY4c.js";import"./Layer-Cyv1dWj2.js";import"./Text-BSQyPF-I.js";import"./DOMUtils-nn98Njua.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./Label-BTScYLJC.js";import"./ZIndexLayer-BCmai4o5.js";import"./types-Da5i9wCB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CnmA861Y.js";import"./useAnimationId-NcjSJtDX.js";import"./ActivePoints-B9QqV80c.js";import"./Dot-DMc1VAH7.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./getRadiusAndStrokeWidthFromDot-CJ_8wi76.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./Curve-zMO2mb05.js";import"./step-CzM1y9Rf.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";import"./useElementOffset-COi3Obl9.js";import"./uniqBy-BlyxtPBE.js";import"./iteratee-P4nCtj53.js";import"./Cross-D7IWtPYf.js";import"./Rectangle-C2EXdHxS.js";import"./util-Dxo8gN5i.js";import"./Sector-llAKaMr1.js";import"./Symbols-Bvuju7KU.js";import"./symbol-kYWcfVOX.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
