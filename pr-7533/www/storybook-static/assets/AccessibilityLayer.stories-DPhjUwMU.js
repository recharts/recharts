import{r as A,R as t}from"./iframe-HmoKwHFX.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DNBXzl8_.js";import{A as E}from"./AreaChart-C8n_vw_l.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BGdl-ZHp.js";import{X as g}from"./XAxis-Ckpvg_aw.js";import{Y as h}from"./YAxis-BdeggP_Q.js";import{A as a}from"./Area-TawRDwfL.js";import{T as u}from"./Tooltip-DqJA5ZS1.js";import{R as k}from"./zIndexSlice-6UlwHzZx.js";import{L as v}from"./Legend-Dzt5tM9m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./throttle-CggiDJGE.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./axisSelectors-BQeYBj0I.js";import"./resolveDefaultProps-BgbskIps.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./d3-scale-BDs_cJTc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";import"./CartesianAxis-sk3D75Jf.js";import"./Layer-DCuDnFq8.js";import"./Text-CF2LDoBf.js";import"./DOMUtils-DNQlLACq.js";import"./Label-COwIarxU.js";import"./ZIndexLayer-wTJ88r9x.js";import"./types-DRVdcYGb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BP2JMedo.js";import"./useAnimationId-C1cJfoVB.js";import"./ActivePoints-Dx7sR-Q2.js";import"./Dot-FYCRb0hm.js";import"./RegisterGraphicalItemId-YabdkJxn.js";import"./GraphicalItemClipPath-DDhZ52Wg.js";import"./SetGraphicalItem-R8P5CdUS.js";import"./getRadiusAndStrokeWidthFromDot-BxzB0c_Y.js";import"./ActiveShapeUtils-0piQNROf.js";import"./Curve-C2csUcTT.js";import"./step-BqUqaVR3.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-XBEF56zP.js";import"./useElementOffset-Ro_1jCxs.js";import"./uniqBy-Bi13QdTJ.js";import"./iteratee-CbkCzpv6.js";import"./Cross-BWQGQ4KC.js";import"./Rectangle-Dl7k0A5Q.js";import"./util-Dxo8gN5i.js";import"./Sector-BTOnlSGV.js";import"./Symbols-B-ewiTIH.js";import"./symbol-nhwXymzI.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
