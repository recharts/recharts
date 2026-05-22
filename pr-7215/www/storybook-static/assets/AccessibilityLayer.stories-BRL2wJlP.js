import{u as A,e as t}from"./iframe-DgFUiQiK.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cv94qjDo.js";import{A as E}from"./AreaChart-Be8NvKuo.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DhNOoRFG.js";import{X as g}from"./XAxis-CWlzFfKK.js";import{Y as h}from"./YAxis-B1_SZb1V.js";import{A as a}from"./Area-DjjZNZu-.js";import{T as u}from"./Tooltip-8_1fOMr1.js";import{R as y}from"./RechartsHookInspector-BQ9yzd9s.js";import{g as v}from"./arrayEqualityCheck-LPKQSaXm.js";import{L as T}from"./Legend-v5MiJ3eY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./immer-Ca0Cy3ce.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./CartesianAxis-n56eB7xd.js";import"./Layer-CKwu47GO.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./Label-BFkeduE8.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./types-D_oNXqce.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-BOr9vF6Q.js";import"./useAnimationId-CCpHVl00.js";import"./ActivePoints-BorMl77e.js";import"./Dot-Dyh69QuB.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getRadiusAndStrokeWidthFromDot-D3y5duhQ.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./Curve-Ba62GFgD.js";import"./step-CFkmYg6i.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-KNBgCa0N.js";import"./useElementOffset-CgnfzBM5.js";import"./uniqBy-BY9_th2N.js";import"./iteratee-Cjhnbwdc.js";import"./Cross-ZFk5d86A.js";import"./Rectangle-A65MZM5i.js";import"./Sector-C1uP_awt.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";import"./Symbols-DwMqGDyq.js";import"./symbol-DbKH8VC2.js";const Ft={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
