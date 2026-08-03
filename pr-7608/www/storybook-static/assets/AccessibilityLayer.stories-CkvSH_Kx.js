import{r as A,R as t}from"./iframe-zGdozCQh.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Dqdl2vPn.js";import{A as E}from"./AreaChart-CnbAdXNU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-UhJmQ7sb.js";import{X as g}from"./XAxis-PIf9M3x3.js";import{Y as h}from"./YAxis-BF2yy0dt.js";import{A as a}from"./Area-Caw49n5i.js";import{T as u}from"./Tooltip-CstuRqLn.js";import{R as k}from"./zIndexSlice-CEf5y4wD.js";import{L as v}from"./Legend-C2A5xOW4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./throttle-DvYlmrcU.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BCsCwo08.js";import"./axisSelectors-BKjuK8lH.js";import"./resolveDefaultProps-DGss-nCf.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./d3-scale-MsmZCvzu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./CategoricalChart-BpCZjXPz.js";import"./CartesianAxis-7tIOhqG7.js";import"./Layer-C16c9YM8.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./Label-Cn4tQISS.js";import"./ZIndexLayer-BxlIB-HR.js";import"./types-D_e406XV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DKHHji-l.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-jN_ADWTf.js";import"./useAnimationId-ZvRvsbh2.js";import"./ActivePoints-CAJ4vJY1.js";import"./Dot-D23X09CK.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./graphicalItemIdentity-CDiHfDkn.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./Curve-4P44R3Ym.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CR6pnhzD.js";import"./useElementOffset-DESkP0lj.js";import"./uniqBy-CNAGsW9V.js";import"./iteratee-BrMUzA5Z.js";import"./Cross-FBwxDX_O.js";import"./Rectangle-Cys6_Hxz.js";import"./util-Dxo8gN5i.js";import"./Sector-DoePNCKc.js";import"./Symbols-BThXlhxZ.js";import"./symbol-BV0awSkH.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
