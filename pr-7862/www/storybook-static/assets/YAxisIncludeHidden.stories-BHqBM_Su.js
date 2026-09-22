import{r as f,R as e}from"./iframe-DaQbgwSM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DJNfgCPe.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-GtlpPVbP.js";import{C as k}from"./ComposedChart-Bbu2Bio2.js";import{X as K}from"./XAxis-Dwi6B5gb.js";import{L as v}from"./Legend-DzwOaoA_.js";import{B as a}from"./Bar-BXQ_bZuT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BMF2NwhK.js";import"./Text-6pf8QaaJ.js";import"./resolveDefaultProps-C03kBNGe.js";import"./DOMUtils-B-aaPPhR.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-e1DF3LHV.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./RechartsWrapper-BMsAihAT.js";import"./axisSelectors-DiPrK3uM.js";import"./throttle-D86JN7dt.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./Symbols-C4k0V28S.js";import"./symbol-D1P_EmQR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C77_7Qyp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./tooltipContext-CIcECwtV.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getZIndexFromUnknown-CDJsOmbk.js";import"./useGraphicalItemIdentity-CLitx1ml.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
