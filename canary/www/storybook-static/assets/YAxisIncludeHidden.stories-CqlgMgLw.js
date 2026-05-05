import{r as f,e}from"./iframe-BhOFeZiC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CAGFb4CC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-DnvBp98Z.js";import{C}from"./ComposedChart-DQaFL75h.js";import{X as K}from"./XAxis-Bdc5EFss.js";import{L as v}from"./Legend-CsirAhly.js";import{B as s}from"./Bar-IcoLGseG.js";import{R as x}from"./RechartsHookInspector-BUgi4_6U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-gh9udAnp.js";import"./Layer-CMEMyNSg.js";import"./resolveDefaultProps-QzqnHqMr.js";import"./Text-mT-Pe3g2.js";import"./DOMUtils-BSLjJ3Qm.js";import"./Label-kJRxw-hj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cr55r242.js";import"./zIndexSlice-BPm2fRWC.js";import"./immer-CgFMCYn2.js";import"./types-DHxgD5nd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DhC-KTlH.js";import"./hooks-D-j4Szqs.js";import"./axisSelectors-CkFx7k9g.js";import"./d3-scale-Dh-KDDIZ.js";import"./RechartsWrapper-B9h8BFJy.js";import"./index-DtMnymxT.js";import"./CartesianChart-YCYGQjvu.js";import"./chartDataContext-CSdXrl--.js";import"./CategoricalChart-DeUfUCDU.js";import"./Symbols-CbytFAxU.js";import"./symbol-2PJyUenY.js";import"./step-BCxE2ASN.js";import"./useElementOffset-DF32I3Vt.js";import"./uniqBy-C6YMjNiL.js";import"./iteratee-CfuiIycf.js";import"./tooltipContext-Dn5jD_0x.js";import"./ReactUtils-CZC3rgVy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Lq8saTGY.js";import"./isPlainObject-2eWmtn-Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-S45eHrUs.js";import"./useAnimationId-DV7aFVna.js";import"./Trapezoid-ChHuSzRR.js";import"./Sector-ChjLZ5O9.js";import"./Curve-DWnWSqjG.js";import"./RegisterGraphicalItemId-C5HnpdYL.js";import"./ErrorBarContext-BThRMRD3.js";import"./GraphicalItemClipPath-Ci2rGtFq.js";import"./SetGraphicalItem-BTap-zvv.js";import"./getZIndexFromUnknown-CuFYGtwT.js";import"./graphicalItemSelectors-CHuVaFBB.js";import"./index-BzoU3jW7.js";import"./ChartSizeDimensions-BS96mFbZ.js";import"./OffsetShower-CLGJSkef.js";import"./PlotAreaShower-s_c5Y178.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
