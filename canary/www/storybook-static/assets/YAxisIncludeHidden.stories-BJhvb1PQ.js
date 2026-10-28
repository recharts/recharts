import{r as f,R as e}from"./iframe-v0-Os2yM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CgkQKIAn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-_iZ3OTIR.js";import{C as k}from"./ComposedChart-COVjVMYb.js";import{X as K}from"./XAxis-DNiYKSvx.js";import{L as v}from"./Legend-Cwc7Q_ts.js";import{B as a}from"./Bar-D9eXHCrx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DI0UjsSd.js";import"./Text-CJd7Lo81.js";import"./resolveDefaultProps-BcTNVKvX.js";import"./pageBackground-BMquVDd2.js";import"./ZIndexLayer-CZxM3zqX.js";import"./index-CjGezUyu.js";import"./index-DwxXslvM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bp8G6CJB.js";import"./throttle-CSC07CA1.js";import"./axisSelectors-Db_FhKX_.js";import"./d3-scale-Dv-uHWFd.js";import"./CartesianAxis-BkO3xjcX.js";import"./Layer--oy12MjQ.js";import"./types-BJeT-aZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Z7zIrOC1.js";import"./index-DjMmN7uR.js";import"./index-COci_OUD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DpMxjJPI.js";import"./index-ClZJ5H50.js";import"./CartesianChart-CSMk8NrA.js";import"./ZIndexPortal-IUufwUyf.js";import"./CategoricalChart-DUPn6ZbT.js";import"./Symbols-Cw6oiD0A.js";import"./symbol-DlOomsec.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7YVK8J4.js";import"./uniqBy-l27jBtp-.js";import"./iteratee-C2U1tTrM.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-lSE4rpjb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4C7r0Pi.js";import"./useAnimationId-CXPH24GZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRXSym3E.js";import"./tooltipContext-DyQkeChB.js";import"./dataEntryStyles-DfwnSxIB.js";import"./ErrorBarContext-Dj2syV2g.js";import"./activeStyles-CbGGlVk2.js";import"./SetGraphicalItem-C-WANBtu.js";import"./getZIndexFromUnknown-8apXNn5a.js";import"./useEffectiveDataKey-DAI_6E1U.js";import"./omit-B2I6_VFk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
