import{r as f,e}from"./iframe-CIkWUaKQ.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DcHa1OqQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BBFq7eoK.js";import{C}from"./ComposedChart-Co3BTxvU.js";import{X as K}from"./XAxis-BerErBSJ.js";import{L as v}from"./Legend-CqSk1GpZ.js";import{B as s}from"./Bar-CM3PyAZ_.js";import{R as x}from"./RechartsHookInspector-BuUCbDqR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-ZLsdGGHc.js";import"./Layer-Dzvfyp4W.js";import"./resolveDefaultProps-CLDluMEp.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./Label-SHiyMzcT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUuZZhUK.js";import"./zIndexSlice-Cbu3nPXF.js";import"./immer-BHU9OU6q.js";import"./types-CPlIJWRj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BjREbE6W.js";import"./hooks-sjogQk2Y.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./useElementOffset-BM77jCWR.js";import"./uniqBy-R7vda7ns.js";import"./iteratee-BBMB1KLW.js";import"./tooltipContext-CzaA5N3V.js";import"./ReactUtils-RCeASTt3.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./useAnimationId-DBBbISIM.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Curve-Cbg_n5d0.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./getZIndexFromUnknown-Bk4g6T2D.js";import"./graphicalItemSelectors-B-8Yn4Xj.js";import"./index-C6VPi8LL.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./OffsetShower-B6J-0iMz.js";import"./PlotAreaShower-BBKrHEPi.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
