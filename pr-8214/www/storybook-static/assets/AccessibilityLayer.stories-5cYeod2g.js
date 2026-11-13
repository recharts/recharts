import{r as A,R as t}from"./iframe-DhvgJ3Tw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Dp8vMI0e.js";import{A as E}from"./AreaChart-BNuPkANw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BO8o_HK3.js";import{X as g}from"./XAxis-DydSoLLm.js";import{Y as h}from"./YAxis-BAhPmXz7.js";import{A as a}from"./Area-D8zD9im9.js";import{T as u}from"./Tooltip-SbVZ5Q-y.js";import{R as k}from"./zIndexSlice-DT7jNbQo.js";import{L as v}from"./Legend-D2qUqThR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-683IwuKd.js";import"./resolveDefaultProps-CKLGeLep.js";import"./get-cF5BDHN6.js";import"./axisSelectors-aIh5be-p.js";import"./throttle-BWeAvDIL.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUY8Yxll.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./Text-oQHtFAiE.js";import"./ZIndexLayer-jkdgENMR.js";import"./Label-lswEF7zo.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CJFnAm-4.js";import"./ActivePoints-DpArZmW3.js";import"./Dot-Bpcl5rlN.js";import"./activeStyles-Dbg52UlV.js";import"./useAnimationId-DBeWeQl6.js";import"./Symbols-BU6SDWGm.js";import"./symbol-Dj9V0gE5.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-FYK4izOM.js";import"./getRadiusAndStrokeWidthFromDot-Cdk2wNTs.js";import"./ActiveShapeUtils-pVPcv2XP.js";import"./Curve-CM-2NJGX.js";import"./step-IHXDW0UX.js";import"./useEffectiveDataKey-NorWb4gC.js";import"./useElementOffset-CtSBl7eX.js";import"./uniqBy-DUpMmWDv.js";import"./iteratee-CCYpPsyY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DsL1RXxj.js";import"./Rectangle-I38bp9Fj.js";import"./util-Dxo8gN5i.js";import"./Sector-mLpt5KCS.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
