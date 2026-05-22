import{u as A,e as t}from"./iframe-Cag7wSRv.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D8vYd6dl.js";import{A as E}from"./AreaChart-Omx2jmwN.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-wXhfwOo8.js";import{X as g}from"./XAxis-DXJVCfkD.js";import{Y as h}from"./YAxis-DZYkeOGX.js";import{A as a}from"./Area-BRCV3hrL.js";import{T as u}from"./Tooltip-CaZgP3kp.js";import{R as y}from"./RechartsHookInspector-BY5Jlwrh.js";import{g as v}from"./arrayEqualityCheck-DIS5wzHQ.js";import{L as T}from"./Legend-B_IahfCm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./immer-284wn8VQ.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./CartesianAxis-BO6A-dYS.js";import"./Layer-BKYLP7Ft.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./Label-C9zkgYEJ.js";import"./ZIndexLayer-DmSAjehE.js";import"./types-VwRdPpC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-CluPQFSi.js";import"./useAnimationId-DTrmZnPm.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./Curve-DBPrYDrF.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CD1Yjtik.js";import"./useElementOffset-e6GLcNBL.js";import"./uniqBy-Dt7fnwgv.js";import"./iteratee-Jm-FQi8d.js";import"./Cross-0JOGn5HY.js";import"./Rectangle-C4gj6xhs.js";import"./Sector-PQ9ghs0A.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";import"./Symbols-Dzilqv6U.js";import"./symbol-DLUhrThe.js";const Ft={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
