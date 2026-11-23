import{r as f,R as e}from"./iframe-B5lEY8zD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B84b5tRH.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BgROAb6p.js";import{C as k}from"./ComposedChart-Bet3bhVW.js";import{X as K}from"./XAxis-DFQPNyZu.js";import{L as v}from"./Legend-C1Ic0OQu.js";import{B as a}from"./Bar-CFBmLyjf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BcoGvPAa.js";import"./Text-Bpx0HJU1.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./ZIndexLayer-BKjofHlF.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./throttle-B3jfQssg.js";import"./axisSelectors-BghrQiEU.js";import"./d3-scale-Be2MBhun.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrSOMoM_.js";import"./useAnimationId-BR63270P.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./tooltipContext-BuWKvB93.js";import"./ErrorBarContext-BW17ZVEc.js";import"./activeStyles-CCUgVOTa.js";import"./SetGraphicalItem-BlbgEltH.js";import"./getZIndexFromUnknown-CQW5aQcV.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./omit-BVCEdaBF.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
