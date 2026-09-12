import{r as A,R as t}from"./iframe-BZt9gdNh.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-j-NLk7cw.js";import{A as E}from"./AreaChart-BVGzeRGz.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CqrZqBfx.js";import{X as g}from"./XAxis-C8XTecZS.js";import{Y as h}from"./YAxis-B6iDX6TN.js";import{A as a}from"./Area-C_vW0cH7.js";import{T as u}from"./Tooltip-LN81swq8.js";import{R as k}from"./zIndexSlice-XuBBmNUo.js";import{L as v}from"./Legend-D6yaaFNr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cay7o2ht.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cl7dH9vF.js";import"./throttle-B4vKrVKm.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./CartesianAxis-Cv8lslC5.js";import"./Layer-DrcPzbE2.js";import"./Text-CeEgQkK1.js";import"./DOMUtils-CENtu6Ky.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./Label-CgKCxMe1.js";import"./ZIndexLayer-BUepW3qO.js";import"./types-Rk0FsTZp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-dtI7DJaK.js";import"./useAnimationId-DFFh1fwK.js";import"./ActivePoints-x646kZg_.js";import"./Dot-Baaq2D37.js";import"./RegisterGraphicalItemId-DHjWQaqm.js";import"./GraphicalItemClipPath-DFXU-IsT.js";import"./SetGraphicalItem-Bu5vFhfh.js";import"./getRadiusAndStrokeWidthFromDot-BR61MnO_.js";import"./ActiveShapeUtils-BSpPce9D.js";import"./Curve-CNkmv-tl.js";import"./step-Cs04DkZC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CraBFHaJ.js";import"./useElementOffset-CNPicTEJ.js";import"./uniqBy-C655Zvfo.js";import"./iteratee-DgWSL6uQ.js";import"./Cross-Uqz2jl8U.js";import"./Rectangle-DP-CYR2k.js";import"./util-Dxo8gN5i.js";import"./Sector-C75D8sD3.js";import"./Symbols-Bc8IP3E4.js";import"./symbol-CyhJoWFM.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
