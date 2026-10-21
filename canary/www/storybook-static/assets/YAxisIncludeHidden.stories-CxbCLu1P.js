import{r as f,R as e}from"./iframe-CQZPQf4O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BXIOSjAZ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BxTiYWdU.js";import{C as k}from"./ComposedChart-BrH5TOj4.js";import{X as K}from"./XAxis-vMRVH8Ao.js";import{L as v}from"./Legend-BUo0Nb3s.js";import{B as a}from"./Bar-8qAQxUnM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CwpPaPRc.js";import"./Text-FG9LsITf.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./pageBackground-VSL8VAH8.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BKLTAFCk.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./axisSelectors-Or82bYZb.js";import"./throttle-AnGuXVWW.js";import"./d3-scale-Dh160Q_7.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./index-XXc_9p_2.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./Symbols-C7CdNj5F.js";import"./symbol-OvqjbrCm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DRkwNU_p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./tooltipContext-1FAnzwfo.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getZIndexFromUnknown-Qj9yln91.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./omit-DEbRR0Ab.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
