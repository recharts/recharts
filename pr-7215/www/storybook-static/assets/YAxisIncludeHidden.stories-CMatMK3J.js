import{r as f,e}from"./iframe-BRNudyUC.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-LQ7YWmSW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-BDDqf68l.js";import{C}from"./ComposedChart-L_fez2fu.js";import{X as K}from"./XAxis-D5flW7iC.js";import{L as v}from"./Legend-CDmhVCDl.js";import{B as s}from"./Bar-CPkOULeV.js";import{R as x}from"./RechartsHookInspector-bCgKsqnr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BGRfLIi8.js";import"./Layer-72bRSYZY.js";import"./resolveDefaultProps-bvYT90Do.js";import"./Text-DYXt0Tk2.js";import"./DOMUtils-BUce29Ys.js";import"./Label-C0IwlP1f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqNsDADZ.js";import"./zIndexSlice-Bxbwbl5M.js";import"./immer-efUMdrFM.js";import"./types-CuUkJyrv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dd_sUH3I.js";import"./hooks-g1pwYnn9.js";import"./axisSelectors-DBRNeiSB.js";import"./d3-scale-BE1R65Yr.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-Ny_QHnuL.js";import"./index-BpzgcC1p.js";import"./CartesianChart-DtfUiseX.js";import"./chartDataContext-DWt96v8T.js";import"./CategoricalChart-BAXoX5YA.js";import"./Symbols-hkZNpq1J.js";import"./symbol-BcfkrHFP.js";import"./step-OjWirnGE.js";import"./useElementOffset-RgQmJUcl.js";import"./uniqBy-rvlhAAW8.js";import"./iteratee-Lmk9FC8H.js";import"./tooltipContext-a1yvY8Zp.js";import"./AnimatedItems-DyV65I1f.js";import"./useAnimationId-DKTA-eAm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BgG6X-fa.js";import"./isPlainObject-D-_-2woO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWclrIl5.js";import"./Trapezoid-Da1UYdj_.js";import"./Sector-D7BMvRVb.js";import"./Curve-DS1o2tEO.js";import"./RegisterGraphicalItemId-DKtlUZkV.js";import"./ErrorBarContext-D3Lj0Odf.js";import"./GraphicalItemClipPath-sl_sf-ia.js";import"./SetGraphicalItem-BMN_yPrU.js";import"./getZIndexFromUnknown-CMXRnERf.js";import"./graphicalItemSelectors-BJwrjMjb.js";import"./index-DrL1-A17.js";import"./ChartSizeDimensions-Bj0myzFp.js";import"./OffsetShower-6Jy39FxY.js";import"./PlotAreaShower-DGNr6qsk.js";const Oe={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Se=["WithIncludeHidden"];export{t as WithIncludeHidden,Se as __namedExportsOrder,Oe as default};
