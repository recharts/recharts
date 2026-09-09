import{r as f,R as e}from"./iframe-BysHx74D.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BuISev1J.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B9_IIDSS.js";import{C as k}from"./ComposedChart-B85hU3af.js";import{X as K}from"./XAxis-Bu0Olx-M.js";import{L as v}from"./Legend-Cma8tjBf.js";import{B as a}from"./Bar-mf8qlkvb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BN43rvaR.js";import"./Text-BCrIO-O-.js";import"./resolveDefaultProps-C5vv7I0d.js";import"./DOMUtils-CXQBBarz.js";import"./isWellBehavedNumber-oHvlto0K.js";import"./useId-Bj8s3C04.js";import"./useBackwardsCompatibleTheme-Dm-8fXUv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-lKptmcsL.js";import"./index-BJxLMgN-.js";import"./index-H0SrxT4N.js";import"./RechartsWrapper-DUyJnBgS.js";import"./axisSelectors-BPfQ7z4G.js";import"./throttle-BvXCXgu9.js";import"./d3-scale-DD00swLB.js";import"./index-CB_yz375.js";import"./index-DNsScqoB.js";import"./renderedTicksSlice-3X1ncpqb.js";import"./index-r38g0wHW.js";import"./CartesianAxis-CKvkK8kD.js";import"./Layer-BF34dHnr.js";import"./types-DGXblPho.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DmPHp5IF.js";import"./chartDataContext-9O_0ckbs.js";import"./CategoricalChart-Cn_rERmH.js";import"./Symbols-CP1G2AEe.js";import"./symbol-D7fm9S_9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BInCcsaq.js";import"./uniqBy-JC9DBpsi.js";import"./iteratee-laF-f1n6.js";import"./AnimatedItems-DsYEWi_U.js";import"./useAnimationId-COzQNsPr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BgPukjWy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-OXeos-xf.js";import"./tooltipContext-DyL0Ssur.js";import"./RegisterGraphicalItemId-B5UvF8cg.js";import"./ErrorBarContext-C3rhr1lE.js";import"./GraphicalItemClipPath-D2pDNvXJ.js";import"./SetGraphicalItem-CewCaUrF.js";import"./getZIndexFromUnknown-BUi5wy88.js";import"./useGraphicalItemIdentity-rkAwppzN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
