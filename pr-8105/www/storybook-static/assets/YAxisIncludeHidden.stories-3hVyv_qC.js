import{r as f,R as e}from"./iframe-OqKJbU5N.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BvbToLwB.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-SR00o6sl.js";import{C as k}from"./ComposedChart-DbKCzyO4.js";import{X as K}from"./XAxis-BOpO9kNQ.js";import{L as v}from"./Legend-LpcTH5CK.js";import{B as a}from"./Bar-Cy2MnLW-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Du8bKZih.js";import"./Text-BBVNpawX.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./throttle-Dd4NMqKN.js";import"./axisSelectors-DgBSWf8B.js";import"./d3-scale-BY5IvaL3.js";import"./CartesianAxis-pqwy63jz.js";import"./Layer-Cr-Iv08I.js";import"./types-9svgO-k7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DR91apNy.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./Symbols-ayOQu3YZ.js";import"./symbol-DNYfeltN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzQY9gJ2.js";import"./uniqBy-DsfhD18s.js";import"./iteratee-Cyssn55k.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-s2IEt-iE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMG9couI.js";import"./useAnimationId-DvBUlVSU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./tooltipContext-CN05kCq4.js";import"./dataEntryStyles-KId877_8.js";import"./ErrorBarContext-DPjF7BBQ.js";import"./activeStyles-DnmgD4rl.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getZIndexFromUnknown-BDhOMnFG.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./omit-B4Z2lN81.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
