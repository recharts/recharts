import{r as f,R as e}from"./iframe-BL3cqs0v.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-SEmBBB09.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bp5UfHlJ.js";import{C as k}from"./ComposedChart-CuwCdTLA.js";import{X as K}from"./XAxis-B7WybKMv.js";import{L as v}from"./Legend-Db3Mw5_v.js";import{B as a}from"./Bar-DXbtI2Zw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWi9EbQl.js";import"./Text-BwMtBvSi.js";import"./resolveDefaultProps-BsbZKCB4.js";import"./DOMUtils-BPtMjC5_.js";import"./ZIndexLayer-DgWY8WnK.js";import"./index-Xo9PhSCx.js";import"./index-M6yM2tbI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BgHDg8wg.js";import"./throttle-CFuBzL7d.js";import"./axisSelectors-Df4vXTv0.js";import"./d3-scale-DqPJ3v9v.js";import"./CartesianAxis-Pi3KV9RP.js";import"./Layer-ClHABKOt.js";import"./types-CCfYuf_x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B58pSaah.js";import"./index-f4nmOf8P.js";import"./index-BMIlL233.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-rjJlKnXT.js";import"./index-DXhLf1tc.js";import"./fillDefinitions-qZuxFB6J.js";import"./CartesianChart-CNDb6X0a.js";import"./ZIndexPortal-Bl3Dp53e.js";import"./CategoricalChart-BgL_VXFO.js";import"./Symbols-0PXADWR-.js";import"./symbol-gdXBWq8v.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cr1zyTGS.js";import"./uniqBy-QjbMwiHY.js";import"./iteratee-Ce9VvF2y.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BS_WlUTo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-a8ObDMaW.js";import"./useAnimationId-BsAm0EGv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-LmfHqNO3.js";import"./tooltipContext-DaNosn_S.js";import"./dataEntryStyles-Bb2gxxNt.js";import"./ErrorBarContext-D_171Q9R.js";import"./activeStyles-Dkfygl3t.js";import"./SetGraphicalItem-D9rioP3I.js";import"./getZIndexFromUnknown-CARNx7Hq.js";import"./useEffectiveDataKey-BKKoQF-4.js";import"./omit-CU9Usmlz.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
