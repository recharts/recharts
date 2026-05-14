import{r as A,e as t}from"./iframe-BNMXyeq9.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-q2ScdQ2B.js";import{A as E}from"./AreaChart-e2McBe6j.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DnAQ3s7G.js";import{X as g}from"./XAxis-BQQS4Uyr.js";import{Y as h}from"./YAxis-BzqiKsmD.js";import{A as a}from"./Area-DmTLcGTM.js";import{T as u}from"./Tooltip-DE-Xht-O.js";import{R as y}from"./RechartsHookInspector-DoNDmCSP.js";import{R as v}from"./arrayEqualityCheck-Beh0vaeo.js";import{L as T}from"./Legend-D-c46KFD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./immer-DLDegpHz.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./CartesianAxis-CFKApKAY.js";import"./Layer-9B5krggT.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./Label-CmY8D_Vk.js";import"./ZIndexLayer-rfj-vOql.js";import"./types-C7VY0BRq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CIYQTlJO.js";import"./step-BVNiQCr9.js";import"./ReactUtils-BiDFqrgq.js";import"./ActivePoints-BNreOZF9.js";import"./Dot-C8tx3hOP.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./useAnimationId-BIOuiTZH.js";import"./getRadiusAndStrokeWidthFromDot-lM7t1HK-.js";import"./graphicalItemSelectors-CZYO0Blr.js";import"./useElementOffset-DBo3BKsc.js";import"./uniqBy-BkkLROVl.js";import"./iteratee-DR_LWlIn.js";import"./Cross-CiHOZNs8.js";import"./Rectangle-DjmVhQIC.js";import"./Sector-CWORy7MA.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./OffsetShower-CtjINnVg.js";import"./PlotAreaShower-BAtsa-GO.js";import"./Symbols-BX6LNW-t.js";import"./symbol-CO4n4duV.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
