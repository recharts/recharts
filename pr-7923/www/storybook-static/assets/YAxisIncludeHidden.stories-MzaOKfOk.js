import{r as f,R as e}from"./iframe-wyV1OFJQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Vd3tzgVC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0AwT1g9-.js";import{C as k}from"./ComposedChart-CBisthEs.js";import{X as K}from"./XAxis-C5gx8h5c.js";import{L as v}from"./Legend-GgjS0V5G.js";import{B as a}from"./Bar-DRzxAS_l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DI-dZ1Mj.js";import"./Text-LrIwM5Ef.js";import"./resolveDefaultProps-ChoAHX7J.js";import"./DOMUtils-CMxfKpC9.js";import"./isWellBehavedNumber-DZ7NyhtT.js";import"./useId-CyB1NCIB.js";import"./useBackwardsCompatibleTheme-DPV1EzeF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--FDGDHLw.js";import"./index-D2dSqbX-.js";import"./index-DF9BGNcn.js";import"./RechartsWrapper-0u6nGOPN.js";import"./axisSelectors-DUKM8TOz.js";import"./throttle-CUUK7_-R.js";import"./d3-scale-BCMPgSvY.js";import"./index-ZiSf6-0W.js";import"./index-BMAJF2wT.js";import"./renderedTicksSlice-B5WYeoae.js";import"./index-DnbQaRSG.js";import"./CartesianAxis-C_-7YUyD.js";import"./Layer-C6HNy6Ts.js";import"./types-Df9zKJ57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-wU-_7i2L.js";import"./chartDataContext-BFbqUx5W.js";import"./CategoricalChart-CYyVEG_Z.js";import"./Symbols-BPY8-Kj_.js";import"./symbol-2v4hKg1J.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WnBYc90z.js";import"./uniqBy-BDxcmCyA.js";import"./iteratee-KwxnxvYa.js";import"./AnimatedItems-9EcBcc8f.js";import"./useAnimationId-BF1AH8CU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKwfFBjt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6GHKFv-.js";import"./tooltipContext-DaA9OC3q.js";import"./RegisterGraphicalItemId-_B2FfK6k.js";import"./ErrorBarContext-D8mz_gNG.js";import"./GraphicalItemClipPath-Txs2MFfL.js";import"./SetGraphicalItem-DW8cLaxQ.js";import"./getZIndexFromUnknown-BvxD1Adi.js";import"./useGraphicalItemIdentity-gmKXJpLw.js";import"./dataEntryStyles-Cct3OjzK.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
