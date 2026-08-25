import{r as f,R as e}from"./iframe-BISZbF8S.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-m7WuayWG.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-tLqWCh4O.js";import{C as k}from"./ComposedChart-Bb88RiXV.js";import{X as K}from"./XAxis-DhvWA3ze.js";import{L as v}from"./Legend-DJM3szzM.js";import{B as s}from"./Bar-BruO2Mnt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label--u0r0Ebh.js";import"./Text-DWq927Nt.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./DOMUtils-CTLtTqZ2.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DScewirg.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./throttle-qMyvzBrr.js";import"./axisSelectors-SJG9ph2l.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./CartesianAxis-D7TS5Yfq.js";import"./Layer-qSEbrkuT.js";import"./types-DYnGyjc0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./CategoricalChart-CluxlQf_.js";import"./Symbols-DJ_45wTn.js";import"./symbol-CO_j5HDg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D_71pDwY.js";import"./uniqBy-1z9FZ0dO.js";import"./iteratee-azZ5Zz_L.js";import"./AnimatedItems-DssiNuXL.js";import"./useAnimationId-BeL21vg8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6oc1dJQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./tooltipContext-3qQsJ6sB.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getZIndexFromUnknown-4VqTvqPo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6O1LkkN.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
