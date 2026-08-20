import{r as A,R as t}from"./iframe-Csa_oMfm.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-eB5eedGT.js";import{A as E}from"./AreaChart-CmF9v039.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C9jBZcbI.js";import{X as g}from"./XAxis-uDV1OEUW.js";import{Y as h}from"./YAxis-tYvWvlOq.js";import{A as a}from"./Area-BJ0f1tgv.js";import{T as u}from"./Tooltip-BsrPmR3i.js";import{R as k}from"./zIndexSlice-BxquUHtq.js";import{L as v}from"./Legend-Cuf7yFuV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./throttle-CSxXhEFU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BG4FCknP.js";import"./resolveDefaultProps-Byem5JrG.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./CartesianAxis-Cukq_zeL.js";import"./Layer-BKPwema6.js";import"./Text-C_eX2bjG.js";import"./DOMUtils-BFEBcDdR.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./Label-KmPVqzrB.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./types-C6llbAwt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNlS9_lf.js";import"./useAnimationId-C2aTUSsq.js";import"./ActivePoints-CpN93VEs.js";import"./Dot-BraMSZz_.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getRadiusAndStrokeWidthFromDot-DXCwtpcK.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./Curve-BqFDmSfU.js";import"./step-o0DAusso.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B12qC28t.js";import"./useElementOffset-CbgcJIP8.js";import"./uniqBy-DJZRRRzN.js";import"./iteratee-BCfsRupd.js";import"./Cross-CvyQTzF9.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./Sector-fsmInxGH.js";import"./Symbols-B7lTBk7e.js";import"./symbol-Dua86BWe.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
