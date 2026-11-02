import{r as f,R as e}from"./iframe-D_uMBlIp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Q267elff.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cqv84PqK.js";import{C as k}from"./ComposedChart-DhQzd1k_.js";import{X as K}from"./XAxis-ChmGUeiL.js";import{L as v}from"./Legend-BMwEwXrz.js";import{B as a}from"./Bar-BPDo9Gzi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-xcLv9MPJ.js";import"./Text-CgSvhKKx.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-PGXXztW2.js";import"./throttle-z9Tdm54L.js";import"./axisSelectors-BH5tVjmc.js";import"./d3-scale-De88z7ff.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-gFpkW2lO.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cdiG7Q_h.js";import"./uniqBy-CwR9iSeD.js";import"./iteratee-C8wVZEUu.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-lhjdoetJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8h04Bjl.js";import"./useAnimationId-BUGTxmjG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CosApWaB.js";import"./tooltipContext-CaXiSc-d.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./ErrorBarContext-d3qxHiYM.js";import"./activeStyles-Dd3au7Dm.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getZIndexFromUnknown-BwOdCaar.js";import"./useEffectiveDataKey-CgejumXO.js";import"./omit-SCpWrPQU.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
