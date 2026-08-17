import{r as A,R as t}from"./iframe-5rlHu5E0.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-02LDQCPf.js";import{A as E}from"./AreaChart-B_cIectL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DMyXnhkI.js";import{X as g}from"./XAxis-QaJfpBkQ.js";import{Y as h}from"./YAxis-tXVCruoC.js";import{A as a}from"./Area-BJ_385Du.js";import{T as u}from"./Tooltip-CA8byynu.js";import{R as k}from"./zIndexSlice-Dvv9j-PL.js";import{L as v}from"./Legend-BnT-6TDw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./throttle-BEcUjoVL.js";import"./get-C2VjdU0L.js";import"./axisSelectors-XpGDVkFI.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./CartesianAxis-C1R_DLLS.js";import"./Layer-B7qTvwXJ.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./Label-dTTzfWAl.js";import"./ZIndexLayer-CC4VGBXC.js";import"./types-_FdMQlV7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CcRowb6W.js";import"./useAnimationId-9v2us4V5.js";import"./ActivePoints-uOYRpmEx.js";import"./Dot-jf28pyfo.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getRadiusAndStrokeWidthFromDot-DgCt5gXI.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./Curve-D7O-jO1k.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";import"./useElementOffset-BaEggssM.js";import"./uniqBy-DHtefDuc.js";import"./iteratee-Ckui7P-a.js";import"./Cross-BmUo9Dmn.js";import"./Rectangle-asU9eCg1.js";import"./util-Dxo8gN5i.js";import"./Sector-Czfvu02u.js";import"./Symbols-1osrxW7y.js";import"./symbol-tLvvDe7R.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
