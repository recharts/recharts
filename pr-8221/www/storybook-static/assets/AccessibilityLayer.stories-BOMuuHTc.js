import{r as A,R as t}from"./iframe-B7xPXiPl.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BdsejxH2.js";import{A as E}from"./AreaChart-DhNM43zm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Cd7TteQ1.js";import{X as g}from"./XAxis-w-quiWhJ.js";import{Y as h}from"./YAxis-Cu3FI7G-.js";import{A as a}from"./Area-Ce6by0ZQ.js";import{T as u}from"./Tooltip-y-2oODya.js";import{R as k}from"./zIndexSlice-DflaePKy.js";import{L as v}from"./Legend-Dp2tckH4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcgQInkA.js";import"./resolveDefaultProps-t98kZJWg.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bm0UGi6R.js";import"./throttle-BS8hni_u.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVxlp6F9.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./CartesianAxis-CcCV8fyf.js";import"./Layer-CYZUIq4P.js";import"./Text-BexCT2h6.js";import"./ZIndexLayer-7qwpAdIl.js";import"./Label-YOyO9lVV.js";import"./types-CQsoFKaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C3moi0Z-.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./activeStyles-CHc73Nrw.js";import"./useAnimationId-Bi0MWfey.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./Curve-CrTz1Ty2.js";import"./step-DxMe6Ez2.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./useElementOffset-ryxNmM2c.js";import"./uniqBy-C0NZ23ht.js";import"./iteratee-DojtXyrW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B3a9BUmJ.js";import"./Rectangle-B2b4luYh.js";import"./util-Dxo8gN5i.js";import"./Sector-CHPeYTF4.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
