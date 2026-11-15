import{r as f,R as e}from"./iframe-nQqwH7QJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CBsB2GS9.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-36iharMl.js";import{C as k}from"./ComposedChart-DjVQQbR_.js";import{X as K}from"./XAxis-CJ63RViA.js";import{L as v}from"./Legend-DMbRoFU-.js";import{B as a}from"./Bar-BS9aWayt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label--FIUnsrD.js";import"./Text-1TJRO8Pn.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./ZIndexLayer-uBy8TOlo.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./throttle-B0HUB5U4.js";import"./axisSelectors-Dnfm47Aa.js";import"./d3-scale-CE_Y-rH6.js";import"./CartesianAxis-DQ3vG01G.js";import"./Layer-Bx429Rld.js";import"./types-jTE1kqYu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BMJszRZD.js";import"./uniqBy-rfJhXBOv.js";import"./iteratee-C4T-0Dkz.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-D2Yj78tL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-adiPADn5.js";import"./useAnimationId-BDVyTCS1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./tooltipContext-CnOYYd66.js";import"./ErrorBarContext-CKcJf7fb.js";import"./activeStyles-DbesfPTr.js";import"./SetGraphicalItem-BquQie6d.js";import"./getZIndexFromUnknown-C7F7HqS8.js";import"./useEffectiveDataKey-C12iG63u.js";import"./omit-B17aVvbF.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
