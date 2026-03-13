import{r as f,e}from"./iframe-BDTlfdm2.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-ClHUtMv7.js";import{R as A}from"./arrayEqualityCheck--4uVIqe7.js";import{C}from"./ComposedChart-D8FjVx7b.js";import{X as K}from"./XAxis-CGiSi9HN.js";import{L as v}from"./Legend-7N67OVKM.js";import{B as a}from"./Bar-BeDWQfR1.js";import{R as x}from"./RechartsHookInspector-CwVl35lx.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CZM1jQf4.js";import"./Layer-CqYlT3eS.js";import"./resolveDefaultProps-Czz55H-I.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./Label-VxKVkBMg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DC39aMOh.js";import"./zIndexSlice-Brj7ikm8.js";import"./immer-D4Dnjbsg.js";import"./types-D6KN9kQt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";import"./step-C4gkOhOo.js";import"./useElementOffset-nfaXeky9.js";import"./uniqBy-CASHllcH.js";import"./iteratee-DZTEQt1h.js";import"./tooltipContext-CXmFM1_D.js";import"./ReactUtils-ma75EdaK.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-ZL_pxKoe.js";import"./isPlainObject-Cnip5whK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWWR6MHC.js";import"./useAnimationId-CupwM_tg.js";import"./Trapezoid-yGMiXHgj.js";import"./Sector-ketJTAKQ.js";import"./Curve-g-MTQgVG.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./ErrorBarContext-DViBWZq0.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./getZIndexFromUnknown-C951RgiO.js";import"./graphicalItemSelectors-C9Ci8dGJ.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
