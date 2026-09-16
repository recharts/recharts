import{r as A,R as t}from"./iframe-yjkt2IH9.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BoyqtaUh.js";import{A as E}from"./AreaChart-DAEkTbR0.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CHFlKc_A.js";import{X as g}from"./XAxis-BmTXySuf.js";import{Y as h}from"./YAxis-DCAA5tHI.js";import{A as a}from"./Area-BAKv-sWn.js";import{T as u}from"./Tooltip-CJ03Z8zE.js";import{R as k}from"./zIndexSlice-DBLHpMzC.js";import{L as v}from"./Legend-Qn53YknQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXGMrlZO.js";import"./resolveDefaultProps-C1hVLYYK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Jt8yF-QI.js";import"./throttle-DNcBTn_q.js";import"./index-BRngxrU7.js";import"./index-CV8Eusxy.js";import"./isWellBehavedNumber-DxZkGz0e.js";import"./d3-scale-nv5WZ-MU.js";import"./index-PsDnrYhU.js";import"./index-BvMKJHsM.js";import"./renderedTicksSlice-CrS6eWPX.js";import"./index-BQpCoukA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1g09AHb.js";import"./chartDataContext-B80RtjhA.js";import"./CategoricalChart-CKH0Hy4l.js";import"./CartesianAxis-B6MEtpsI.js";import"./Layer-DkCnbteg.js";import"./Text-DGqsL-zN.js";import"./DOMUtils-Cld05Rut.js";import"./useId-DlJSbOEb.js";import"./useBackwardsCompatibleTheme-D9TCWuL1.js";import"./Label-DNJm325E.js";import"./ZIndexLayer-akraxgUp.js";import"./types-cDH95ogz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DOXtHAOp.js";import"./useAnimationId-CMvFcnUz.js";import"./ActivePoints-D4dpp1py.js";import"./Dot-DjkzHWoo.js";import"./RegisterGraphicalItemId-Dy2Y8QPA.js";import"./GraphicalItemClipPath-CrsQrVv0.js";import"./SetGraphicalItem-C0bV6rYE.js";import"./getRadiusAndStrokeWidthFromDot-CGTWwDkJ.js";import"./ActiveShapeUtils-CUarEX30.js";import"./Curve-CkZxc2JO.js";import"./step-DDqhC4ci.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C3_xntvz.js";import"./useElementOffset-BuUcmoJ7.js";import"./uniqBy-DzHnGdpm.js";import"./iteratee-Bytpq0NN.js";import"./Cross-BQjK_Sjj.js";import"./Rectangle-w3oMEOnu.js";import"./util-Dxo8gN5i.js";import"./Sector-fswU8txp.js";import"./Symbols-LfU6ziL5.js";import"./symbol-C-_WC7vv.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
