import{e as t,r as A}from"./iframe-qr4fLFpB.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CjquZQyc.js";import{C as l}from"./ComposedChart-L7gwkfC6.js";import{R as E}from"./arrayEqualityCheck-Bgik-Trt.js";import{A as a}from"./Area-DQjrFGaj.js";import{L as b}from"./Legend-ClAS6kDj.js";import{X as d}from"./XAxis-ceniSK6J.js";import{Y as g}from"./YAxis-DTFQgDTu.js";import{T as h}from"./Tooltip-7QOcfPJA.js";import{R as u}from"./RechartsHookInspector-Br68X8gZ.js";import{A as v}from"./AreaChart-D2VZlJM5.js";import{C as T}from"./CartesianGrid-Dyw4sjTG.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Mc2-Xf8T.js";import"./hooks-BuX4DZtw.js";import"./axisSelectors-Bo6ergNf.js";import"./zIndexSlice-DUnMgb4W.js";import"./resolveDefaultProps-C5koYet4.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-ByeB8V_W.js";import"./chartDataContext-GFM1rpYw.js";import"./CategoricalChart-KanALp4p.js";import"./Curve-VUq81ujr.js";import"./types-D-QHYsBW.js";import"./Layer-CflgJyns.js";import"./ReactUtils-Bl1pLFc3.js";import"./Label-BCYS56wU.js";import"./Text-GNEjhoqj.js";import"./DOMUtils-DRnJ2sM4.js";import"./ZIndexLayer-BTmo2O_X.js";import"./ActivePoints-DzfMrV3Y.js";import"./Dot-DatHxVLb.js";import"./RegisterGraphicalItemId-Bik8WklO.js";import"./GraphicalItemClipPath-BxRwLljn.js";import"./SetGraphicalItem--WYAW04t.js";import"./useAnimationId-C_x8lvyj.js";import"./getRadiusAndStrokeWidthFromDot-V53muJ6j.js";import"./graphicalItemSelectors-B0wx3vwb.js";import"./Symbols-B9DXvbaq.js";import"./useElementOffset--X7EE1m6.js";import"./iteratee-gpBEWFY0.js";import"./CartesianAxis-SSDJgaWv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-D8R3aWC1.js";import"./Rectangle-CTwxPXfp.js";import"./Sector-D_XFCZJC.js";import"./index-BzLAea9N.js";import"./ChartSizeDimensions-CgtvjcwQ.js";import"./OffsetShower-B6BSL9ge.js";import"./PlotAreaShower-CCEHTneG.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
