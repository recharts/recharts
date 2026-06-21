import{r as f,R as e}from"./iframe-BIq879V5.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CWb6gVw3.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D4TMV-f8.js";import{C as k}from"./ComposedChart-Y-P0CO1c.js";import{X as K}from"./XAxis-BeATFl8n.js";import{L as v}from"./Legend-1jgSUACd.js";import{B as s}from"./Bar-CNKjD13i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dlp4HEDU.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./isWellBehavedNumber-2nx214wI.js";import"./Label-CdyMu7UM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kG0uRxU5.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./immer-Bhe1IepA.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./Symbols-CDQO2QHa.js";import"./symbol-axVFD4mK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-De8Wm0sc.js";import"./uniqBy-Cuqkmugs.js";import"./iteratee-4c0JIRob.js";import"./tooltipContext-DkawCHMm.js";import"./AnimatedItems-Cplqb3ZM.js";import"./useAnimationId-7GzLXqBz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Be09360W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getZIndexFromUnknown-DrBS4-Wu.js";import"./graphicalItemSelectors-BIYOuh4B.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
