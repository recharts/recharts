import{r as A,R as t}from"./iframe-C0YxDW4G.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D72s1HZM.js";import{A as E}from"./AreaChart-D2XQpJL6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bb7zoqVW.js";import{X as g}from"./XAxis-Cpmqfpq_.js";import{Y as h}from"./YAxis-DweGkw3n.js";import{A as a}from"./Area-Bk34b4Zz.js";import{T as u}from"./Tooltip-zR4Uhk69.js";import{R as k}from"./zIndexSlice-DZlnymAS.js";import{L as v}from"./Legend-C9ri1cZo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./get-C2VjdU0L.js";import"./axisSelectors-nVTOJQip.js";import"./throttle-DOQHZSoJ.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./ZIndexLayer-D7SEoPy2.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Cross-DLa943FX.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./Sector-iXZx7oIx.js";import"./Symbols-CbOdKhju.js";import"./symbol-CwLocrbc.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
