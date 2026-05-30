import{P as A,c as t}from"./iframe-D2N5XcPI.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Blurisz3.js";import{A as E}from"./AreaChart-Dpus1fCC.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DJafnYKC.js";import{X as g}from"./XAxis-CXIGR-DS.js";import{Y as h}from"./YAxis-BOjzt3yv.js";import{A as a}from"./Area-Dm9XFX86.js";import{T as u}from"./Tooltip-ia8rN-UI.js";import{g as k}from"./zIndexSlice-RoIFDUUO.js";import{L as v}from"./Legend-CXRIeaeL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./immer-DD2jh41l.js";import"./get-DEEjpUoM.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./CategoricalChart-BLp4HgeB.js";import"./CartesianAxis-By2KL9D2.js";import"./Layer-BVkY8iZh.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";import"./Label-Cnng5bNL.js";import"./ZIndexLayer-C0bDYuES.js";import"./types-O2bCi3CM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BoZ9ojjB.js";import"./useAnimationId-DqQ-6Bs7.js";import"./ActivePoints-DlrEajwU.js";import"./Dot-CsqPwlDd.js";import"./RegisterGraphicalItemId-B3-aUvfY.js";import"./GraphicalItemClipPath-C443LB5B.js";import"./SetGraphicalItem-Bb7tRa3R.js";import"./getRadiusAndStrokeWidthFromDot-DOJOfu6K.js";import"./ActiveShapeUtils-hlQp3kXL.js";import"./Curve-QwKIY61o.js";import"./step-CVnlc3Ua.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CEu_GPOk.js";import"./useElementOffset-3-y_yS5D.js";import"./uniqBy-COBWCQTb.js";import"./iteratee-DQH7eBbd.js";import"./Cross-BRROJ2Jl.js";import"./Rectangle-BhEukgum.js";import"./Sector-CCh5_Yh6.js";import"./Symbols-CN8y2VWu.js";import"./symbol-jIZX2tIm.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
