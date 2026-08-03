import{r as f,R as e}from"./iframe-ge4_mRTY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-6Axf8DBL.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-uDWjDJHd.js";import{C as k}from"./ComposedChart-BCRhkK5V.js";import{X as K}from"./XAxis-DVigS2Vl.js";import{L as v}from"./Legend-DoIR2LxL.js";import{B as s}from"./Bar-BDYz_LHE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DHHP6jol.js";import"./Text-D0QrHV93.js";import"./resolveDefaultProps-zgTsAR7U.js";import"./DOMUtils-B5z_Rz2Y.js";import"./isWellBehavedNumber-D2jfZHGG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nB6oQ6-0.js";import"./index-DZPpWsc8.js";import"./index-BWkGghDn.js";import"./RechartsWrapper-DrRaVIDn.js";import"./index-DroDtVMI.js";import"./index-C2Y_Hicx.js";import"./throttle-5caQeXVN.js";import"./renderedTicksSlice-BAzheGmb.js";import"./axisSelectors-Cxx4umpa.js";import"./d3-scale-DAQlT4KL.js";import"./CartesianAxis-DfPCf8Ah.js";import"./Layer-CMf1Vf_h.js";import"./types-BGJIvFfK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Z1jjPkTn.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BuotdUK2.js";import"./chartDataContext-pSMyX_Ym.js";import"./CategoricalChart-Brm-3Wpy.js";import"./Symbols-CQFl9wZe.js";import"./symbol-X9jydYHL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B1ayTe9X.js";import"./uniqBy-H1XeOGJd.js";import"./iteratee-DetP-FdP.js";import"./tooltipContext-Xt6j081a.js";import"./AnimatedItems-DTVko9-M.js";import"./useAnimationId-BwVBlHti.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3sbzP8A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SugLVfR8.js";import"./RegisterGraphicalItemId-uw1PY0zP.js";import"./ErrorBarContext-CqyguIOl.js";import"./GraphicalItemClipPath-B2dCpKux.js";import"./SetGraphicalItem-CNlJ3f0Q.js";import"./getZIndexFromUnknown-C_ohvU9X.js";import"./graphicalItemSelectors-WhTa9SlS.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
