import{r as f,R as e}from"./iframe-VT8pQoe7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZdmkbLY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DEK4NARd.js";import{C as k}from"./ComposedChart-DEL7m4Nl.js";import{X as K}from"./XAxis-D4USI7eu.js";import{L as v}from"./Legend-Cv6QpqNc.js";import{B as a}from"./Bar-CMwY5gVP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CntNwugN.js";import"./Text-5GPWLOFl.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./pageBackground-biSlCu9n.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./axisSelectors-rzVbGAjY.js";import"./throttle-DAkHgZkc.js";import"./d3-scale-CNl0eHX-.js";import"./CartesianAxis-32TBg9e_.js";import"./Layer-C1VwbLrz.js";import"./types-7pH1IAPS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C5t5FA9b.js";import"./index-BZU6X58j.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./Symbols-C4ZstIRX.js";import"./symbol-DLpqvKl5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bmh88r8k.js";import"./uniqBy-D3UAOLvb.js";import"./iteratee-CECdn73k.js";import"./activeStyles-XDL1Xm2T.js";import"./useAnimationId-D_S6bHPT.js";import"./dataEntryStyles-D0zUo3h2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpCZdUxE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C3QPXajl.js";import"./tooltipContext-CM47aKfH.js";import"./ErrorBarContext-BYw6WEd3.js";import"./GraphicalItemClipPath-TTQOfMqQ.js";import"./SetGraphicalItem-B3Fmseum.js";import"./getZIndexFromUnknown-BqHMI_qp.js";import"./useEffectiveDataKey-DiTGjvML.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
