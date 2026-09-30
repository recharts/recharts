import{r as A,R as t}from"./iframe-CDSer5wk.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-b_m8lhmT.js";import{A as E}from"./AreaChart-DhMJEdbX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-ywJIirHV.js";import{X as g}from"./XAxis-CLZ8_tLg.js";import{Y as h}from"./YAxis-DN7TNoMj.js";import{A as a}from"./Area-BFA5OsMY.js";import{T as u}from"./Tooltip-ChMVK4dW.js";import{R as k}from"./zIndexSlice-B-lpBScO.js";import{L as v}from"./Legend-D5bRhJ8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DSp6qoYe.js";import"./throttle-fnP7_niv.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./CartesianAxis-DnSeAvbN.js";import"./Layer-BlrsPtdk.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./Label-CDfUkOd_.js";import"./ZIndexLayer-BGJbwrqn.js";import"./types-DCfhmQQy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C7ScRxUV.js";import"./useAnimationId-DsIt1eY5.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./Curve-BrORdZJH.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./useElementOffset-pulofrmD.js";import"./uniqBy-BRQZPpXV.js";import"./iteratee-CIlfEQ2h.js";import"./Cross-Pyb3jZOM.js";import"./Rectangle-B9-QabtY.js";import"./util-Dxo8gN5i.js";import"./Sector-CKKxshLs.js";import"./Symbols-DNCMzjd9.js";import"./symbol-HykW2qul.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
