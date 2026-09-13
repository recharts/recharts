import{r as f,R as e}from"./iframe-B8ANsApq.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DqEKkvv0.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ce8NeCcb.js";import{C as k}from"./ComposedChart-DPkaGwQ5.js";import{X as K}from"./XAxis-DCQ61JnD.js";import{L as v}from"./Legend-DtF7MnQv.js";import{B as a}from"./Bar-lmHej9Xd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CKPEh0-k.js";import"./Text-BYXQaTCF.js";import"./resolveDefaultProps-CEZBLQnS.js";import"./DOMUtils-BNNcxOqL.js";import"./isWellBehavedNumber-C7ukF8ee.js";import"./useId-DgqgElmx.js";import"./useBackwardsCompatibleTheme-DqouWSCS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B21fZXtG.js";import"./index-D6PdJg6F.js";import"./index-DeFSUeff.js";import"./RechartsWrapper-soNVocgi.js";import"./axisSelectors-Cko3d0ja.js";import"./throttle-CG-pSLVK.js";import"./d3-scale-CsEPL9IW.js";import"./index-CLpz5dh6.js";import"./index-MxXQFx09.js";import"./renderedTicksSlice-DCIeAqty.js";import"./index-DgU7AYrg.js";import"./CartesianAxis-DOZB_H9C.js";import"./Layer-DqVYjNpd.js";import"./types-D5aIHjTg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dm1UL_JN.js";import"./chartDataContext-SNmeHJ5h.js";import"./CategoricalChart-ZRjbnEpi.js";import"./Symbols-DQc9OnIm.js";import"./symbol-BpL1ixY4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXmsQk-F.js";import"./uniqBy-BCJz43Xm.js";import"./iteratee-8dn2mDC1.js";import"./AnimatedItems-DxAfvNI2.js";import"./useAnimationId-DSZzieLY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFkr7nJy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-rZqGB1Eg.js";import"./tooltipContext-CRq4HCR_.js";import"./RegisterGraphicalItemId-BQAgbos5.js";import"./ErrorBarContext-mcf9_11T.js";import"./GraphicalItemClipPath-DhvNwCK-.js";import"./SetGraphicalItem-Dza8giNo.js";import"./getZIndexFromUnknown-VIKFuEtd.js";import"./useGraphicalItemIdentity-D-1HP-Kp.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
