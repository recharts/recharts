import{e as t,r as A}from"./iframe-BjYhBrjl.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-jXkond5b.js";import{R as E}from"./arrayEqualityCheck-CNWOZzwZ.js";import{A as a}from"./Area-BfWQYa1R.js";import{L as b}from"./Legend-BWAfmmEj.js";import{X as d}from"./XAxis-CWT2ipPv.js";import{Y as g}from"./YAxis-BPJqNES7.js";import{T as h}from"./Tooltip-CCnn3vru.js";import{R as u}from"./RechartsHookInspector-BYUxShfd.js";import{A as v}from"./AreaChart-DF9o4INh.js";import{C as T}from"./CartesianGrid-CYgd0LlL.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kzv9It-X.js";import"./hooks-Ddl0ZTMw.js";import"./axisSelectors-DEfYHCC1.js";import"./zIndexSlice-CZl4BXnF.js";import"./resolveDefaultProps-CW-CYJ5T.js";import"./PolarUtils-DQj3EbdT.js";import"./CartesianChart-DCPzGlsn.js";import"./chartDataContext-BU8YO9rr.js";import"./CategoricalChart-DF3wtmgo.js";import"./Curve-Dsad01Eu.js";import"./types-Cdxv11pV.js";import"./Layer-DXlUs9xn.js";import"./ReactUtils-BfHCN5KQ.js";import"./Label-DVod4zfM.js";import"./Text-BkZHxLFB.js";import"./DOMUtils-BymtfGut.js";import"./ZIndexLayer-DHhRDpk5.js";import"./ActivePoints-B3Cg6Vyy.js";import"./Dot-CTyFlHPc.js";import"./RegisterGraphicalItemId-CbyAeKpp.js";import"./GraphicalItemClipPath-DwCyfGQq.js";import"./SetGraphicalItem-D87xV8bI.js";import"./useAnimationId-Da3IHhB2.js";import"./getRadiusAndStrokeWidthFromDot-CjQtZ2j8.js";import"./graphicalItemSelectors-DZQ8XfqH.js";import"./Symbols-Df7Es6QZ.js";import"./useElementOffset-DMz3ZnQd.js";import"./iteratee-DmKJxQnM.js";import"./CartesianAxis-Bk_9WRuu.js";import"./Cross-DSxx1_Ft.js";import"./Rectangle-G9VjTpux.js";import"./Sector-DDjBm9K3.js";import"./index-CwPjVI_1.js";import"./ChartSizeDimensions-D7d_cei-.js";import"./OffsetShower-DpV5TBrr.js";import"./PlotAreaShower-D3NMg3HB.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
