import{r as f,R as e}from"./iframe-CSEjTzPi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CLbub78N.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D_RH8zNR.js";import{C as k}from"./ComposedChart-D_Dji_bW.js";import{X as K}from"./XAxis-ClW-CKIG.js";import{L as v}from"./Legend-CxF1x0o3.js";import{B as s}from"./Bar-Do4uXh1f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./resolveDefaultProps-BozJKtND.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./Label-COqEjZup.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CCVrkImG.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./throttle-DaFWWJDR.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./axisSelectors-D_moIkNX.js";import"./d3-scale-CTeKr7fc.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./Symbols-CTXWaWPW.js";import"./symbol-CieHO9MS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEs7c5_U.js";import"./uniqBy-CIEufAuW.js";import"./iteratee-DtUSYH1W.js";import"./tooltipContext-DI2uHbji.js";import"./AnimatedItems-qJPCEdb3.js";import"./useAnimationId-De2Quo8T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CxDLp35k.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./ErrorBarContext-CaaFvPMI.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./getZIndexFromUnknown-D5xYN7OS.js";import"./graphicalItemSelectors-ClvgOOLR.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
