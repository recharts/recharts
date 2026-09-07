import{r as f,R as e}from"./iframe-B9f439XI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-JNrwnee_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C6Otyq85.js";import{C as k}from"./ComposedChart-C-QIoD4C.js";import{X as K}from"./XAxis-DOU84Hlo.js";import{L as v}from"./Legend-DX-GvFUk.js";import{B as a}from"./Bar-BEJi1GiS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVN-Hwwb.js";import"./Text-Bow6SjUp.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./DOMUtils-DhGAIzWN.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4eGne8u.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./RechartsWrapper-DhjKeyZf.js";import"./axisSelectors-CtkTbFLc.js";import"./throttle-Cul9o8Fv.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./Symbols-CAnsshcC.js";import"./symbol-CisfiURK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";import"./AnimatedItems-17rMBNfA.js";import"./useAnimationId-7tiok7vs.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0vFWPEb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./tooltipContext-Co4pi7hv.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getZIndexFromUnknown-CYbW3jbK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Rx4jvPS9.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
