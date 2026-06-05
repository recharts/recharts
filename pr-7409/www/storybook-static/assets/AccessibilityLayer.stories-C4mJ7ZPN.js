import{r as A,R as t}from"./iframe-COvhlo3n.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B7Y6WjOd.js";import{A as E}from"./AreaChart-CzNj4Yt8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DloNNRRy.js";import{X as g}from"./XAxis-CiJXThtt.js";import{Y as h}from"./YAxis-Xvc1KoDU.js";import{A as a}from"./Area-6-i-eYQy.js";import{T as u}from"./Tooltip-Ja36Jf75.js";import{R as k}from"./zIndexSlice-UjQyxCBO.js";import{L as v}from"./Legend-B9lRYV4R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./index-iNixOGJn.js";import"./index-DX1qvyWd.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./immer-BpCohf0r.js";import"./get-DcOFzyCK.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./CartesianAxis-s3bXG1ws.js";import"./Layer-B-6Is3nc.js";import"./Text-opN_hZQa.js";import"./DOMUtils-C6WNHbS7.js";import"./Label-Vr2WzXIC.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./types-p5b3Q5GI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DpY5jibk.js";import"./useAnimationId-BKJNFkSk.js";import"./ActivePoints-Dfm7fkiJ.js";import"./Dot-DfhacusV.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./getRadiusAndStrokeWidthFromDot-D1_dalUD.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./Curve-DZz8_CrJ.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bn7U8IOW.js";import"./useElementOffset-CQ-gJFbp.js";import"./uniqBy-CK_LJved.js";import"./iteratee-BnLCBSbQ.js";import"./Cross-CwUEY4tE.js";import"./Rectangle-WHK0iDu3.js";import"./Sector-D08ILJSY.js";import"./Symbols-C20faFIm.js";import"./symbol-Bj1Ifcbm.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
