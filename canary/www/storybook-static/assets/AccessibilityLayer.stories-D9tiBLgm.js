import{r as A,R as t}from"./iframe-BuTq1GDI.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DnSJfh-P.js";import{A as E}from"./AreaChart-DHzMrKKc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BWEWc9yo.js";import{X as g}from"./XAxis-DP0H9aj2.js";import{Y as h}from"./YAxis-CWQHnkYU.js";import{A as a}from"./Area-DTcEyQlQ.js";import{T as u}from"./Tooltip-7n03uYPm.js";import{R as k}from"./zIndexSlice-nFeNXjL9.js";import{L as v}from"./Legend-B-AJ2NNh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tdUtbdK0.js";import"./resolveDefaultProps-BvjC40ji.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C8SZQKCy.js";import"./throttle-Bg_wxbeM.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B-VNUnVY.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./CartesianAxis-DubJAr-q.js";import"./Layer-BRqC8U5C.js";import"./Text-CBEIE7g5.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./Label-DQJj2wvU.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./types-CybiymHT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CQul6riI.js";import"./useAnimationId-PmZ8IQYc.js";import"./ActivePoints-D-jCEXzk.js";import"./Dot-DXKfrrZj.js";import"./Symbols-B1k2vOqr.js";import"./symbol-HuKWM0tX.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getRadiusAndStrokeWidthFromDot-B4lTyA66.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./Curve-C8MCRMFW.js";import"./step-0wDi7QEY.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./useElementOffset-F7lpUKWy.js";import"./uniqBy-DEYzcYqJ.js";import"./iteratee-BH09cOPg.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CQ0Io6Gh.js";import"./Rectangle-nbayO8Mj.js";import"./util-Dxo8gN5i.js";import"./Sector-D1ZRqP5K.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
