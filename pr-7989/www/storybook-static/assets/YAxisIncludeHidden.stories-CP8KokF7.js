import{r as f,R as e}from"./iframe-DjRBpX_P.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B51h7pP8.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-iVSWW5BV.js";import{C as k}from"./ComposedChart-CsK6iTFT.js";import{X as K}from"./XAxis-Y0oUf3sW.js";import{L as v}from"./Legend-BLRADEwo.js";import{B as a}from"./Bar-C8FM3oA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CnRbgzX5.js";import"./Text-yVr7Mz0m.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./pageBackground-GeoRz0Dn.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dbtf4y40.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./axisSelectors-D79DWiWx.js";import"./throttle-DnOef0ju.js";import"./d3-scale-FJpOhRlp.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Ckb52kl2.js";import"./index-CvqQYFRa.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./Symbols-CNnoj2D4.js";import"./symbol-DsS9qHk8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";import"./activeStyles-D2vPCQTd.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iHdnnD4v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./tooltipContext-DvcWK-Jp.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getZIndexFromUnknown-DRZcJM_0.js";import"./useEffectiveDataKey-Tusm1QhA.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
