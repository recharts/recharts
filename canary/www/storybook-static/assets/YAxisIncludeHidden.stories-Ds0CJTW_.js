import{r as f,e}from"./iframe-BBcCu4tW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DRaUq3FE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CIoNRuby.js";import{C}from"./ComposedChart-D5dvwxje.js";import{X as K}from"./XAxis-BPDxC347.js";import{L as v}from"./Legend-CkUqGqgq.js";import{B as s}from"./Bar-C7nZjoG4.js";import{R as x}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BamwTcDK.js";import"./Layer-BqjItK9e.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./Label-CVOeCU9m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7yDhLaY.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./immer-B-ffdvVM.js";import"./types-BYSx98h-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./RechartsWrapper-B_0gdr0q.js";import"./index-B4OVM0gu.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./step-CTgfjT4Z.js";import"./useElementOffset-gHkkm38f.js";import"./uniqBy-9uTsqOQj.js";import"./iteratee-CO_ekqp4.js";import"./tooltipContext-DgeciEmy.js";import"./ReactUtils-CK6hPv_Y.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./useAnimationId-Cz7XNO3G.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./Curve-kTZvT6-S.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./getZIndexFromUnknown-BR_WGFT-.js";import"./graphicalItemSelectors-DbyLxQBB.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
