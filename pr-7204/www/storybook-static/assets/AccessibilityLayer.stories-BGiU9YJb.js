import{r as A,e as t}from"./iframe-DMXQsXpg.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-C_9L2kYo.js";import{A as E}from"./AreaChart-BOJGyg2W.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DbFmG4YY.js";import{X as g}from"./XAxis-BHFgUjmQ.js";import{Y as h}from"./YAxis-Do7NKWVh.js";import{A as a}from"./Area-Cy9Rs8nE.js";import{T as u}from"./Tooltip-Cf6bkA-T.js";import{R as y}from"./RechartsHookInspector-DV0idGEz.js";import{R as v}from"./arrayEqualityCheck-DpCaYOUy.js";import{L as T}from"./Legend-D_SgAZLC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./immer-B5TQSQqr.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./zIndexSlice-Dh14LjCV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./CartesianAxis-VGpTBjEt.js";import"./Layer-CsEtKw3I.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./Label-Bs69Id3P.js";import"./ZIndexLayer-DFpiev-3.js";import"./types-B0XKp7Ez.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-GkC_ASL4.js";import"./step-H2086VjI.js";import"./ReactUtils-L5lhC8e-.js";import"./ActivePoints-DFVFlhAU.js";import"./Dot-CxhIYeV3.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./useAnimationId-VTFMqu0p.js";import"./getRadiusAndStrokeWidthFromDot-ng_fUBoa.js";import"./graphicalItemSelectors-DYCPftIy.js";import"./useElementOffset-Bp1AeIZH.js";import"./uniqBy-DYyTxial.js";import"./iteratee-BAEyg1_s.js";import"./Cross-DVOx5HJq.js";import"./Rectangle-B4fRgx4g.js";import"./Sector-CxL9w9hl.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
