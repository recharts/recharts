import{r as A,R as t}from"./iframe-n-wQuCBi.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-QtT3UbV6.js";import{A as E}from"./AreaChart-Izs13j6n.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BtD9M2ST.js";import{X as g}from"./XAxis-CqwZgwEA.js";import{Y as h}from"./YAxis-bBYdAORl.js";import{A as a}from"./Area-BV6kUi_J.js";import{T as u}from"./Tooltip-CArPWmfs.js";import{R as k}from"./zIndexSlice-agpgazdg.js";import{L as v}from"./Legend-BXBSIHAx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--hZNEqf5.js";import"./index-Bp8i3QLZ.js";import"./index-ifJ0vXzc.js";import"./index-B670uwrn.js";import"./index-LEpyJ3u4.js";import"./throttle-DNZjDlXp.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DRvXNutS.js";import"./axisSelectors-DJGA74tj.js";import"./resolveDefaultProps-DQgAjYOa.js";import"./isWellBehavedNumber-C5T5W5WV.js";import"./d3-scale-Dq3pQP3q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1BnCtWc.js";import"./chartDataContext-BUwB3ubO.js";import"./CategoricalChart-Bn54rxv3.js";import"./CartesianAxis-BKtFBsNE.js";import"./Layer-q34S3x6j.js";import"./Text-Cnp2kl38.js";import"./DOMUtils-B9ZjPicg.js";import"./Label-1gu4eHha.js";import"./ZIndexLayer-CKoiASff.js";import"./types-DiIuPkat.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CukHfitT.js";import"./useAnimationId-CnnOw5XR.js";import"./ActivePoints-3GB3c-YC.js";import"./Dot-B6zDcllv.js";import"./RegisterGraphicalItemId-DirXNoHy.js";import"./GraphicalItemClipPath-NXqqiVYJ.js";import"./SetGraphicalItem-jej3rFoE.js";import"./getRadiusAndStrokeWidthFromDot-BrX-hwFD.js";import"./ActiveShapeUtils-D_ggCq42.js";import"./Curve-DeDi9IqD.js";import"./step-Cdwz2fUu.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D5_1BCSw.js";import"./useElementOffset-Dbda4rug.js";import"./uniqBy-CtExDG4G.js";import"./iteratee-7MnTZri1.js";import"./Cross-B2HFXlv9.js";import"./Rectangle-CrC21nkp.js";import"./util-Dxo8gN5i.js";import"./Sector-B5UKPU85.js";import"./Symbols-TALShFh1.js";import"./symbol-BUqBCutU.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
