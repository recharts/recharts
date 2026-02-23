import{r as A,e as t}from"./iframe-NG7xn8us.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-D59nZdGq.js";import{A as E}from"./AreaChart-CsYJpIYe.js";import{C as b}from"./CartesianGrid-tO3meBLn.js";import{X as d}from"./XAxis-DsLntPLQ.js";import{Y as g}from"./YAxis-C_VVeJTb.js";import{A as a}from"./Area-DiKsz2FC.js";import{T as h}from"./Tooltip-Ci6ekKAU.js";import{R as u}from"./RechartsHookInspector-DUqk6vIV.js";import{R as v}from"./arrayEqualityCheck-DBfkDrHK.js";import{L as T}from"./Legend-ChxHQBA-.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./immer-B8QNuQuL.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./zIndexSlice-a1m4fSW4.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./resolveDefaultProps-wED6QReO.js";import"./CartesianAxis-F1bzBjNH.js";import"./Layer-DoTh6aNf.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./Label-mpYwp3tS.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./types-DHhKLS2Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CO2TUzXD.js";import"./step-CZRzZlp2.js";import"./ReactUtils-CiPsQej4.js";import"./ActivePoints-B4qq1bzg.js";import"./Dot-CLcJP3NH.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./useAnimationId-DOHX5rOk.js";import"./getRadiusAndStrokeWidthFromDot-CbR_-ksc.js";import"./graphicalItemSelectors-CX62Lrvl.js";import"./useElementOffset-uyWx_3MZ.js";import"./uniqBy-Czp8UKKJ.js";import"./iteratee-CmItZdDE.js";import"./Cross-CQ2UXa9g.js";import"./Rectangle-C6QRuf4O.js";import"./Sector-CCDhVr63.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";import"./Symbols-DVT-5QSh.js";import"./symbol-BtGJ97KY.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
