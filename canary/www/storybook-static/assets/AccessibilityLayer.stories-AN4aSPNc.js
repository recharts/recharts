import{r as A,R as t}from"./iframe-BCDSQyOo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DErsj6jf.js";import{A as E}from"./AreaChart-C94RgeEk.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CGPONKR4.js";import{X as g}from"./XAxis-Bk5D6i9E.js";import{Y as h}from"./YAxis-DnB_2g0Q.js";import{A as a}from"./Area-C-RDaFpF.js";import{T as u}from"./Tooltip-D55SpDBY.js";import{R as k}from"./zIndexSlice-CihbJEZu.js";import{L as v}from"./Legend-BLHD4EtA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BqnNMENS.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cvi9anx3.js";import"./throttle-D1lsoNSG.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CYMX0yrb.js";import"./index-ClkyNFpC.js";import"./index-Q4jLEkfo.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./CartesianAxis-DeXvVTxW.js";import"./Layer-sje4p3Rc.js";import"./Text-RrCvwkND.js";import"./ZIndexLayer-PvoR44l1.js";import"./Label-C128IvfG.js";import"./types-Czx6BcyQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dui-VolR.js";import"./ActivePoints-C5df2K_e.js";import"./Dot-DeEkJUDG.js";import"./activeStyles-BVEmlDAe.js";import"./useAnimationId-DOTZ38LK.js";import"./Symbols-BhFpev2q.js";import"./symbol-BFQRYOt6.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getRadiusAndStrokeWidthFromDot-tbcff33p.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./Curve-B6YhKAHC.js";import"./step-_U3fQ-Ri.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./useElementOffset-BdQyjpik.js";import"./uniqBy-DshlIWW5.js";import"./iteratee-_elDKS4N.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CO7lcRDZ.js";import"./Rectangle-CFM8azDG.js";import"./util-Dxo8gN5i.js";import"./Sector-WK7tc2F5.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
