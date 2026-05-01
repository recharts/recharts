import{r as f,e}from"./iframe-CG0qDtBl.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BFtNCWGe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-nJzMu5L8.js";import{C}from"./ComposedChart-D_9c7I0x.js";import{X as K}from"./XAxis-DN51EeVs.js";import{L as v}from"./Legend-BL2IEIGb.js";import{B as s}from"./Bar-fFZoaNFE.js";import{R as x}from"./RechartsHookInspector-BhrhKqGk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CFrXRlKT.js";import"./Layer-C6aCRlIK.js";import"./resolveDefaultProps-68SeDKrz.js";import"./Text-D5ILnTXV.js";import"./DOMUtils-2oBG8NIz.js";import"./Label-xzQt__ei.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_OpZUWnc.js";import"./zIndexSlice-DlNAFrb6.js";import"./immer-BaG7xZes.js";import"./types--uSAtEO5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BjAt54f-.js";import"./hooks-DK5-oMyB.js";import"./axisSelectors-Cs152sBG.js";import"./d3-scale-BKHwRxJ5.js";import"./RechartsWrapper-B645yxTo.js";import"./index-LX72MUsT.js";import"./CartesianChart-BOM1G1ij.js";import"./chartDataContext-BK7b2xjO.js";import"./CategoricalChart-gdykgj2P.js";import"./Symbols-BbHBglZG.js";import"./symbol-BC68W8wa.js";import"./step-CYBADRl-.js";import"./useElementOffset-DLWQ62qI.js";import"./uniqBy-BeGVfblk.js";import"./iteratee-MVxaMNGn.js";import"./tooltipContext-Cc1Wmu9w.js";import"./ReactUtils-B6bmemMx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-5FEmW25K.js";import"./isPlainObject-BUIBTXtZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_mXRa_P4.js";import"./useAnimationId-CKL_PQXN.js";import"./Trapezoid-DlYu-bjE.js";import"./Sector-D2vf8wF7.js";import"./Curve--tzE_BoT.js";import"./RegisterGraphicalItemId-CznzVPtc.js";import"./ErrorBarContext-BZfLXdZw.js";import"./GraphicalItemClipPath-BUh3FPdj.js";import"./SetGraphicalItem-IaY6gKdE.js";import"./getZIndexFromUnknown-CpOMKykC.js";import"./graphicalItemSelectors-BW-srwJE.js";import"./index-DjPC5fQL.js";import"./ChartSizeDimensions-BGpNAELR.js";import"./OffsetShower-D2nsT2yB.js";import"./PlotAreaShower-CPUgyAdx.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
