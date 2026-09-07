import{r as A,R as t}from"./iframe-CEqSETwy.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C-LRGuZG.js";import{A as E}from"./AreaChart-BUYS6BYW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B0W_ymZI.js";import{X as g}from"./XAxis-DiGyugB3.js";import{Y as h}from"./YAxis-DZdJE3LC.js";import{A as a}from"./Area-CrQVb0Ww.js";import{T as u}from"./Tooltip-KefdnWSq.js";import{R as k}from"./zIndexSlice-CJNe71Mi.js";import{L as v}from"./Legend-DF0V0MPG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7k5lu9l.js";import"./resolveDefaultProps-CbEbpjss.js";import"./get-C2VjdU0L.js";import"./axisSelectors-p_-hiMzG.js";import"./throttle-DnGGP0fW.js";import"./index-BNz6dVRa.js";import"./index-BvAe43aE.js";import"./isWellBehavedNumber-DDsPS4Vv.js";import"./d3-scale-kHCfNVPM.js";import"./index-CKh217UZ.js";import"./index-CcAm8cKQ.js";import"./renderedTicksSlice-Bs5DanIZ.js";import"./index-BHSo_RxK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDkHhS9o.js";import"./chartDataContext-CtXgelXS.js";import"./CategoricalChart-Cuq3_PiL.js";import"./CartesianAxis-Baoe0UzV.js";import"./Layer-C0D9GKi7.js";import"./Text-DksTiW_2.js";import"./DOMUtils-19Cjbm1E.js";import"./useId-DLOcTRFV.js";import"./useBackwardsCompatibleTheme-C18-49Mr.js";import"./Label-lnqMQjsv.js";import"./ZIndexLayer-0nUyu6n_.js";import"./types-Ddhi9krD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C2HkT0wg.js";import"./useAnimationId-gLsHzM3f.js";import"./ActivePoints-2KTX-e1O.js";import"./Dot-BHS04fT3.js";import"./RegisterGraphicalItemId-BZYWE3sH.js";import"./GraphicalItemClipPath-B4449nNq.js";import"./SetGraphicalItem-BqGzK2Ro.js";import"./getRadiusAndStrokeWidthFromDot-DMkHG-MO.js";import"./ActiveShapeUtils-BN_cCfJG.js";import"./Curve-ByfwLNod.js";import"./step-DaAwVIu6.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CEKaZePj.js";import"./useElementOffset-BL5iDFTN.js";import"./uniqBy-CPCN80XU.js";import"./iteratee-DPwVpnC0.js";import"./Cross-DwI7X1MQ.js";import"./Rectangle-CtR9xIXP.js";import"./util-Dxo8gN5i.js";import"./Sector-hMiCXsBo.js";import"./Symbols-aQKjgxVt.js";import"./symbol-BgFayqAI.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
