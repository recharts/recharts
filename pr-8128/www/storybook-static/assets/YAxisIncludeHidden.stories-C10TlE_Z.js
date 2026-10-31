import{r as f,R as e}from"./iframe-CqZM7-m_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ae7SlnFd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C2bhYwAU.js";import{C as k}from"./ComposedChart-bZT0Cb13.js";import{X as K}from"./XAxis-KlRKQHwy.js";import{L as v}from"./Legend-Be7eAFPl.js";import{B as a}from"./Bar-s6W-sAwP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CFulNYa4.js";import"./Text-D-XPvK3p.js";import"./resolveDefaultProps-DIo2Sl-P.js";import"./DOMUtils-xk6ID9X9.js";import"./pageBackground-Bhwi_Yxq.js";import"./ZIndexLayer-CcqTqnO7.js";import"./index-C-aUkLsy.js";import"./index-DpXM8lGR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DaUnHX5G.js";import"./throttle-BMiHfZwg.js";import"./axisSelectors-CU7asiQ5.js";import"./d3-scale-CaJTA9nk.js";import"./CartesianAxis-F_8zYdOn.js";import"./Layer--KWigSyO.js";import"./types-vIB-y3qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D_esDvci.js";import"./index-CztSWwc1.js";import"./index-NyV8lhCm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-tKczMb.js";import"./index-DtqG7I3W.js";import"./CartesianChart-g7znHwgk.js";import"./ZIndexPortal-xTgrkJOp.js";import"./CategoricalChart-CjJTDTQz.js";import"./Symbols-DzjBnU_i.js";import"./fillDefinitions-1X04y-fM.js";import"./themeFill-CUygaBJV.js";import"./symbol-B1C_m7FV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CUZP3X1Y.js";import"./uniqBy-eozDBzB3.js";import"./iteratee-8pecjru7.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DhQNMiPW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uSuGTrTU.js";import"./useAnimationId-Bff8cv61.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dat3aOlo.js";import"./tooltipContext-C3dWHiK2.js";import"./dataEntryStyles-Df1iMIlW.js";import"./ErrorBarContext-CF_mHvca.js";import"./activeStyles-cNHowlQL.js";import"./SetGraphicalItem-BGa3ruh5.js";import"./getZIndexFromUnknown-D8eNYpxd.js";import"./useEffectiveDataKey-B0QeK97Q.js";import"./omit-C681iIyE.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
