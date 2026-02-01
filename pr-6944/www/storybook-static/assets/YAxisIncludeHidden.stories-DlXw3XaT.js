import{r as f,e}from"./iframe-BJ3b3BfY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-Sk_2BRIW.js";import{Y as c}from"./YAxis-CF3zWZoV.js";import{R as A}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{C}from"./ComposedChart-BcbIeTEo.js";import{X as K}from"./XAxis-DGMxd97y.js";import{L as v}from"./Legend-Ci_rcxum.js";import{B as a}from"./Bar-Cjyt_ybL.js";import{R as x}from"./RechartsHookInspector-ORt5Hm4G.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./CartesianAxis-LraHpKTU.js";import"./Layer-B4_ys6we.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./Label-DeB84C01.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CUGD5-lC.js";import"./zIndexSlice-CWsPu_90.js";import"./types-mvH4HYXR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./RechartsWrapper-CKiG0ykq.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./Symbols-DMZSC_-N.js";import"./Curve-Kded-2mW.js";import"./useElementOffset-C8BBA2eJ.js";import"./iteratee-0l_7-KwK.js";import"./tooltipContext-DM5wBmSb.js";import"./ReactUtils-zwc7yRgu.js";import"./ActiveShapeUtils-CxNZmNtv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2kMW3VJ.js";import"./useAnimationId-PYCZu_AY.js";import"./Trapezoid-DF2tlYWx.js";import"./Sector-BHT4ZWAz.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./ErrorBarContext-C1pIVCq0.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./getZIndexFromUnknown-3ABL5tL4.js";import"./graphicalItemSelectors-DhJxRn-O.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
