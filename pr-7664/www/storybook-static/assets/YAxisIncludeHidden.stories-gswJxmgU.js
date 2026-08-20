import{r as f,R as e}from"./iframe-BB2cSF8T.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CMkp761K.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Ck0CRfK_.js";import{C as k}from"./ComposedChart-D7ONXqhe.js";import{X as K}from"./XAxis-DwBzx4b3.js";import{L as v}from"./Legend-Bg34nPWt.js";import{B as s}from"./Bar-DSPjqBD_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BZkQksct.js";import"./Text-Bwx_fWQU.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./DOMUtils-yFTvziLR.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbM1bO0L.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./throttle-nMA59eYs.js";import"./axisSelectors-BurdOGu6.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./CartesianAxis-BWqAGBTh.js";import"./Layer-LVpAC3_2.js";import"./types-ChWRaT57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./Symbols-CyMSTzZI.js";import"./symbol-D3j02ylc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Mg-Nq6uP.js";import"./uniqBy-CkqXGP9K.js";import"./iteratee-DMriX-zr.js";import"./AnimatedItems-0WotYsMt.js";import"./useAnimationId-C8wX-p7z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-ZdRLCN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./tooltipContext-vwLjS70k.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./ErrorBarContext-DNeGzoAb.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getZIndexFromUnknown-DRCPL0Iv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-mqpyqc4p.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
