import{r as f,R as e}from"./iframe-7RWUuhSd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-8kn4A2SS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C-1xueag.js";import{C as k}from"./ComposedChart-pOhFm8zP.js";import{X as K}from"./XAxis-C-yl8jm9.js";import{L as v}from"./Legend-GiST82uZ.js";import{B as s}from"./Bar-D9CUMc9V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVgNkXBe.js";import"./Text-C5AxehkZ.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./DOMUtils-CAVKjQcs.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./RechartsWrapper-Bxby6BNU.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./throttle-C227k_Ys.js";import"./axisSelectors-DDo2hoqB.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./CartesianAxis-DWQJI5tm.js";import"./Layer-BumiLaGI.js";import"./types-DB_EcD1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./CategoricalChart-Dy4quV1E.js";import"./Symbols-DKsKe8A2.js";import"./symbol-DIvMV5l6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BOAPUBRF.js";import"./uniqBy-CMb7Fqzi.js";import"./iteratee-0AIsNve9.js";import"./tooltipContext-CayA0wux.js";import"./AnimatedItems-awhheCod.js";import"./useAnimationId-CBjNqWHO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHtXbmZu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DetKTjsC.js";import"./RegisterGraphicalItemId-1lBEDF1k.js";import"./ErrorBarContext-CFwTRIJP.js";import"./GraphicalItemClipPath-BA1h2NiZ.js";import"./SetGraphicalItem-90z5HlWu.js";import"./getZIndexFromUnknown-BbgsTac4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Ddu4kO40.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
