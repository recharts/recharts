import{r as A,e as t}from"./iframe-zNZ6gtuS.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-Dsj55aBj.js";import{A as E}from"./AreaChart-BwIWop_U.js";import{C as b}from"./CartesianGrid-DzNs49mq.js";import{X as d}from"./XAxis-DgIpX0Qf.js";import{Y as g}from"./YAxis-QWxltK0B.js";import{A as a}from"./Area-CUetqbGN.js";import{T as h}from"./Tooltip-BTtny24W.js";import{R as u}from"./RechartsHookInspector-C4FQcsDn.js";import{R as v}from"./arrayEqualityCheck-Dt2SCAs7.js";import{L as T}from"./Legend-CMcjGl_9.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./immer-M5VU9jjz.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./CartesianAxis-CVokkLFp.js";import"./Layer-BQ0S_2Uh.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./Label-BCeegupp.js";import"./ZIndexLayer-BqvP1SAm.js";import"./types-ynSAt5pr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-o1yhe_oH.js";import"./step-CCZqHQ-h.js";import"./ReactUtils-CDHy-yxP.js";import"./ActivePoints-CYKr6AgU.js";import"./Dot-DYFOoPhj.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./useAnimationId-C73SjrYi.js";import"./getRadiusAndStrokeWidthFromDot-OAyCmPPZ.js";import"./graphicalItemSelectors-Cw8dX2Q4.js";import"./useElementOffset-C-dERYCT.js";import"./uniqBy-Cyl5F9xm.js";import"./iteratee-L6muNfU6.js";import"./Cross-D3zqjUxu.js";import"./Rectangle-BOPBXjWX.js";import"./Sector-BY1ck4On.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
