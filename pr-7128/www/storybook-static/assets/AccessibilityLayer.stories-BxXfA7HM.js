import{r as A,e as t}from"./iframe-CxdcV2iU.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-5IQX-f6S.js";import{A as E}from"./AreaChart-Du6Mb8gv.js";import{C as b}from"./CartesianGrid-B38EGBL2.js";import{X as d}from"./XAxis-C3dQuPvy.js";import{Y as g}from"./YAxis-Kn_05Fgj.js";import{A as a}from"./Area-yvEL_mqw.js";import{T as h}from"./Tooltip-qaTO8lo0.js";import{R as u}from"./RechartsHookInspector-Cmn_3oAZ.js";import{R as v}from"./arrayEqualityCheck-DE5QCts1.js";import{L as T}from"./Legend-B6X_Lh_A.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xlhT3EQD.js";import"./index-DQ1yjceL.js";import"./immer-DbqgSjuj.js";import"./hooks-yyrPm8Tk.js";import"./axisSelectors-DYgSuTD7.js";import"./d3-scale-C-pis2q-.js";import"./zIndexSlice-DIhuoP2j.js";import"./renderedTicksSlice-DjqA2mFu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DuL6NNnl.js";import"./chartDataContext-yNk83f89.js";import"./CategoricalChart-3r6RgUng.js";import"./resolveDefaultProps-BPgO4-u0.js";import"./CartesianAxis-BIQ5tC5_.js";import"./Layer-C-TFz9Vn.js";import"./Text-gpiQWITt.js";import"./DOMUtils-C9YYP4cZ.js";import"./Label-BgXSQpWc.js";import"./ZIndexLayer-CWN6c1mH.js";import"./types-d6h03Wgd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BibSVypT.js";import"./step-D4kO6QN2.js";import"./ReactUtils-BTiU_wBS.js";import"./ActivePoints-wIbpr4RN.js";import"./Dot-fd7eIvkn.js";import"./RegisterGraphicalItemId-Cdy6MSjO.js";import"./GraphicalItemClipPath-CIKZm01y.js";import"./SetGraphicalItem-C9igpr7g.js";import"./useAnimationId-LJTPfExM.js";import"./getRadiusAndStrokeWidthFromDot-BgclTB9C.js";import"./graphicalItemSelectors-Bs-xZQV7.js";import"./useElementOffset-BJXD0EvZ.js";import"./uniqBy-cYVYf0Ul.js";import"./iteratee-BsxxOKhX.js";import"./Cross-CGcmOFfi.js";import"./Rectangle-Dl57DUUW.js";import"./Sector-CTFx0r-m.js";import"./index-8erOpdWv.js";import"./ChartSizeDimensions-yUCjMHhs.js";import"./OffsetShower-BFUvvsPo.js";import"./PlotAreaShower-BtFJQ4W6.js";import"./Symbols-PkBH2_X7.js";import"./symbol-6aewdZ8t.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
