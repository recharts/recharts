import{r as A,R as t}from"./iframe-Cb2PTRZu.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B38G4g5a.js";import{A as E}from"./AreaChart-Bj1xVIJ4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-S2dzJhHi.js";import{X as g}from"./XAxis-CYL2fqsj.js";import{Y as h}from"./YAxis-CFTllxPe.js";import{A as a}from"./Area-BboXBMrv.js";import{T as u}from"./Tooltip-B3QRBTsg.js";import{R as k}from"./zIndexSlice-BOcdwE9B.js";import{L as v}from"./Legend-NMCpa0Ey.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJJRHEYU.js";import"./resolveDefaultProps-38f2qAXo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-YCR54JUg.js";import"./throttle-3iOH7y6s.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./d3-scale-BEDYL0lJ.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-DnXVLer0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./Text-D_NeQFRY.js";import"./pageBackground-Bn3yH5Mf.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./Label-60x-b7-u.js";import"./ZIndexLayer-CMs0nKoK.js";import"./dataEntryStyles-BA7za2_q.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-utpSO3wr.js";import"./useAnimationId-BSibkTQy.js";import"./ActivePoints-BINdFJVn.js";import"./Dot-CdjxtqZf.js";import"./RegisterGraphicalItemId-B9ytj1I9.js";import"./SetGraphicalItem-DtRHo2_o.js";import"./getRadiusAndStrokeWidthFromDot-iL1mBvr8.js";import"./ActiveShapeUtils-BmjVX6xw.js";import"./Curve-CXzUSEYX.js";import"./step-D0d2-Qo8.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Me0QsLaT.js";import"./useElementOffset-CgOYsezl.js";import"./uniqBy-BBNw9Xn-.js";import"./iteratee-DzkDe0Ct.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C7mmq037.js";import"./Rectangle-BCmcE3yJ.js";import"./util-Dxo8gN5i.js";import"./Sector-jK--Yj0M.js";import"./Symbols-C4-XM6Pb.js";import"./symbol-Dv8htkrG.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
