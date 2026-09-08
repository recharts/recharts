import{r as A,R as t}from"./iframe-CDv_hnlf.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-I6fWeSu7.js";import{A as E}from"./AreaChart-C1-EFPRY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CU4Th975.js";import{X as g}from"./XAxis-Cn9K5n4J.js";import{Y as h}from"./YAxis-Dphgoyab.js";import{A as a}from"./Area-CawR9IjF.js";import{T as u}from"./Tooltip-CrE7Z-T6.js";import{R as k}from"./zIndexSlice-8EbRQ5DZ.js";import{L as v}from"./Legend-Bim0FPrU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-lM1IufFg.js";import"./resolveDefaultProps-CImqyn8n.js";import"./get-C2VjdU0L.js";import"./axisSelectors-FUoH9jZO.js";import"./throttle-RrwSa6SL.js";import"./index-ymtmGnRC.js";import"./index-Qa9FghTo.js";import"./isWellBehavedNumber-ipIh2BqD.js";import"./d3-scale-8ktJJOVD.js";import"./index-EK-QJAGk.js";import"./index-7-TwA9Wc.js";import"./renderedTicksSlice-Cgj9tABh.js";import"./index-BJASh04Q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CW2SUDgI.js";import"./chartDataContext-C0h1ipKh.js";import"./CategoricalChart-BMDkLrmt.js";import"./CartesianAxis-Cub9Ba5o.js";import"./Layer-DzpNGvR7.js";import"./Text-g_z1pfXY.js";import"./DOMUtils-FVC4l968.js";import"./useId-M-A2L6Xg.js";import"./useBackwardsCompatibleTheme-HAgk0scL.js";import"./Label-BE6rd0_D.js";import"./ZIndexLayer-Drc_0i_v.js";import"./types-BoP1bnqQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BKW3YVwF.js";import"./useAnimationId-DiRDlhkC.js";import"./ActivePoints-BsN3X_AV.js";import"./Dot-CdPH0Qt5.js";import"./RegisterGraphicalItemId-CNR4K2Kh.js";import"./GraphicalItemClipPath-BRvY79JN.js";import"./SetGraphicalItem-CbnjD7Sn.js";import"./getRadiusAndStrokeWidthFromDot-CqH6eDG0.js";import"./ActiveShapeUtils-D2gPOJru.js";import"./Curve-CUN9zty4.js";import"./step-LibK8RJE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-kcsvF8X3.js";import"./useElementOffset-Ctn7gXwm.js";import"./uniqBy-Dewbdz2d.js";import"./iteratee-BhDG6mCi.js";import"./Cross-Rnva37v6.js";import"./Rectangle-IbtOhjas.js";import"./util-Dxo8gN5i.js";import"./Sector-CjBiSYix.js";import"./Symbols-DiD62FEu.js";import"./symbol-BE1vvOHB.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
