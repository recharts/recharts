import{r as A,R as t}from"./iframe-KBGw0lyx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bx7E-Vpt.js";import{A as E}from"./AreaChart-adXrdY1U.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DDCTjppq.js";import{X as g}from"./XAxis-ok9FfAxX.js";import{Y as h}from"./YAxis-Bs_I5rsO.js";import{A as a}from"./Area-Bt3IHbk5.js";import{T as u}from"./Tooltip-DP-3tpm7.js";import{R as k}from"./zIndexSlice-C-xeYs44.js";import{L as v}from"./Legend-BIe-c_vr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcktegzB.js";import"./resolveDefaultProps-kFtONSvK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CEjenqk6.js";import"./throttle-BjGPoFhQ.js";import"./index-Db-AaMwI.js";import"./index-EF7AV5IJ.js";import"./polarAxisSelectors-BG_XMkul.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CcHRZEud.js";import"./index-DVqUNpUf.js";import"./index-BSom5vyx.js";import"./renderedTicksSlice-DZXVMt_J.js";import"./index-DTImZAxQ.js";import"./fillDefinitions-CJnfgvsJ.js";import"./CartesianChart-DKU75UBR.js";import"./ZIndexPortal-CLKXKALr.js";import"./CategoricalChart-ByWn7DI3.js";import"./CartesianAxis-ZwQJNcj_.js";import"./Layer-Du8JdPXM.js";import"./Text-CUmSOGFL.js";import"./DOMUtils-plVJ3xwD.js";import"./ZIndexLayer-BNAbNRIQ.js";import"./Label-B98IZvVF.js";import"./types-BKfndQQ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DauBxbTi.js";import"./ActivePoints-CGR7NTAp.js";import"./Dot-BPCwUkSx.js";import"./activeStyles-C4Umy--5.js";import"./useAnimationId-BAlrP4Yc.js";import"./dataEntryStyles-DZFUHLoQ.js";import"./Symbols-BD33ILFX.js";import"./symbol-BJV2xy5y.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-eP4w3gdT.js";import"./getRadiusAndStrokeWidthFromDot-Cv-NOSS3.js";import"./ActiveShapeUtils-CKM6jbR2.js";import"./Curve-r2B0eutN.js";import"./step-BbiIrKZ6.js";import"./useEffectiveDataKey-ycUHTwlw.js";import"./useElementOffset-BvetthWK.js";import"./uniqBy-T0ABjzXx.js";import"./iteratee-CiEcwEiU.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BxQg94Oo.js";import"./Rectangle-D6IFr9AJ.js";import"./util-Dxo8gN5i.js";import"./Sector-BaKJKGrn.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
