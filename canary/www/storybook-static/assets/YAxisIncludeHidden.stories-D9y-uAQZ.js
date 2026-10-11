import{r as f,R as e}from"./iframe-C9H6nb8O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DXEeaYcv.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-86DFZZsp.js";import{C as k}from"./ComposedChart-cpeiS7Qx.js";import{X as K}from"./XAxis-CywV301b.js";import{L as v}from"./Legend-DjtNBXa7.js";import{B as a}from"./Bar-iYqbsiP0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6glZLWD6.js";import"./Text-BU8Is9rY.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./pageBackground-DsggDmpK.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DL3up6PN.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./axisSelectors-CaDgI8Oc.js";import"./throttle-BnpdZ0b3.js";import"./d3-scale-BBLrtWMa.js";import"./CartesianAxis-BWYBJgMt.js";import"./Layer-DNW7nupE.js";import"./types-oEFxgIut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-DOD7xHyz.js";import"./index-d48a0T_2.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./index-ByTGeVXQ.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./Symbols-CF_zrpHv.js";import"./symbol-BDtWPoty.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KKareHqY.js";import"./uniqBy-1ZQrBMnQ.js";import"./iteratee-BR3KUAK-.js";import"./activeStyles-Dwr5_xBc.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUAtv8-f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./tooltipContext-B6G4DfLA.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getZIndexFromUnknown-Bwrut4wA.js";import"./useEffectiveDataKey-BpO8_klP.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
