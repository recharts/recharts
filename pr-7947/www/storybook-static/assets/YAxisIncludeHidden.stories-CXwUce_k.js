import{r as f,R as e}from"./iframe-B91k2IcJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-MGmz2Csl.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DPjnHRkm.js";import{C as k}from"./ComposedChart-SUsOIgRZ.js";import{X as K}from"./XAxis-Kxgks0Q-.js";import{L as v}from"./Legend-DWZcC7PQ.js";import{B as a}from"./Bar-x5DzCq_L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BsntnuTl.js";import"./Text-CiRRF6pE.js";import"./resolveDefaultProps-D3docOoh.js";import"./pageBackground-BjpY-vWv.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-GgF7R--c.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./RechartsWrapper-BMFvDMkV.js";import"./axisSelectors-CcYA9DrF.js";import"./throttle-BM2gK96G.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./CartesianAxis-D1fr-7So.js";import"./Layer-mmJAUotg.js";import"./types-DevBWE8M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./Symbols-BR-UUylu.js";import"./symbol-4FZOpY9N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCd6qDJl.js";import"./uniqBy-BohUdtb5.js";import"./iteratee-iijREnPj.js";import"./activeStyles-U0RfMPfz.js";import"./useAnimationId-CRCBGZGy.js";import"./dataEntryStyles-yNODtHFO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-lVwAiMqa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-djGvUgMr.js";import"./tooltipContext-BbeKtEr3.js";import"./ErrorBarContext-C_xJpakb.js";import"./GraphicalItemClipPath-C22168NG.js";import"./SetGraphicalItem-BDS20UwV.js";import"./getZIndexFromUnknown-DX1FAKY_.js";import"./useGraphicalItemIdentity-WURDsQ2E.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
