import{r as f,R as e}from"./iframe-FiuXs261.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CQrrt2_W.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D8yz0c_i.js";import{C as k}from"./ComposedChart-SOQGKxcc.js";import{X as K}from"./XAxis-Bb3iEGS4.js";import{L as v}from"./Legend-DPXGR-nH.js";import{B as a}from"./Bar-CUK0I8Rp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DgCFchF-.js";import"./Text-CNbe1Pgb.js";import"./resolveDefaultProps-BihUq3X9.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./throttle-CYeAiCIk.js";import"./axisSelectors-C9DIlOnm.js";import"./d3-scale-CtDFr3v-.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./Layer-BMNQgcyM.js";import"./types-CG6SsZFp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-PYqIov25.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-B2wKYMmC.js";import"./dataEntryStyles-BABJdaaS.js";import"./useElementOffset-Cyn2xwTz.js";import"./uniqBy-Cb3-fOKb.js";import"./iteratee-DOdgceK_.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DRqt9mVh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdyI-Bgs.js";import"./useAnimationId-DgiqBF0b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./tooltipContext-CC3jJT2U.js";import"./ErrorBarContext-GrhwdkVF.js";import"./activeStyles-DrCvysIi.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getZIndexFromUnknown-BvK_lcqb.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./omit-mz84Hprx.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
