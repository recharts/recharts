import{r as A,R as t}from"./iframe-BJZBYlXs.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-C6IGkTRw.js";import{A as E}from"./AreaChart-BM_vqaTE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-OVGlQqeu.js";import{X as g}from"./XAxis-BODArBrx.js";import{Y as h}from"./YAxis-8yYBvtiR.js";import{A as a}from"./Area-BAMzdcQI.js";import{T as u}from"./Tooltip-D_m6xZp8.js";import{R as k}from"./zIndexSlice-4kzTBdEO.js";import{L as v}from"./Legend-Bq7JYcGs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xMruxvG5.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-fPyxXNp-.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./Label-BB8sjzzI.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DO9vEba-.js";import"./fillDefinitions-DzwllWHv.js";import"./LabelList-CjXuEtRO.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./Curve-BZZJQhfg.js";import"./step-C9q08w-O.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./useElementOffset-7dnw2xrI.js";import"./uniqBy-C8XE-Jln.js";import"./iteratee-B-U3qR3F.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BSgYYV6b.js";import"./Rectangle-DcbqjYEw.js";import"./util-Dxo8gN5i.js";import"./Sector-Rmkv_xXG.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ot as __namedExportsOrder,Xt as default};
