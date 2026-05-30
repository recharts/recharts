import{P as f,c as e}from"./iframe-CFdw7OF0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BAT_0iNE.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-D5FBk225.js";import{C as k}from"./ComposedChart-Z--IS1CR.js";import{X as K}from"./XAxis-oGl6YnV0.js";import{L as v}from"./Legend-C2EvpoVf.js";import{B as s}from"./Bar-D7TSl40o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-i3QN0OCy.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./Label-2Qw5xNff.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./immer-3q52nOMc.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./axisSelectors-CDxqGeGZ.js";import"./d3-scale-B-4cH8vj.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./Symbols-C2-Wolt1.js";import"./symbol-D61DaMaA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C84_aF81.js";import"./uniqBy-Chp8xrv6.js";import"./iteratee-D26QWFLa.js";import"./tooltipContext-4PtX8H7D.js";import"./ReactUtils-CaBU1i2i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Od57b66I.js";import"./useAnimationId-opl2QVve.js";import"./ActiveShapeUtils-CucidJwG.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./ErrorBarContext-B3ComckR.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./getZIndexFromUnknown-HLsPEL2M.js";import"./graphicalItemSelectors-3cpOgqVz.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
