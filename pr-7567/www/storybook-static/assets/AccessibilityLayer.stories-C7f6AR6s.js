import{r as A,R as t}from"./iframe-C99kJ-sM.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DWJvatn-.js";import{A as E}from"./AreaChart-D2NnXUTg.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D2bYDD2A.js";import{X as g}from"./XAxis-DIG4p09Q.js";import{Y as h}from"./YAxis-CdUPhVFa.js";import{A as a}from"./Area-Bbs6ah0D.js";import{T as u}from"./Tooltip-BaPwyXfx.js";import{R as k}from"./zIndexSlice-C3R-krej.js";import{L as v}from"./Legend-DmZlYtkV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./throttle-TD-ujZZS.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C63jCstw.js";import"./axisSelectors-D_vl6hBR.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./d3-scale-BK39mUYh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./CartesianAxis-C7o0Dblf.js";import"./Layer-DA9YNkXX.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./Label-B5axae2p.js";import"./ZIndexLayer-Cja0J2zA.js";import"./types-DQRiSjSa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-D-0ILzHR.js";import"./useAnimationId-DvmTFhVR.js";import"./ActivePoints-BMi_QsBO.js";import"./Dot-BDIAoW-L.js";import"./RegisterGraphicalItemId-BCeI4v7T.js";import"./GraphicalItemClipPath-BvRhFcbX.js";import"./SetGraphicalItem-DGSCvNHc.js";import"./getRadiusAndStrokeWidthFromDot-CycZh5GD.js";import"./ActiveShapeUtils-BBZmkA4Q.js";import"./Curve-DiBuQ3yP.js";import"./step-D8AQ14_c.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CHBC6mVJ.js";import"./useElementOffset-DU4filMB.js";import"./uniqBy-B76aatsv.js";import"./iteratee-BC4NiJFi.js";import"./Cross-BWIUPOvs.js";import"./Rectangle-CL3tFVAP.js";import"./util-Dxo8gN5i.js";import"./Sector-CLa7LOxI.js";import"./Symbols-CdZgnMQV.js";import"./symbol-DfLSr9bP.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
