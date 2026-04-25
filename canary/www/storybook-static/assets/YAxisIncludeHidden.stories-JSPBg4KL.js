import{r as f,e}from"./iframe-1xuwxK0i.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DxhfNzZF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CASLlqQ3.js";import{C}from"./ComposedChart-CgqH6xmd.js";import{X as K}from"./XAxis-BKyyM-a9.js";import{L as v}from"./Legend-C_lQXiX9.js";import{B as s}from"./Bar-DtPtXrEV.js";import{R as x}from"./RechartsHookInspector-DjsmwIRA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DrIFSgXd.js";import"./Layer-HRVol_nO.js";import"./resolveDefaultProps-BeeagbIX.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./Label-EE46xwmi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7GyPaOO.js";import"./zIndexSlice-DPF7rmTT.js";import"./immer-BoNsEynp.js";import"./types-UwWXE9AL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./RechartsWrapper-5Ekcff7f.js";import"./index-DCwL0QiS.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./CategoricalChart-CiWFX2uU.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";import"./step-BCh-34yC.js";import"./useElementOffset-CwZilh1y.js";import"./uniqBy-CjLSqm-O.js";import"./iteratee-Dnw0ZN_g.js";import"./tooltipContext-DzvdVHWv.js";import"./ReactUtils-B2i9al3C.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CDdbS846.js";import"./isPlainObject-DBcZBbuh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B47wiU0M.js";import"./useAnimationId-CNQ0amde.js";import"./Trapezoid-Cr4fcElh.js";import"./Sector-2ltBV-lC.js";import"./Curve-CAhCV73Q.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./ErrorBarContext-SjXcYHyD.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./getZIndexFromUnknown-DMedtfZ6.js";import"./graphicalItemSelectors-Cmn0spIT.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
