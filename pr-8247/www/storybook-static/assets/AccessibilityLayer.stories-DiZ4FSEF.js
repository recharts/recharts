import{r as A,R as t}from"./iframe-CcEsDsPt.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D0JJ5S5k.js";import{A as E}from"./AreaChart-DB_b-HLl.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dg7kj8bI.js";import{X as g}from"./XAxis-BYDL1VAX.js";import{Y as h}from"./YAxis-ioZsuscH.js";import{A as a}from"./Area-CPJwUdco.js";import{T as u}from"./Tooltip-DUQqGxJ6.js";import{R as k}from"./zIndexSlice-B6RUMmkk.js";import{L as v}from"./Legend-Bs4mWeS9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clhdkuph.js";import"./resolveDefaultProps-CG7EywaD.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CKb6nzHd.js";import"./throttle-DZ4rLUZb.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./polarAxisSelectors-DR_PitVn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CJ6MxznC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./CartesianAxis-BUPldUtv.js";import"./Layer-fXDLQXYt.js";import"./Text-wPKGoZhq.js";import"./ZIndexLayer-DOqZSl62.js";import"./Label-CMmdEaqf.js";import"./types-DELOeU-O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-frn6yaTB.js";import"./ActivePoints-IAr-p6xM.js";import"./Dot-VbU1fpiG.js";import"./activeStyles-CiUshd_8.js";import"./useAnimationId-qpAzE9JI.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getRadiusAndStrokeWidthFromDot-D--XkPxF.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./Curve-D2q8IfYm.js";import"./step-BQxy8stc.js";import"./useEffectiveDataKey-B9tlhySB.js";import"./useElementOffset-Btojr813.js";import"./uniqBy-BwAyAD40.js";import"./iteratee-D7dhGHWZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BMKmbwoc.js";import"./Rectangle-ZV4Rn0ty.js";import"./util-Dxo8gN5i.js";import"./Sector-BTsPAMVx.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
