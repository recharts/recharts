import{u as A,e as t}from"./iframe-DF4bgTei.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DBY9LGHW.js";import{A as E}from"./AreaChart-BivXehma.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-BvvRwqJF.js";import{X as g}from"./XAxis-DbY3ezb1.js";import{Y as h}from"./YAxis-D734sO1U.js";import{A as a}from"./Area-DirX7BNQ.js";import{T as u}from"./Tooltip-k_OdOkyj.js";import{R as y}from"./RechartsHookInspector-D-0gsnbs.js";import{g as v}from"./arrayEqualityCheck-BMFJWZLR.js";import{L as T}from"./Legend-sMJksB2F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./immer-MYTD12gY.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./CartesianAxis-OtzrWNBq.js";import"./Layer-B2y3FrWZ.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./Label-BpQxBJRP.js";import"./ZIndexLayer-k5HrhQv7.js";import"./types-D1G2vCVO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-NJgg5Z7A.js";import"./useAnimationId-UfrY9hCr.js";import"./ActivePoints-DmxnIX1w.js";import"./Dot-BYGa6gij.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./getRadiusAndStrokeWidthFromDot-gX3jCxFw.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./Curve-BOvv8LQu.js";import"./step-BNKRdB7Z.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DoWWfLG4.js";import"./useElementOffset-BcTVsJDN.js";import"./uniqBy-BXIpk_rG.js";import"./iteratee-BpH81eH_.js";import"./Cross-B-zZt1A_.js";import"./Rectangle-BRW7e3qr.js";import"./Sector-CZ_a1zY_.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";import"./Symbols-QSpHqNgA.js";import"./symbol-CRbTC08o.js";const Ft={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
