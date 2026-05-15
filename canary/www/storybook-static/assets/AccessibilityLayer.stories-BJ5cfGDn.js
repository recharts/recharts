import{r as A,e as t}from"./iframe-DLKusaH2.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-D7-6Q1jZ.js";import{A as E}from"./AreaChart-7nf-pBRN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dh5MSo5g.js";import{X as g}from"./XAxis-BUV3YVxT.js";import{Y as h}from"./YAxis-BL7gWkiR.js";import{A as a}from"./Area-Bc--Fg5g.js";import{T as u}from"./Tooltip-BTu9VEAI.js";import{R as y}from"./RechartsHookInspector-twmg_15g.js";import{R as v}from"./arrayEqualityCheck-OSXbFffx.js";import{L as T}from"./Legend-CNp0WHyk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./index-DY64JRGf.js";import"./immer-DopQgQur.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./d3-scale-D-d_ip1o.js";import"./zIndexSlice-DwCBvGVu.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BJXvgRi8.js";import"./chartDataContext-DetDLZ8r.js";import"./CategoricalChart-CYNzwdSP.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./CartesianAxis-CLffz-s6.js";import"./Layer-CRYoZDBs.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./Label-BolsaftX.js";import"./ZIndexLayer-BNchc-lc.js";import"./types-9gVu3p3S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DxlUhp1s.js";import"./step-jIStQ4yh.js";import"./ReactUtils-Bgb6ualA.js";import"./ActivePoints-BSIYqxRm.js";import"./Dot-BvZiX7rE.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./GraphicalItemClipPath-Ac_55wTe.js";import"./SetGraphicalItem-f0Wubofs.js";import"./useAnimationId-BcRo8icb.js";import"./getRadiusAndStrokeWidthFromDot-uyaCEA_k.js";import"./graphicalItemSelectors-BzHGhbvs.js";import"./useElementOffset-BDsoNk_l.js";import"./uniqBy-DkXBDuym.js";import"./iteratee-n0s9Zbyc.js";import"./Cross-BMD5jBrY.js";import"./Rectangle-ZVl3FJ9j.js";import"./Sector-BwEeuI-t.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
