import{r as f,R as e}from"./iframe-DsVopAcH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-HRdYePVo.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CGOHGuEy.js";import{C as k}from"./ComposedChart-BQuW28P0.js";import{X as K}from"./XAxis-BseTd926.js";import{L as v}from"./Legend-D7TZZp3V.js";import{B as a}from"./Bar-CfcIxZIx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yfckENu2.js";import"./Text-nN9fGOPh.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./DOMUtils-DoArDhDK.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4yIu8AC.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./throttle-BobbsZsr.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianAxis-DUwX43Tg.js";import"./Layer-BiKMlTZw.js";import"./types-BimouhM4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./Symbols-DeZoucyt.js";import"./symbol-LtLa4mVa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrtLAhWV.js";import"./uniqBy-CsD-mN15.js";import"./iteratee-B1hggmL5.js";import"./AnimatedItems-Brc7OfV1.js";import"./useAnimationId-C2i6ANfU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CEek0_It.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BltEi4et.js";import"./tooltipContext-BsDKMEJx.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./ErrorBarContext-BW9eyXTq.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getZIndexFromUnknown-BGKgQaLh.js";import"./useGraphicalItemIdentity---g9lV2H.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
