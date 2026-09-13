import{r as A,R as t}from"./iframe-D3DZ11bG.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CV7c6-M5.js";import{A as E}from"./AreaChart-CToxIOrq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dbs6Ozeh.js";import{X as g}from"./XAxis-BAFnXrYz.js";import{Y as h}from"./YAxis-BVoshuZP.js";import{A as a}from"./Area-CeuYXpHb.js";import{T as u}from"./Tooltip-A_X7ULMD.js";import{R as k}from"./zIndexSlice-koFSVmIS.js";import{L as v}from"./Legend-Ca-gTBq5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2mvRmank.js";import"./resolveDefaultProps-BrEHrPl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkLxkidb.js";import"./throttle-DvSgxNGl.js";import"./index-DAXiWeRu.js";import"./index-DCVZlAXE.js";import"./isWellBehavedNumber-DgENaxxs.js";import"./d3-scale-7R73k4zX.js";import"./index-DunVsAad.js";import"./index-B2DufawG.js";import"./renderedTicksSlice-Z6YIazxJ.js";import"./index-DCmUTN9n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cp3-TDst.js";import"./chartDataContext-D1-Rpxku.js";import"./CategoricalChart-I8UNjAYq.js";import"./CartesianAxis-CFVJgng7.js";import"./Layer-CwzWBsuX.js";import"./Text-C7ib1IN2.js";import"./DOMUtils-oxRtXime.js";import"./useId-CgLLCsym.js";import"./useBackwardsCompatibleTheme-s53ki85_.js";import"./Label-Bbim0zl5.js";import"./ZIndexLayer-DQIxNGdf.js";import"./types-D0iIZkpY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-pWsx1jF-.js";import"./useAnimationId-CJPwsDgU.js";import"./ActivePoints-DfCGR7pV.js";import"./Dot-Cjsgvwdl.js";import"./RegisterGraphicalItemId-BuIVKkOb.js";import"./GraphicalItemClipPath-B4npPoNm.js";import"./SetGraphicalItem-DA1q5iTH.js";import"./getRadiusAndStrokeWidthFromDot-BebdBJmz.js";import"./ActiveShapeUtils-B-ZLq9Vo.js";import"./Curve-CA5Po7Op.js";import"./step-rY0xOYgJ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B9okNIr3.js";import"./useElementOffset-v6QQZTKl.js";import"./uniqBy-B2eJUSMl.js";import"./iteratee-Dd_Q50jQ.js";import"./Cross-BY3g3CmJ.js";import"./Rectangle-B3_YmP4-.js";import"./util-Dxo8gN5i.js";import"./Sector-DJTbMFCl.js";import"./Symbols-BmiRNSoU.js";import"./symbol-ewDroYQf.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
