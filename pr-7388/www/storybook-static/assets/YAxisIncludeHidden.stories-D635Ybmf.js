import{P as f,c as e}from"./iframe-ayfxMcMc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CboDD1HN.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-CBS9H6Fq.js";import{C as k}from"./ComposedChart-DzAczIPs.js";import{X as K}from"./XAxis-CQCosfOX.js";import{L as v}from"./Legend-BXnax1a-.js";import{B as s}from"./Bar-BIVkm2Ik.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DE-GTO8K.js";import"./CartesianAxis-CJYfwd48.js";import"./Layer-DRx_WgZU.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./Label-ii_PgfeB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChQFeTnT.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./immer-CvfGnc1k.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./Symbols-O67rkH-4.js";import"./symbol-DsIeXTTT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fSKqZFJ1.js";import"./uniqBy-CZ1HKjdU.js";import"./iteratee-CKfwSilq.js";import"./tooltipContext-CErG83J1.js";import"./ReactUtils-D4TRRjvu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BlYO1MRZ.js";import"./useAnimationId-CPZ6UJKm.js";import"./ActiveShapeUtils-gZf-7tTS.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./ErrorBarContext-Cs3TpoeV.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";import"./getZIndexFromUnknown-BwvG4_Co.js";import"./graphicalItemSelectors-3LsDXjJv.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
