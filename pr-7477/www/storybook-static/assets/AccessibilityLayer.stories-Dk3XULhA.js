import{r as A,R as t}from"./iframe-C2Yu5A-b.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cfc9HyP7.js";import{A as E}from"./AreaChart-DR8KWvnk.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DBvkaZMp.js";import{X as g}from"./XAxis-WqnJVPHT.js";import{Y as h}from"./YAxis-CAeM0KFi.js";import{A as a}from"./Area-DxyX6f10.js";import{T as u}from"./Tooltip-D4_5mk3v.js";import{R as k}from"./zIndexSlice-tndcr-lp.js";import{L as v}from"./Legend-Bb8Czknq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLm4movc.js";import"./index-Cf-iiIX8.js";import"./index-RvHlbfdo.js";import"./index-Crtw70Th.js";import"./index-Bw2J7CiK.js";import"./immer-Dw4t5i4O.js";import"./get-sXbEBADG.js";import"./renderedTicksSlice-DRR4JQds.js";import"./axisSelectors-ldKOVrRn.js";import"./d3-scale-CalfYQM5.js";import"./resolveDefaultProps-Bpz2fUNW.js";import"./isWellBehavedNumber-hO-3eJ3M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GviTQT_7.js";import"./chartDataContext-BCayYLP6.js";import"./CategoricalChart-CfUCGvtZ.js";import"./CartesianAxis-Che9oLkh.js";import"./Layer-B5f-JESM.js";import"./Text-nteLn1KQ.js";import"./DOMUtils-D5PdJ1Ca.js";import"./Label-5FD90Jk0.js";import"./ZIndexLayer-DuYz_T9C.js";import"./types-D2qrwj6D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bx_qRQBs.js";import"./useAnimationId-_dE112Ua.js";import"./ActivePoints-BTO62zcn.js";import"./Dot-CKPKAf35.js";import"./RegisterGraphicalItemId-BBUK6ex4.js";import"./GraphicalItemClipPath-ByyRz6Zm.js";import"./SetGraphicalItem-B-XBlhKJ.js";import"./getRadiusAndStrokeWidthFromDot-CLg6UhmZ.js";import"./ActiveShapeUtils-BR-aw80X.js";import"./Curve-BOpkUjqJ.js";import"./step-Badcwj1a.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B9Lu1HbA.js";import"./useElementOffset-D1jcGseP.js";import"./uniqBy-EOs9hKbg.js";import"./iteratee-BIwzy5Sd.js";import"./Cross-CDEkmIQU.js";import"./Rectangle-CYfm48t9.js";import"./util-Dxo8gN5i.js";import"./Sector-CXcIFBrm.js";import"./Symbols-OVliTJ0w.js";import"./symbol-BfsTRDbP.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
