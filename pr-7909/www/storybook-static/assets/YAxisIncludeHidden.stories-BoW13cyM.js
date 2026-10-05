import{r as f,R as e}from"./iframe-BjBEpprL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CJHLeFgq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D-PTjDwF.js";import{C as k}from"./ComposedChart-CZvD_f50.js";import{X as K}from"./XAxis-BDZhGE0-.js";import{L as v}from"./Legend--94wUzmo.js";import{B as a}from"./Bar-DLPJoNlZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BeKD4wFi.js";import"./Text-CUza6yot.js";import"./resolveDefaultProps-B9MstDaw.js";import"./DOMUtils-Bj0yZBJ3.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./RechartsWrapper-CcICmPjO.js";import"./axisSelectors-DfmJjs-d.js";import"./throttle-NXQPRMgU.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./CartesianAxis--AnwAjfA.js";import"./Layer-vH_2ZCys.js";import"./types-DeKlgzSD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./Symbols-BRCh4zwI.js";import"./symbol-BrM6n73m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vtz1m0Dx.js";import"./uniqBy-CsD2VMx9.js";import"./iteratee-tek0I0sc.js";import"./AnimatedItems-BDzZfL3v.js";import"./useAnimationId-a8RjQG0_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTYoZZR8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./tooltipContext-BBDwv76s.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./ErrorBarContext-CQzClf2u.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./getZIndexFromUnknown-BJcQbQ8C.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";import"./dataEntryStyles-BcYkX4aj.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
