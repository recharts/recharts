import{r as A,R as t}from"./iframe-C8yGgO2d.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D2wyoHi-.js";import{A as E}from"./AreaChart-tG9l2IO1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CmN8b0St.js";import{X as g}from"./XAxis-DkqGLCT1.js";import{Y as h}from"./YAxis-CkFD-fPK.js";import{A as a}from"./Area-B1HCIO9Y.js";import{T as u}from"./Tooltip-Bx4PzmEf.js";import{R as k}from"./zIndexSlice-CuRdZ-8K.js";import{L as v}from"./Legend-H21iyFgB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxEsBzKb.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-w7bw2H0b.js";import"./throttle-Dr0khojT.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./CartesianAxis-BHyGAXdi.js";import"./Layer-tDZThP1f.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./Label-BtCjiiK8.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./types-DDTipNBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DmW46OuC.js";import"./useAnimationId-Bie7xBo-.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./Curve-B2EBLnIf.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B0pPIliE.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";import"./Cross-COEIgewd.js";import"./Rectangle-DMqwvRGF.js";import"./util-Dxo8gN5i.js";import"./Sector-mrYfdzE_.js";import"./Symbols-D1NUi6Uu.js";import"./symbol-C1h6pqC-.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
