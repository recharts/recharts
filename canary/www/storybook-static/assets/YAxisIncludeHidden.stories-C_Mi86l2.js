import{r as f,R as e}from"./iframe-5h9djFbt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DLX5lo20.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BdIKrmmY.js";import{C as k}from"./ComposedChart-DzFMSgfQ.js";import{X as K}from"./XAxis-C-anAgqA.js";import{L as v}from"./Legend-BVyvvIPZ.js";import{B as a}from"./Bar-BxBebqIO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CP2XtCyN.js";import"./Text-KAAJmctl.js";import"./resolveDefaultProps-P7Da5mqR.js";import"./DOMUtils-ccwVme2-.js";import"./isWellBehavedNumber-DStaytIC.js";import"./useId-C3MUzbkU.js";import"./useBackwardsCompatibleTheme-DY45QFX2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBvGlV3x.js";import"./index-CEJvLeX_.js";import"./index-B9x0kJ-U.js";import"./RechartsWrapper-QvnV0uNt.js";import"./axisSelectors-DjHfkPnH.js";import"./throttle-BRkWLUiC.js";import"./d3-scale-BcvXASmu.js";import"./index-BetN_RMo.js";import"./index-DkJjmLoR.js";import"./renderedTicksSlice-BUXo475V.js";import"./index-C__FEdkF.js";import"./CartesianAxis-B0pvT4G3.js";import"./Layer-CyvtfT-W.js";import"./types-CcKw46qs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CEUQRdCg.js";import"./chartDataContext-Bq32LFRB.js";import"./CategoricalChart-DAp11J6f.js";import"./Symbols-C8-ahxhj.js";import"./symbol-g7axh33o.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BuZJXmgl.js";import"./uniqBy-CIugontL.js";import"./iteratee-LMEmminV.js";import"./AnimatedItems-s0U1kgXJ.js";import"./useAnimationId-B4WX31v5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-igHY6SME.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VwknAe2e.js";import"./tooltipContext-Dm3ZqEGu.js";import"./RegisterGraphicalItemId-zWnNyz48.js";import"./ErrorBarContext-COzjx-TB.js";import"./GraphicalItemClipPath-DH9zOtRz.js";import"./SetGraphicalItem-CXIeHIB6.js";import"./getZIndexFromUnknown-ClsRFbII.js";import"./useGraphicalItemIdentity-BGObpJ42.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
