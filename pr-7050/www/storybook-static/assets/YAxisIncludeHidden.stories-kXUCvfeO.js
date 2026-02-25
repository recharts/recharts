import{r as f,e}from"./iframe-BxnpLNlI.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-N3Hr219E.js";import{R as A}from"./arrayEqualityCheck-Ev4pEcaj.js";import{C}from"./ComposedChart-B09NG58-.js";import{X as K}from"./XAxis-DivYk73O.js";import{L as v}from"./Legend-BvoWLFBw.js";import{B as a}from"./Bar-CMAsTm7F.js";import{R as x}from"./RechartsHookInspector-BB1lEmoR.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-xelplfqC.js";import"./Layer-CjPvoy9w.js";import"./resolveDefaultProps-znjuu04v.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./Label-BJJgujul.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./zIndexSlice--EK8Um__.js";import"./immer-BkCi42RL.js";import"./types-gZ1RVbMB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./index-b30Cmp9V.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./Symbols-7Di5jhUy.js";import"./symbol-CNSHwdEE.js";import"./step-ClrTL6ck.js";import"./useElementOffset-qjVs9Par.js";import"./uniqBy-CKqIpa99.js";import"./iteratee-DIaIkoeV.js";import"./tooltipContext-SqfwDtSJ.js";import"./ReactUtils-BdNEbP_1.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BFvjG2KX.js";import"./isPlainObject-B1iN99vF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvUDBcr-.js";import"./useAnimationId-BkMfgj6S.js";import"./Trapezoid-BVhmBeys.js";import"./Sector-B9qkET69.js";import"./Curve-Cd2m7ztB.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./ErrorBarContext-BbpRKECp.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./getZIndexFromUnknown-CHq5gX8W.js";import"./graphicalItemSelectors-D-2Vs4Am.js";import"./index-D27xip60.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./OffsetShower-tOvUkh5S.js";import"./PlotAreaShower-IShq8O5s.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
