import{r as A,R as t}from"./iframe-CSEjTzPi.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D_Dji_bW.js";import{A as E}from"./AreaChart-CjQ3LCGc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BgwHL7aZ.js";import{X as g}from"./XAxis-ClW-CKIG.js";import{Y as h}from"./YAxis-CLbub78N.js";import{A as a}from"./Area-Df2fStiw.js";import{T as u}from"./Tooltip-LNhg6TS4.js";import{R as k}from"./zIndexSlice-D_RH8zNR.js";import{L as v}from"./Legend-CxF1x0o3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./throttle-DaFWWJDR.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./d3-scale-CTeKr7fc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./Label-COqEjZup.js";import"./ZIndexLayer-CCVrkImG.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-qJPCEdb3.js";import"./useAnimationId-De2Quo8T.js";import"./ActivePoints-Qu5zqsGn.js";import"./Dot-D11hMmXw.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./getRadiusAndStrokeWidthFromDot-BWfyZwwA.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./Curve-Cbq_6U_Q.js";import"./step-DAbADZ8X.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-ClvgOOLR.js";import"./useElementOffset-BEs7c5_U.js";import"./uniqBy-CIEufAuW.js";import"./iteratee-DtUSYH1W.js";import"./Cross-CboKWFi8.js";import"./Rectangle-CxDLp35k.js";import"./util-Dxo8gN5i.js";import"./Sector-yAnx7lRE.js";import"./Symbols-CTXWaWPW.js";import"./symbol-CieHO9MS.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
