import{P as A,c as t}from"./iframe-BLrz4bzL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CpLjAKKa.js";import{A as E}from"./AreaChart-D0n-bw-y.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DCVHdoQU.js";import{X as g}from"./XAxis-B81A99CY.js";import{Y as h}from"./YAxis-7eks4-ql.js";import{A as a}from"./Area-C1eQy15P.js";import{T as u}from"./Tooltip-D7rWINP6.js";import{g as k}from"./zIndexSlice-c7WW4zRb.js";import{L as v}from"./Legend-BRGZIZox.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./immer-Cj0-obxe.js";import"./get-CEp8r7kA.js";import"./renderedTicksSlice-ReLUkucO.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./resolveDefaultProps-NE4wXzst.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./CartesianAxis-BoM_TQOb.js";import"./Layer-CRR_7s_x.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./Label-cQgelXjE.js";import"./ZIndexLayer-DQpprPKw.js";import"./types-C_iF2heC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DsJ0vDb9.js";import"./step-BiB5duu3.js";import"./path-DyVhHtw_.js";import"./ReactUtils-_7naDrvk.js";import"./ActivePoints-QQtgh7iH.js";import"./Dot-C1lQjxdh.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./useAnimationId-3KXs9R46.js";import"./getRadiusAndStrokeWidthFromDot-DElyUSRS.js";import"./graphicalItemSelectors-AhcWJTdx.js";import"./useElementOffset-BAtvFamF.js";import"./uniqBy-10OvI55m.js";import"./iteratee-CZgOWLEv.js";import"./Cross-DZz_-ucf.js";import"./Rectangle-BW1N7Z3u.js";import"./Sector-Cn6A8M5a.js";import"./Symbols-TiNOGsKl.js";import"./symbol-CAXeb-zQ.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
