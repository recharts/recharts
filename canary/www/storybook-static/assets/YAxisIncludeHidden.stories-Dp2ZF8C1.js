import{r as f,e}from"./iframe-DRAz-MOV.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Exnm2m07.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-C8643F2b.js";import{C}from"./ComposedChart-O_-CVA72.js";import{X as K}from"./XAxis-LfLbW5h3.js";import{L as v}from"./Legend-DAlheZF3.js";import{B as s}from"./Bar-hmNj8iwp.js";import{R as x}from"./RechartsHookInspector-ZnBZyL4x.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BEMLBmX5.js";import"./Layer-7ou2jnr2.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./Label-BA834Vai.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQfiKj8k.js";import"./zIndexSlice-QFEsuJ_i.js";import"./immer-7dbUwIWB.js";import"./types-BHj1SP9z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C3sDnISd.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./useElementOffset-Buqr-Q9u.js";import"./uniqBy-C7Z_8_ul.js";import"./iteratee-BbZqSogb.js";import"./tooltipContext-B5MALdI6.js";import"./ReactUtils-C_AD8QSo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIlVtzFE.js";import"./useAnimationId-CSxRZUsd.js";import"./Trapezoid-i_eTbcia.js";import"./Sector-BFFY6GnN.js";import"./Curve-rCu2vvgU.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./getZIndexFromUnknown-CboP9gqs.js";import"./graphicalItemSelectors-D37AROR-.js";import"./index-CJqTRlWb.js";import"./ChartSizeDimensions-B-YSta_X.js";import"./OffsetShower-DVMilrOo.js";import"./PlotAreaShower-B89WvJSc.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
