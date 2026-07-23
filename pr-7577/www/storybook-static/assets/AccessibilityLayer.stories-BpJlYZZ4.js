import{r as A,R as t}from"./iframe-DDIh6oSg.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Bwi8FpMM.js";import{A as E}from"./AreaChart-B_SPnskR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DZFbX-zF.js";import{X as g}from"./XAxis-BkhNyeaA.js";import{Y as h}from"./YAxis-DvaopW4j.js";import{A as a}from"./Area-qqq4KSFr.js";import{T as u}from"./Tooltip-CdVaJTp7.js";import{R as k}from"./zIndexSlice-D80Tj10e.js";import{L as v}from"./Legend-DmbCYPk7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./throttle-Bz-N2EDI.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CodWg03c.js";import"./axisSelectors-Cj35qO4m.js";import"./resolveDefaultProps-BovobWDa.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./d3-scale-DyPEX_SS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./CartesianAxis-DjQVT2FJ.js";import"./Layer-BjK-uYm4.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./Label-7ECcoRBX.js";import"./ZIndexLayer-CDkdwb16.js";import"./types-CnDlnigw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-BksUzG9w.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CiQeUF16.js";import"./useElementOffset-BTJrpw-d.js";import"./uniqBy-D9_WQstA.js";import"./iteratee-CKafh1uf.js";import"./Cross-CaKJ6mZ9.js";import"./Rectangle-BZqE5oO7.js";import"./util-Dxo8gN5i.js";import"./Sector-CxsD9MnG.js";import"./Symbols-BGmCPg1M.js";import"./symbol-CfTh4g2k.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
