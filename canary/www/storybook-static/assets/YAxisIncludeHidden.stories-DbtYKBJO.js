import{r as f,R as e}from"./iframe-BDPfsqdF.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bl_BBErM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BfcQE96w.js";import{C as k}from"./ComposedChart-D7JGKNin.js";import{X as K}from"./XAxis-D4_j-k4X.js";import{L as v}from"./Legend-CatJv-2c.js";import{B as a}from"./Bar-DUr_wZuL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CIaOlIjm.js";import"./Text-BNo_l2gi.js";import"./resolveDefaultProps-UXrhpxMr.js";import"./DOMUtils-DaHiW2kn.js";import"./ZIndexLayer-D5wXYtG3.js";import"./index-BQeH_1mA.js";import"./index-DhEcRTBz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C7NGCs8b.js";import"./throttle-DLGVq_fI.js";import"./axisSelectors-c7iT3Xqf.js";import"./d3-scale-B8DyPgUy.js";import"./CartesianAxis-BGQBH839.js";import"./Layer-irdZ2U7P.js";import"./types-DRfbQMuT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GMkNhND_.js";import"./index-Bojq0CZP.js";import"./index-ex-Pgi_h.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DUmM3uYA.js";import"./index-BRY97WZu.js";import"./CartesianChart-Do0DiZlo.js";import"./ZIndexPortal-kQXYrtt7.js";import"./CategoricalChart-BnbJl500.js";import"./Symbols-DWB63jlf.js";import"./symbol-CTG-DGxK.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-ZurvhtWc.js";import"./dataEntryStyles-RZhAuyPm.js";import"./useElementOffset-8y_suHrr.js";import"./uniqBy-BVW2sC2D.js";import"./iteratee-C91la3m6.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BClBWVcN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CavKlM0x.js";import"./useAnimationId-PJ8_CwxA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cyzjr61Z.js";import"./tooltipContext-Dz7KXKJa.js";import"./ErrorBarContext-KG77bNmA.js";import"./activeStyles-BFWSM9RU.js";import"./SetGraphicalItem-Bfmt3udz.js";import"./getZIndexFromUnknown-l6RIBdQy.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-DsGW0DuD.js";import"./omit-PPoiSwxz.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
