import{r as f,R as e}from"./iframe-Y7LdsWUd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-NkmeWl3a.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-g6buOjPK.js";import{C as k}from"./ComposedChart-ByCfqa9r.js";import{X as K}from"./XAxis-BEn1qEwo.js";import{L as v}from"./Legend-DrFEUgBN.js";import{B as s}from"./Bar-5vL1EUfm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bl7iuY_G.js";import"./CartesianAxis-1pwFs9AH.js";import"./Layer-CYliWRnL.js";import"./resolveDefaultProps-EYxijulG.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./Label-B9hAjr1E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0MAyxgOl.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./types-D3i7dddg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./immer-CTHxJNnh.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./Symbols-ChF8_NYT.js";import"./symbol-DYEAVhaZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkAfi0ht.js";import"./uniqBy-PH-f1KA8.js";import"./iteratee-S0C_aG4j.js";import"./tooltipContext-BCXV1TFr.js";import"./AnimatedItems-BfJAUGfB.js";import"./useAnimationId-BlokCSh_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJ2W9D_9.js";import"./ActiveShapeUtils-OWHYk5VD.js";import"./RegisterGraphicalItemId-5Onr2PDk.js";import"./ErrorBarContext-D6wkc7ti.js";import"./GraphicalItemClipPath-BBsC6IJX.js";import"./SetGraphicalItem-rvXq_PhO.js";import"./getZIndexFromUnknown-BqJYfi6g.js";import"./graphicalItemSelectors-CgsEhyPw.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
