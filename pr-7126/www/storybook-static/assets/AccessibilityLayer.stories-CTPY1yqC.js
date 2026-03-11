import{r as A,e as t}from"./iframe-D86QwX9l.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CSnYCF8C.js";import{A as E}from"./AreaChart-CzsAT5d_.js";import{C as b}from"./CartesianGrid-CHsoccTH.js";import{X as d}from"./XAxis-BmsupeL1.js";import{Y as g}from"./YAxis-Dp7U47F6.js";import{A as a}from"./Area-BEr6rW6X.js";import{T as h}from"./Tooltip-Cm8sA5h1.js";import{R as u}from"./RechartsHookInspector-BUpx_xVe.js";import{R as v}from"./arrayEqualityCheck-CgXO-ZuA.js";import{L as T}from"./Legend-B_1fLrVV.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9Ks6YNdz.js";import"./index-Dlozd1Zf.js";import"./immer-8-oQo3xP.js";import"./hooks-CqXI__Cc.js";import"./axisSelectors-CDwpVfsZ.js";import"./d3-scale-Be_57Quy.js";import"./zIndexSlice-Cs40vUo3.js";import"./renderedTicksSlice-Cs4zqxJz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPHLQ0t0.js";import"./chartDataContext-Ct7JPcI4.js";import"./CategoricalChart-C13dIv8W.js";import"./resolveDefaultProps-Dk2nPyU3.js";import"./CartesianAxis-DxWgPgnd.js";import"./Layer-7ZFhhqEA.js";import"./Text-Du8Py4Em.js";import"./DOMUtils-BHs0vF9m.js";import"./Label-Db7DMkNg.js";import"./ZIndexLayer-UcIV_jcl.js";import"./types-BKmbYWQ3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-r3vqpxAw.js";import"./step-lGE8FQDz.js";import"./ReactUtils-BRuRWbDc.js";import"./ActivePoints-oDQ7pGW6.js";import"./Dot-Bkmwyapo.js";import"./RegisterGraphicalItemId-Cb3ALFIQ.js";import"./GraphicalItemClipPath-DOcGoQ4n.js";import"./SetGraphicalItem-rCG6xPW_.js";import"./useAnimationId-DeGRDsC6.js";import"./getRadiusAndStrokeWidthFromDot-BEX2oyUV.js";import"./graphicalItemSelectors-BjIRo1dU.js";import"./useElementOffset-D0xWsyXU.js";import"./uniqBy-CXA0falP.js";import"./iteratee-QPPlsimc.js";import"./Cross-z0fNXnwB.js";import"./Rectangle-BlbPkBXV.js";import"./Sector-qJl1uh8Z.js";import"./index-BhBhI1sn.js";import"./ChartSizeDimensions-0WIqpo-P.js";import"./OffsetShower-laCN2MaK.js";import"./PlotAreaShower-DL6rBkyw.js";import"./Symbols-BEczeOkh.js";import"./symbol-C57rPMDp.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
