import{r as A,R as t}from"./iframe-mnAzB4o-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CBdoahrj.js";import{A as E}from"./AreaChart-s9k81T7d.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BOdqfpIi.js";import{X as g}from"./XAxis-BJJ3SHcS.js";import{Y as h}from"./YAxis-CaUMjbmS.js";import{A as a}from"./Area-DIvXU_KZ.js";import{T as u}from"./Tooltip-CkPVTX4w.js";import{R as k}from"./zIndexSlice-D6JZj8nu.js";import{L as v}from"./Legend-CmWQNkqO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./throttle-DkA8wIil.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C1jFNzqn.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./isWellBehavedNumber-Csz_97LF.js";import"./d3-scale-CRNCXhx2.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3iAW6ju.js";import"./chartDataContext-d1JBVIv3.js";import"./CategoricalChart-Dvtv2sve.js";import"./CartesianAxis-BJUtWOS_.js";import"./Layer-Cr54uUjf.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./Label-CHzafVhK.js";import"./ZIndexLayer-B_AeVWGh.js";import"./types-CREZv15c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DKc9cClm.js";import"./useAnimationId-C2CD38MP.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./Curve-o9IX9QPv.js";import"./step-BYsm7KBD.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CAzK6o2T.js";import"./useElementOffset-Bv8ynH_4.js";import"./uniqBy-xa31W4My.js";import"./iteratee-BHZlqNLc.js";import"./Cross-ixwHigiP.js";import"./Rectangle-D-paqn8Q.js";import"./util-Dxo8gN5i.js";import"./Sector-B_puyY74.js";import"./Symbols-Kcb7M6d1.js";import"./symbol-CzjYWchS.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
