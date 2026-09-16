import{r as f,R as e}from"./iframe-W65oqx8q.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C8LbyJnB.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-9l_Vrwwa.js";import{C as k}from"./ComposedChart-Dg02pqp1.js";import{X as K}from"./XAxis-CsMm9ERi.js";import{L as v}from"./Legend-BQI0KbUc.js";import{B as a}from"./Bar-D6jWDsY1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Be3blqiA.js";import"./Text-C9pLMK0A.js";import"./resolveDefaultProps-CwFz2OMw.js";import"./DOMUtils-CakF13Ql.js";import"./isWellBehavedNumber-BObY9Idx.js";import"./useId-BxDXx6uj.js";import"./useBackwardsCompatibleTheme-uDuKMgEe.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3J7XzqC.js";import"./index-6OGByTjb.js";import"./index-Cot536dN.js";import"./RechartsWrapper-ClDY-hB5.js";import"./axisSelectors-cQBo3spf.js";import"./throttle-JXtXSY4E.js";import"./d3-scale-BnWVEuzd.js";import"./index-BoHv5hv2.js";import"./index-DKR6QUcv.js";import"./renderedTicksSlice-QXgti3JC.js";import"./index-B3pQb6na.js";import"./CartesianAxis-CClqdcGJ.js";import"./Layer-CHct5fsC.js";import"./types-DGC2KXCF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ouG1NDpR.js";import"./chartDataContext-f_o9cnw9.js";import"./CategoricalChart-BwdQTjaO.js";import"./Symbols-CEV4tfBQ.js";import"./symbol-CvH-9qIk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CGAEjhf0.js";import"./uniqBy-bQIzI03X.js";import"./iteratee-2Iqaw7xV.js";import"./AnimatedItems-FyFUBU19.js";import"./useAnimationId-CZj4ZR7y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CD8-QDsq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8OE4Q_dK.js";import"./tooltipContext-BGglIBe5.js";import"./RegisterGraphicalItemId-pvmrnM3x.js";import"./ErrorBarContext-B0GH1zEy.js";import"./GraphicalItemClipPath-CegTcjor.js";import"./SetGraphicalItem-I8O9Dd_O.js";import"./getZIndexFromUnknown-D1VfbAcI.js";import"./useGraphicalItemIdentity-CZ9WsBDJ.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
