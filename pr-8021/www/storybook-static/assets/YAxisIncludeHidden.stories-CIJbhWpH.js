import{r as f,R as e}from"./iframe-TJn1iDy_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BwpngE3S.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DcxCrJas.js";import{C as k}from"./ComposedChart-CjLYC499.js";import{X as K}from"./XAxis-B_y5feDu.js";import{L as v}from"./Legend-PfieIbyg.js";import{B as a}from"./Bar-D49dhmc6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOD1E2dd.js";import"./Text-Lhe6e02h.js";import"./resolveDefaultProps-B1uePsee.js";import"./pageBackground-CtZ35NZS.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qm_XHo-2.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./axisSelectors-BRmQ6VbT.js";import"./throttle-boe4gmWF.js";import"./d3-scale-VVBOPfYG.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CGWm-04h.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./Symbols-D6Gufs_M.js";import"./symbol-BnJbKXnp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ByIXs8dn.js";import"./uniqBy-D8c_4GJh.js";import"./iteratee-uwfmLxFV.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-C-8W4HoU.js";import"./useAnimationId-BdprCSjI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bx76BAa_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./tooltipContext-CAG3SHWZ.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./ErrorBarContext-B5z72jnv.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getZIndexFromUnknown-CxY-_PC9.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./omit-BUNnoJpW.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
