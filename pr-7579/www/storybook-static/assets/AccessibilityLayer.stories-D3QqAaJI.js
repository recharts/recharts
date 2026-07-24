import{r as A,R as t}from"./iframe-Bfq89VA1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DVfhgAYP.js";import{A as E}from"./AreaChart-BDf_FRl-.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CUD_IRpk.js";import{X as g}from"./XAxis-XWWA5Vcg.js";import{Y as h}from"./YAxis-BKOVychP.js";import{A as a}from"./Area-sDsP5-C0.js";import{T as u}from"./Tooltip-DsAve4cr.js";import{R as k}from"./zIndexSlice-CIiurCy7.js";import{L as v}from"./Legend-BUmlfFwj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./throttle-D9Dxi9p7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./d3-scale-DNdF6BGI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./Label-TzQ05lix.js";import"./ZIndexLayer-BNbeMphj.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-u8tbY5MQ.js";import"./useAnimationId-nFx4hlTa.js";import"./ActivePoints-BuFY0qPt.js";import"./Dot-CdihK_4o.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./getRadiusAndStrokeWidthFromDot-SR9W1edy.js";import"./ActiveShapeUtils-DWYip-It.js";import"./Curve-DuW3zwTN.js";import"./step-De5xdkMr.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CUTgWtLp.js";import"./useElementOffset-JKh4KBSu.js";import"./uniqBy-Bd3SP3U8.js";import"./iteratee-C88R0o-M.js";import"./Cross-D285--m4.js";import"./Rectangle-TJ7hJnR0.js";import"./util-Dxo8gN5i.js";import"./Sector-Bf9g04ER.js";import"./Symbols-sZizIm6P.js";import"./symbol-mIOUQ11t.js";const St={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
