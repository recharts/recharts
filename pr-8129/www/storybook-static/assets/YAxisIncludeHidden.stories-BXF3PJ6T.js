import{r as f,R as e}from"./iframe-COxqCazb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ZsGxmqjy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B4X5qRzI.js";import{C as k}from"./ComposedChart-DWRPdfx_.js";import{X as K}from"./XAxis-DQrBzVHK.js";import{L as v}from"./Legend-pYlKdEL-.js";import{B as a}from"./Bar-DM4sU8KG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BiNM6_QG.js";import"./Text-C4rvSXOn.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./throttle-D4LJPOuI.js";import"./axisSelectors-uSjAZrah.js";import"./d3-scale-D8xTnIof.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MgEDcD8h.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./Symbols-pJe31Clp.js";import"./fillDefinitions-HVISG19w.js";import"./symbol-DFh_91jg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DaKnhcyx.js";import"./uniqBy-CV6Bdmxk.js";import"./iteratee-B9rlrEY4.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DLxGydTH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH1741B.js";import"./useAnimationId-CI1eTN6X.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./tooltipContext-Cm1PQ1zm.js";import"./dataEntryStyles-DJkgxm7x.js";import"./ErrorBarContext-CSA0hXTc.js";import"./activeStyles-Dz5dwfdA.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getZIndexFromUnknown-gyH2FH8p.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./omit-DVHSWUAv.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
