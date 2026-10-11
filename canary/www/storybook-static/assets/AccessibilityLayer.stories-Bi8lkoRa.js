import{r as A,R as t}from"./iframe-Cw8P3hI7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D83sxKrW.js";import{A as E}from"./AreaChart-CPBmtS6q.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D4Wb-mhM.js";import{X as g}from"./XAxis-C7unxNtQ.js";import{Y as h}from"./YAxis-Bx4FAtcu.js";import{A as a}from"./Area-DJlqIxWW.js";import{T as u}from"./Tooltip-CPfSIqpr.js";import{R as k}from"./zIndexSlice-B6SrSko1.js";import{L as v}from"./Legend-CbroWVXU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvLLBked.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BdH8dG4d.js";import"./throttle-DncpYTAI.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./isWellBehavedNumber--H7puUW6.js";import"./d3-scale-Col4_9gh.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-C3ZLhd8h.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./CartesianAxis-D3FnIIlC.js";import"./Layer-B6WOVeAl.js";import"./Text-lKkTsdpR.js";import"./pageBackground-DDrjrzvM.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./Label-D8Ksb0Iz.js";import"./ZIndexLayer-BaFHUXpS.js";import"./types-Cja1RPDM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BMrFolB2.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./ActivePoints-D1HAeebE.js";import"./Dot-BPPIvgtF.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./getRadiusAndStrokeWidthFromDot-0OZopViH.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./Curve-H-3Cg0VG.js";import"./step-Owe5mevZ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Dh15qlQo.js";import"./useElementOffset-DWhd5hY4.js";import"./uniqBy-DaOwrvky.js";import"./iteratee-Co4kz4Ct.js";import"./Cross-CtfH2Hv1.js";import"./Rectangle-CJCELj9r.js";import"./util-Dxo8gN5i.js";import"./Sector-ChKHNoHV.js";import"./Symbols-CHIg8QPs.js";import"./symbol-CGYd6bv1.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
