import{r as f,R as e}from"./iframe-14XWblZL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B3LGD4EX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-bTipO816.js";import{C as k}from"./ComposedChart-BWmJnIiB.js";import{X as K}from"./XAxis-C7X69uLj.js";import{L as v}from"./Legend-BErzQH-F.js";import{B as a}from"./Bar-ujt9bXXz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CvRLouIN.js";import"./Text-DR2swdHV.js";import"./resolveDefaultProps-CeALBfEq.js";import"./DOMUtils-BDBx2TYe.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BpIepiPk.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./throttle-BdJ0G1gd.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianAxis-CBKTwxf2.js";import"./Layer-DfNVM8Fr.js";import"./types-DUuownuR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./Symbols-VjYZPiRG.js";import"./symbol-BSOWQiAM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cDBpeZWA.js";import"./uniqBy-BGqFg_4C.js";import"./iteratee-CcTmIxFv.js";import"./AnimatedItems-Dweh6qvQ.js";import"./useAnimationId-BF3NsOWV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btq3c2bb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./tooltipContext-DkW5DSuT.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./ErrorBarContext-B0Gjb9Ej.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getZIndexFromUnknown-K_r4WiI1.js";import"./useGraphicalItemIdentity-QKGsdlin.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
