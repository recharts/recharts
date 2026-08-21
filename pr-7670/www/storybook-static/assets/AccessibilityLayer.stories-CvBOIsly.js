import{r as A,R as t}from"./iframe-DQS4myAB.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BOQH8a6E.js";import{A as E}from"./AreaChart-50304ML4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bt2pjDXm.js";import{X as g}from"./XAxis-BNsLkqf_.js";import{Y as h}from"./YAxis-DYkI96_x.js";import{A as a}from"./Area-BKpF2EeU.js";import{T as u}from"./Tooltip-CxYlgvaJ.js";import{R as k}from"./zIndexSlice-CRKGO7km.js";import{L as v}from"./Legend-DPd6A_Ew.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-A-SxCpKR.js";import"./index-Bqu6H91U.js";import"./index-CvvA9CVv.js";import"./index-C2aL9BgM.js";import"./index-DDMxvxUH.js";import"./throttle-BsoZ_hEn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DX4jdBfR.js";import"./resolveDefaultProps-BIteYQ9K.js";import"./isWellBehavedNumber-zK_PJpDu.js";import"./d3-scale-5kESFzKL.js";import"./renderedTicksSlice-C2h8Z4jj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-T2RwwuUW.js";import"./chartDataContext-BIeQL6Ui.js";import"./CategoricalChart-bL4PqON3.js";import"./CartesianAxis-C-8QqbQf.js";import"./Layer-BZTFzIOK.js";import"./Text-GAhVF71G.js";import"./DOMUtils-DInenL_7.js";import"./useId-BeKVfcQc.js";import"./useBackwardsCompatibleTheme-CRkmgrCS.js";import"./Label-BA6rOHS2.js";import"./ZIndexLayer-HtJhw_Ro.js";import"./types-lJpcgJl2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B7OZIGbB.js";import"./useAnimationId-C6swfQ_N.js";import"./ActivePoints-Di6LpqPi.js";import"./Dot-DsGcbXq1.js";import"./RegisterGraphicalItemId-Dq93b8dF.js";import"./GraphicalItemClipPath-CdlG8-5u.js";import"./SetGraphicalItem-CetdGSA-.js";import"./getRadiusAndStrokeWidthFromDot-TGRMyQOP.js";import"./ActiveShapeUtils-BHK0lPEL.js";import"./Curve-Biukq7ie.js";import"./step-CQkxY-v0.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DPXEtegD.js";import"./useElementOffset-C5KK8MoQ.js";import"./uniqBy-0l2iaavs.js";import"./iteratee-dvdUg7Fc.js";import"./Cross-Dbdnya2d.js";import"./Rectangle-CK6tGD2c.js";import"./util-Dxo8gN5i.js";import"./Sector-2N_veHnt.js";import"./Symbols-DaXC8EnI.js";import"./symbol-DSYYJs8l.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
