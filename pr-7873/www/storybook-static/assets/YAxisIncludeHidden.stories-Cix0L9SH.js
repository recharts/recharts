import{r as f,R as e}from"./iframe-BFFmTTDr.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-zUGAKEHc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DQM058wc.js";import{C as k}from"./ComposedChart-SSXf6_RY.js";import{X as K}from"./XAxis-CUKTZ0Q0.js";import{L as v}from"./Legend-CjDcERwx.js";import{B as a}from"./Bar-ByhLLSh7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CVuMucY6.js";import"./Text-m1jHD_i9.js";import"./resolveDefaultProps-C4cHyrTj.js";import"./DOMUtils-DhZiPaLo.js";import"./isWellBehavedNumber-EAZXLIW4.js";import"./useId-ByStve5U.js";import"./useBackwardsCompatibleTheme-EBoDvW3e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-V0Jr5gGg.js";import"./index-B0ZyvmjF.js";import"./index-p_2WOCPr.js";import"./RechartsWrapper-W63MnO3r.js";import"./axisSelectors-BasDhOYS.js";import"./throttle-C1mDwWe8.js";import"./d3-scale-CB2_PHYv.js";import"./index-DQJjMFyh.js";import"./index-BkJjG_2i.js";import"./renderedTicksSlice-CucX-QZC.js";import"./index-C0jb6csl.js";import"./CartesianAxis-nbQLlPRi.js";import"./Layer-BuPOal-_.js";import"./types-CeA3gQcd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-lCgugd9d.js";import"./chartDataContext-CP53CgNH.js";import"./CategoricalChart-mbieolFi.js";import"./Symbols-C97zeRwP.js";import"./symbol-Bf_JTZFF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DB_IX7OY.js";import"./uniqBy-B2LizQEX.js";import"./iteratee-D-TKsR8y.js";import"./AnimatedItems-BCqULUvu.js";import"./useAnimationId-CSU3KRrf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKcyOIbb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CqP12PJd.js";import"./tooltipContext-BTJAxF6j.js";import"./RegisterGraphicalItemId-Fjnl2b5Z.js";import"./ErrorBarContext-nDEpYIsF.js";import"./GraphicalItemClipPath-BoCgP3xh.js";import"./SetGraphicalItem-BH8-Rn7Q.js";import"./getZIndexFromUnknown-CUESRlXU.js";import"./useGraphicalItemIdentity-CpgNQJzS.js";import"./dataEntryStyles-TZ2TO-fb.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
