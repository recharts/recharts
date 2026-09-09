import{r as A,R as t}from"./iframe-CEaKFLOD.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BWdu-w5M.js";import{A as E}from"./AreaChart-V0twiOYX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-AgVp7jlP.js";import{X as g}from"./XAxis-xN7pSHzN.js";import{Y as h}from"./YAxis-Cm2tjuJm.js";import{A as a}from"./Area-BWrUrdIb.js";import{T as u}from"./Tooltip-CfGSyM9H.js";import{R as k}from"./zIndexSlice-BW_-kNl2.js";import{L as v}from"./Legend-DnP4zCwl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWplp24t.js";import"./resolveDefaultProps-y1moel4K.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CCBeMCMj.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./CartesianAxis-DZYvFW8B.js";import"./Layer-CAr7LORZ.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./Label-BzoSUysL.js";import"./ZIndexLayer--MuvhbKE.js";import"./types-Da2TODPT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BousSNqt.js";import"./useAnimationId-D_rlhFDI.js";import"./ActivePoints-DL0uaK1o.js";import"./Dot-RK_ht-a6.js";import"./RegisterGraphicalItemId-BZrlXr-M.js";import"./GraphicalItemClipPath-CA8fPvSm.js";import"./SetGraphicalItem-BktkMU9R.js";import"./getRadiusAndStrokeWidthFromDot-rCzGUsqU.js";import"./ActiveShapeUtils-5t5AMzdk.js";import"./Curve-DFnxsFyy.js";import"./step-SqhK0zoK.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BnhZXg65.js";import"./useElementOffset-c3kW9Mat.js";import"./uniqBy-hLK4QAWK.js";import"./iteratee-COhtBRtJ.js";import"./Cross-rUERuzKr.js";import"./Rectangle-BqqSxccJ.js";import"./util-Dxo8gN5i.js";import"./Sector-ZOUMCj1V.js";import"./Symbols-5r6rCeAJ.js";import"./symbol-6uRkNH0Z.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
