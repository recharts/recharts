import{P as f,c as e}from"./iframe-QM_Hy95O.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-ByuMssjK.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BlNPxokt.js";import{C as k}from"./ComposedChart-CQ4Xoo2c.js";import{X as K}from"./XAxis-k_T7UBmN.js";import{L as v}from"./Legend-glhn_kqD.js";import{B as s}from"./Bar-BT3DLKCh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-in6fAyvy.js";import"./CartesianAxis-B-Qfc6z6.js";import"./Layer-DMLrZzOp.js";import"./resolveDefaultProps-BlXEfe9z.js";import"./Text-CiqEhbxu.js";import"./DOMUtils-O0X-t8NY.js";import"./isWellBehavedNumber-COg8tf3N.js";import"./Label-D4PO75Y9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiKPrQca.js";import"./index-CPQwco96.js";import"./index-CyaeIqvy.js";import"./types-B29_egWp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdDiUgXh.js";import"./immer-fQ35ak9n.js";import"./RechartsWrapper-Ls9ymLSy.js";import"./index-rIa8t0ZL.js";import"./index-CGSa8iwo.js";import"./axisSelectors-CnIWqyv7.js";import"./d3-scale-CDUvP8fj.js";import"./CartesianChart-BOBGMUhC.js";import"./chartDataContext-Cuzu216J.js";import"./CategoricalChart-C66Yjwv3.js";import"./Symbols-BvjnAwcw.js";import"./symbol-jogBUXor.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwqgoTsT.js";import"./uniqBy-B1I9aJN4.js";import"./iteratee-CmZMcvd6.js";import"./tooltipContext-BHpqlu0M.js";import"./ReactUtils-BIEdgNAL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dfia817X.js";import"./useAnimationId-BxdIxPQQ.js";import"./ActiveShapeUtils-Ben0Z5Gs.js";import"./RegisterGraphicalItemId-Ch0Vf5AU.js";import"./ErrorBarContext-BHFsn856.js";import"./GraphicalItemClipPath-BHIKYbjI.js";import"./SetGraphicalItem-DzbZ3uGV.js";import"./getZIndexFromUnknown-DQuy0pqP.js";import"./graphicalItemSelectors-BTjfDUNL.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
