import{r as f,R as e}from"./iframe-BP-lIJn6.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dyx7Nivk.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D3RgJgQF.js";import{C as k}from"./ComposedChart-Di3osW4J.js";import{X as K}from"./XAxis-D7UL0yEG.js";import{L as v}from"./Legend-CqS47HBY.js";import{B as a}from"./Bar-C4dYvTdy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-eMzNaTJc.js";import"./Text-sFd385s3.js";import"./resolveDefaultProps-BpLU83gk.js";import"./pageBackground-BxeZOm5U.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./dataEntryStyles-DtR4SG-M.js";import"./axisSelectors-B6bM08CR.js";import"./throttle-CRwrBkn8.js";import"./d3-scale-BUOxWIbI.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BGn36pC9.js";import"./index-BmFIm_LJ.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./Symbols-D9c9uDF_.js";import"./symbol-DhQfft-S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNpXiGQR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./tooltipContext-CR2ytdu7.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getZIndexFromUnknown-B-cILgbJ.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./omit-3_nqBqPj.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
