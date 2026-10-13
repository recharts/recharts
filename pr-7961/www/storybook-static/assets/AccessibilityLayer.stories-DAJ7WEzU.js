import{r as A,R as t}from"./iframe-FwppTpHM.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B8bgAvdx.js";import{A as E}from"./AreaChart-C-4SwO49.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-_rwk_E_z.js";import{X as g}from"./XAxis-Dfnm77SQ.js";import{Y as h}from"./YAxis-XAPAfHiU.js";import{A as a}from"./Area-D-SbpP9V.js";import{T as u}from"./Tooltip-SXtiBwJi.js";import{R as k}from"./zIndexSlice-Cdyw1_Nw.js";import{L as v}from"./Legend-BcBtqqIv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dkm03yWw.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CYDcyh2t.js";import"./throttle-DynP12Or.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./d3-scale-CvbHukpk.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-BJCItLgT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./CartesianAxis-DkQ_2z38.js";import"./Layer-RexR8ZVM.js";import"./Text-BHYGaRJX.js";import"./pageBackground-b_qu_h6D.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./Label-CAlmg9Ax.js";import"./ZIndexLayer-DRZokez8.js";import"./types-X--Y4OUw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BjBEPVwb.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./ActivePoints-Dq2ONYdH.js";import"./Dot-DDum5Zjk.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getRadiusAndStrokeWidthFromDot-C9HuDRcP.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./Curve-DWgCdSwb.js";import"./step-CMSN2AEQ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-edM5h020.js";import"./useElementOffset-mqvu6iZU.js";import"./uniqBy-Dj9uXd3I.js";import"./iteratee-BHQWYI0c.js";import"./Cross-DhY-NKVD.js";import"./Rectangle-Cyh7rUiN.js";import"./util-Dxo8gN5i.js";import"./Sector-Ck-sJF4z.js";import"./Symbols-X-h3Ju16.js";import"./symbol-HKos3qGF.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
