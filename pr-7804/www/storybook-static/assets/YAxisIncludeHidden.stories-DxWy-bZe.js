import{r as f,R as e}from"./iframe-CKftEeOR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DtHNKlU_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Rd7CQgQI.js";import{C as k}from"./ComposedChart-D4xLMnX4.js";import{X as K}from"./XAxis-IahfvaCM.js";import{L as v}from"./Legend-ERMTR0gC.js";import{B as a}from"./Bar-D5euRWY-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtMZmHcU.js";import"./Text-BY0JJbaS.js";import"./resolveDefaultProps-CUD-thP6.js";import"./DOMUtils-B_LhErBS.js";import"./isWellBehavedNumber-B15AKauy.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfiakTBb.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./RechartsWrapper-CBr2vBLf.js";import"./axisSelectors-DhTPihhT.js";import"./throttle-BNKYmND6.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./CartesianAxis-klHqdii2.js";import"./Layer-t7Sk-OLm.js";import"./types-CQiiKif5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./Symbols-BqO3Xqua.js";import"./symbol-Dma1RmVC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJqx9A--.js";import"./uniqBy-CLIdSOOo.js";import"./iteratee-Dl0nvfyM.js";import"./AnimatedItems-ePjd4Kgp.js";import"./useAnimationId-cpDkl9it.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOOPVSCO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./tooltipContext-BvLftK3I.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getZIndexFromUnknown-BwvuKeFG.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
