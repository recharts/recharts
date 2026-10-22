import{r as f,R as e}from"./iframe-BqFv--n0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C7K0-Kt6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQSP_367.js";import{C as k}from"./ComposedChart-BGPVJCGM.js";import{X as K}from"./XAxis-Dd_n4Mfj.js";import{L as v}from"./Legend-DGzQE3-3.js";import{B as a}from"./Bar-BCGpxfEL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DI-ST-i-.js";import"./Text-BW5R7YWF.js";import"./resolveDefaultProps-D0e0pmfJ.js";import"./pageBackground-B1lJR1Eh.js";import"./isWellBehavedNumber-xy8z0j2l.js";import"./useId-Ddcb8ROb.js";import"./useBackwardsCompatibleTheme-NnVOi814.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-m5JcFv6F.js";import"./index-BLvw7yWi.js";import"./index-Bv6EKtOE.js";import"./axisSelectors-ZWEeDNRz.js";import"./throttle-u_PA2Aue.js";import"./d3-scale-CFuq5uTk.js";import"./CartesianAxis-CpohuUTj.js";import"./Layer-VP2k7KQb.js";import"./types-A41OMRS1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CjmFqNX-.js";import"./index-CDAyT67T.js";import"./index-BxavCyTA.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRaC0TZF.js";import"./index-3DQVsuvq.js";import"./CartesianChart-CWGitRSv.js";import"./chartDataContext-uAg4LOvf.js";import"./CategoricalChart-LtTngwAd.js";import"./Symbols-BFAApok9.js";import"./symbol-CKqYQjmZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DK8O9wAS.js";import"./uniqBy-BAbl3tI-.js";import"./iteratee-DOA0wS8i.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-C0pD60nL.js";import"./useAnimationId-CZ2QT6KZ.js";import"./dataEntryStyles-Ijd8738K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bht2f_LE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4w4oDN2L.js";import"./tooltipContext-DcplO9q_.js";import"./ErrorBarContext-CHaebdqW.js";import"./GraphicalItemClipPath-DlDw9PG0.js";import"./SetGraphicalItem-DarYZt9y.js";import"./getZIndexFromUnknown-DaGHmo0U.js";import"./useEffectiveDataKey-B-x1_7m_.js";import"./omit-Doolu4tT.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
