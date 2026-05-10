import{r as f,e}from"./iframe-yOl7ebEO.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BW20z882.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-UuJDb-yR.js";import{C}from"./ComposedChart-BVedwSw5.js";import{X as K}from"./XAxis-DD4YWjFw.js";import{L as v}from"./Legend-C1_1tKEj.js";import{B as s}from"./Bar-C8JmNaYE.js";import{R as x}from"./RechartsHookInspector-DtC7uthn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CqiimSqN.js";import"./Layer-DB7JxVnT.js";import"./resolveDefaultProps-Gw_jyAz4.js";import"./Text-s8nxqTbU.js";import"./DOMUtils-Co3lMGfS.js";import"./Label-CDk0YY7H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WvT2N6Nx.js";import"./zIndexSlice-PEvl5-9d.js";import"./immer-CYF84rOh.js";import"./types-DQaZd2AR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CnX-tuq-.js";import"./hooks-BE8JLfvF.js";import"./axisSelectors-B5yQSsls.js";import"./d3-scale-CZWGMAWB.js";import"./RechartsWrapper-D1ybgTyA.js";import"./index-D-Did3Jy.js";import"./CartesianChart-CI8VxjgA.js";import"./chartDataContext-DWA37a9L.js";import"./CategoricalChart-DTvKZB6u.js";import"./Symbols-h-bSBTN1.js";import"./symbol-Djg7BpVR.js";import"./step-MC0Zc_ls.js";import"./useElementOffset-CKOAcB5f.js";import"./uniqBy-DfW2rE8R.js";import"./iteratee-Du5AbuxK.js";import"./tooltipContext-Cexn3L6Y.js";import"./ReactUtils-BYuoIEUf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-aPgWLWZ7.js";import"./isPlainObject-DJR91lAO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D1lQKzhS.js";import"./useAnimationId-Fp-fdxRQ.js";import"./Trapezoid-Bo-P1Ks9.js";import"./Sector-ZE6eqjpU.js";import"./Curve-zYBm6Ox7.js";import"./RegisterGraphicalItemId-yywJB84l.js";import"./ErrorBarContext-CKGldT3Z.js";import"./GraphicalItemClipPath-BM3B2Cex.js";import"./SetGraphicalItem-BACVcxKo.js";import"./getZIndexFromUnknown-9NG5ClqC.js";import"./graphicalItemSelectors-B4GkUJpL.js";import"./index-CeoEhrnk.js";import"./ChartSizeDimensions-B292NXgO.js";import"./OffsetShower-DAwTp_Xz.js";import"./PlotAreaShower-BJre87Gs.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
