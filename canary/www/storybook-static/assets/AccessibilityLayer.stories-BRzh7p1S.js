import{r as A,e as t}from"./iframe-DUJvjQLt.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-ClTTKAwr.js";import{A as E}from"./AreaChart-BKfCMLXR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CHqFN1LR.js";import{X as g}from"./XAxis-CDduZbSd.js";import{Y as h}from"./YAxis-5YVsvPvG.js";import{A as a}from"./Area-UZ_zZysL.js";import{T as u}from"./Tooltip-Bjcvf23I.js";import{R as y}from"./RechartsHookInspector-DrzYioyl.js";import{R as v}from"./arrayEqualityCheck-D73e69Gl.js";import{L as T}from"./Legend-GyXgLfQg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./immer-5FyrIQvG.js";import"./hooks-yQB_dM7s.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./CartesianAxis-D5lD8t2m.js";import"./Layer-CllgDPqI.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./Label-DTyf3h_b.js";import"./ZIndexLayer-CKSncrZg.js";import"./types-CDGURZBi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-VbNPleyE.js";import"./step-Cx__dv2e.js";import"./ReactUtils-t-sHadM3.js";import"./ActivePoints-B-iqIfRa.js";import"./Dot-CMPDiPBa.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./useAnimationId-Dw_qoDvw.js";import"./getRadiusAndStrokeWidthFromDot-BjM5ou8k.js";import"./graphicalItemSelectors-CyfSSe6N.js";import"./useElementOffset-CfhbCAoH.js";import"./uniqBy-CChSEAsS.js";import"./iteratee-DUBFzJp0.js";import"./Cross-BicExKUE.js";import"./Rectangle-BxgoD1Qw.js";import"./Sector-CpvLellE.js";import"./index-v5p6oAve.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./OffsetShower-CNz_UBJI.js";import"./PlotAreaShower-C2224vVQ.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
