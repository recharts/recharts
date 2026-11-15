import{r as A,R as t}from"./iframe-Bs2Fwquo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BYL_ipm0.js";import{A as E}from"./AreaChart-zdn_82WX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DKsw99UQ.js";import{X as g}from"./XAxis-Da7a1LVz.js";import{Y as h}from"./YAxis-BIq5zgoj.js";import{A as a}from"./Area-CgTOrX6C.js";import{T as u}from"./Tooltip-CQk23inZ.js";import{R as k}from"./zIndexSlice-zNxU83Rq.js";import{L as v}from"./Legend-BdAsxtxW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-H7J0pkbh.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DqQ1JIAI.js";import"./throttle-CeO6b2ZD.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./polarAxisSelectors-C5Qopf47.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjk-fTH.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./CartesianAxis-DRyjDMvy.js";import"./Layer-DSICE4z4.js";import"./Text-ggKHnocX.js";import"./ZIndexLayer-C_DcULPk.js";import"./Label-DziYhFsK.js";import"./types-BK-Q7FAz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BK9Z9etj.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./activeStyles-B-3paNFW.js";import"./useAnimationId-6uZicVw9.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./ActiveShapeUtils-B_relbt6.js";import"./Curve-FXEPgScl.js";import"./step-B-SD4ABD.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";import"./Cross-ckzgyXQ_.js";import"./Rectangle-bDkm_FXF.js";import"./util-Dxo8gN5i.js";import"./Sector-Cim8UNhj.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
