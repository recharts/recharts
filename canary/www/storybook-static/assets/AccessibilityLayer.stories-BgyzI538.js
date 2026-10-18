import{r as A,R as t}from"./iframe-B3isOhIl.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DAKT1lAu.js";import{A as E}from"./AreaChart-C7MfqwmY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-radKLxBu.js";import{X as g}from"./XAxis-XCclqj4B.js";import{Y as h}from"./YAxis-DVwvC3Cs.js";import{A as a}from"./Area-D22sdLm1.js";import{T as u}from"./Tooltip-CHFsfwA0.js";import{R as k}from"./zIndexSlice-B54EHMmU.js";import{L as v}from"./Legend-FsD39S4Q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMqUbMYB.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DsO3f3GY.js";import"./throttle-twRdBhxV.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./d3-scale-C7hQHBL4.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-CTz2_SJP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./CartesianAxis-CpEPqood.js";import"./Layer-DDNmqfG8.js";import"./Text-BQG2REj-.js";import"./pageBackground-DLA1FFDB.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./Label-CVF_BzUf.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./types-BQEZ_W3y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D2IXZFhG.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./ActivePoints-YnhJh1Z3.js";import"./Dot-BukrvTYR.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./getRadiusAndStrokeWidthFromDot-iVxMWqst.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./Curve-DIW9jtlG.js";import"./step-Dv6pVXah.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./useElementOffset-Bt2O-KAE.js";import"./uniqBy-CLwCtMAQ.js";import"./iteratee-TbnSWGh6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYpdfAgk.js";import"./Rectangle-CbypY_BX.js";import"./util-Dxo8gN5i.js";import"./Sector-w4IeksJR.js";import"./Symbols-CHRhA_xc.js";import"./symbol-C0zBHoL6.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
