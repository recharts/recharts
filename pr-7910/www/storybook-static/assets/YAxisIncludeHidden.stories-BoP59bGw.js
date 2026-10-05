import{r as f,R as e}from"./iframe-C6yJYV4z.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CkYznIce.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-mBP7ycwT.js";import{C as k}from"./ComposedChart-6mo15iiQ.js";import{X as K}from"./XAxis-gLEHw-pb.js";import{L as v}from"./Legend-Dp76ecjt.js";import{B as a}from"./Bar-DnQpOlWx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-xmY0FOhv.js";import"./Text-DjSFzWjg.js";import"./resolveDefaultProps-DmIaNxK6.js";import"./DOMUtils-DIjRf9zs.js";import"./isWellBehavedNumber-ovfPMeKD.js";import"./useId-BXkBt9SK.js";import"./useBackwardsCompatibleTheme-BmZuK7R_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bw7pXUay.js";import"./index-yxNm8k9x.js";import"./index-DRfGxCUi.js";import"./RechartsWrapper-_g--7_B0.js";import"./axisSelectors-D_pqJ7Ai.js";import"./throttle-BxZZQXD3.js";import"./d3-scale-U4E3X2xZ.js";import"./index-DqnMLpa_.js";import"./index-nciU1bgU.js";import"./renderedTicksSlice-Ju5mjaas.js";import"./index-DhjcBG7u.js";import"./CartesianAxis-DAfwjJLC.js";import"./Layer-C3EX9flk.js";import"./types--kLCfUVs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CP9Fvg-3.js";import"./chartDataContext-E_YlGMud.js";import"./CategoricalChart-e6KCKA8N.js";import"./Symbols-CXDQjHSt.js";import"./symbol-CRHXui2p.js";import"./path-DyVhHtw_.js";import"./useElementOffset-8O56CP7s.js";import"./uniqBy-mjkakhsi.js";import"./iteratee-DvNTUumB.js";import"./AnimatedItems-5jNEDjqz.js";import"./useAnimationId-C3itl5g8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPYg-u0q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B6ISajHR.js";import"./tooltipContext-BaQgNVV2.js";import"./RegisterGraphicalItemId-CCRb1xbW.js";import"./ErrorBarContext-Iszmpeof.js";import"./GraphicalItemClipPath-S_9K0RuN.js";import"./SetGraphicalItem-Be6goNI2.js";import"./getZIndexFromUnknown-3g0T-cex.js";import"./useGraphicalItemIdentity-CR7heWJW.js";import"./dataEntryStyles-CJ5GKpcP.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
