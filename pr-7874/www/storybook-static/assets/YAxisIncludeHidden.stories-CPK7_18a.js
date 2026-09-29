import{r as f,R as e}from"./iframe-CkExmVLh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BKUGWzYz.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-a3gNrCTg.js";import{C as k}from"./ComposedChart-BhMk3qvU.js";import{X as K}from"./XAxis-JBQw78VL.js";import{L as v}from"./Legend-n_QnfH8z.js";import{B as a}from"./Bar-DCTHwCGT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C8EtCHaI.js";import"./Text-mbh8kfNk.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./DOMUtils-B9viDuiF.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DuxWNsKn.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./throttle-BNvjyLg8.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianAxis-BhWf1FlQ.js";import"./Layer-CGaMavgo.js";import"./types-D0Lh6MHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./Symbols-72F0FLZd.js";import"./symbol-C4swW5GK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXUuqBTx.js";import"./uniqBy-aTBj_DaH.js";import"./iteratee-qu9slWkn.js";import"./AnimatedItems-V2dSiKDR.js";import"./useAnimationId-B25s9B77.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B72I1dSe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./tooltipContext-CFW5lOAg.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getZIndexFromUnknown-DUP84ONz.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./dataEntryStyles-D4_BoS-z.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
