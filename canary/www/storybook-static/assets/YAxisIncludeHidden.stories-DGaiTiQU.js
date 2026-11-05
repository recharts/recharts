import{r as f,R as e}from"./iframe-7ITK_SeI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DKQSRoB1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bfez01E7.js";import{C as k}from"./ComposedChart-CXRmBdio.js";import{X as K}from"./XAxis-B6K6oeNG.js";import{L as v}from"./Legend-CrRKDvHN.js";import{B as a}from"./Bar-Du7VDG5P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CsN2_Owm.js";import"./Text-uEM3tCf7.js";import"./resolveDefaultProps-DPD-Ehfr.js";import"./DOMUtils-B8HJjEQc.js";import"./ZIndexLayer-CUOO17YZ.js";import"./index-BWOYN4v6.js";import"./index-B6PSRbSm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D1t4qM7h.js";import"./throttle-DZAxS36c.js";import"./axisSelectors-BYlSNMl6.js";import"./d3-scale-CgbIH62T.js";import"./CartesianAxis-P1lu35Vw.js";import"./Layer-x5ioE0yr.js";import"./types-CwLExx_V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWRnvg7c.js";import"./index-CPO6Y0gx.js";import"./index-BX7LvsvC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bg4i1fRK.js";import"./index-icjlISLt.js";import"./fillDefinitions-BLJHfD9l.js";import"./CartesianChart-BIfTf3EX.js";import"./chartDataContext-DsZ1g-wA.js";import"./CategoricalChart-DOHYP0Wg.js";import"./ZIndexPortal-BCW_CUyX.js";import"./Symbols-CGGO5VAJ.js";import"./symbol-CV73IRCS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Brrafjou.js";import"./uniqBy-DancdYdq.js";import"./iteratee-37xDdBAO.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DyQMPI8I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xMO0G7Eu.js";import"./useAnimationId-DKK7KP9l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CkUaBVCr.js";import"./tooltipContext-Cm8qG72z.js";import"./dataEntryStyles-Dd39-khT.js";import"./ErrorBarContext-Ch69wvN-.js";import"./activeStyles-CTNWVDS5.js";import"./SetGraphicalItem-DVqvqVag.js";import"./getZIndexFromUnknown-CsLSVQME.js";import"./useEffectiveDataKey-EiVngFCy.js";import"./omit-DQlHZcp1.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
