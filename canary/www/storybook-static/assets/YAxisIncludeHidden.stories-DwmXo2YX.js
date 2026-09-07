import{r as f,R as e}from"./iframe-CEqSETwy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DZdJE3LC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CJNe71Mi.js";import{C as k}from"./ComposedChart-C-LRGuZG.js";import{X as K}from"./XAxis-DiGyugB3.js";import{L as v}from"./Legend-DF0V0MPG.js";import{B as a}from"./Bar-Dgh6x45r.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lnqMQjsv.js";import"./Text-DksTiW_2.js";import"./resolveDefaultProps-CbEbpjss.js";import"./DOMUtils-19Cjbm1E.js";import"./isWellBehavedNumber-DDsPS4Vv.js";import"./useId-DLOcTRFV.js";import"./useBackwardsCompatibleTheme-C18-49Mr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0nUyu6n_.js";import"./index-BNz6dVRa.js";import"./index-BvAe43aE.js";import"./RechartsWrapper-D7k5lu9l.js";import"./axisSelectors-p_-hiMzG.js";import"./throttle-DnGGP0fW.js";import"./d3-scale-kHCfNVPM.js";import"./index-CKh217UZ.js";import"./index-CcAm8cKQ.js";import"./renderedTicksSlice-Bs5DanIZ.js";import"./index-BHSo_RxK.js";import"./CartesianAxis-Baoe0UzV.js";import"./Layer-C0D9GKi7.js";import"./types-Ddhi9krD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DDkHhS9o.js";import"./chartDataContext-CtXgelXS.js";import"./CategoricalChart-Cuq3_PiL.js";import"./Symbols-aQKjgxVt.js";import"./symbol-BgFayqAI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BL5iDFTN.js";import"./uniqBy-CPCN80XU.js";import"./iteratee-DPwVpnC0.js";import"./AnimatedItems-C2HkT0wg.js";import"./useAnimationId-gLsHzM3f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtR9xIXP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BN_cCfJG.js";import"./tooltipContext-Q2w3dJTj.js";import"./RegisterGraphicalItemId-BZYWE3sH.js";import"./ErrorBarContext-4Qyv8RFs.js";import"./GraphicalItemClipPath-B4449nNq.js";import"./SetGraphicalItem-BqGzK2Ro.js";import"./getZIndexFromUnknown-Bcl3lt9q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CEKaZePj.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
