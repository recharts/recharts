import{r as f,R as e}from"./iframe-DtNEXb77.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BIfcFYbQ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C61cTRUd.js";import{C as k}from"./ComposedChart-D7gBmB-e.js";import{X as K}from"./XAxis-B8fOHSNk.js";import{L as v}from"./Legend-PSAl3kQK.js";import{B as a}from"./Bar-DDZ4_pAa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-9NLOMOhr.js";import"./Text-M6NyH5bl.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./pageBackground-CwZqZ7-z.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBx6DJIh.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./axisSelectors-CRqNtGDu.js";import"./throttle-DHRCkM2S.js";import"./d3-scale-4c7z9Afg.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B3jS1aTx.js";import"./index-BsnYyY0R.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./Symbols-BU9qCE7s.js";import"./symbol-C8bXqKh9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BQLGRE_E.js";import"./uniqBy-DRVk0Ehd.js";import"./iteratee-rlP-A4cC.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BtinU4U_.js";import"./useAnimationId-B5nilSLl.js";import"./dataEntryStyles-DdoWImTb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_OpsUN-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./tooltipContext-CerBpj9p.js";import"./ErrorBarContext-Cs-Qof9d.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getZIndexFromUnknown-iDO9kbJO.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./omit-C026_7B7.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
