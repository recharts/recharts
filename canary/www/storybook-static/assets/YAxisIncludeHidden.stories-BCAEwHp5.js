import{r as f,R as e}from"./iframe-Dli_FHsd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BgeWKEji.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BKyYlhak.js";import{C as k}from"./ComposedChart-BEb2rMPq.js";import{X as K}from"./XAxis-CgWc3L0L.js";import{L as v}from"./Legend-Cyv1gINv.js";import{B as s}from"./Bar-1ME6_kJ4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D8Bu4bN4.js";import"./CartesianAxis-CDtTSBJJ.js";import"./Layer-D_tWiSqM.js";import"./resolveDefaultProps-KCoOvOQy.js";import"./Text-mDBdIk3r.js";import"./DOMUtils-CD-Gvcib.js";import"./isWellBehavedNumber-DwKce9OS.js";import"./Label-BlCBYS7y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-56CQrnNK.js";import"./index-B6ei3fzd.js";import"./index-eEp7ik7X.js";import"./types-CxkhEKh5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cr_zgIG9.js";import"./immer-BDVTnirG.js";import"./RechartsWrapper-gcMhRjLK.js";import"./index-654UjlcV.js";import"./index-TBfimrOP.js";import"./axisSelectors-BOuTa97x.js";import"./d3-scale-BaROhcEs.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0dTZgGZ.js";import"./chartDataContext-Dh-3jSeu.js";import"./CategoricalChart-YvrRZEH2.js";import"./Symbols-DsJLAOJ5.js";import"./symbol-6EDMfIW2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B5TeNF6O.js";import"./uniqBy-wl0EV1X7.js";import"./iteratee-C41o_cYR.js";import"./tooltipContext-2ddqG6Hj.js";import"./AnimatedItems-DgK_VlyJ.js";import"./useAnimationId-CYxQwOrZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BgP4O_cb.js";import"./ActiveShapeUtils-pciG5q6n.js";import"./RegisterGraphicalItemId-rjfoubwa.js";import"./ErrorBarContext-DHC85wCi.js";import"./GraphicalItemClipPath-BJpRRLBw.js";import"./SetGraphicalItem-DN3sQjPD.js";import"./getZIndexFromUnknown-C5ov2ohz.js";import"./graphicalItemSelectors-C7BisFgc.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
