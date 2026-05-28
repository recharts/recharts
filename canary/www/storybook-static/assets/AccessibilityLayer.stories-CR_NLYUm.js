import{u as A,e as t}from"./iframe-BpuHkxzv.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CjOzFbN4.js";import{A as E}from"./AreaChart-BYXvD8RZ.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-B8Emn2Id.js";import{X as g}from"./XAxis-DAM5aOqn.js";import{Y as h}from"./YAxis-Di_DA3y5.js";import{A as a}from"./Area-bmLkLNhd.js";import{T as u}from"./Tooltip-BX-p6Hr7.js";import{R as y}from"./RechartsHookInspector-AaKfh7uA.js";import{g as v}from"./arrayEqualityCheck-D3NbzucA.js";import{L as T}from"./Legend-CKpYLL5V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./immer-OyT0OiEL.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./zIndexSlice-CmLQD4Hj.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./CartesianAxis-C7ZsdIQA.js";import"./Layer-BqE9-RFh.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./Label-DXexZu28.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CBMG8s0Y.js";import"./step-BD2V_DAB.js";import"./path-DyVhHtw_.js";import"./ReactUtils-eZNJAb5x.js";import"./ActivePoints-BAZZqzbw.js";import"./Dot-DpxQTaWX.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./useAnimationId-ObzFSifI.js";import"./getRadiusAndStrokeWidthFromDot-CfvNKrul.js";import"./graphicalItemSelectors-DK3U3rqu.js";import"./useElementOffset-bzwQ65gJ.js";import"./uniqBy-D-ZB-65f.js";import"./iteratee-Dy8tB5bU.js";import"./Cross-CUv7ycLG.js";import"./Rectangle-B2x9Rcis.js";import"./Sector-BF3QXAQh.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";import"./Symbols-BPT-Ab5-.js";import"./symbol-fc7IaqFZ.js";const Yt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
