import{r as f,R as e}from"./iframe-BCtefvpd.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CXAPbw5z.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DLtTjfC4.js";import{C as k}from"./ComposedChart-B-FcUFTM.js";import{X as K}from"./XAxis-DRnpS9Qy.js";import{L as v}from"./Legend-BJPQGr6R.js";import{B as s}from"./Bar-D4Vx9-GH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFMRZS9d.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./Label-CC74cj4o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DEcD4grM.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kBir8HDa.js";import"./immer-DIhiteEo.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./Symbols-DyMbHOp_.js";import"./symbol-tElAf4oy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-wN2BygXD.js";import"./uniqBy-Cj5mgadw.js";import"./iteratee-BlUr9JAT.js";import"./tooltipContext-D86cnIru.js";import"./AnimatedItems-C8IovmVa.js";import"./useAnimationId-Bcchcs5m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhiWNSwp.js";import"./ActiveShapeUtils-4S977V9W.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./ErrorBarContext-Cvn2xdUy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getZIndexFromUnknown-DzLokJsa.js";import"./graphicalItemSelectors-CDWfuhcE.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
