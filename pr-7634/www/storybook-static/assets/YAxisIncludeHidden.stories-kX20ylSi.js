import{r as f,R as e}from"./iframe-BKvNh1h_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-TFOOT7wp.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C45OUbld.js";import{C as k}from"./ComposedChart-DVKY2yWi.js";import{X as K}from"./XAxis-Cpwb-IQX.js";import{L as v}from"./Legend-B19xbslo.js";import{B as s}from"./Bar-BQcB6F3W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D2RnPYt_.js";import"./Text-Uy9kBT6v.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./DOMUtils-B6CNM4ee.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dc9WCXop.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./throttle-CCr4r-wz.js";import"./axisSelectors-CqcxQY1m.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./CartesianAxis-BURSUJ7n.js";import"./Layer-B8EPTqa2.js";import"./types-BwPciZr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-a-KGKEje.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./CategoricalChart-ByQYOV-Z.js";import"./Symbols-CXb0Y0lK.js";import"./symbol-w5xUT4gq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-16dn994i.js";import"./uniqBy-CpZLg9oD.js";import"./iteratee-CSiLF3kk.js";import"./tooltipContext-qcIODcdl.js";import"./AnimatedItems-GpiTBXk9.js";import"./useAnimationId-B6MPcNoZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OKuxmDV_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dl_5YuKK.js";import"./RegisterGraphicalItemId-D3RFuNNX.js";import"./ErrorBarContext-BdGaK5EK.js";import"./GraphicalItemClipPath-CWTvD5fd.js";import"./SetGraphicalItem-B2KPFtj4.js";import"./getZIndexFromUnknown-5geilvtK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B6G12BBP.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
