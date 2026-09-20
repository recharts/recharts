import{r as f,R as e}from"./iframe-CgFNOWkZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bn0ZQNQZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CnfPauoq.js";import{C as k}from"./ComposedChart-DAjKXGxr.js";import{X as K}from"./XAxis-Bdjd5PBO.js";import{L as v}from"./Legend-DsuBGmj6.js";import{B as a}from"./Bar-Bn0Vopfh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DM_lkfp6.js";import"./Text-BCy-48NS.js";import"./resolveDefaultProps-B5p3Q00G.js";import"./DOMUtils-BuWky4GR.js";import"./isWellBehavedNumber-Cr26aOyF.js";import"./useId-Cn22DgH8.js";import"./useBackwardsCompatibleTheme-qMLBJgjs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ZdAzMWJW.js";import"./index-hYkm-J_b.js";import"./index-DjTwooh3.js";import"./RechartsWrapper-CU75wXMo.js";import"./axisSelectors-CDnWxexV.js";import"./throttle-CwNcKmkm.js";import"./d3-scale-EAUzpRo7.js";import"./index-DlEkrCr0.js";import"./index-CIxokqwK.js";import"./renderedTicksSlice-dpz4HLD4.js";import"./index-BKLtIohb.js";import"./CartesianAxis-CE5tgyYR.js";import"./Layer-DQEpCXa4.js";import"./types-C1vo7smu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C2LWrJC3.js";import"./chartDataContext-BPHBCGRy.js";import"./CategoricalChart-DEeDNDbs.js";import"./Symbols-Dhpqo7YW.js";import"./symbol-DMRhcOQz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFZH7CAW.js";import"./uniqBy-B6NCt-4C.js";import"./iteratee-DHR339hL.js";import"./AnimatedItems-UKua_m0c.js";import"./useAnimationId-DZ6wcHPj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lr0FbpfG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CgLseHdF.js";import"./tooltipContext-BJIx6KUk.js";import"./RegisterGraphicalItemId-DQaeZdby.js";import"./ErrorBarContext-he3EC3WX.js";import"./GraphicalItemClipPath-BUB4x5xD.js";import"./SetGraphicalItem-CsabRogn.js";import"./getZIndexFromUnknown-CSaXLCzE.js";import"./useGraphicalItemIdentity-Z3uBGV6O.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
