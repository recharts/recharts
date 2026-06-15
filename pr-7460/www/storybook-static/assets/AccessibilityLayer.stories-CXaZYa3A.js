import{r as A,R as t}from"./iframe-BaPbaLaJ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cue8tnaZ.js";import{A as E}from"./AreaChart-BBFW7QRG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D591BjHP.js";import{X as g}from"./XAxis-DyE7q0u7.js";import{Y as h}from"./YAxis-DYYvtRQh.js";import{A as a}from"./Area-De6BAI2s.js";import{T as u}from"./Tooltip-CPyECygK.js";import{R as k}from"./zIndexSlice-Ct9oD4yM.js";import{L as v}from"./Legend-9g7Cx5VN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./immer-DiDZ85-K.js";import"./get-D2ZTbC0U.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./CartesianAxis-C9WUsr8e.js";import"./Layer-DnTHWC2s.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./Label-nvXx3zPl.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./types-Bxe0zMe1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BRL6-mrZ.js";import"./useAnimationId-BlKkbeMI.js";import"./ActivePoints-DjBhRx8i.js";import"./Dot-C2L5-Wjg.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getRadiusAndStrokeWidthFromDot-CwJ3_b_N.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./Curve-Upd9kr-b.js";import"./step-Dmz9aP0W.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CIniFY1e.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./Cross-BvxMZ5D8.js";import"./Rectangle-ClzNIlMR.js";import"./Sector-BAoP8TPe.js";import"./Symbols-DgaJdi9-.js";import"./symbol-CFlzKY_N.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
