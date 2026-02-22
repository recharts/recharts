import{e as t,r as A}from"./iframe-daRyhr9r.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-7exnQAUu.js";import{R as E}from"./arrayEqualityCheck-2Pg-cl6R.js";import{A as a}from"./Area-TL_sw5qX.js";import{L as b}from"./Legend-B6AVa-gX.js";import{X as d}from"./XAxis-CvxqYJF6.js";import{Y as g}from"./YAxis-CfRyhpY9.js";import{T as h}from"./Tooltip-DYU4iM_x.js";import{R as u}from"./RechartsHookInspector-Dokqg7We.js";import{A as v}from"./AreaChart-nYB1fZgh.js";import{C as T}from"./CartesianGrid-CEAMYBQl.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9EF5VFS.js";import"./index-CdQ0cAhw.js";import"./immer-C5a-5af_.js";import"./hooks-DA2pBF9B.js";import"./axisSelectors-Bbgcz-jZ.js";import"./d3-scale-CDmp_quo.js";import"./zIndexSlice-B_dP-4_H.js";import"./renderedTicksSlice-BTk_Zw15.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkSXqfIZ.js";import"./chartDataContext-BrPbwshQ.js";import"./CategoricalChart-IEhmtzxN.js";import"./resolveDefaultProps-BvBz7hsS.js";import"./Curve-CNVfap9K.js";import"./types-B1BFfyfQ.js";import"./step-Bh8CmZPH.js";import"./Layer-Bnvu8mRz.js";import"./ReactUtils-Dnts_VJo.js";import"./Label-C2V68gYo.js";import"./Text-D-j5LY5X.js";import"./DOMUtils-CuoS797S.js";import"./ZIndexLayer-B8DbAkQv.js";import"./ActivePoints-B0i6PuG-.js";import"./Dot-Czq-4Zob.js";import"./RegisterGraphicalItemId-idmB961p.js";import"./GraphicalItemClipPath-CSX8rQ5J.js";import"./SetGraphicalItem-BO-TqYJN.js";import"./useAnimationId-DzCJLB3u.js";import"./getRadiusAndStrokeWidthFromDot-C8K1qojG.js";import"./graphicalItemSelectors-XmO9ZXaW.js";import"./Symbols-CmmXLG0z.js";import"./symbol-Bh5t8BoD.js";import"./useElementOffset-D66ej-tJ.js";import"./uniqBy-BiF-HFyp.js";import"./iteratee-DVpKSMyj.js";import"./CartesianAxis-BAyDOgMb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CaVgcF-G.js";import"./Rectangle-D0FBXqMT.js";import"./Sector-g7YAEghM.js";import"./index-AR7D8lqg.js";import"./ChartSizeDimensions-B_gACk3Q.js";import"./OffsetShower-Cbu4mMas.js";import"./PlotAreaShower-CyrKPvGx.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
