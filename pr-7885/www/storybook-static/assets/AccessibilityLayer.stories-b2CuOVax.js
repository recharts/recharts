import{r as A,R as t}from"./iframe-qocy1DQe.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-RUoVj2HF.js";import{A as E}from"./AreaChart-CIj1Gsu6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Bn_feOmx.js";import{X as g}from"./XAxis-DVDwgnrS.js";import{Y as h}from"./YAxis-BEBc8eQo.js";import{A as a}from"./Area-1dj1ecsA.js";import{T as u}from"./Tooltip-Bcd_DoaB.js";import{R as k}from"./zIndexSlice-3RvOLzet.js";import{L as v}from"./Legend-DA5yP-XS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Br0BGP0j.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DDRTV0S0.js";import"./throttle-DL_zA7f1.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./Label-CT_NLtkb.js";import"./ZIndexLayer-CFBos5HM.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./ActivePoints-DmiMFqmD.js";import"./Dot-j6skezxs.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getRadiusAndStrokeWidthFromDot-B1njTj3P.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./Curve-DAl3IIzp.js";import"./step-nn4oKmLh.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./useElementOffset-DSPtK0Is.js";import"./uniqBy-Cc5U2Waj.js";import"./iteratee-ptocMwcL.js";import"./Cross-BrlK3Sp8.js";import"./Rectangle-DbjotOaB.js";import"./util-Dxo8gN5i.js";import"./Sector-vivS8vte.js";import"./Symbols-Bit0cCtP.js";import"./symbol-DVcwhidU.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
