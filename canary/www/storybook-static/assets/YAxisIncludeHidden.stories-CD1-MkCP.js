import{r as f,R as e}from"./iframe-C20wDroG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dregax_Z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dn977bIM.js";import{C as k}from"./ComposedChart-fc9zkA9M.js";import{X as K}from"./XAxis-bncj55mF.js";import{L as v}from"./Legend-D6Pxhrbc.js";import{B as s}from"./Bar-ngNcXczu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DkS9BWG5.js";import"./Text-DGWMJ0hU.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./DOMUtils-CaGG5Hmm.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPgbR3ka.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./throttle-D_pKwmSO.js";import"./axisSelectors-D2d7y5tB.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./CartesianAxis-BCVPeUYs.js";import"./Layer-DDCJtugd.js";import"./types-BDuMvVkF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./Symbols-CkjYU1xm.js";import"./symbol-BOBSpd1m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dnes-XqG.js";import"./uniqBy-2EVv77Lm.js";import"./iteratee-CfZ0Y8VA.js";import"./AnimatedItems-BeGp4Wik.js";import"./useAnimationId-Bc7mxzMe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bmy5AWRQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./tooltipContext-D3UKijeT.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getZIndexFromUnknown-CYF1mEPC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BiO_JgRr.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
