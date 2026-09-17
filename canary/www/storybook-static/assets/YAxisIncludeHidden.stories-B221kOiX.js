import{r as f,R as e}from"./iframe-u4ce63CG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BSJWLgXb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BYJycarP.js";import{C as k}from"./ComposedChart-C2sXY6fb.js";import{X as K}from"./XAxis-ycYuR5GD.js";import{L as v}from"./Legend-BtGPt8jj.js";import{B as a}from"./Bar-BB6GK8L6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D-DGLST-.js";import"./Text-B-fKZlN3.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./DOMUtils-DPz05X-i.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDv8sIeq.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./RechartsWrapper-Zz5ful62.js";import"./axisSelectors-CGHflyYT.js";import"./throttle-B6MgLZYN.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./CartesianAxis-BCYFcWgI.js";import"./Layer-DNxK11xQ.js";import"./types-BSKo_D-h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./Symbols-ChXPCZdB.js";import"./symbol-je1hzkfs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFmVgwFI.js";import"./uniqBy-DhJnILqR.js";import"./iteratee-DjERPAQW.js";import"./AnimatedItems-B0QYHb0Z.js";import"./useAnimationId-CFY7vA8F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Azk4KVCz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./tooltipContext-CN3j77Qg.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./ErrorBarContext-D7weRgKB.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getZIndexFromUnknown-DaBZbLwo.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
