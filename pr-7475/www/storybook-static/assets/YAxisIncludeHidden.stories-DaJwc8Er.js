import{r as f,R as e}from"./iframe-DhLiHYA9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-lwpN76oK.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-0EuGNLI-.js";import{C as k}from"./ComposedChart-CGZKvMzU.js";import{X as K}from"./XAxis-BpfFXf4g.js";import{L as v}from"./Legend-CheapvBe.js";import{B as s}from"./Bar-CA-MVV53.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BqOTE_u_.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./Label-Cv4QmxCb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CvBhZ60T.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./immer-T8RsDcjn.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./Symbols-BmHfVAZq.js";import"./symbol-CtUUOtbn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fe1mw0WL.js";import"./uniqBy-BN7HPTpI.js";import"./iteratee-BBagmPW9.js";import"./tooltipContext-DJo_2VKA.js";import"./AnimatedItems-C2gGUiAe.js";import"./useAnimationId-PUY_wn7H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bk9D_f7f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./ErrorBarContext-BjQaCHVv.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./getZIndexFromUnknown-ZGbtEsX-.js";import"./graphicalItemSelectors-BUjTqtHs.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
