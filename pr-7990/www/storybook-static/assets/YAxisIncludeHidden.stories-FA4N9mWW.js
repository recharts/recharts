import{r as f,R as e}from"./iframe--dVKNbCw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-dK_EcPxW.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpZXb3K1.js";import{C as k}from"./ComposedChart-BWbHkL8w.js";import{X as K}from"./XAxis-CO1xFj8-.js";import{L as v}from"./Legend-BXS76eI6.js";import{B as a}from"./Bar-D5txjAak.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BMbpqhNX.js";import"./Text-ah79KUdU.js";import"./resolveDefaultProps-19MGuD5L.js";import"./pageBackground-BuDL1xc_.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BW0svFjl.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./axisSelectors-asW4dLtq.js";import"./throttle-Vdk2BIuN.js";import"./d3-scale-Daiirif0.js";import"./CartesianAxis-DUU6iCh1.js";import"./Layer-DfItUnsr.js";import"./types-CJbJ0IDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DRzg3fGD.js";import"./index-BXnIb1gt.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./Symbols-C18p8MLn.js";import"./symbol-DAEoc_mM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";import"./activeStyles-Kpuk4WPq.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-60MF1n22.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./tooltipContext-D2BfM0X_.js";import"./ErrorBarContext-C4YeRw8_.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getZIndexFromUnknown-DqBcyogf.js";import"./useEffectiveDataKey-DluS1fAA.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
