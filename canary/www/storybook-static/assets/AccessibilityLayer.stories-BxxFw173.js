import{r as A,R as t}from"./iframe-D3O6io8m.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cn_VV92w.js";import{A as E}from"./AreaChart-DvQDUSLo.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bh9mZ_wb.js";import{X as g}from"./XAxis-DUDfURVS.js";import{Y as h}from"./YAxis-BzpJJ7qL.js";import{A as a}from"./Area-9-kMq7Bl.js";import{T as u}from"./Tooltip-CLn5uUV0.js";import{R as k}from"./zIndexSlice-DQB1nost.js";import{L as v}from"./Legend-DR8u6wSa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlAcodG6.js";import"./resolveDefaultProps-kP9mtom1.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DYaW_3kH.js";import"./throttle-CaEEZkOZ.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./CartesianAxis-B7axhf8y.js";import"./Layer-nZxEgPG5.js";import"./Text-De-f5jqv.js";import"./DOMUtils-Cvz_isR7.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./Label-CWCww6MW.js";import"./ZIndexLayer-CNTWWRns.js";import"./types-B4ar_Rgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B5d6Ob4T.js";import"./useAnimationId-Cz9FmiXJ.js";import"./ActivePoints-gquoLNda.js";import"./Dot-bFsMR4tf.js";import"./RegisterGraphicalItemId-JcTZBT0j.js";import"./GraphicalItemClipPath-B0houyvR.js";import"./SetGraphicalItem-DB0WYfC5.js";import"./getRadiusAndStrokeWidthFromDot-BFirVaXF.js";import"./ActiveShapeUtils-CaF-7U2y.js";import"./Curve-BqlJ0F26.js";import"./step-BpERcgqV.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B6FCrkUh.js";import"./useElementOffset-fyOV3B1W.js";import"./uniqBy-D-toxyLD.js";import"./iteratee-BOVM6bQ2.js";import"./Cross-BHOvcmT7.js";import"./Rectangle-8bfrkS9P.js";import"./util-Dxo8gN5i.js";import"./Sector-CNKizuGP.js";import"./Symbols-CgmQggkW.js";import"./symbol-BkgXbFHN.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
