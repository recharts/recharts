import{r as A,R as t}from"./iframe-DMAX8_B_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DTOc-N3k.js";import{A as E}from"./AreaChart-H74Vpi38.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BwTOOuKU.js";import{X as g}from"./XAxis-C1NK8RoH.js";import{Y as h}from"./YAxis-DHMD8bK9.js";import{A as a}from"./Area-higY3U_8.js";import{T as u}from"./Tooltip-f6oj6N-9.js";import{R as k}from"./zIndexSlice-BVHCVdkF.js";import{L as v}from"./Legend-DIOsb75K.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1Z3_sa1T.js";import"./resolveDefaultProps-Q3rDitrf.js";import"./get-C2VjdU0L.js";import"./axisSelectors-xVjud6VL.js";import"./throttle-B-jnSQsL.js";import"./index-Dqqrq3j2.js";import"./index-t_NEKWw0.js";import"./isWellBehavedNumber-9EXxFos5.js";import"./d3-scale-BX29oM_v.js";import"./index-KGIc8sd0.js";import"./index-CBEUuOpp.js";import"./renderedTicksSlice-C6uANPht.js";import"./index-BQc2wBrK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bezscfrc.js";import"./chartDataContext-D-vUUGf6.js";import"./CategoricalChart-lpsuDSMi.js";import"./CartesianAxis-BiWmv3xt.js";import"./Layer-bgHLcwl9.js";import"./Text-BwCj1acG.js";import"./pageBackground-BEqOe7lR.js";import"./useId-BVZoqUN1.js";import"./useBackwardsCompatibleTheme-BxWKmMDT.js";import"./Label-CAcaahuf.js";import"./ZIndexLayer-YH55ha4J.js";import"./types-mmDyRX3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-B1Ozispl.js";import"./useAnimationId-DjHV_c7w.js";import"./dataEntryStyles-Bgri-3l2.js";import"./ActivePoints-C7MlG4p_.js";import"./Dot-CxQ4QLtB.js";import"./GraphicalItemClipPath-DrxfmPj-.js";import"./SetGraphicalItem-Car8jOkS.js";import"./getRadiusAndStrokeWidthFromDot-CzuCL_No.js";import"./ActiveShapeUtils-CH9-BPrn.js";import"./Curve-BI1HfCSQ.js";import"./step-CY3LQZxJ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BofpFvC7.js";import"./useElementOffset-irp2r8bU.js";import"./uniqBy-DSnL4fsO.js";import"./iteratee-BgbH2_Qr.js";import"./Cross-Cjp1Cd0j.js";import"./Rectangle-PLb_DD4F.js";import"./util-Dxo8gN5i.js";import"./Sector-CDCH7ALJ.js";import"./Symbols-BmVsZEwz.js";import"./symbol-1Eheypgy.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
