import{r as A,R as t}from"./iframe-DehjRTS0.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-9t6iBSgP.js";import{A as E}from"./AreaChart-D6Vhb_su.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B3FaEnNY.js";import{X as g}from"./XAxis-Cg2bfD3w.js";import{Y as h}from"./YAxis-BGtv0j9s.js";import{A as a}from"./Area-DOhnXJp3.js";import{T as u}from"./Tooltip-RN1BeYcT.js";import{R as k}from"./zIndexSlice-Or93N-XC.js";import{L as v}from"./Legend-BNPrBsNu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRtSS_eM.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZdKwAWL.js";import"./throttle-DesffiZ0.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C22MolAx.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./CartesianAxis-CwmDOfi4.js";import"./Layer-DlT20hA_.js";import"./Text-CTuG3Uwk.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./Label-D6Z-0Dfn.js";import"./types-Be7PvpBk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DzT0ep5z.js";import"./ActivePoints-CFvg43Jt.js";import"./Dot-DF2koN3g.js";import"./activeStyles-CTG2KgqA.js";import"./useAnimationId-DcJ3b19B.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Doit17ow.js";import"./getRadiusAndStrokeWidthFromDot-B4Nwvyfh.js";import"./ActiveShapeUtils-D-equOl3.js";import"./Curve-D6YGUkKE.js";import"./step-BGdpfV3H.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./useElementOffset-DLrTCfvS.js";import"./uniqBy-B1en0uiU.js";import"./iteratee-BJM6y6Dd.js";import"./isArguments-yB-y1yaH.js";import"./Cross-sQtHeT5A.js";import"./Rectangle-B-w2oZ3J.js";import"./util-Dxo8gN5i.js";import"./Sector-BVdOU8s1.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
