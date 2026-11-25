import{r as f,R as e}from"./iframe-DUAuhaDC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-D6BReFW5.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CUoIUvAK.js";import{C as k}from"./ComposedChart-veB2s4XE.js";import{X as K}from"./XAxis-DmKgW9ez.js";import{L as v}from"./Legend-Cn_IMse8.js";import{B as a}from"./Bar-BGxI6Riz.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./Label-BlZKxSKy.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./throttle-C34y-YGF.js";import"./axisSelectors-DKypf8DU.js";import"./diverging-BzOzklff.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C2YARZjw.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Ce5Z9USj.js";import"./uniqBy-BJtcRwMD.js";import"./iteratee-rFCL0i6s.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-ChkH59oB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDSDw5vR.js";import"./useAnimationId-B4mDEWzj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./tooltipContext-D3Fgt_MK.js";import"./ErrorBarContext-CEfM97ww.js";import"./activeStyles-joM0AtO_.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./getZIndexFromUnknown-DTqv0Uhu.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./omit-zEWwmT1D.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
