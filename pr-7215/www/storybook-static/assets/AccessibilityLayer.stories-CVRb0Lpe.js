import{u as A,e as t}from"./iframe-BziMfoUa.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DS1ZldOY.js";import{A as E}from"./AreaChart-Cp7AWlfF.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Bxirurkp.js";import{X as g}from"./XAxis-zue1oO_9.js";import{Y as h}from"./YAxis-Cam7yyHt.js";import{A as a}from"./Area-bQtBXA1m.js";import{T as u}from"./Tooltip-CeGSFROX.js";import{R as y}from"./RechartsHookInspector-C7iBq9Tv.js";import{g as v}from"./arrayEqualityCheck-jGW3YXEm.js";import{L as T}from"./Legend-BwCO8fx1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Duw6h7Bm.js";import"./index-BIuRyLTB.js";import"./immer-Bs1CBStC.js";import"./hooks-_tZAqQmm.js";import"./axisSelectors-CAcjMuVN.js";import"./d3-scale-GlbhO23R.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-lEo1dtRN.js";import"./renderedTicksSlice-v3j9k7Mr.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cq-jUzWL.js";import"./chartDataContext-Cp7Sw1KM.js";import"./CategoricalChart-BjhCCKH7.js";import"./resolveDefaultProps-BqM-Yvij.js";import"./CartesianAxis-CBXn4WUR.js";import"./Layer-CoMuIaZe.js";import"./Text-fxmSEe5L.js";import"./DOMUtils-c_Zm-hwi.js";import"./Label-Qwg870Bc.js";import"./ZIndexLayer-CIYsspBg.js";import"./types-CX5BQ__A.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-BBuXONSK.js";import"./useAnimationId-kTU4vPRt.js";import"./ActivePoints-C6-CaXlM.js";import"./Dot-3fkMyAwB.js";import"./RegisterGraphicalItemId-BtgM2BJV.js";import"./GraphicalItemClipPath-CUoKAv3d.js";import"./SetGraphicalItem-DsxyvyCs.js";import"./getRadiusAndStrokeWidthFromDot-Co7Fg86a.js";import"./ActiveShapeUtils-BFwVaQU9.js";import"./isPlainObject-DmPDszQ3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cqckp2nr.js";import"./Trapezoid-m2Wlm-zm.js";import"./Sector-Gm8VToLD.js";import"./Symbols-DXSNT6Hm.js";import"./symbol-DOCk2oSo.js";import"./step-CeZV8hny.js";import"./Curve-CBntFit6.js";import"./graphicalItemSelectors-B06k7LJ4.js";import"./useElementOffset-YOdnAUzF.js";import"./uniqBy-BJTGISYF.js";import"./iteratee-TU5TWMO2.js";import"./Cross-BWYk3muo.js";import"./index-Cu69lm6g.js";import"./ChartSizeDimensions-DfprWSX6.js";import"./OffsetShower-Cr3DxjzZ.js";import"./PlotAreaShower-OmwxkN4u.js";const Xt={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ht=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ht as __namedExportsOrder,Xt as default};
