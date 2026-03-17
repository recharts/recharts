import{r as f,e}from"./iframe-N_BxlBi6.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-DsllJpGC.js";import{R as A}from"./arrayEqualityCheck-CEf0Nn8K.js";import{C}from"./ComposedChart-CWKNFmv2.js";import{X as K}from"./XAxis-kOfNYCLV.js";import{L as v}from"./Legend-D89IvT-l.js";import{B as a}from"./Bar--jh8HQHZ.js";import{R as x}from"./RechartsHookInspector-DfDmhGgp.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bz8y1rju.js";import"./Layer-BGFLosQF.js";import"./resolveDefaultProps-2ILCf7-n.js";import"./Text-Pl8FjWNp.js";import"./DOMUtils-DL6CcFbu.js";import"./Label-DSedETU8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4oG6gqW.js";import"./zIndexSlice-Dwnmzy4_.js";import"./immer-m4imqOCY.js";import"./types-BHZ13L2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-grNcr2K9.js";import"./hooks-DU7HquZl.js";import"./axisSelectors-BasHfAyu.js";import"./d3-scale-DrFqqVTo.js";import"./RechartsWrapper-CgEBdM7G.js";import"./index-BJgTJKw_.js";import"./CartesianChart-DhdcO3Tw.js";import"./chartDataContext-B8JcpkdW.js";import"./CategoricalChart-DO4JOSMM.js";import"./Symbols-CsUc_eaQ.js";import"./symbol-B52iyaxv.js";import"./step-Dwb2wnB2.js";import"./useElementOffset-drVnHBTv.js";import"./uniqBy-ClVVrVdj.js";import"./iteratee-T_aYBY_u.js";import"./tooltipContext-NZFCbgKJ.js";import"./ReactUtils-Bc5QD6WP.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D2jvcwVW.js";import"./isPlainObject-e5Vt2T8p.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0p8YhE4.js";import"./useAnimationId-CZd_sIsZ.js";import"./Trapezoid-C5EqpCxF.js";import"./Sector-BfcxVEhG.js";import"./Curve-BzBcZROj.js";import"./RegisterGraphicalItemId-DW71PThT.js";import"./ErrorBarContext-C2YvqoiQ.js";import"./GraphicalItemClipPath-D270ZFS9.js";import"./SetGraphicalItem-BUxGEWkq.js";import"./getZIndexFromUnknown-DcKMZ7RM.js";import"./graphicalItemSelectors-v1uMMfDU.js";import"./index-PFvsiB8w.js";import"./ChartSizeDimensions-BbCILWBg.js";import"./OffsetShower-_4Zo9ctC.js";import"./PlotAreaShower-DcYSYMnm.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
