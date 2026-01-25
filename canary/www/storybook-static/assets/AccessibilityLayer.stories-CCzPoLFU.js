import{e as t,r as A}from"./iframe-Dh5fYf52.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-DvBGIcj2.js";import{R as E}from"./arrayEqualityCheck-y3xWNCWZ.js";import{A as a}from"./Area-fH8aJinW.js";import{L as b}from"./Legend-BXP3HtY4.js";import{X as d}from"./XAxis-B4KbS6If.js";import{Y as g}from"./YAxis-Dit0gXUW.js";import{T as h}from"./Tooltip-BvzegrEC.js";import{R as u}from"./RechartsHookInspector-ClQgWiSn.js";import{A as v}from"./AreaChart-CykWru-5.js";import{C as T}from"./CartesianGrid-BsnolCxr.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./zIndexSlice-DOeznw_J.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./Curve-BtY66874.js";import"./types-BQGztJ7o.js";import"./Layer-CyyRPVZz.js";import"./ReactUtils-DdUIndVV.js";import"./Label-BgIRNGCU.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./ZIndexLayer-Chf-nD0r.js";import"./ActivePoints-gq73oefV.js";import"./Dot-B05UwBke.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./useAnimationId-hVsf5NM-.js";import"./getRadiusAndStrokeWidthFromDot-B6ckmWt2.js";import"./graphicalItemSelectors-B7G_vDQd.js";import"./Symbols-CE_RrRcr.js";import"./useElementOffset-ByMR83Id.js";import"./iteratee-CVT0hwhC.js";import"./CartesianAxis-DxoskIqi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-36hpk71i.js";import"./Rectangle-CNvS8JgY.js";import"./Sector-Boq0fYwI.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
