import{r as A,e as t}from"./iframe-D7aX3J5h.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CmEEfZPd.js";import{A as E}from"./AreaChart-B3_iwyGY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CkxeYeVM.js";import{X as g}from"./XAxis-EjrrpAWt.js";import{Y as h}from"./YAxis-ByFth8eE.js";import{A as a}from"./Area-CXiD4O4D.js";import{T as u}from"./Tooltip-BJRacGUe.js";import{R as y}from"./RechartsHookInspector-BTqr9y2h.js";import{R as v}from"./arrayEqualityCheck-DLuUv4yo.js";import{L as T}from"./Legend-Dfl2ak29.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_XTZaGgp.js";import"./index-BM0_uYzm.js";import"./immer-DIW08hxt.js";import"./hooks-D1J8v2Uc.js";import"./axisSelectors-I1seAFnS.js";import"./d3-scale-Mn_kc0sV.js";import"./zIndexSlice-uyR3EFO5.js";import"./renderedTicksSlice-OcRGvYoz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CKcNyqW5.js";import"./chartDataContext-davdrOpe.js";import"./CategoricalChart-XTP8dVhI.js";import"./resolveDefaultProps-DDSKwV2V.js";import"./CartesianAxis-Bj6Nx-J-.js";import"./Layer-CJYXhEUr.js";import"./Text-CWxCeK9x.js";import"./DOMUtils-DCfT5r3n.js";import"./Label-UZajBuhN.js";import"./ZIndexLayer-CkNFgsWD.js";import"./types-4ix9MfJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C0dUv9vi.js";import"./step-lYGPVUHl.js";import"./ReactUtils-CbiuaN3U.js";import"./ActivePoints-3vBr6ZBc.js";import"./Dot-BDZGqa2C.js";import"./RegisterGraphicalItemId-CN0LR0Zv.js";import"./GraphicalItemClipPath-DCnzaJaS.js";import"./SetGraphicalItem-BA9LnDto.js";import"./useAnimationId-m-yYskNq.js";import"./getRadiusAndStrokeWidthFromDot-TfJWcB_w.js";import"./graphicalItemSelectors-CrjsmUQK.js";import"./useElementOffset-7Ur_tbNZ.js";import"./uniqBy-BMTpWui9.js";import"./iteratee-Cr-LsCtJ.js";import"./Cross-x6xLFhry.js";import"./Rectangle-C5iIq7iY.js";import"./Sector-B9JMeRk8.js";import"./index-BUdbPquH.js";import"./ChartSizeDimensions-CBUuBi2H.js";import"./OffsetShower-YsWSeMxm.js";import"./PlotAreaShower-BsknmqpH.js";import"./Symbols-BNYsC8j_.js";import"./symbol-BUFbd2WM.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
