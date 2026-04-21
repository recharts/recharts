import{r as f,e}from"./iframe-DyvFbeiY.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-D9QZuXTS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Bn5wKa8z.js";import{C}from"./ComposedChart-DfTxnUhc.js";import{X as K}from"./XAxis-B293BcKI.js";import{L as v}from"./Legend-BRUfeLOn.js";import{B as s}from"./Bar-rQ7xe2ot.js";import{R as x}from"./RechartsHookInspector-DV82AArc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DvrkT7dv.js";import"./Layer-CpTA_ktM.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./Label-CDXCniHM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1288rIw.js";import"./zIndexSlice-Bqm6vulu.js";import"./immer-BXVzTfKp.js";import"./types-CSsXZ5tJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CJenSa8J.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./d3-scale-CNJHznva.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./Symbols-Be2vj1mX.js";import"./symbol-BvP6gztC.js";import"./step-CqS1DS8s.js";import"./useElementOffset-DDSbv75U.js";import"./uniqBy-fbRu4jMx.js";import"./iteratee-DBFGwJC_.js";import"./tooltipContext-kXsEW2x5.js";import"./ReactUtils-COq0Y09w.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BcQiGKd0.js";import"./isPlainObject-CQyTvYqF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ddgym3Wn.js";import"./useAnimationId-DwaEpfhV.js";import"./Trapezoid-vyL8C7j7.js";import"./Sector-DWMmtBrv.js";import"./Curve-BctzKEO8.js";import"./RegisterGraphicalItemId-B9D6uPLZ.js";import"./ErrorBarContext-DayA8Agl.js";import"./GraphicalItemClipPath-CYHMq85Z.js";import"./SetGraphicalItem-DiBnTnci.js";import"./getZIndexFromUnknown-lOWE9IFi.js";import"./graphicalItemSelectors-BzUrLgRa.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
