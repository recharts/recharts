import{r as f,R as e}from"./iframe-CZvBVoM1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dm6GJj_u.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BFsaUhqg.js";import{C as k}from"./ComposedChart-CMms7XdW.js";import{X as K}from"./XAxis-BwD_71l-.js";import{L as v}from"./Legend-Dzg6CwdX.js";import{B as a}from"./Bar-Bg_bwPkp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CXH4SBDp.js";import"./Text-N_3Dav1R.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./DOMUtils-GcGnpUs3.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9FERMeL.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./throttle-DKdITuKH.js";import"./d3-scale-CYHPrWE0.js";import"./index-B6TkzWSy.js";import"./index-B9F-HAZ2.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./index-WmPIOj3u.js";import"./CartesianAxis-BSKOevSQ.js";import"./Layer-BOzNA3ZR.js";import"./types-SdWXGAN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./Symbols-BHE_jV-8.js";import"./symbol-CTZT0hZK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CrJNpn31.js";import"./uniqBy-DE6IhfWE.js";import"./iteratee-qUhlXCDP.js";import"./AnimatedItems-a9Nj57gp.js";import"./useAnimationId-CmzTxAaG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_nXXHIrs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./tooltipContext-Cc3UptJA.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./ErrorBarContext-B64_fw23.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getZIndexFromUnknown-e175LfVc.js";import"./useGraphicalItemIdentity-ftydmPqi.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
