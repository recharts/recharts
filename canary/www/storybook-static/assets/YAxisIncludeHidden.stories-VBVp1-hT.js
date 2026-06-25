import{r as f,R as e}from"./iframe-Bbgfrsw7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-p6BAB9xn.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQlXcDAc.js";import{C as k}from"./ComposedChart-D5u7NNSO.js";import{X as K}from"./XAxis-B3CRQ6u6.js";import{L as v}from"./Legend-BOvb-yDa.js";import{B as s}from"./Bar-Cwb8wJei.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CGUpvFiU.js";import"./CartesianAxis-D1v9Dkeg.js";import"./Layer-8m_pE-_A.js";import"./resolveDefaultProps-o6njxdDq.js";import"./Text-Bz6YKmeV.js";import"./DOMUtils-Z9sFA7ma.js";import"./isWellBehavedNumber-BR76DXAJ.js";import"./Label-BiRqfMN5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6gPnMOeu.js";import"./index-C0ODKNwO.js";import"./index-v2biSiVS.js";import"./types-8gz_-wr5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CbreQ2EV.js";import"./immer-BnwOCZg8.js";import"./RechartsWrapper-CRt4NQQt.js";import"./index-CECpKJ3H.js";import"./index-Dgahjeym.js";import"./axisSelectors-CDvVNjDS.js";import"./d3-scale-OklfQgrl.js";import"./CartesianChart-QVFJB6ft.js";import"./chartDataContext-CL0ujozD.js";import"./CategoricalChart-DhdplheV.js";import"./Symbols-DZYHpXuH.js";import"./symbol-CxUaEHbS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn0zPWFa.js";import"./uniqBy-mEUJfJNn.js";import"./iteratee-DuZXcmXc.js";import"./tooltipContext-BBYK_tl_.js";import"./AnimatedItems-CtW6zihY.js";import"./useAnimationId-DUfU26_x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Tqtw105A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLp6ysVz.js";import"./RegisterGraphicalItemId-BgE_IAVb.js";import"./ErrorBarContext-hic6ppru.js";import"./GraphicalItemClipPath-zba15Mlm.js";import"./SetGraphicalItem-Bny1zUhU.js";import"./getZIndexFromUnknown-CA9HJ68R.js";import"./graphicalItemSelectors-Bw7brN2T.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
