import{r as A,R as t}from"./iframe-3XHGwrzY.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-3w0CXkas.js";import{A as E}from"./AreaChart-BrRrfFOx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BrEtg7AT.js";import{X as g}from"./XAxis-DAbWxmV3.js";import{Y as h}from"./YAxis-BDE7drTG.js";import{A as a}from"./Area-DvJzsCfx.js";import{T as u}from"./Tooltip-DQGZOZkM.js";import{R as k}from"./zIndexSlice-Brmhs58T.js";import{L as v}from"./Legend-CItgQnxt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFT9i2CK.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-0sscf7qw.js";import"./throttle-CcufCSOD.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./polarAxisSelectors-DX_jscyS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC4T9Y5K.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./Text-BPYl0AVs.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./Label-DV0q5jx7.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BM4c2Gyu.js";import"./fillDefinitions-Czp8LH37.js";import"./LabelList-KPZxqPb8.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./activeStyles-Pcudkpr-.js";import"./useAnimationId-9M90yRIF.js";import"./dataEntryStyles-DQz1PP-z.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CcizPSQC.js";import"./Rectangle-BvFpd_DO.js";import"./util-Dxo8gN5i.js";import"./Sector-B8S12vxL.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
