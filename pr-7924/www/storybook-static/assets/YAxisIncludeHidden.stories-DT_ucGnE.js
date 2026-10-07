import{r as f,R as e}from"./iframe-ZTC5pSfT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-bg8Qjeqd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiW62Ghg.js";import{C as k}from"./ComposedChart-COAup3ak.js";import{X as K}from"./XAxis-Oh1yCkiB.js";import{L as v}from"./Legend-DWYZeVDs.js";import{B as a}from"./Bar-C0cbPCz5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMugnJA-.js";import"./Text-DaoB-dFq.js";import"./resolveDefaultProps-BUix77YN.js";import"./DOMUtils-DpY81Anq.js";import"./isWellBehavedNumber-6xDPwo21.js";import"./useId-PK-UNRth.js";import"./useBackwardsCompatibleTheme-DAjVS6k9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ilP_ZZPQ.js";import"./index-CzSCaBER.js";import"./index-B4ZumRW0.js";import"./RechartsWrapper-mhohCDVl.js";import"./axisSelectors-K6KGYDFF.js";import"./throttle-KrxK4z_U.js";import"./d3-scale-Cpr3RseV.js";import"./index-CIre6itI.js";import"./index-C6jgkA61.js";import"./renderedTicksSlice-2JPEuPfq.js";import"./index-BMMDR1qW.js";import"./CartesianAxis-CC0XJ4Ez.js";import"./Layer-jaIUArAZ.js";import"./types-C79EZ9QB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkfStbLb.js";import"./chartDataContext-CsGZnfHI.js";import"./CategoricalChart-Cp6s7k2U.js";import"./Symbols-BfiJXW0k.js";import"./symbol-BwSyypnn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1UlIH_L.js";import"./uniqBy-CkMt6bOR.js";import"./iteratee-Bhxot86J.js";import"./AnimatedItems-sBBBQ_aJ.js";import"./useAnimationId-BB_b0zsq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DfB4STrV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8W511PY.js";import"./tooltipContext-CfS-ziab.js";import"./RegisterGraphicalItemId-9ha_OJ2S.js";import"./ErrorBarContext-C3dRgdy-.js";import"./GraphicalItemClipPath-aJ1mq8DH.js";import"./SetGraphicalItem-C-6wJbAO.js";import"./getZIndexFromUnknown-WTK3Cawp.js";import"./useGraphicalItemIdentity-CBZHm2cX.js";import"./dataEntryStyles-BwIZ5osO.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
