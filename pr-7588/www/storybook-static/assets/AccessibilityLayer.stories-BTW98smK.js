import{r as A,R as t}from"./iframe-dVfgBJJs.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-EYm7zLU4.js";import{A as E}from"./AreaChart-Bqu91711.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-S7mJlfqt.js";import{X as g}from"./XAxis-Dq_1Ikw5.js";import{Y as h}from"./YAxis-Bw51heiQ.js";import{A as a}from"./Area-CLZl7eCO.js";import{T as u}from"./Tooltip-CJSXK5by.js";import{R as k}from"./zIndexSlice-Cjn5-XTM.js";import{L as v}from"./Legend-aBMS0PKs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./throttle-B7XzNIu7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./axisSelectors-rruDH4Fs.js";import"./resolveDefaultProps-BJYE31LD.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./d3-scale-BnZ4Lirr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./Label-Qwq3mE6t.js";import"./ZIndexLayer-CwGLm3MP.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BdW54Xar.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Cross-BdrRvahT.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./Sector-CC1aczQ9.js";import"./Symbols-HSjwRIgd.js";import"./symbol-Jvzv5OcK.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
