import{r as A,e as t}from"./iframe-DggZKTRy.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-8cXw1Wpu.js";import{A as E}from"./AreaChart-DPH0Ph-Z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Ca4dQTXt.js";import{X as g}from"./XAxis-Dbhs6mKo.js";import{Y as h}from"./YAxis-Dp9rJ-_E.js";import{A as a}from"./Area-Db8wOyuD.js";import{T as u}from"./Tooltip-lD9ERrLH.js";import{R as y}from"./RechartsHookInspector-DY7Qg7TT.js";import{R as v}from"./arrayEqualityCheck-DnZLtMf6.js";import{L as T}from"./Legend-zdcB5Bes.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW5O2LzM.js";import"./index-BLEPV65D.js";import"./immer-DqkR2i4r.js";import"./hooks-6phBN8Fl.js";import"./axisSelectors-eAEMtAEJ.js";import"./d3-scale-Cv2rvDbO.js";import"./zIndexSlice-D0Ka7Mpu.js";import"./renderedTicksSlice-LD1nL11t.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CdnV1DGW.js";import"./chartDataContext-D9KHIkbs.js";import"./CategoricalChart-DMPzgnGo.js";import"./resolveDefaultProps-DXkRukFF.js";import"./CartesianAxis-BXbHKKX1.js";import"./Layer-BuKRQch4.js";import"./Text-Bd8tFEPJ.js";import"./DOMUtils-DITCnwVy.js";import"./Label-Dxk2zJHG.js";import"./ZIndexLayer-D85cG2g2.js";import"./types-CBaBaM7i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DpzeZUSQ.js";import"./step-IN4trDru.js";import"./ReactUtils-D9Ez5HAk.js";import"./ActivePoints-DUFygyVE.js";import"./Dot-9vL981FZ.js";import"./RegisterGraphicalItemId-uoq7pQPM.js";import"./GraphicalItemClipPath-P03t5XLI.js";import"./SetGraphicalItem-Cc6rdJSS.js";import"./useAnimationId-C-Fijf5f.js";import"./getRadiusAndStrokeWidthFromDot-CUJVymlV.js";import"./graphicalItemSelectors-CEJc77hA.js";import"./useElementOffset-CmFu-JrW.js";import"./uniqBy-Bv-E6IG_.js";import"./iteratee-BGmnQGqa.js";import"./Cross-BxnCNss0.js";import"./Rectangle-mU1cjLaJ.js";import"./Sector-BKRhbQqJ.js";import"./index-87ty5-MJ.js";import"./ChartSizeDimensions-DI522ei_.js";import"./OffsetShower-C9Cav-aa.js";import"./PlotAreaShower-t65TdSVB.js";import"./Symbols-CzX1PTb6.js";import"./symbol-DdAFiUIg.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
