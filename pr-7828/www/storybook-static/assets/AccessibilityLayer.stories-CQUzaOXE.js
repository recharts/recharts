import{r as A,R as t}from"./iframe-yFYT_zN7.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DxJEOi6H.js";import{A as E}from"./AreaChart-DYJPWxhL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DVxerUhF.js";import{X as g}from"./XAxis-CLVPgrfg.js";import{Y as h}from"./YAxis-BT6AeQik.js";import{A as a}from"./Area-CL2gyqeg.js";import{T as u}from"./Tooltip-k51Qbtbr.js";import{R as k}from"./zIndexSlice-D0SqWiCA.js";import{L as v}from"./Legend-DrIwFL3Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BK2Nqghc.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cz3aPbz8.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./Label-99DUDCMD.js";import"./ZIndexLayer-CHhs3r11.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ck-1wErl.js";import"./useAnimationId-DeDzp5yx.js";import"./ActivePoints-BrgN9jKH.js";import"./Dot-UFOmxDS-.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getRadiusAndStrokeWidthFromDot-B44_s7et.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./Curve-BBFKRsTK.js";import"./step-Dfa3kdsE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";import"./useElementOffset-BM0KkVoV.js";import"./uniqBy-CM-zGjqN.js";import"./iteratee-DzYgEjfZ.js";import"./Cross-CnTASDln.js";import"./Rectangle-juKcDyre.js";import"./util-Dxo8gN5i.js";import"./Sector-nfz0sPyA.js";import"./Symbols-BWDQbWo5.js";import"./symbol-CNs_eA0A.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
