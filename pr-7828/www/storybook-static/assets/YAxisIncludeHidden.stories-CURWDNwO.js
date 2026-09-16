import{r as f,R as e}from"./iframe-yFYT_zN7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BT6AeQik.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D0SqWiCA.js";import{C as k}from"./ComposedChart-DxJEOi6H.js";import{X as K}from"./XAxis-CLVPgrfg.js";import{L as v}from"./Legend-DrIwFL3Y.js";import{B as a}from"./Bar-CbKyvXNg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-99DUDCMD.js";import"./Text-CYbp4Bob.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./DOMUtils-6VQmbUCR.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CHhs3r11.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./throttle-B6GNdBpm.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./Symbols-BWDQbWo5.js";import"./symbol-CNs_eA0A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BM0KkVoV.js";import"./uniqBy-CM-zGjqN.js";import"./iteratee-DzYgEjfZ.js";import"./AnimatedItems-Ck-1wErl.js";import"./useAnimationId-DeDzp5yx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-juKcDyre.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./tooltipContext-BQlTy0XF.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./ErrorBarContext-BZhrM93k.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getZIndexFromUnknown-Bkxaq85c.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
