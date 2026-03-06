import{r as A,e as t}from"./iframe-_5zxKgci.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-UABhjuQ3.js";import{A as E}from"./AreaChart-Bp-Mi6VC.js";import{C as b}from"./CartesianGrid-Dzhi_uZZ.js";import{X as d}from"./XAxis-BoiUuQV6.js";import{Y as g}from"./YAxis-DbWdO-Gr.js";import{A as a}from"./Area-t9_A25iN.js";import{T as h}from"./Tooltip-BF6KT7dd.js";import{R as u}from"./RechartsHookInspector-C23NmY-H.js";import{R as v}from"./arrayEqualityCheck-DLMNeVLZ.js";import{L as T}from"./Legend-BKP78yj0.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0zBti2g.js";import"./index-CQESjCWD.js";import"./immer-BaMlApsY.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./d3-scale-CRK2FJTc.js";import"./zIndexSlice-D2iO7-nB.js";import"./renderedTicksSlice-txKnD5_R.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./CartesianAxis-t0Xlfasl.js";import"./Layer-BeNKD6uh.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./Label-B3FoJLG-.js";import"./ZIndexLayer-DbY9BdOy.js";import"./types-B4BvwS0U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DLvP5FI3.js";import"./step-CFxJr1fu.js";import"./ReactUtils-u6DOyzs3.js";import"./ActivePoints-CxFHksKT.js";import"./Dot-fP6sFQSZ.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./useAnimationId-B5UzlvQm.js";import"./getRadiusAndStrokeWidthFromDot-Boo0lFRT.js";import"./graphicalItemSelectors-DHJOcBVE.js";import"./useElementOffset-B6-UpGgV.js";import"./uniqBy-Bp2v7zul.js";import"./iteratee-BHXg1SGO.js";import"./Cross-DjU0xUW-.js";import"./Rectangle-DLAaMXbr.js";import"./Sector-CZQdSV3s.js";import"./index-CSd9dO1D.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./OffsetShower-_I7-ZVXC.js";import"./PlotAreaShower-Duhke6Yi.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
