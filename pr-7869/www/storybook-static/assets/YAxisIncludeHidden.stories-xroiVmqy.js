import{r as f,R as e}from"./iframe-DjMXRMWw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CsW9B0iy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CtOSUbKS.js";import{C as k}from"./ComposedChart-BWguOzjW.js";import{X as K}from"./XAxis-CEqdRxfv.js";import{L as v}from"./Legend-afF_4FYA.js";import{B as a}from"./Bar-BC8WEztT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-bBUf40Mc.js";import"./Text-BAKQyfL2.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./DOMUtils-C8lW23C1.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeupKQ39.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./RechartsWrapper-BnIn7gPv.js";import"./axisSelectors-CNz5a2R6.js";import"./throttle-inystY2z.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./CartesianAxis-CyNRu8rC.js";import"./Layer-CXKDxib5.js";import"./types-CHoZYlJ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./Symbols-D7EyCHsi.js";import"./symbol-CBruGsGe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jSBsXjkO.js";import"./uniqBy-l_xI2UHC.js";import"./iteratee-D1sHNf4H.js";import"./AnimatedItems-B8zijpSk.js";import"./useAnimationId-DqHnZ7Fe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-MaeOvePl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B380iXXR.js";import"./tooltipContext-BNItYnv1.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./ErrorBarContext-B-5bQ8PS.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getZIndexFromUnknown-iAknIKrC.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
