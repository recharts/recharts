import{u as A,e as t}from"./iframe-DNsUwX5k.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-Cmjf3y7z.js";import{A as E}from"./AreaChart-Bk1OZK54.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Clyfm1N5.js";import{X as g}from"./XAxis-ONim8OVF.js";import{Y as h}from"./YAxis-C_-amdVX.js";import{A as a}from"./Area-C8FLcfnv.js";import{T as u}from"./Tooltip-CDQOdmLr.js";import{R as y}from"./RechartsHookInspector-BUhXRUq2.js";import{g as v}from"./arrayEqualityCheck-XA4mGyWk.js";import{L as T}from"./Legend-AtBpIshp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./immer-BPrEK5Rz.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./CartesianAxis-Ctr04CZm.js";import"./Layer-DWNEDYKO.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./Label-DrlcblLQ.js";import"./ZIndexLayer-COBAY4xu.js";import"./types-DAXoUOiX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BVLF1D_I.js";import"./step--sLhjxi-.js";import"./ReactUtils-CLpPl2yo.js";import"./ActivePoints-BULqV-gI.js";import"./Dot-CqXou1PJ.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./useAnimationId-gBW8_6W-.js";import"./getRadiusAndStrokeWidthFromDot-Cq_xctji.js";import"./graphicalItemSelectors-CleLlV7O.js";import"./useElementOffset-DEU7ULV0.js";import"./uniqBy-PI0PJHxt.js";import"./iteratee-BuVbuqpH.js";import"./Cross-zxjIy8Mi.js";import"./Rectangle-h1QYOt2M.js";import"./Sector-CETfwnvm.js";import"./index-DbbfyfFF.js";import"./ChartSizeDimensions-DUMsduP3.js";import"./OffsetShower-yJre-SEb.js";import"./PlotAreaShower-BRZz345m.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
