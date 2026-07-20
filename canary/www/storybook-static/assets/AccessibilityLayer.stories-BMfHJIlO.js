import{r as A,R as t}from"./iframe-txLfFnZC.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C3txqyeK.js";import{A as E}from"./AreaChart-BmA8_7o4.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D-O2QK8Y.js";import{X as g}from"./XAxis-CUKDl1yE.js";import{Y as h}from"./YAxis-Bqp7D6OE.js";import{A as a}from"./Area-CI8jcq_m.js";import{T as u}from"./Tooltip-DkUgIqYd.js";import{R as k}from"./zIndexSlice-BxlfArAG.js";import{L as v}from"./Legend-BQxnnMgC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDYeTMp6.js";import"./index-CYC3OVnH.js";import"./index-CTiUFbNZ.js";import"./index-faRlTy-y.js";import"./index-BnBpNwbh.js";import"./throttle-q2TDx7Oc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2wSEtKv.js";import"./axisSelectors-ClpNZRSK.js";import"./resolveDefaultProps-BBYfN4li.js";import"./isWellBehavedNumber-DsLwC3LI.js";import"./d3-scale-C2Ev96_0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZzNDwaM.js";import"./chartDataContext-B9BMm3ef.js";import"./CategoricalChart-D2mtca-7.js";import"./CartesianAxis-Bpg83Llu.js";import"./Layer-DgCStFRG.js";import"./Text-CFMnT5X2.js";import"./DOMUtils-BfTHFrOm.js";import"./Label-Bg0xf_F2.js";import"./ZIndexLayer-CgOQ9duv.js";import"./types-DBwOBb8v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DXTzwQHr.js";import"./useAnimationId-BBZuCs7J.js";import"./ActivePoints-CFI3c4jj.js";import"./Dot-BIm_l5LV.js";import"./RegisterGraphicalItemId-CKNrcWiv.js";import"./GraphicalItemClipPath-CeZp1Nou.js";import"./SetGraphicalItem-ZtkOOX-3.js";import"./getRadiusAndStrokeWidthFromDot-B1a7F3Ip.js";import"./ActiveShapeUtils-CgPV4Ht_.js";import"./Curve-C5z8NQ6L.js";import"./step-Ca4h6n57.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-p5AVEwSd.js";import"./useElementOffset--duMbzsX.js";import"./uniqBy-mrq-VNPF.js";import"./iteratee-BctTBoA4.js";import"./Cross-DcMHT31L.js";import"./Rectangle-DXH6HZeC.js";import"./util-Dxo8gN5i.js";import"./Sector-B_dMD-mA.js";import"./Symbols-hsOVb6JR.js";import"./symbol-DBs6dCEX.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
