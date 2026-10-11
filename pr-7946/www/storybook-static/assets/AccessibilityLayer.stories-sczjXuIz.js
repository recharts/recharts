import{r as A,R as t}from"./iframe-Cz1yxjbp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B3FIpviW.js";import{A as E}from"./AreaChart-Clq47gw3.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C2xiZsRS.js";import{X as g}from"./XAxis-DTtwNRvk.js";import{Y as h}from"./YAxis-YGbQi-tl.js";import{A as a}from"./Area-C-N5jBxs.js";import{T as u}from"./Tooltip-DIfKxzT5.js";import{R as k}from"./zIndexSlice-DX3VWAAP.js";import{L as v}from"./Legend-ASL-GeNA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNAVCaGG.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-aNzSC39T.js";import"./throttle-C8kMLDgG.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./CartesianAxis-C6EZvJj2.js";import"./Layer-DX0-A7eX.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./Label-CKYWHIAB.js";import"./ZIndexLayer-CpvAEusS.js";import"./types-CaS-TM-K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DBmoV7wT.js";import"./useAnimationId-Bstcgfr3.js";import"./dataEntryStyles-Cvogs2XX.js";import"./ActivePoints-fNvRWKnn.js";import"./Dot-FtP_Pc_K.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getRadiusAndStrokeWidthFromDot-CVKuJNBK.js";import"./ActiveShapeUtils-TTXriytS.js";import"./Curve-BuFNKnyX.js";import"./step-BxjwmJ_I.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D9IvhHId.js";import"./useElementOffset-CcHwamEz.js";import"./uniqBy-BPDtNAS2.js";import"./iteratee-DKkbZcMa.js";import"./Cross-CAFBXUU8.js";import"./Rectangle-DcCVFLvW.js";import"./util-Dxo8gN5i.js";import"./Sector-D3hQT5GS.js";import"./Symbols-886amtI8.js";import"./symbol-BehYzhqn.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
