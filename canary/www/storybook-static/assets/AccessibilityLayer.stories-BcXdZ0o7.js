import{r as A,R as t}from"./iframe-D_uMBlIp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DhQzd1k_.js";import{A as E}from"./AreaChart-DQLUllcy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-KrPu7pZ6.js";import{X as g}from"./XAxis-ChmGUeiL.js";import{Y as h}from"./YAxis-Q267elff.js";import{A as a}from"./Area-0Tb02F7h.js";import{T as u}from"./Tooltip-D9RzUAhb.js";import{R as k}from"./zIndexSlice-Cqv84PqK.js";import{L as v}from"./Legend-BMwEwXrz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gFpkW2lO.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BH5tVjmc.js";import"./throttle-z9Tdm54L.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./polarAxisSelectors-PGXXztW2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-De88z7ff.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./Text-CgSvhKKx.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./Label-xcLv9MPJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-lhjdoetJ.js";import"./ActivePoints-CutcUh5t.js";import"./Dot-CWRVOvZp.js";import"./activeStyles-Dd3au7Dm.js";import"./useAnimationId-BUGTxmjG.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getRadiusAndStrokeWidthFromDot-DtDP844S.js";import"./ActiveShapeUtils-CosApWaB.js";import"./Curve-D7Q9HT-0.js";import"./step-CndKQIzs.js";import"./useEffectiveDataKey-CgejumXO.js";import"./useElementOffset-cdiG7Q_h.js";import"./uniqBy-CwR9iSeD.js";import"./iteratee-C8wVZEUu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-sb0TeG48.js";import"./Rectangle-D8h04Bjl.js";import"./util-Dxo8gN5i.js";import"./Sector-b-nTepMT.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
