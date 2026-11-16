import{r as f,R as e}from"./iframe-BoIdwylW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-GNczrVGv.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-PMZXbuz8.js";import{C as k}from"./ComposedChart-CtZqtgqM.js";import{X as K}from"./XAxis-ClVSu1zU.js";import{L as v}from"./Legend-BpOD1-XB.js";import{B as a}from"./Bar-Bgc3sHUc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B2lBcb4D.js";import"./Text-D_S4fT48.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./ZIndexLayer-BYJgF0xG.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BUrHoreM.js";import"./throttle-DJovDE6i.js";import"./axisSelectors-CnNiq6Rh.js";import"./d3-scale-Asjkzq2w.js";import"./CartesianAxis-DE9aH7XM.js";import"./Layer-DnLGFXqh.js";import"./types-D0djA_gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-KwWkpOaO.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHSsrRA3.js";import"./uniqBy-C09z32gb.js";import"./iteratee-C-EJIXKE.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CG-hLtdl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cws0XjiK.js";import"./useAnimationId-BZtpw3X8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./tooltipContext-CvAsZq0Y.js";import"./ErrorBarContext-DqGqKTxS.js";import"./activeStyles-kk8IGRJt.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getZIndexFromUnknown-De3nvjVs.js";import"./useEffectiveDataKey-QRSJB29_.js";import"./omit-Dsblyt9d.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
