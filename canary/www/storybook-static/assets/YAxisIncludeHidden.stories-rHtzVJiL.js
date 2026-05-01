import{r as f,e}from"./iframe-C5l4DaJO.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-Bv8R6otu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-fM0600Tt.js";import{C}from"./ComposedChart-OPX83XMh.js";import{X as K}from"./XAxis-ByPIKQU1.js";import{L as v}from"./Legend-BkA5LrBA.js";import{B as s}from"./Bar-l6hJQBP2.js";import{R as x}from"./RechartsHookInspector-eKcCgGD5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DstjLvt8.js";import"./Layer-BQ7ZElOW.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./Label-CxCh3fMv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhZlyZCE.js";import"./zIndexSlice-BEG784rk.js";import"./immer-BjHWRAG8.js";import"./types-CjQ8Fnwy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";import"./step-5ABOenpE.js";import"./useElementOffset-CyBq5cT_.js";import"./uniqBy-BufKpw2a.js";import"./iteratee-CTT2mLKG.js";import"./tooltipContext-BWWA1lIS.js";import"./ReactUtils-C_GhcNSF.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BesHP-Xv.js";import"./isPlainObject-Bb91VWq3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BvzLcgoo.js";import"./useAnimationId-Ivno0Gk6.js";import"./Trapezoid-Mm7QWflE.js";import"./Sector-BXKHAeCR.js";import"./Curve-C8kgiu5F.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./ErrorBarContext-Cu_fSz69.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./getZIndexFromUnknown-DBNolwqX.js";import"./graphicalItemSelectors-DBcWBwAS.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
