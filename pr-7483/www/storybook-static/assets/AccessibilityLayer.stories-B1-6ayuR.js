import{r as A,R as t}from"./iframe-CvYyRmMb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B1VIvVBS.js";import{A as E}from"./AreaChart-BaGBd_6H.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CglKu9Xk.js";import{X as g}from"./XAxis-3reDaDaV.js";import{Y as h}from"./YAxis-CjttnAc1.js";import{A as a}from"./Area-BfhEdCHI.js";import{T as u}from"./Tooltip-Dx8e65f1.js";import{R as k}from"./zIndexSlice-Cp8J06te.js";import{L as v}from"./Legend-BG5egmz1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./immer-DxglGVhE.js";import"./get-CIMqXaai.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./CartesianAxis-Be4--iUh.js";import"./Layer-C5boFLOM.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./Label-CYZiU-dh.js";import"./ZIndexLayer-BRD83X3W.js";import"./types-Zq1Yq0zW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C6-g87vu.js";import"./useAnimationId-BRj_sN3I.js";import"./ActivePoints-T9IVC-_m.js";import"./Dot-B1euizWe.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getRadiusAndStrokeWidthFromDot-Dx9iWsDu.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./Curve-B0ipnk9C.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0p2i175.js";import"./useElementOffset-CAsgb7km.js";import"./uniqBy-xgluxroo.js";import"./iteratee-B7aRbMAg.js";import"./Cross-C3DShcB5.js";import"./Rectangle-BpNkhbV-.js";import"./util-Dxo8gN5i.js";import"./Sector-BTRwvM-7.js";import"./Symbols-BxgPZ6x6.js";import"./symbol-CZiTVtyO.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
