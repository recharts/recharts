import{r as A,R as t}from"./iframe-CKYCIS4O.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CcDPS2UA.js";import{A as E}from"./AreaChart-034YUFeb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CSAQRvR1.js";import{X as g}from"./XAxis-BwOdDkr3.js";import{Y as h}from"./YAxis-3_O2t6O0.js";import{A as a}from"./Area-Wn1K0uEg.js";import{T as u}from"./Tooltip-CCekjfs3.js";import{R as k}from"./zIndexSlice-BVoHtIGl.js";import{L as v}from"./Legend-BcgxheD9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./resolveDefaultProps-DJardr3Q.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BFrdOsRC.js";import"./throttle-DZYj3iOj.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Chzts2tO.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./Text-BLfI62nN.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./Label-V3vvxFs1.js";import"./dataEntryStyles-DAzCaz5j.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DIy8rGs9.js";import"./ActivePoints-CHG1KhF9.js";import"./Dot-ndGMMR9M.js";import"./activeStyles-CNm0YTHp.js";import"./useAnimationId-CSk2ZRUZ.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getRadiusAndStrokeWidthFromDot-B53SAheV.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./Curve-DLtusU6K.js";import"./step-DsdN-LIO.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./isArguments-yB-y1yaH.js";import"./Cross-6coidCzg.js";import"./Rectangle-C9OOv2OS.js";import"./util-Dxo8gN5i.js";import"./Sector-B0ghbJbx.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
