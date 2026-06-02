import{P as f,c as e}from"./iframe-BRX46Ivk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DQxr8HwE.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-DWdWmCIF.js";import{C as k}from"./ComposedChart-CDM_AzxP.js";import{X as K}from"./XAxis-BCLXDtwM.js";import{L as v}from"./Legend-BoiQP3Yn.js";import{B as s}from"./Bar-bGzVypVc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Co_O7Bis.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./Label-BF8y58w-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPddneQ7.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./immer-B8PXb0jM.js";import"./RechartsWrapper-C2N_lXXj.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./Symbols-B8Sp8m_P.js";import"./symbol-ByCVyfxY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-De3qQeYf.js";import"./uniqBy-CtWhPXaz.js";import"./iteratee-B6B5J5uM.js";import"./tooltipContext-DNGXltcD.js";import"./ReactUtils-CZBp5YIk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BGEQUwuw.js";import"./useAnimationId-HcldwJQz.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./getZIndexFromUnknown-DaGWi_9K.js";import"./graphicalItemSelectors-Uf-kajUJ.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
