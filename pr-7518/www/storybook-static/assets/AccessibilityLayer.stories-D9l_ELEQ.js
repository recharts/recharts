import{r as A,R as t}from"./iframe-EI0Ls4hC.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Be7puHYx.js";import{A as E}from"./AreaChart-B3pKeByA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BC9TO7ip.js";import{X as g}from"./XAxis-isMopIja.js";import{Y as h}from"./YAxis-BDDTXkrb.js";import{A as a}from"./Area-DhH9cx0r.js";import{T as u}from"./Tooltip-Bw5DnfvW.js";import{R as k}from"./zIndexSlice-yKXgbZM9.js";import{L as v}from"./Legend-BLL7Q6Zz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./throttle-Cdlad3bH.js";import"./get-BON1YutH.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./Label-V9mTYK6m.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./ActivePoints-gc55JVjB.js";import"./Dot-Cx4WJ9n0.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getRadiusAndStrokeWidthFromDot-DzmGdQsa.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./Curve-eRlCLt7Q.js";import"./step-B6IK1iGd.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D30ePsgQ.js";import"./useElementOffset-CcBFNVWl.js";import"./uniqBy-DSBYfBdC.js";import"./iteratee-kPsQss5F.js";import"./Cross-C0YHKLl7.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./Sector-BMV3V-O7.js";import"./Symbols-B8MT8cbd.js";import"./symbol-BEc4O7h7.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
