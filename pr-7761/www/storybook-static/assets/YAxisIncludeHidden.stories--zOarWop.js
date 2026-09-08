import{r as f,R as e}from"./iframe-BVwma9wI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-rQKwLEfD.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-VAlBdr6o.js";import{C as k}from"./ComposedChart-C1Hvl3k7.js";import{X as K}from"./XAxis-OreZOtA3.js";import{L as v}from"./Legend-Cko5l-PH.js";import{B as a}from"./Bar-DTFbUO39.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CUW0HBf_.js";import"./Text-DRDxlPSO.js";import"./resolveDefaultProps-DBpEOB4I.js";import"./DOMUtils-DF9_GxSR.js";import"./isWellBehavedNumber-xliXy-xp.js";import"./useId-Dz979Lah.js";import"./useBackwardsCompatibleTheme-CbBx_yjE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVdU6QQB.js";import"./index-BWPTe55v.js";import"./index-CKwoEIUF.js";import"./RechartsWrapper-CjIw9-OO.js";import"./axisSelectors-CvmqVILj.js";import"./throttle-Bd_AFMQd.js";import"./d3-scale-D0UMq2S4.js";import"./index-Cx4u4fkc.js";import"./index-c3hGei__.js";import"./renderedTicksSlice-HCr6GQIq.js";import"./index-CVdaA3HQ.js";import"./CartesianAxis-CVwobuPT.js";import"./Layer-B2gbCIpu.js";import"./types-DEj_s5AW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DTfvYFOe.js";import"./chartDataContext-BpzIcZqB.js";import"./CategoricalChart-B7_1KQpA.js";import"./Symbols-Ba6qvWKP.js";import"./symbol-BGYLm3Ws.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BR8Rmqyi.js";import"./uniqBy-CtreYa91.js";import"./iteratee-Cb8Hkfod.js";import"./AnimatedItems-CdRizhQr.js";import"./useAnimationId-VU1EAhiC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzhxS55F.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-b9rh-Zt0.js";import"./tooltipContext-MuSJwHZN.js";import"./RegisterGraphicalItemId-BxG6QVhz.js";import"./ErrorBarContext-DYFU5FCm.js";import"./GraphicalItemClipPath-VekWoIWW.js";import"./SetGraphicalItem-ByKu5cCs.js";import"./getZIndexFromUnknown-nZJc9jqr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CrHSei9p.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
