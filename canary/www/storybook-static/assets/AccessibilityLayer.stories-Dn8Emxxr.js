import{r as A,R as t}from"./iframe-DfTkQmXX.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DiyxxUr9.js";import{A as E}from"./AreaChart-E4QMUIWz.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CsXp8hDA.js";import{X as g}from"./XAxis-DoFqVwCs.js";import{Y as h}from"./YAxis-D7HuTQbC.js";import{A as a}from"./Area-ITP6RxwB.js";import{T as u}from"./Tooltip-ClSGuEgW.js";import{R as k}from"./zIndexSlice-CK1KsdwK.js";import{L as v}from"./Legend-kahq9B90.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxAPF2hj.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BlOH_04s.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./CartesianAxis-DeGU3T7P.js";import"./Layer-B_W6fsjz.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./Label-SXOQPAQ7.js";import"./ZIndexLayer-DPEED4Hn.js";import"./types-D3zQeAKc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BILREjwj.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./ActivePoints-dsaCSJiB.js";import"./Dot-CX7jfzvx.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getRadiusAndStrokeWidthFromDot-DArtm6VW.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./Curve-gJd5arqO.js";import"./step-BPp5YbXE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";import"./useElementOffset-Cn3V7naw.js";import"./uniqBy-DNn1deX1.js";import"./iteratee-BgZoIgJ1.js";import"./Cross-D6FGK7NQ.js";import"./Rectangle-Ct4TwQSW.js";import"./util-Dxo8gN5i.js";import"./Sector-DrDJPhCX.js";import"./Symbols-CWELWbKP.js";import"./symbol-z0GjC0cu.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
