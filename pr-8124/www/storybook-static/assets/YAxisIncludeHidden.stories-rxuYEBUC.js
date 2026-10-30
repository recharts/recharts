import{r as f,R as e}from"./iframe-CO2wyIFg.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DxlVhyz4.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B1dwy21o.js";import{C as k}from"./ComposedChart-BcXhG0tA.js";import{X as K}from"./XAxis-CTUf16qw.js";import{L as v}from"./Legend-DEvqDZHP.js";import{B as a}from"./Bar-DvG8n9lo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DwmonuSB.js";import"./Text-9LTzebQz.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BTrk53y9.js";import"./throttle-Bs5LuV_m.js";import"./axisSelectors-6mrCXm_L.js";import"./d3-scale-CG4Qydf0.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BPn-EIY7.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BgaObCNr.js";import"./dataEntryStyles-DJf9CEZB.js";import"./useElementOffset-Dv8qg2LV.js";import"./uniqBy-DNvTgJdx.js";import"./iteratee-0AEmZrhj.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-ZxVwNU5Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQZYhZHi.js";import"./useAnimationId-80VZwTZw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./tooltipContext-fUkgDlwS.js";import"./ErrorBarContext-BwMCHjXJ.js";import"./activeStyles-C1uCXth5.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./getZIndexFromUnknown-0WmJRp_3.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./omit-Cno7eRU-.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
