import{r as f,R as e}from"./iframe-BpBItmb8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ggvkQSih.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cjb21_4Z.js";import{C as k}from"./ComposedChart-Cz9o1ftP.js";import{X as K}from"./XAxis-tyIX1Ek0.js";import{L as v}from"./Legend-B9j0MFCN.js";import{B as a}from"./Bar-BZxiHsTg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D427CKrx.js";import"./Text-BsqzutiJ.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./pageBackground-Dn3J6qJY.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./dataEntryStyles-CqfS8fAi.js";import"./axisSelectors-DhTQuZeq.js";import"./throttle-Cdo2rlHX.js";import"./d3-scale-B2krDzkw.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BaBorYia.js";import"./index-C1AeM7Yu.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./Symbols-CndC3_OM.js";import"./symbol-D5Qx-mBR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjCU98kl.js";import"./uniqBy-0vSrRUTV.js";import"./iteratee-BEHFzf7T.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BpJuNb5z.js";import"./useAnimationId-B0lGZ7N8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cc2PuLg6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./tooltipContext-jbEOTzDc.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./ErrorBarContext-Dxg5DLJl.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getZIndexFromUnknown-Bm4eECHR.js";import"./useEffectiveDataKey-UghoeVMt.js";import"./omit-z34g81uG.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
