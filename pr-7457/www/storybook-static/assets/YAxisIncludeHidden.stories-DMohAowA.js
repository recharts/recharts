import{r as f,R as e}from"./iframe-ii_SdKaT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-B_AHmNwM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CewrGiZi.js";import{C as k}from"./ComposedChart-BqK8fMbF.js";import{X as K}from"./XAxis-n_W7ptOo.js";import{L as v}from"./Legend-BEETQKug.js";import{B as s}from"./Bar-CG5WCWwE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-IlujCcRJ.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./Label-CWAFalVX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C_pljZlN.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./immer-BRK5VplU.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./Symbols-CiJzLKZW.js";import"./symbol-DDCaA_8n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tGPEXiEv.js";import"./uniqBy--oKwp8uZ.js";import"./iteratee-DMX-jnSx.js";import"./tooltipContext-BgC5UDk8.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DzvlK_vY.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./getZIndexFromUnknown-BXc2GGi4.js";import"./graphicalItemSelectors-BvscI3Fb.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
