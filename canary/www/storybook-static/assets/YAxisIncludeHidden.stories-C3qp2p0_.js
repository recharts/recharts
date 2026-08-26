import{r as f,R as e}from"./iframe-JCMHkfpO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-OgBkmni0.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cbic3BON.js";import{C as k}from"./ComposedChart-BVs57za7.js";import{X as K}from"./XAxis-CBMMNbSw.js";import{L as v}from"./Legend-BPW7Jl2x.js";import{B as s}from"./Bar-iHbY3BeT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DgnjH2BN.js";import"./Text-H5O9sMOg.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./DOMUtils-lO18r89G.js";import"./isWellBehavedNumber-K1PO631O.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZJzCe6C.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./throttle-DlFFEpQV.js";import"./axisSelectors-BpNs_jFY.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./CartesianAxis-B0p8oTh4.js";import"./Layer-DW0R6u6Q.js";import"./types-CrNZa3RP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./Symbols-DKIDWMPJ.js";import"./symbol-CW7sNOrJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrBzv7lz.js";import"./uniqBy-DRqYT5l3.js";import"./iteratee-T-3V0feC.js";import"./AnimatedItems-dkTJaSWs.js";import"./useAnimationId-CtDYtQmo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVC8ePoO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./tooltipContext-CL6dgCT6.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./ErrorBarContext-IV7IvqZh.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getZIndexFromUnknown-DGgMVHgw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DK76v1qR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
