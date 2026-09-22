import{r as f,R as e}from"./iframe-CsUJaUxM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-oUxgU8a1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DR8GOdx_.js";import{C as k}from"./ComposedChart-v1mD6g8I.js";import{X as K}from"./XAxis-CECMNFnt.js";import{L as v}from"./Legend-BqCds3GH.js";import{B as a}from"./Bar-Cr46TUoL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BBIMhlH3.js";import"./Text-Ca7ex0z4.js";import"./resolveDefaultProps-wCngT9vT.js";import"./DOMUtils-DV9i-gvX.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./axisSelectors-CPJkZcPs.js";import"./throttle-jYQKZYpr.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./CartesianAxis-DGUFe4-P.js";import"./Layer-BL2WKRfB.js";import"./types-DY32nFAv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./Symbols-CM0b_dES.js";import"./symbol-COICJbUr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C_sTQTtU.js";import"./uniqBy-BPwJ3JcN.js";import"./iteratee-BC6ZgAay.js";import"./AnimatedItems-BwJboHDv.js";import"./useAnimationId-CIIiKuIL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6D4yI4Z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./tooltipContext-BrSxZE8t.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./ErrorBarContext-BOrR3fwL.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./getZIndexFromUnknown-K33HfHmy.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
