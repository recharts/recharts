import{r as f,e}from"./iframe-DTYvDHnt.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-D1_iMkgA.js";import{R as A}from"./arrayEqualityCheck-1nsmynxr.js";import{C}from"./ComposedChart-3AuQ4-dj.js";import{X as K}from"./XAxis-D4mtTZaA.js";import{L as v}from"./Legend-B3c3MSV6.js";import{B as a}from"./Bar-DanlCo5l.js";import{R as x}from"./RechartsHookInspector-Pg_EkWGi.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BvJIB3EW.js";import"./Layer-D1ZUQvW9.js";import"./resolveDefaultProps-DkSqodrF.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./Label-Dl6pWHvn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhriUgdb.js";import"./zIndexSlice-CBk7l9Bz.js";import"./immer-D3GAE1ff.js";import"./types-JQYj2LUa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./RechartsWrapper-C_fFV3co.js";import"./index-B3wSVZ9D.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./step-CL79bITl.js";import"./useElementOffset-C3QFuFW6.js";import"./uniqBy-Cx8gc7BP.js";import"./iteratee-DofHrmgf.js";import"./tooltipContext-BoDWUbo_.js";import"./ReactUtils-C-Mw6kzE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./useAnimationId-CwNlC5fD.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./Curve-D1NGPsms.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./ErrorBarContext-C4u9P8TO.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./getZIndexFromUnknown-Ds77s1AT.js";import"./graphicalItemSelectors-xdRnjXRN.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
