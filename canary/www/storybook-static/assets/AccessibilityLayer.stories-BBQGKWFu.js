import{r as A,R as t}from"./iframe-ZxQmCvwy.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BATf_pxJ.js";import{A as E}from"./AreaChart-Cealg0IS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D02Jx2Pp.js";import{X as g}from"./XAxis-Bl2tbEmW.js";import{Y as h}from"./YAxis-B8sk4GXn.js";import{A as a}from"./Area-C99lqe1N.js";import{T as u}from"./Tooltip-Ch_z1NOA.js";import{R as k}from"./zIndexSlice-RPdwBP9f.js";import{L as v}from"./Legend-CZaLFHxf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdNFCoW6.js";import"./resolveDefaultProps-DpipilcU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWbFpFtg.js";import"./throttle-DmwvZWHb.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./index-BS98XUV2.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./CartesianAxis-D6DZF6-J.js";import"./Layer-B0D5UKjQ.js";import"./Text-BO32xjCe.js";import"./DOMUtils-CnJnyfSI.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./Label-jkryqT5d.js";import"./ZIndexLayer-CHR5usSt.js";import"./types-CAEm0sG6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNQqwiG9.js";import"./useAnimationId-BzN7QWtj.js";import"./ActivePoints-CZGIVnLi.js";import"./Dot-D5ITAbBb.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getRadiusAndStrokeWidthFromDot-DYQBE5cH.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./Curve-Bnqw1l-2.js";import"./step-BZUQ-l0Y.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";import"./Cross-DpbwQXpR.js";import"./Rectangle-BYMvNR2N.js";import"./util-Dxo8gN5i.js";import"./Sector-CUdfplpR.js";import"./Symbols-DyrvYund.js";import"./symbol-8zizbiR8.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
