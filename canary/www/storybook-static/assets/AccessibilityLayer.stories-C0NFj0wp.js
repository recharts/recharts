import{e as t,r as A}from"./iframe-B49GSwh0.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DRfqwsU9.js";import{R as E}from"./arrayEqualityCheck-DINBFxv3.js";import{A as a}from"./Area-BF0Bae0J.js";import{L as b}from"./Legend-Dvy2hxm-.js";import{X as d}from"./XAxis-D-J-5rSI.js";import{Y as g}from"./YAxis--1-yNCnR.js";import{T as h}from"./Tooltip-Dm5out2O.js";import{R as u}from"./RechartsHookInspector-OdbWm_9I.js";import{A as v}from"./AreaChart-SBies3Zg.js";import{C as T}from"./CartesianGrid-C0HJQEi1.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-csJjzcSq.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./zIndexSlice-BRDipK6V.js";import"./resolveDefaultProps-C-joITAz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./Curve-D2h7ncG8.js";import"./types-OGa7TdGT.js";import"./Layer-D1N02uqa.js";import"./ReactUtils-yuOGi8sn.js";import"./Label-CpKUDdzk.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./ZIndexLayer-BDRmqb48.js";import"./ActivePoints-DAZjB2zT.js";import"./Dot-Dh4m0OXw.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./useAnimationId-CWbWu1ju.js";import"./getRadiusAndStrokeWidthFromDot-CDrV5QBb.js";import"./graphicalItemSelectors-B20R-uhD.js";import"./Symbols-BhCWiDph.js";import"./useElementOffset-DzO4T-Oi.js";import"./iteratee-Di8bf76v.js";import"./CartesianAxis-hdd-vl6G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-B2dRM0oN.js";import"./Rectangle-CdQI0GjN.js";import"./Sector-CcMeAO1d.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
