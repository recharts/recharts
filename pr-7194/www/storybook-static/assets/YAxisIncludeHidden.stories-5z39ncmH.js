import{r as f,e}from"./iframe-C4ae8FtK.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BwAcKPAC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-lfrA5Bq2.js";import{C}from"./ComposedChart-ZcgyiIbi.js";import{X as K}from"./XAxis-D-4HgMe7.js";import{L as v}from"./Legend-BdA3SfnJ.js";import{B as s}from"./Bar-PvtMDXCV.js";import{R as x}from"./RechartsHookInspector-BUlLV83W.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-2J4hk8WJ.js";import"./Layer-N4FzZ7QF.js";import"./resolveDefaultProps-CeAK8DLj.js";import"./Text-CIi3nsya.js";import"./DOMUtils-Ds2y4XHZ.js";import"./Label-DBvzFRUp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cm0MOpfC.js";import"./zIndexSlice-CgotL-NA.js";import"./immer-JFltD55q.js";import"./types-C9HDIMgp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cj9ny3Ly.js";import"./hooks-CXUA9yEr.js";import"./axisSelectors-DobMcDEZ.js";import"./d3-scale-Bqdags1w.js";import"./RechartsWrapper-tTigpQ5n.js";import"./index-BAPPw7tY.js";import"./CartesianChart-DasFBtUo.js";import"./chartDataContext-DPN8Z90E.js";import"./CategoricalChart-D917O6MX.js";import"./Symbols-CuAJ11rV.js";import"./symbol-BxTsEubx.js";import"./step-ycAKK8HO.js";import"./useElementOffset-CieEfFFN.js";import"./uniqBy-CvZhzRu8.js";import"./iteratee-BegIMKsU.js";import"./tooltipContext-xQWUTslI.js";import"./ReactUtils-DyI5Xl8b.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CpUyToQw.js";import"./isPlainObject-NFlPGfOx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-36uwRJjR.js";import"./useAnimationId-DYnPgr1F.js";import"./Trapezoid-PDWBfkS4.js";import"./Sector-CiJRQ-kP.js";import"./Curve-DBFjwflq.js";import"./RegisterGraphicalItemId-CypQFo50.js";import"./ErrorBarContext-BJJjhQzu.js";import"./GraphicalItemClipPath-DrPrMemX.js";import"./SetGraphicalItem-C5fi9q2Q.js";import"./getZIndexFromUnknown-Dln3iDql.js";import"./graphicalItemSelectors-VawM8fXn.js";import"./index-DYmzarGE.js";import"./ChartSizeDimensions-DrJNk4HA.js";import"./OffsetShower-CscpLTCd.js";import"./PlotAreaShower-LJKqGtZ8.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
