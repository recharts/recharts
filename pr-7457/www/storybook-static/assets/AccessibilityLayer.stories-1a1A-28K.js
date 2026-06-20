import{r as A,R as t}from"./iframe-CFGBW6xJ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CKhdd1T_.js";import{A as E}from"./AreaChart-9UA3KbL-.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-1FrMU2EN.js";import{X as g}from"./XAxis-B5InI_Kd.js";import{Y as h}from"./YAxis-DzdfuxTR.js";import{A as a}from"./Area-qDms0KbB.js";import{T as u}from"./Tooltip-BzZ_eWqL.js";import{R as k}from"./zIndexSlice-XhnqXoNc.js";import{L as v}from"./Legend-BW69lOtT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./immer-DtmFdOpm.js";import"./get-mKIhZXA3.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./CartesianAxis-B6GxQRPi.js";import"./Layer-DZ-_1tbp.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./Label-Dw9n6-WD.js";import"./ZIndexLayer-DWvdc9Et.js";import"./types-CFb2awxA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-SqXWEHcu.js";import"./useAnimationId-nIrPYsqA.js";import"./ActivePoints-Ci_EruSJ.js";import"./Dot-6sp_j_Uz.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getRadiusAndStrokeWidthFromDot-BxgONI-A.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./Curve-CuTnLBXp.js";import"./step-Bu8chpKv.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bk5rE5PR.js";import"./useElementOffset-6J8YLqDe.js";import"./uniqBy-CNPIlWYU.js";import"./iteratee-gk_4xeaF.js";import"./Cross-DJ7MuP9C.js";import"./Rectangle-Cx3fMF7b.js";import"./util-Dxo8gN5i.js";import"./Sector-D3Ol61k7.js";import"./Symbols-DVPvqcsz.js";import"./symbol-BPUYBBZH.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
