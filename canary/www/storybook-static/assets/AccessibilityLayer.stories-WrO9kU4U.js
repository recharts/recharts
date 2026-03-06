import{r as A,e as t}from"./iframe-6EykQKfG.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-D9Ylu3vF.js";import{A as E}from"./AreaChart-CqA0Pble.js";import{C as b}from"./CartesianGrid-DVK0Bf9z.js";import{X as d}from"./XAxis-Bq0FFrPR.js";import{Y as g}from"./YAxis-EuersLOS.js";import{A as a}from"./Area-DJurA9-9.js";import{T as h}from"./Tooltip-Dv-xsBcn.js";import{R as u}from"./RechartsHookInspector-De58Dhu7.js";import{R as v}from"./arrayEqualityCheck-CqC3jwM6.js";import{L as T}from"./Legend-DFC8rw7q.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./immer-DZYxGOvJ.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BHG7-tm7.js";import"./step-DU4Jxd72.js";import"./ReactUtils-CfLs9KKR.js";import"./ActivePoints-BuDRjoco.js";import"./Dot-CjdQs5Xf.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./useAnimationId-SK1GTTks.js";import"./getRadiusAndStrokeWidthFromDot-BPPKe8oa.js";import"./graphicalItemSelectors-DOMUNDx9.js";import"./useElementOffset-DL95p2it.js";import"./uniqBy-D9IJRH_0.js";import"./iteratee-BWAJxHBx.js";import"./Cross-UGMpL9w2.js";import"./Rectangle--9HeXx83.js";import"./Sector-NFqcE7L7.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";import"./Symbols-DRjofMjK.js";import"./symbol-VuSYaHfl.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
