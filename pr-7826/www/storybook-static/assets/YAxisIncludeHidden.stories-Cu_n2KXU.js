import{r as f,R as e}from"./iframe-BXKiYcQC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DRJndkYg.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BkBU_0wW.js";import{C as k}from"./ComposedChart-CB-KYGEU.js";import{X as K}from"./XAxis-BXKhWSVM.js";import{L as v}from"./Legend-CyJWAGiq.js";import{B as a}from"./Bar-6GAxNo_H.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BTmQht23.js";import"./Text-DNCWotX8.js";import"./resolveDefaultProps-xB5H15BL.js";import"./DOMUtils-_UiVQ5Hy.js";import"./isWellBehavedNumber-B0ZNfpM9.js";import"./useId-C1UlWvnO.js";import"./useBackwardsCompatibleTheme-DRIVYL1M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcmKCBr7.js";import"./index-GSTqcvk8.js";import"./index-D60lzj2N.js";import"./RechartsWrapper-D0jZXTe7.js";import"./axisSelectors-Dg1vgECj.js";import"./throttle-DvwfsdC-.js";import"./d3-scale-CKemSFI4.js";import"./index-CLqidrW7.js";import"./index-DYRjOJPU.js";import"./renderedTicksSlice-BaGELWxj.js";import"./index-BmE7GHu6.js";import"./CartesianAxis-D0z983kz.js";import"./Layer-csMx_Fjy.js";import"./types-DfEjGV4b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CSl2_jhz.js";import"./chartDataContext-CuS1DNow.js";import"./CategoricalChart-BhGptR4V.js";import"./Symbols-BNBCA1K-.js";import"./symbol-1KLUnhlz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cca-IpDS.js";import"./uniqBy-t0cRV3aa.js";import"./iteratee-DvbJjhc1.js";import"./AnimatedItems-CWzKwhub.js";import"./useAnimationId-DnJ1WtPs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBEf8joY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B64LrBnv.js";import"./tooltipContext-dn_Y2QZE.js";import"./RegisterGraphicalItemId-BECJYOqX.js";import"./ErrorBarContext-Dq8g53R2.js";import"./GraphicalItemClipPath-CbDQFeTD.js";import"./SetGraphicalItem-DR2Q_8-D.js";import"./getZIndexFromUnknown-CyJpfG7K.js";import"./useGraphicalItemIdentity-Cgc4UBVs.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
