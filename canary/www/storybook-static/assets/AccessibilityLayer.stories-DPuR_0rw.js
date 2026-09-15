import{r as A,R as t}from"./iframe-WV_asirj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BvVU85k-.js";import{A as E}from"./AreaChart-CUqa9185.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CKu9mYPj.js";import{X as g}from"./XAxis-DD-Khhe3.js";import{Y as h}from"./YAxis-DRMYGn-2.js";import{A as a}from"./Area-Dlpe2eOk.js";import{T as u}from"./Tooltip-Wq0KObxC.js";import{R as k}from"./zIndexSlice-GixElPZ_.js";import{L as v}from"./Legend-DN4E-1_a.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsCMkadb.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-8uL09VjP.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./CartesianAxis-BGGDzNNT.js";import"./Layer-D1F1s_Cb.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./Label-Q870r3oo.js";import"./ZIndexLayer-rRlGaKvU.js";import"./types-Cgo928Y8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-xMF2BQb6.js";import"./useAnimationId-DlwLI8cF.js";import"./ActivePoints-BR8sRvdX.js";import"./Dot-CTbzWonC.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getRadiusAndStrokeWidthFromDot-DQScL_OV.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./Curve-CiYmGtZr.js";import"./step-F8CMqi4G.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DUG11jyw.js";import"./useElementOffset-CbQZLq3o.js";import"./uniqBy-CxPRbKAp.js";import"./iteratee-Bft3m4as.js";import"./Cross-Cg0r-_7I.js";import"./Rectangle-WQEGXCsY.js";import"./util-Dxo8gN5i.js";import"./Sector-BoAqnBGz.js";import"./Symbols-CN1XSzSD.js";import"./symbol-DGI5pP0R.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
