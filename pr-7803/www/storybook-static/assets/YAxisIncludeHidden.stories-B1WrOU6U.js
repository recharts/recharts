import{r as f,R as e}from"./iframe-CbFuLFtu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-o1yfQ20q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D_moIlDh.js";import{C as k}from"./ComposedChart-DrqR_TZs.js";import{X as K}from"./XAxis-DNc-Fb9p.js";import{L as v}from"./Legend-CzT_dOOi.js";import{B as a}from"./Bar-B21LtgKk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B0AIyR8e.js";import"./Text-Cl3vVdZy.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./DOMUtils-ac9yPFyL.js";import"./isWellBehavedNumber-I93tJShS.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLo3iEV5.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./throttle-B61_h2S2.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./CartesianAxis-DmdL1NlC.js";import"./Layer-DrMT32rq.js";import"./types-CI87_xcK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./Symbols-wEHpObTA.js";import"./symbol-DzlCbcpp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D0ssS32b.js";import"./uniqBy-qMnMoCvD.js";import"./iteratee-C1nM4-Ch.js";import"./AnimatedItems-pPCGFSQU.js";import"./useAnimationId-B7x_KCom.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDNbo7Ju.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1bQLB6k.js";import"./tooltipContext-ssaoi-NS.js";import"./RegisterGraphicalItemId-Bfab39Ve.js";import"./ErrorBarContext-u6MEnxN0.js";import"./GraphicalItemClipPath-Cc0KTnBN.js";import"./SetGraphicalItem-Ga4RFH-2.js";import"./getZIndexFromUnknown-BzNFvhEI.js";import"./useGraphicalItemIdentity-WLgpMifT.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
