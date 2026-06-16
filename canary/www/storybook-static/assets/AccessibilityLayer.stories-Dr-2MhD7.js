import{r as A,R as t}from"./iframe-DzBbDK3f.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DlJ6UxJ6.js";import{A as E}from"./AreaChart-CxXhf99p.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-saqq4ujh.js";import{X as g}from"./XAxis-CQnsilRX.js";import{Y as h}from"./YAxis-DfXf3Bj6.js";import{A as a}from"./Area-Da2WXrJv.js";import{T as u}from"./Tooltip-B0uFRFn0.js";import{R as k}from"./zIndexSlice-BhAJBvui.js";import{L as v}from"./Legend-CQzj61K0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./immer-DQoMHntF.js";import"./get-B36j_mfg.js";import"./renderedTicksSlice-B9_diZXM.js";import"./axisSelectors-VQ5WENH-.js";import"./d3-scale-qbHfyqh1.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./CartesianAxis-CeDbxL1s.js";import"./Layer-BXEIHXdm.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./Label-CGWWfPsR.js";import"./ZIndexLayer-DpRTlowh.js";import"./types-NVYIi3uc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-B0itj7bz.js";import"./useAnimationId-B-2-DeJx.js";import"./ActivePoints-BMU7oyBA.js";import"./Dot-DJtVuX_I.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getRadiusAndStrokeWidthFromDot-DqCoJDrQ.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./Curve-BT7bGYlu.js";import"./step-DAtqKpLg.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CQG1X6Vk.js";import"./useElementOffset-DluJVRhv.js";import"./uniqBy-DjJrV_db.js";import"./iteratee-CGKb1kMs.js";import"./Cross-CwjOYZ8e.js";import"./Rectangle-BlGzqP8k.js";import"./Sector-Bgl1uNuC.js";import"./Symbols-CRepvFVB.js";import"./symbol-Ccc45hYA.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
