import{r as f,R as e}from"./iframe-Bnv6kU7L.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-I5CDR0a7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DX-eN-rE.js";import{C as k}from"./ComposedChart-B1DqhSVN.js";import{X as K}from"./XAxis-DBNaBuJh.js";import{L as v}from"./Legend-CbXtisxS.js";import{B as a}from"./Bar-B-lf7quv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-IhJ6Pxyk.js";import"./Text--hmlT8ZH.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./DOMUtils-CsnJkvN_.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRXf-lni.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./throttle-C8n004OX.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./CartesianAxis-BurxlCSY.js";import"./Layer-LCeVZLuX.js";import"./types-CI78TRyx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./Symbols-DjB5nWGx.js";import"./symbol-BzvQQSq9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BltoDhzS.js";import"./uniqBy-CZFb8bra.js";import"./iteratee-CP0Pza9x.js";import"./AnimatedItems-BMX-ziY5.js";import"./useAnimationId-DYSRVMST.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCZI10F2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./tooltipContext-B7nrHgqe.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./ErrorBarContext-B1AHLu2R.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getZIndexFromUnknown-BMbNjIod.js";import"./useGraphicalItemIdentity-CQh8XILo.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
