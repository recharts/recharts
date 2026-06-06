import{r as A,R as t}from"./iframe-C2BX5KlG.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CzoJ7T6H.js";import{A as E}from"./AreaChart-Co1enFpY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-IRNWuAYH.js";import{X as g}from"./XAxis-DVvf2cjO.js";import{Y as h}from"./YAxis-DyEK7c-9.js";import{A as a}from"./Area-jD-h_-QG.js";import{T as u}from"./Tooltip-BNcp-BI8.js";import{R as k}from"./zIndexSlice-CxPEcPAu.js";import{L as v}from"./Legend-Ce3iB2By.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./immer-CvWW5aeq.js";import"./get-CAfMQs0q.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./Label-BtHuGICT.js";import"./ZIndexLayer-DXknjapM.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./ActiveShapeUtils-8DISroY0.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ClfPkK1e.js";import"./useElementOffset-DgvALgLL.js";import"./uniqBy-Dndb0Oy8.js";import"./iteratee-KOU-VhL7.js";import"./Cross-Cr_uS2gb.js";import"./Rectangle-DRmt8yX0.js";import"./Sector-BGIVy27E.js";import"./Symbols-C8818rpd.js";import"./symbol-BrPwpKoT.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
