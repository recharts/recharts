import{r as f,R as e}from"./iframe-d_I8TNCn.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ST75xEtc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C86-Fd8c.js";import{C as k}from"./ComposedChart-DeQBgJOI.js";import{X as K}from"./XAxis-CPk4rkW4.js";import{L as v}from"./Legend-C2w7K8Gp.js";import{B as a}from"./Bar-Dr07R0uK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C6LY1R7r.js";import"./Text--rvXV2DW.js";import"./resolveDefaultProps-DvL_oRGd.js";import"./DOMUtils-CklqBmUp.js";import"./isWellBehavedNumber-BiGXAn6V.js";import"./useId-CcoqHBc4.js";import"./useBackwardsCompatibleTheme-0Rfjr95D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUsrGrDa.js";import"./index-Basp38ZP.js";import"./index-KJ9I69Vp.js";import"./RechartsWrapper-BhDfTeaQ.js";import"./axisSelectors-DS1SwPss.js";import"./throttle-Dub4vgX-.js";import"./d3-scale-BHQnpvaw.js";import"./index-Bk90M1L4.js";import"./index-IVp7d0na.js";import"./renderedTicksSlice-D-j8NF5Q.js";import"./index-BDSLAMRI.js";import"./CartesianAxis-C7wfh-vo.js";import"./Layer-yfSSiW9J.js";import"./types-Dqfpifaw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkYu52zN.js";import"./chartDataContext-C_MhBuQy.js";import"./CategoricalChart-BaXgxPjJ.js";import"./Symbols-DJZzxzfQ.js";import"./symbol-B80ww2zL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jVsdCbSq.js";import"./uniqBy-Dn4KM-Ky.js";import"./iteratee-CwikYVCT.js";import"./AnimatedItems-b-EDeVK-.js";import"./useAnimationId-BWx9Rtft.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EdaUCxay.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ByVz5Hkp.js";import"./tooltipContext-CLKStnNX.js";import"./RegisterGraphicalItemId-dmq8PwmH.js";import"./ErrorBarContext-D8HRGdCI.js";import"./GraphicalItemClipPath-BVkKFKzE.js";import"./SetGraphicalItem-q_w6KGtf.js";import"./getZIndexFromUnknown-CijPTEWa.js";import"./useGraphicalItemIdentity-BG-BVB46.js";import"./dataEntryStyles-3xIOSnmo.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
