import{r as A,R as t}from"./iframe-CS_l3HPs.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DD8VJnt8.js";import{A as E}from"./AreaChart-DKLMyvkL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CrAmDQR5.js";import{X as g}from"./XAxis-VVNKgX_Z.js";import{Y as h}from"./YAxis-CfLQ1gwS.js";import{A as a}from"./Area-C_lnqwlo.js";import{T as u}from"./Tooltip-ROqQkToA.js";import{R as k}from"./zIndexSlice-DOZPSD3i.js";import{L as v}from"./Legend-qyYT98W7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLBKD2Mb.js";import"./resolveDefaultProps-CgtyltQG.js";import"./get-C2VjdU0L.js";import"./axisSelectors-wY7xrwqz.js";import"./throttle-BXJlRBBH.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./index-7kMAhgqw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./CartesianAxis-DcHbl7Yp.js";import"./Layer-ClmpeZAQ.js";import"./Text-Cft38Vb6.js";import"./DOMUtils-Ufje3btQ.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./Label-CLB3gtSD.js";import"./ZIndexLayer-DIN_R5pI.js";import"./types-Bij1NlAO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CucVzI_L.js";import"./useAnimationId-BcraNq1p.js";import"./ActivePoints-BQR6yZd5.js";import"./Dot-uq10K0-V.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./getRadiusAndStrokeWidthFromDot-CGFjgpgY.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./Curve-Bkeet_Vy.js";import"./step-D4hiIBbL.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";import"./useElementOffset-DFm-Hwrm.js";import"./uniqBy-DAztU44K.js";import"./iteratee-CgfSsQVK.js";import"./Cross-BP5n_dYi.js";import"./Rectangle-DPMGAmez.js";import"./util-Dxo8gN5i.js";import"./Sector-CvZ-EAmB.js";import"./Symbols-BmB__XbX.js";import"./symbol-K873wObj.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
