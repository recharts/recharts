import{r as f,R as e}from"./iframe-Cf4rQ-NM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CNqs_HAY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DMD_kE2u.js";import{C as k}from"./ComposedChart-D9NfWs3n.js";import{X as K}from"./XAxis-BIvdIl6o.js";import{L as v}from"./Legend-BTDRi3AW.js";import{B as a}from"./Bar-vVifBfZj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DJuA9Y4I.js";import"./Text-CI7nXg92.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./pageBackground-ja8baDve.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./axisSelectors-9PR0sTvr.js";import"./throttle-B2HUKrsu.js";import"./d3-scale-Lc72VcRD.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BteUr7Vj.js";import"./index-BsaRhs6B.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./Symbols-D5DJG6Nl.js";import"./symbol-B_S5I6Iq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B34jhTte.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./tooltipContext-CEwAuDej.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getZIndexFromUnknown-NLBKsvnx.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./omit-7oCTXXs-.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
