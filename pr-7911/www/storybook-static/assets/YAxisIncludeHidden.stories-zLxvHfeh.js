import{r as f,R as e}from"./iframe-DM7I_Yyj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cygy87Ha.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-fCEc0s5F.js";import{C as k}from"./ComposedChart-C0efLOGA.js";import{X as K}from"./XAxis-C9bS5ZnW.js";import{L as v}from"./Legend-CLQ6_jIb.js";import{B as a}from"./Bar-1-jAr9Z0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D7T4Ye9K.js";import"./Text-BHb-71ue.js";import"./resolveDefaultProps-juvHZLkB.js";import"./DOMUtils-x3LNgLWi.js";import"./isWellBehavedNumber-CD6T6Jdg.js";import"./useId-Cqy_j9lJ.js";import"./useBackwardsCompatibleTheme-ZcFSMvkr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKb6XHFw.js";import"./index-tOsCsIz0.js";import"./index-BSGAosA0.js";import"./RechartsWrapper-8avap2Ow.js";import"./axisSelectors-C4a64MXg.js";import"./throttle-D9z--FMJ.js";import"./d3-scale-BeCTSUmZ.js";import"./index-BPHh1qic.js";import"./index-CtbzcRhJ.js";import"./renderedTicksSlice-D73l8EHs.js";import"./index-1HyAGRae.js";import"./CartesianAxis-CnfqwB17.js";import"./Layer-BuDBFoKe.js";import"./types-C2i2rvmz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BtvlbeE8.js";import"./chartDataContext-Bv5z90Vo.js";import"./CategoricalChart-DChxHazb.js";import"./Symbols-BsmPOwYr.js";import"./symbol-BTIK3SpD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D2TnO8Yd.js";import"./uniqBy-DrK2h0sx.js";import"./iteratee-CmV4JHhh.js";import"./AnimatedItems-Bps8ucZ8.js";import"./useAnimationId-ByMoBfgF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-NFBvjCpj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8wHq7T4.js";import"./tooltipContext-DQY1ZJ_O.js";import"./RegisterGraphicalItemId-CHv-hOW4.js";import"./ErrorBarContext-u65-Bu8d.js";import"./GraphicalItemClipPath-ByPtBGRG.js";import"./SetGraphicalItem-BuE0ytWh.js";import"./getZIndexFromUnknown-Be5rn1ya.js";import"./useGraphicalItemIdentity-w6WnNdhF.js";import"./dataEntryStyles-BGzKPvHt.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
