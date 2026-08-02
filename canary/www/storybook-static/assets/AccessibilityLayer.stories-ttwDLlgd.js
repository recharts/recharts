import{r as A,R as t}from"./iframe-B87Mdf3W.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CbdJJgaC.js";import{A as E}from"./AreaChart-m6SOW-vN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dy_ALw9Y.js";import{X as g}from"./XAxis-CR6bWmBK.js";import{Y as h}from"./YAxis-vKfYeEWT.js";import{A as a}from"./Area-QLXzk-Un.js";import{T as u}from"./Tooltip-COv8FQmh.js";import{R as k}from"./zIndexSlice-BIRpUMd-.js";import{L as v}from"./Legend-mtOs_KCX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTH97mkX.js";import"./index-DzAi6-mi.js";import"./index-Kzzk0SfL.js";import"./index-CFlriD1l.js";import"./index-DOs9r3IB.js";import"./throttle-B7C94OgR.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice--g9rzjaW.js";import"./axisSelectors-CjpQ8_nF.js";import"./resolveDefaultProps-DKsQyDke.js";import"./isWellBehavedNumber-B3D8b1zU.js";import"./d3-scale-BOgOxbfH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1vhIJLv.js";import"./chartDataContext-qB4fiklo.js";import"./CategoricalChart-DkKx3P5s.js";import"./CartesianAxis-Bnk9r_M-.js";import"./Layer-rvbR5IlK.js";import"./Text-CiS0vhWP.js";import"./DOMUtils-Dj6lanE1.js";import"./Label-D69_s3j-.js";import"./ZIndexLayer-CBz7KXzh.js";import"./types-CS4XJdLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-2ygZrkIo.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhwNGwGQ.js";import"./useAnimationId-B04VzGQY.js";import"./ActivePoints-BuWd44OK.js";import"./Dot-CctAgg2L.js";import"./RegisterGraphicalItemId-B3POwG2t.js";import"./GraphicalItemClipPath-DnF4EuGO.js";import"./SetGraphicalItem-BP9VRM5v.js";import"./getRadiusAndStrokeWidthFromDot-Bhl0ZWck.js";import"./ActiveShapeUtils-Dgoc85eT.js";import"./Curve-DIAAN1K7.js";import"./step-e5qRx30Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C2C4094n.js";import"./useElementOffset-B4Ud-MT_.js";import"./uniqBy-CB05smHV.js";import"./iteratee-CgJpmMi2.js";import"./Cross-CjMGaIX5.js";import"./Rectangle-D3hzUcUp.js";import"./util-Dxo8gN5i.js";import"./Sector-DnrpkhtR.js";import"./Symbols-BeMj2ztP.js";import"./symbol-vdpPDQ1v.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
