import{r as f,R as e}from"./iframe-DnfWaB1B.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CTXcpKsn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BT6q8CVb.js";import{C as k}from"./ComposedChart-BozjqNdW.js";import{X as K}from"./XAxis-CRu44DAQ.js";import{L as v}from"./Legend-CcC4oay1.js";import{B as a}from"./Bar-ChpVnLEf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DErBiWtx.js";import"./Text-18vmCMJW.js";import"./resolveDefaultProps-8EGHXmvb.js";import"./pageBackground-BZcgsdhX.js";import"./isWellBehavedNumber-B2TPiKzz.js";import"./useId-EMQHPSSh.js";import"./useBackwardsCompatibleTheme-Csjmt-9c.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVLoryN8.js";import"./index-CMtaCruM.js";import"./index-B-M-aHgw.js";import"./axisSelectors-BzBwCDwa.js";import"./throttle-BlHdMJGb.js";import"./d3-scale-Br-96nR7.js";import"./CartesianAxis-CiEPj5kn.js";import"./Layer-CESakEtd.js";import"./types-vzKdATLY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Diudvbk0.js";import"./index-CNOFauDT.js";import"./index-DwRvwf7P.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0Y2iFV1.js";import"./index-BcjfqUW0.js";import"./CartesianChart-C9GO6rC8.js";import"./chartDataContext-C2BaT0xy.js";import"./CategoricalChart-m_cFhWGU.js";import"./Symbols-BOZkE8hq.js";import"./symbol-CMK53g7Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-1uwHjJUJ.js";import"./uniqBy-YhWipnCo.js";import"./iteratee-_cPrzxJT.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-yEksTLCx.js";import"./useAnimationId-CAjA_jBW.js";import"./dataEntryStyles-7Y85MSUL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCL9Y1KA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcV5jonr.js";import"./tooltipContext-BMhgUjnM.js";import"./ErrorBarContext-D9Sd4BvK.js";import"./GraphicalItemClipPath-CEAKjsCJ.js";import"./SetGraphicalItem-Me2AFJoT.js";import"./getZIndexFromUnknown-CvX2KW6o.js";import"./useEffectiveDataKey-Dum6ZVs0.js";import"./omit-DFku7c2u.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
