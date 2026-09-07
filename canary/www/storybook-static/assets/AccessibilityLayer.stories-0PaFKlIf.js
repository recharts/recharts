import{r as A,R as t}from"./iframe-ZwmkHOWK.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CFgERvuY.js";import{A as E}from"./AreaChart-B2YgU91O.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-18c6R9ys.js";import{X as g}from"./XAxis-C1z9LD8A.js";import{Y as h}from"./YAxis-PaDHJ4i8.js";import{A as a}from"./Area-BpUVygrB.js";import{T as u}from"./Tooltip-Cjuu3IKj.js";import{R as k}from"./zIndexSlice-B8sjij8M.js";import{L as v}from"./Legend-BzmhKkB_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLkBAicL.js";import"./resolveDefaultProps-CbN-GnY2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DaNNrydT.js";import"./throttle-C39dOrQS.js";import"./index-B4E9I_5C.js";import"./index-BAGpmxlA.js";import"./isWellBehavedNumber-DzkihPO6.js";import"./d3-scale-DKWhOpVH.js";import"./index-BAV2Qa9k.js";import"./index-Cf44-e7y.js";import"./renderedTicksSlice-CKHEQg46.js";import"./index-DyLWGJaj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4XfQoQU.js";import"./chartDataContext-Dk9qGRs-.js";import"./CategoricalChart-CMRgznGD.js";import"./CartesianAxis-Djmj8VDf.js";import"./Layer-i_0u2Crx.js";import"./Text-BI3-3dXY.js";import"./DOMUtils-CP0ZeXZR.js";import"./useId-CFRlQjhC.js";import"./useBackwardsCompatibleTheme-CHv0D4hM.js";import"./Label-BVR5F0n2.js";import"./ZIndexLayer-Bm6SGbYz.js";import"./types-v1ATzDHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CFufr1UH.js";import"./useAnimationId-BCL-lQv_.js";import"./ActivePoints-CJLUsm-B.js";import"./Dot-DBtVqS4S.js";import"./RegisterGraphicalItemId-DwO6JeUN.js";import"./GraphicalItemClipPath-DA7NUISl.js";import"./SetGraphicalItem-D-pUVL2E.js";import"./getRadiusAndStrokeWidthFromDot-ScUuE-rr.js";import"./ActiveShapeUtils-CuQ7F7ce.js";import"./Curve-BC_5nDae.js";import"./step-DANxpaDn.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CYn-McYw.js";import"./useElementOffset-CEleLGXj.js";import"./uniqBy-O2aI4kAk.js";import"./iteratee-AI8PmdR5.js";import"./Cross-DUDPSYz2.js";import"./Rectangle-BqK5FaGX.js";import"./util-Dxo8gN5i.js";import"./Sector-BhWTn6vH.js";import"./Symbols-CZXHE-Sd.js";import"./symbol-BcLPDN7C.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
