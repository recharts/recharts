import{r as A,R as t}from"./iframe-C76fCBLt.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CsRNgK1V.js";import{A as E}from"./AreaChart-BBQbQJz7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CcFGtFNM.js";import{X as g}from"./XAxis-BrBJ2mML.js";import{Y as h}from"./YAxis-DFPJpwmP.js";import{A as a}from"./Area-DJSQzvSx.js";import{T as u}from"./Tooltip-BNwOVkwS.js";import{R as k}from"./zIndexSlice-BsJGnMmn.js";import{L as v}from"./Legend-Ctxci9eX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./throttle-DuTovYxH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./d3-scale-X-nthEaw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./Label-Dx0etugK.js";import"./ZIndexLayer-DTL30j5z.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-QpEnlZxo.js";import"./useAnimationId-CEbYcbZq.js";import"./ActivePoints-rl4j4hoo.js";import"./Dot-C9pDbdqv.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getRadiusAndStrokeWidthFromDot-DKT9RGri.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./Curve-BzIujVSC.js";import"./step-UDFv_jwZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CANcD4oO.js";import"./useElementOffset-BKWrj22b.js";import"./uniqBy-BisTCx5L.js";import"./iteratee-BmQyV-lV.js";import"./Cross-g7FHOHqR.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./Sector-BqIux5bx.js";import"./Symbols-B73T7BR7.js";import"./symbol-DJZWq1DC.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
