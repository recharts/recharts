import{r as A,R as t}from"./iframe-CUx1TCgW.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DIv9D89u.js";import{A as E}from"./AreaChart-Dyy22k7H.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-uH6Q1yTX.js";import{X as g}from"./XAxis-XVUuusjp.js";import{Y as h}from"./YAxis-DnVtyTYT.js";import{A as a}from"./Area-Ch60prP6.js";import{T as u}from"./Tooltip--yATZ1LX.js";import{R as k}from"./zIndexSlice-CyWJB_IO.js";import{L as v}from"./Legend-DP9jdGkT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./throttle-BjWBzxHj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./axisSelectors-VAnXlTNN.js";import"./resolveDefaultProps-BueptT4L.js";import"./isWellBehavedNumber-CUV8846M.js";import"./d3-scale-BarhEeTK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./CartesianAxis-BocxUsAL.js";import"./Layer-DkHmdg7h.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./Label-Bd7WMI0X.js";import"./ZIndexLayer-B-tk4cwY.js";import"./types-5kZg7jgz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ScvXBbCb.js";import"./useAnimationId-Cx6lzC6E.js";import"./ActivePoints-BFL4MLXA.js";import"./Dot-CUsFN3PS.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getRadiusAndStrokeWidthFromDot-CPoinBTG.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./Curve-Mg827IgF.js";import"./step-Dl-o-ZW1.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BKEsqN5X.js";import"./useElementOffset-DNdZu7MT.js";import"./uniqBy-DSJ0hFsD.js";import"./iteratee-CuBpgztc.js";import"./Cross-Bzly_9F2.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./Sector-BCKOGouU.js";import"./Symbols-Ce7wtBIG.js";import"./symbol-3q2YBEtt.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
