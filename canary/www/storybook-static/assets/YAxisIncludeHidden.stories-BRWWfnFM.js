import{r as f,R as e}from"./iframe-D_SaqINW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DBPcER2k.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Nr9A9_cH.js";import{C as k}from"./ComposedChart-BG0vFJnc.js";import{X as K}from"./XAxis-6wdck5XJ.js";import{L as v}from"./Legend-Dm2DdZcv.js";import{B as s}from"./Bar-CHQnagj8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DRtBRZ7g.js";import"./CartesianAxis-DWHYepa6.js";import"./Layer-CLMd0CrH.js";import"./resolveDefaultProps-DUbefueE.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./Label-D8rwziA9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./types-L0YqXeC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./immer-4i53sgvd.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./Symbols-DP2bcCbb.js";import"./symbol-BugtV-aR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B0pep8Bt.js";import"./uniqBy-DfSS1ssL.js";import"./iteratee-tTd3ivbf.js";import"./tooltipContext-BQt3eLti.js";import"./AnimatedItems-DrX1vaEn.js";import"./useAnimationId-DJVHCfAF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaUfvzDJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getZIndexFromUnknown-BV3SonT0.js";import"./graphicalItemSelectors-D2YdDHOs.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
