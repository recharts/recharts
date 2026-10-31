import{r as f,R as e}from"./iframe-DwhrPqQ2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CQHM2D8-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpWq1zjb.js";import{C as k}from"./ComposedChart-nvDFRK3z.js";import{X as K}from"./XAxis-DalFir1z.js";import{L as v}from"./Legend-BQf2vWfr.js";import{B as a}from"./Bar-CUeW-vwp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CPQgWsRx.js";import"./Text-C74hS0lU.js";import"./resolveDefaultProps-DjT--ccN.js";import"./DOMUtils-BcceySrU.js";import"./pageBackground-BJp9wwMp.js";import"./ZIndexLayer-BSdSgNTE.js";import"./index-kf961mzr.js";import"./index-CEmaTsjJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BuB4o-cj.js";import"./throttle-DfnnAIvE.js";import"./axisSelectors-Co6y6k23.js";import"./d3-scale-C0de4oSn.js";import"./CartesianAxis-ClEu4A1x.js";import"./Layer-vnYdlnEA.js";import"./types-CR-LymQu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6PXLxRIe.js";import"./index-CsaEib3L.js";import"./index-BEv8RXE2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwGtUcHg.js";import"./index-Y2LMv9l3.js";import"./CartesianChart-D8j3jRJC.js";import"./ZIndexPortal-DZJ5tH-i.js";import"./CategoricalChart-j0pVaHBn.js";import"./Symbols-CvLu8AuU.js";import"./fillDefinitions-Dhc8KNfB.js";import"./themeFill-Dmspdt-4.js";import"./symbol-4bH2ZeXc.js";import"./path-DyVhHtw_.js";import"./useElementOffset--RCirzvW.js";import"./uniqBy-C-Hwd9w4.js";import"./iteratee-CMbc4V8B.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D6fyXhX7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3hl6UlM.js";import"./useAnimationId-Cr5bB81Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDAywyE9.js";import"./tooltipContext-BDh8dCep.js";import"./dataEntryStyles-DWHZ8H87.js";import"./ErrorBarContext-ByBJW2kl.js";import"./activeStyles-DZGQwj2F.js";import"./SetGraphicalItem-Dt6F2mBE.js";import"./getZIndexFromUnknown-B0-JXqUO.js";import"./useEffectiveDataKey-D3ULyXZ6.js";import"./omit-DSdpzYC1.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
