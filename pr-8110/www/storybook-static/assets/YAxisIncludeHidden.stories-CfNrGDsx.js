import{r as f,R as e}from"./iframe-CUml5YCN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CGT5tGsT.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Duug8EOo.js";import{C as k}from"./ComposedChart-bDo5B3j8.js";import{X as K}from"./XAxis-DS-AJg-5.js";import{L as v}from"./Legend-Dy_w-u1K.js";import{B as a}from"./Bar-W3g4LJoB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Co-nrknN.js";import"./Text-C-J7rFVH.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./throttle-00pBoixS.js";import"./axisSelectors-B2HI9EL2.js";import"./d3-scale-CEanJ2qJ.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./path-DyVhHtw_.js";import"./FillDefinition-DVWLhRTd.js";import"./dataEntryStyles-DqljzTne.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-1BV2-5OM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ayj5uTYD.js";import"./useAnimationId-CTU-teyX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./tooltipContext-Bogx-4r_.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./activeStyles-DSIZcOzy.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getZIndexFromUnknown-CxF_xcLQ.js";import"./useEffectiveDataKey-11clGpT5.js";import"./omit-DgWjCywH.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
