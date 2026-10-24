import{r as A,R as t}from"./iframe-DwT3zBcw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BRJHnsZA.js";import{A as E}from"./AreaChart-Dj44nZ-e.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bkyj7982.js";import{X as g}from"./XAxis-DDMS_4GY.js";import{Y as h}from"./YAxis-Blmef7Zk.js";import{A as a}from"./Area-B27C9sUo.js";import{T as u}from"./Tooltip-CcGVX3TY.js";import{R as k}from"./zIndexSlice-B1c8R-o4.js";import{L as v}from"./Legend-BGqif3Gi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-ytYCFw.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C7AasPYQ.js";import"./throttle-zQvI5ucF.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./d3-scale-DKCZEfGq.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-Bk7-Tdy1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./CartesianAxis-BOCUxksG.js";import"./Layer-DTu28EsQ.js";import"./Text-aRPMe4ci.js";import"./pageBackground-DsM-Z0Rr.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./Label-BJdAgAze.js";import"./ZIndexLayer-DYMRbOsR.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./types-CLejyp8C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-0kotXHCs.js";import"./useAnimationId-BjdF1-gz.js";import"./ActivePoints-DatcE_ix.js";import"./Dot-B9jMerXC.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getRadiusAndStrokeWidthFromDot-DuGu4d4H.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./Curve-Bt6WU0fX.js";import"./step-Cf4wfTi4.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./useElementOffset-BPhfD7za.js";import"./uniqBy-DSw40EQt.js";import"./iteratee-BWpKqSkU.js";import"./isArguments-yB-y1yaH.js";import"./Cross-jElMP1_w.js";import"./Rectangle-DLCOL5Gn.js";import"./util-Dxo8gN5i.js";import"./Sector-DxUt_IOw.js";import"./Symbols-Cg4hZU-z.js";import"./symbol-DBcDWVfa.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
