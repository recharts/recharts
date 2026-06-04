import{r as f,R as e}from"./iframe-DeM0Qb4B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-GdnxXDj_.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CiNLGVRc.js";import{C as k}from"./ComposedChart-Q8wzdF4e.js";import{X as K}from"./XAxis-D6dtEk3_.js";import{L as v}from"./Legend-DJEBJ8rg.js";import{B as s}from"./Bar-BQRGa-lb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CMIg51n-.js";import"./CartesianAxis-C8MJ9nCV.js";import"./Layer-B3W7tn4T.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./Label-C5gMwwTi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DorZCPdG.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./types-C10ohCRK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-l4NOSov1.js";import"./immer-CXrDBfBc.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./Symbols-DxhCsT3e.js";import"./symbol-B23EaThe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjQbRS76.js";import"./uniqBy-QJuJHQUa.js";import"./iteratee-DGbnOAAX.js";import"./tooltipContext-8uwYC2AK.js";import"./AnimatedItems-q3oAcZv4.js";import"./useAnimationId-PwiLcg7B.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-xMD6zM8p.js";import"./ActiveShapeUtils-BOazUucV.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./ErrorBarContext-Cu0ArMmH.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getZIndexFromUnknown-C0n4F1LS.js";import"./graphicalItemSelectors-DaoaIbjQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
