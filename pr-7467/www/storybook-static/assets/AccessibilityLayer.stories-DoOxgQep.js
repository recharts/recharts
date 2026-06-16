import{r as A,R as t}from"./iframe-CnwzBkds.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C1DfHVp4.js";import{A as E}from"./AreaChart-CTKnyW2m.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DaDbM5c8.js";import{X as g}from"./XAxis-DbvG2C4p.js";import{Y as h}from"./YAxis-iu19I_Qe.js";import{A as a}from"./Area-DJp0gNn5.js";import{T as u}from"./Tooltip-Cuy3FLW2.js";import{R as k}from"./zIndexSlice-BpzqiTUQ.js";import{L as v}from"./Legend-DFydtYns.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./immer-BZhv9pDN.js";import"./get-B8n4OfLY.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./Label-CslQeHKW.js";import"./ZIndexLayer-C4T4UXDK.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Cm-dfr_1.js";import"./useAnimationId-_xLlXMao.js";import"./ActivePoints-PwKQf3Tu.js";import"./Dot-ChNZRKCC.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./getRadiusAndStrokeWidthFromDot-BA9mIRYp.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./Curve-BxBABYqk.js";import"./step-DoliEjqo.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-YedpX9x1.js";import"./useElementOffset-C-r6gAvG.js";import"./uniqBy-IJ-29Nzx.js";import"./iteratee-5Of9wb96.js";import"./Cross-C2nHJKOr.js";import"./Rectangle-DprBphTu.js";import"./Sector-6vHddUUb.js";import"./Symbols-mZFtFIg9.js";import"./symbol-B9Aqc_CJ.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
