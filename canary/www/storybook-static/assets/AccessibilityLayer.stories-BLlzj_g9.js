import{r as A,R as t}from"./iframe-BMoFzqLG.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart--18maMFA.js";import{A as E}from"./AreaChart-CZ6EC0z9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BD5heoZs.js";import{X as g}from"./XAxis-CPrZIqhG.js";import{Y as h}from"./YAxis-DTyCZ8Eb.js";import{A as a}from"./Area-D1ZnDDJe.js";import{T as u}from"./Tooltip-BiauBRdf.js";import{R as k}from"./zIndexSlice-D2eW6ynO.js";import{L as v}from"./Legend-SafvJPhT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMT8ka8g.js";import"./index-DW75A43Y.js";import"./index-CCv9Fz61.js";import"./index-DNJh02LB.js";import"./index-CSdHnYZf.js";import"./throttle-CMa4JKLf.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DYuvxT8H.js";import"./resolveDefaultProps-NXPPdTlK.js";import"./isWellBehavedNumber-Cv3QLhUl.js";import"./d3-scale-CdpdmGXg.js";import"./renderedTicksSlice-DvPuc11_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7RJi03t.js";import"./chartDataContext-CDnovleA.js";import"./CategoricalChart-e4TDW-CP.js";import"./CartesianAxis-DOx4dBf7.js";import"./Layer-BF07rJeJ.js";import"./Text-CWW6I1yN.js";import"./DOMUtils-zP2FF411.js";import"./useId-Cuy8o_CS.js";import"./useBackwardsCompatibleTheme-CT0hL_b9.js";import"./Label-C2sliePj.js";import"./ZIndexLayer-Bb4jsnOQ.js";import"./types-DnNtWK32.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DtpOcSHY.js";import"./useAnimationId-DECqttvr.js";import"./ActivePoints-CGL78uWV.js";import"./Dot-BKpqXb-J.js";import"./RegisterGraphicalItemId-BWT7SWLX.js";import"./GraphicalItemClipPath-4HDTpBwl.js";import"./SetGraphicalItem-4-n_cNOG.js";import"./getRadiusAndStrokeWidthFromDot-Dr3SeLyV.js";import"./ActiveShapeUtils-Deesho2z.js";import"./Curve-Bj9SvhiQ.js";import"./step-CmTsx3cD.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BoSXPO7u.js";import"./useElementOffset-DpDs9Wpk.js";import"./uniqBy-DxO4yvi9.js";import"./iteratee-D8knRFDr.js";import"./Cross-cAspSuMz.js";import"./Rectangle-B-0Efefj.js";import"./util-Dxo8gN5i.js";import"./Sector-BLU4k1cE.js";import"./Symbols-Bp-WiaMS.js";import"./symbol-DJVN4EQ-.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
