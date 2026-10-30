import{r as f,R as e}from"./iframe-BvC_nX2I.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dnd7ECK6.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Deux2KLj.js";import{C as k}from"./ComposedChart-D6o-RTOM.js";import{X as K}from"./XAxis-DJblgq_P.js";import{L as v}from"./Legend-CiXsHN1E.js";import{B as a}from"./Bar-eAuVQmvm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CNqVbewr.js";import"./Text-3ao1DtcI.js";import"./resolveDefaultProps-DT691zhh.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./throttle-CirueaOA.js";import"./axisSelectors-D1Op89Ra.js";import"./d3-scale-oQwuANVt.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-YXBLwPUp.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./Symbols-DHQWc_0k.js";import"./fillDefinitions-CZGVPI6N.js";import"./symbol-BOIFwd4y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7rqP3X3.js";import"./uniqBy-BF0sKSrQ.js";import"./iteratee-B6a_e8WW.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-CRaDVB5f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaXkiWJ0.js";import"./useAnimationId-CfSQBeBZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./tooltipContext-CZ7EZjaJ.js";import"./dataEntryStyles-DH8AExSk.js";import"./ErrorBarContext-p-ctGfT-.js";import"./activeStyles-D5yKyFeN.js";import"./SetGraphicalItem-P596Nxos.js";import"./getZIndexFromUnknown-DBLNDD0c.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./omit-QtYQm21j.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
