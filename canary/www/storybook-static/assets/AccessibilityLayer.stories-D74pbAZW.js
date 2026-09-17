import{r as A,R as t}from"./iframe-tVU98U3S.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DMW4n_nS.js";import{A as E}from"./AreaChart-CP5LVpjJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-QAViJosn.js";import{X as g}from"./XAxis-B6lV3McA.js";import{Y as h}from"./YAxis-Cz8LA1zT.js";import{A as a}from"./Area-Cn3VnRMM.js";import{T as u}from"./Tooltip-DG72CCZo.js";import{R as k}from"./zIndexSlice-CyBuhAxg.js";import{L as v}from"./Legend-B-Vpf91_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dk0RXaf-.js";import"./throttle-7FDSZAP-.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./index-CelAevGI.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./CartesianAxis-BOF0DDEi.js";import"./Layer-BI456J7x.js";import"./Text-BIcirXpx.js";import"./DOMUtils-ZXubKPMD.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./Label-BiGv8_RF.js";import"./ZIndexLayer-uxtsIBVq.js";import"./types-B3--bUgQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CqlhlM_R.js";import"./useAnimationId-3DY0RP1D.js";import"./ActivePoints-DterfL9t.js";import"./Dot-B9zwDON4.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getRadiusAndStrokeWidthFromDot-Cld96GCx.js";import"./ActiveShapeUtils-D132qIUj.js";import"./Curve-Ba9QZAHb.js";import"./step-BPWa_HmE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";import"./useElementOffset-Bhj0sPEh.js";import"./uniqBy-C2Zh7Teh.js";import"./iteratee-BRu2ejZj.js";import"./Cross-BmhU8c99.js";import"./Rectangle-DmTy6SeT.js";import"./util-Dxo8gN5i.js";import"./Sector-B8MOhbqA.js";import"./Symbols-BweGjQax.js";import"./symbol-BLUibg7I.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
