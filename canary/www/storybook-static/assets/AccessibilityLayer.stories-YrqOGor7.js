import{r as A,R as t}from"./iframe-DFlWwuKT.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DHFXtPRO.js";import{A as E}from"./AreaChart-CWE3nR9L.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D6qo-7gd.js";import{X as g}from"./XAxis-9-A5V75m.js";import{Y as h}from"./YAxis-BS_00hSs.js";import{A as a}from"./Area-BejP0UUi.js";import{T as u}from"./Tooltip-mMsmfM8-.js";import{R as k}from"./zIndexSlice-DTl3Es75.js";import{L as v}from"./Legend-e4PwlEr8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGvYSOfx.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjksfEx4.js";import"./throttle-D8jnmLcF.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./CartesianAxis-C9eM4ktZ.js";import"./Layer-URuQnAjL.js";import"./Text-7kqB13RI.js";import"./DOMUtils-CYU7OgfG.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./Label-Cg_hrWdd.js";import"./ZIndexLayer-DHVkI8jl.js";import"./types-BOBvmLK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B-WGLUSk.js";import"./useAnimationId-mTQIyJO-.js";import"./ActivePoints-BjXgqI1Z.js";import"./Dot-iIg854rO.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./getRadiusAndStrokeWidthFromDot-54dC4Ufn.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./Curve-BoAyROId.js";import"./step-DPc2nVCG.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";import"./useElementOffset-CApEq3WG.js";import"./uniqBy-CT4IUB8Q.js";import"./iteratee-DCytidek.js";import"./Cross-C-bHzLRH.js";import"./Rectangle-BQPyv6_x.js";import"./util-Dxo8gN5i.js";import"./Sector-CK7yeWYX.js";import"./Symbols-CApAx5hI.js";import"./symbol-D6xFDwvn.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
