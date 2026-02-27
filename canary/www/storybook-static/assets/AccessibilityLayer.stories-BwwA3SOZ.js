import{r as A,e as t}from"./iframe-CLFlzKU9.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-B2SA0aOK.js";import{A as E}from"./AreaChart-CJA2VxNI.js";import{C as b}from"./CartesianGrid-B-mexKbJ.js";import{X as d}from"./XAxis-CTep6ajY.js";import{Y as g}from"./YAxis-1XrS4lWj.js";import{A as a}from"./Area-TQLCraql.js";import{T as h}from"./Tooltip-LTkItCz-.js";import{R as u}from"./RechartsHookInspector-EUreR-RY.js";import{R as v}from"./arrayEqualityCheck-CV0K5b6V.js";import{L as T}from"./Legend-BM38pQiP.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./immer-Dut6E3j8.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./CartesianAxis-U7WBccnc.js";import"./Layer-D55T8TbI.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./ZIndexLayer-CygGErko.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-04aIAzqq.js";import"./step-BHh7-B-Y.js";import"./ReactUtils-KqS4Be82.js";import"./ActivePoints-Bn6jZmU2.js";import"./Dot-CU0xm_xN.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./useAnimationId-B-nqwfiH.js";import"./getRadiusAndStrokeWidthFromDot-DYWP2VQN.js";import"./graphicalItemSelectors-B0cHLovH.js";import"./useElementOffset-B6rd57Yn.js";import"./uniqBy-CnDkSYCK.js";import"./iteratee-D5L_7s48.js";import"./Cross-BeHUfMMw.js";import"./Rectangle-BGUQeJvS.js";import"./Sector-BGoD3vr5.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
