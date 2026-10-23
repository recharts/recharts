import{r as f,R as e}from"./iframe-D54unYLy.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-akurfq85.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cm3b7ejj.js";import{C as k}from"./ComposedChart-D7cf1DfT.js";import{X as K}from"./XAxis-R4jdjMJ5.js";import{L as v}from"./Legend-Dk4rOUIE.js";import{B as a}from"./Bar-BSJeist8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./pageBackground-CsysAoq2.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfUYfUZg.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./axisSelectors-CGx4lpK1.js";import"./throttle-DMkP6nmZ.js";import"./d3-scale-izKDfaZA.js";import"./CartesianAxis-UtS4SURK.js";import"./Layer-crHiZgAm.js";import"./types-BmPqNA2a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Sp30bFVi.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Symbols-BPVu9Joj.js";import"./symbol-A2VrwPOA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-qzo8AQBX.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjxF51Ga.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./tooltipContext-DTng4SL3.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getZIndexFromUnknown-Dw6HDBR_.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./omit-C3A2etqc.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
