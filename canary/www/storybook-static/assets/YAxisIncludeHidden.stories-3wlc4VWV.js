import{r as f,R as e}from"./iframe-BVidFuBg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CAK7lAdx.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BVu_VJKn.js";import{C as k}from"./ComposedChart-CeoyKEhO.js";import{X as K}from"./XAxis-D6ghc140.js";import{L as v}from"./Legend-BCcfS3Kt.js";import{B as a}from"./Bar-BXuoWdGf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dkr2cH3E.js";import"./Text-B-jeJZdK.js";import"./resolveDefaultProps-BnMAchLG.js";import"./pageBackground-DWUaDsTL.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Diklw-mz.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./axisSelectors-7sszg3SW.js";import"./throttle-BSCmJhty.js";import"./d3-scale-n9zBPjXr.js";import"./CartesianAxis-B6O3GOLV.js";import"./Layer-BamX7bDZ.js";import"./types-d1h9D5Nt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-7A4GvPw3.js";import"./index-CYZL9Ecm.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./Symbols-Ce81nxL9.js";import"./symbol-B3XC6ocG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGDKGLsn.js";import"./uniqBy-DnZxk8gC.js";import"./iteratee-BSh9UVJS.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DLYfLCId.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BXXUvRMI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./tooltipContext-BqBG8QeW.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getZIndexFromUnknown-C7WzXeP1.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./omit-VTPt9SYu.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
