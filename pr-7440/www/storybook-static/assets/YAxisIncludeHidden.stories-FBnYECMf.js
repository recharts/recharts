import{r as f,R as e}from"./iframe-AkXMTiN1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-oXwNoYI-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D2IbpIG9.js";import{C as k}from"./ComposedChart-CbcedsfM.js";import{X as K}from"./XAxis-pJLX02b7.js";import{L as v}from"./Legend-CDcsegyl.js";import{B as s}from"./Bar-DvESP6Ng.js";import"./preload-helper-Dp1pzeXC.js";import"./get-hfJl8nDX.js";import"./CartesianAxis-nu48EpeM.js";import"./Layer-BbfEqMjd.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./Label-yi6vcZhu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./types-eY1LNeEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./immer-CGdqiLEl.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./Symbols-jueKSyNC.js";import"./symbol-CZDfixHm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-pwvrhw.js";import"./uniqBy-BLFid8pB.js";import"./iteratee-oc6mos4-.js";import"./tooltipContext-0DmM3p0T.js";import"./AnimatedItems-DMUwO7tR.js";import"./useAnimationId-DnVrzYZK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1CG4rUt.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./ErrorBarContext-DPoGAGab.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getZIndexFromUnknown-DtWHaj5i.js";import"./graphicalItemSelectors-B1qTcvDF.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
