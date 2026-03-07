import{r as A,e as t}from"./iframe-BUt3wnEM.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-D7vv44Nm.js";import{A as E}from"./AreaChart-CnOAZtQL.js";import{C as b}from"./CartesianGrid-BgL3q-w5.js";import{X as d}from"./XAxis-Ireg13eN.js";import{Y as g}from"./YAxis-BhjjKpsZ.js";import{A as a}from"./Area-717JLD8Y.js";import{T as h}from"./Tooltip-Bzx5G5tF.js";import{R as u}from"./RechartsHookInspector-u0LRhk5N.js";import{R as v}from"./arrayEqualityCheck-DNOyFRmd.js";import{L as T}from"./Legend-BHsCwmQO.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-z5ezD12U.js";import"./index-pWLF-s6P.js";import"./immer-Djj2d5DN.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./CartesianAxis-DLCN0lIN.js";import"./Layer-f0MP4yLB.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./Label-BNS9QM1w.js";import"./ZIndexLayer-CD2y65wD.js";import"./types-C3jmTsfH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BEPpct8h.js";import"./step-CelYc6K9.js";import"./ReactUtils-Cta0-SSd.js";import"./ActivePoints-QLUPv-Aq.js";import"./Dot-Jhi_4Eo2.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./useAnimationId-0NKy_VJI.js";import"./getRadiusAndStrokeWidthFromDot-0A88qvLk.js";import"./graphicalItemSelectors-DlzXSuer.js";import"./useElementOffset-BQUAZa3L.js";import"./uniqBy-CsYmUuw-.js";import"./iteratee-CTh-iFMu.js";import"./Cross-BqZ9ZOi6.js";import"./Rectangle-CYFau3NF.js";import"./Sector-CEgJ3DUB.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
