import{r as A,R as t}from"./iframe-CEQushtN.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BlLv9QRG.js";import{A as E}from"./AreaChart-DlvNWpLD.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DdX2dsam.js";import{X as g}from"./XAxis-Dox0Mf_6.js";import{Y as h}from"./YAxis-CO7P54oT.js";import{A as a}from"./Area-BSSHztbf.js";import{T as u}from"./Tooltip-DODsXuho.js";import{R as k}from"./zIndexSlice-DjNM_HLz.js";import{L as v}from"./Legend-BnmhZmMZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DQduFkeJ.js";import"./throttle-D-s41lqW.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BWM46Ydz.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./Text-CmoBCOlM.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./Label-CFJJzt7V.js";import"./dataEntryStyles-BlFVEHbT.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DwlBaftj.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./activeStyles-6x5lKRrB.js";import"./useAnimationId-CzbeFnj4.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./Curve-C2Lci0Z6.js";import"./step-BbPJEBHq.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./useElementOffset-DWKbuRf4.js";import"./uniqBy-DDpW34LG.js";import"./iteratee-DFqopvcF.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DRP4fofn.js";import"./Rectangle-CdiELTU5.js";import"./util-Dxo8gN5i.js";import"./Sector-BXpIIm1p.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
