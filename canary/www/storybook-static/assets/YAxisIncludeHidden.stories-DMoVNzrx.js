import{r as f,R as e}from"./iframe-B0MhV86h.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-fXjE14Qf.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-JhYmjiRs.js";import{C as k}from"./ComposedChart-Bh5N048-.js";import{X as K}from"./XAxis-mSUHawKI.js";import{L as v}from"./Legend-DAtiCdh9.js";import{B as a}from"./Bar-BIS-_b0V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DtBWxW0-.js";import"./Text-03E8A-Bw.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./pageBackground-qvgCZBpb.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OiTLfYLd.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./axisSelectors-CrrgMfKB.js";import"./throttle-BiG1uYFs.js";import"./d3-scale-CR10n00v.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B_6wPZYR.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./Symbols-DZiZJLI3.js";import"./symbol-aWmrJ5x4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3PGtHdN.js";import"./uniqBy-C-fLvMH7.js";import"./iteratee-Czlzoku_.js";import"./activeStyles-DryRBlXh.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJdwGJ58.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./tooltipContext-D_fCCGhd.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getZIndexFromUnknown-BBex5duD.js";import"./useEffectiveDataKey-DkWEBp9n.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
