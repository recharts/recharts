import{r as f,R as e}from"./iframe-Dw3JnrOz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D8Dw7kMb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DzgPoe88.js";import{C as k}from"./ComposedChart-Dn-ywIPu.js";import{X as K}from"./XAxis-CeCu2pnu.js";import{L as v}from"./Legend-Bjj8c6w_.js";import{B as a}from"./Bar-CY3ONHkO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cbir5i7I.js";import"./Text-DV8khfZM.js";import"./resolveDefaultProps-DK31nY-V.js";import"./pageBackground-tLsrP4n_.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbE4uISJ.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./axisSelectors-BViTer26.js";import"./throttle-KuOt2oEs.js";import"./d3-scale-DtTNlvys.js";import"./CartesianAxis-ChIBsRH5.js";import"./Layer-L7RVOPKy.js";import"./types-B5MEMPd3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DgRfQaZT.js";import"./index-6yBVDhmv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./Symbols-BNc52s_J.js";import"./symbol-Ckk61NXy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CR-G88er.js";import"./uniqBy-rRKFTRx_.js";import"./iteratee-BZWaCfv1.js";import"./activeStyles-D2NfbCgD.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdI5JjXa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./tooltipContext-Bpw82xyU.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getZIndexFromUnknown-BpbcoR1O.js";import"./useEffectiveDataKey-CnfRoJ-A.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
