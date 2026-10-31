import{r as f,R as e}from"./iframe-CGtTT9aO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CPZ41WbR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkqERUsC.js";import{C as k}from"./ComposedChart-CtOwOAMH.js";import{X as K}from"./XAxis-Cs9YVmSO.js";import{L as v}from"./Legend-BpQuqqTF.js";import{B as a}from"./Bar-BTS_7pCn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CdpdsstW.js";import"./Text-CPcXRBKa.js";import"./resolveDefaultProps-BOjz-2GT.js";import"./DOMUtils-Lkl9NNxk.js";import"./ZIndexLayer-BNZ9nAXZ.js";import"./index-D5qFyhva.js";import"./index-BaBVYkzg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C5R6EJHs.js";import"./throttle-Cpyd11_g.js";import"./axisSelectors-B4GsvVbU.js";import"./d3-scale-HCxTFMcs.js";import"./CartesianAxis-DK3VbMKT.js";import"./Layer-BOfjEgNF.js";import"./types-Do3ps9Vj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvmQK_hy.js";import"./index-DFHlfpO_.js";import"./index-oOofm89c.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bg-qxCCU.js";import"./index-fDgmIFeX.js";import"./CartesianChart-BOnMx4gA.js";import"./ZIndexPortal-CtHFHKQR.js";import"./CategoricalChart-BhkaiiYp.js";import"./Symbols-OSdQxEEJ.js";import"./symbol-BfL8oXc2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CQ5H-98B.js";import"./themeFill-BkM1x4hA.js";import"./useElementOffset-BatF9isV.js";import"./uniqBy-CZnu9ysp.js";import"./iteratee-BkG8OlH1.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-bhGj16_R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8kMMZYHv.js";import"./useAnimationId-C_28wM0V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNWigvv2.js";import"./tooltipContext-rKTBIOtb.js";import"./ErrorBarContext-9FDAfVa2.js";import"./activeStyles-Dtv8ZhnZ.js";import"./SetGraphicalItem-8Ajtlbfj.js";import"./getZIndexFromUnknown-DqG6d2wF.js";import"./useEffectiveDataKey-DHKFzj0x.js";import"./omit-ClQsrm33.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
