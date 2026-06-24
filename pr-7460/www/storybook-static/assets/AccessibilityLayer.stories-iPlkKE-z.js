import{r as A,R as t}from"./iframe-ChdTnuJZ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BLgRXBFB.js";import{A as E}from"./AreaChart-BEdW3UyJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BN3a4K6h.js";import{X as g}from"./XAxis--3XEHI4a.js";import{Y as h}from"./YAxis-BUBRSx7t.js";import{A as a}from"./Area-DP6OtnG2.js";import{T as u}from"./Tooltip-ClIVzJrA.js";import{R as k}from"./zIndexSlice-DTuHfx_p.js";import{L as v}from"./Legend-C4C0gtl-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VmQ82j3S.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./immer-DHJNVAe2.js";import"./get-BljYdgC6.js";import"./renderedTicksSlice-IsDkktPX.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./CartesianAxis-DeJGk3LW.js";import"./Layer-CbZTDJjb.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./Label-ODDr4Kfk.js";import"./ZIndexLayer-DzezyKwN.js";import"./types-Blkff1hk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BDYJ2E_L.js";import"./useAnimationId-w9_6HKPK.js";import"./ActivePoints-zze0EoKb.js";import"./Dot-B3nzfqLK.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./getRadiusAndStrokeWidthFromDot-JQNnNq8i.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./Curve-BLJbrdKh.js";import"./step-C9h4VCgc.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CN8u0mca.js";import"./useElementOffset-EA0CDPIO.js";import"./uniqBy-XDLsRfro.js";import"./iteratee-DZC8fA35.js";import"./Cross-BR5m8PSA.js";import"./Rectangle-C4VesXv4.js";import"./util-Dxo8gN5i.js";import"./Sector-CFHu7zJj.js";import"./Symbols-kG2zlxxy.js";import"./symbol-j9t4dhdn.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
