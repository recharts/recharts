import{r as A,R as t}from"./iframe-D4-JHLuy.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-mEpO2gCy.js";import{A as E}from"./AreaChart-g0jM3bQE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-QY_EBeYm.js";import{X as g}from"./XAxis-N0htLXAu.js";import{Y as h}from"./YAxis-CC97e3o5.js";import{A as a}from"./Area-X7iF9TJ7.js";import{T as u}from"./Tooltip-meMb5WjK.js";import{R as k}from"./zIndexSlice-Bl2qFY1A.js";import{L as v}from"./Legend-Bw66eS2q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./immer-M-cM6uYj.js";import"./get-Bi1X6SaN.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./Label-Dbayb2l5.js";import"./ZIndexLayer-BIs2Zanq.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BaefG7CY.js";import"./useAnimationId-v_oz9FgZ.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./Curve-CDHj8CQ7.js";import"./step-DP0d975A.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-_Htsgb84.js";import"./useElementOffset-C5ufnYD8.js";import"./uniqBy-P4FasXrF.js";import"./iteratee-DvCHZIMY.js";import"./Cross-D94un-X_.js";import"./Rectangle-BxeEDcjB.js";import"./util-Dxo8gN5i.js";import"./Sector-C6wPNvhw.js";import"./Symbols-C6h_j7RC.js";import"./symbol-CTVt6zDq.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
