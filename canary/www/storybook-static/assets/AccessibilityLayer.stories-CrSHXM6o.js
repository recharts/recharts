import{r as A,R as t}from"./iframe-DnaR6K_4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D_61vaIh.js";import{A as E}from"./AreaChart-DYZX9iqF.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Ihil0ESz.js";import{X as g}from"./XAxis-JXd9qzo8.js";import{Y as h}from"./YAxis-wlK6hgFu.js";import{A as a}from"./Area-wCnPnPDl.js";import{T as u}from"./Tooltip-Gq9KpMi8.js";import{R as k}from"./zIndexSlice-HRkrVJ9X.js";import{L as v}from"./Legend-31MAQyrk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRNPPXNH.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BZT-kfpn.js";import"./throttle-CmS6TmXS.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgvfK_mE.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./Label-BEN9LI2d.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BUjHKeGu.js";import"./ActivePoints-BGPPfRbm.js";import"./Dot-CMPD7QLc.js";import"./activeStyles-WfyfS5co.js";import"./useAnimationId-DvJiKZIl.js";import"./Symbols-ClvwSwOZ.js";import"./symbol-QpFOfTRN.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DJe9VMWh.js";import"./getRadiusAndStrokeWidthFromDot-EcMggKSX.js";import"./ActiveShapeUtils-jyclsiEg.js";import"./Curve-nkhv6z3O.js";import"./step-CWTcW_Xz.js";import"./useEffectiveDataKey-BtEPyz6t.js";import"./useElementOffset-1fsM2BLX.js";import"./uniqBy-BerQeZ6C.js";import"./iteratee-BOqKd5kc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BzVInf1h.js";import"./Rectangle-Dgg35g8F.js";import"./util-Dxo8gN5i.js";import"./Sector-C-O6fWmF.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
