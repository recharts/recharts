import{r as A,R as t}from"./iframe-Bo128pRc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Cw7mlXQ9.js";import{A as E}from"./AreaChart-FYJ0BeP4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CQ9c3NM-.js";import{X as g}from"./XAxis-BBTi9Quq.js";import{Y as h}from"./YAxis-Bd_441pA.js";import{A as a}from"./Area-Cs_AOTH4.js";import{T as u}from"./Tooltip-HMU69nW5.js";import{R as k}from"./zIndexSlice-WbjY_zmo.js";import{L as v}from"./Legend-dJCD3p5v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DmrtgzWA.js";import"./resolveDefaultProps-CR_Daah7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BYCa1KQi.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./CartesianAxis-CscJTeW3.js";import"./Layer-DR8K2tDR.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./Label-ghQ3JhC7.js";import"./ZIndexLayer-DD1XEuiL.js";import"./types-CsIyy1S-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BX9wZRAd.js";import"./useAnimationId-CQmNoSKE.js";import"./ActivePoints-Bl65ih3N.js";import"./Dot-eLqrzeMr.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getRadiusAndStrokeWidthFromDot-DoOeRTU4.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./Curve-BOVvH2tq.js";import"./step-C7Pxf4sj.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";import"./useElementOffset-DBOsMn43.js";import"./uniqBy-RT7Uc_zP.js";import"./iteratee-Cyk4vjhM.js";import"./Cross-Bn9vWvgo.js";import"./Rectangle-CDN6vLqp.js";import"./util-Dxo8gN5i.js";import"./Sector-j2EN_jtI.js";import"./Symbols-IDhPg5Sz.js";import"./symbol-B_l5LtYl.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
