import{r as f,R as e}from"./iframe-D_03ePl7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BYLx-dFj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-gI7CPKt8.js";import{C as k}from"./ComposedChart-BTDnFjfj.js";import{X as K}from"./XAxis-CjKd6FOO.js";import{L as v}from"./Legend-B3gkZulI.js";import{B as a}from"./Bar-BWpXlTgZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQXHRFnW.js";import"./Text-Z5PwaRTj.js";import"./resolveDefaultProps-C_535qvz.js";import"./pageBackground-2sAJZ1tz.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAYdtHvW.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./axisSelectors-CyxZNoxv.js";import"./throttle-DlozmNLH.js";import"./d3-scale-CS5gmyGm.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./index-Dlf7H1uA.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./Symbols-ADmgqoZG.js";import"./symbol-CCRBoIOr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DakWzhaz.js";import"./uniqBy-C4oZiLR-.js";import"./iteratee-DYmUi1kx.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdU_MFIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./tooltipContext-DTMzdFRl.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getZIndexFromUnknown-CAhvpo2r.js";import"./useEffectiveDataKey-OYuZWKUp.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
