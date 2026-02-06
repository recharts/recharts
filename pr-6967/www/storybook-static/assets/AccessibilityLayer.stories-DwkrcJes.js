import{e as t,r as A}from"./iframe-C-p_RB-q.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Bt7ixjRo.js";import{R as E}from"./arrayEqualityCheck-B-MvrmN7.js";import{A as a}from"./Area-DrIA-ZhD.js";import{L as b}from"./Legend-Cw5DVAWC.js";import{X as d}from"./XAxis-C08WqI39.js";import{Y as g}from"./YAxis-D8H0bjJG.js";import{T as h}from"./Tooltip-C6vFtsN0.js";import{R as u}from"./RechartsHookInspector-A7vZopTv.js";import{A as v}from"./AreaChart-BfjsfhYc.js";import{C as T}from"./CartesianGrid-BwIpVtPi.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./Curve-p-GL7vDw.js";import"./types-GK0667Eh.js";import"./Layer-C7f6suDu.js";import"./ReactUtils-Dp-34n25.js";import"./Label-C5MK-SLm.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./ZIndexLayer-DCWgaX-H.js";import"./ActivePoints-CNFNRQXL.js";import"./Dot-D0Fu4E1o.js";import"./RegisterGraphicalItemId-x_swwYN6.js";import"./GraphicalItemClipPath-DWus76r9.js";import"./SetGraphicalItem-B3lQSLw7.js";import"./useAnimationId-DU1HvgwT.js";import"./getRadiusAndStrokeWidthFromDot-6LmPg7Vv.js";import"./graphicalItemSelectors-DyirJX-o.js";import"./Symbols-pu40Z5kC.js";import"./useElementOffset-DO9S0vi1.js";import"./iteratee-H0Q0MzYt.js";import"./CartesianAxis-B6zbzI9s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-CQH0CwT2.js";import"./Rectangle-C3AEn-NX.js";import"./Sector-Dx36qTvv.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
