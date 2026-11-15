import{r as f,R as e}from"./iframe-B2PzCMaw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-B5nmPwid.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D2yQeuEI.js";import{C as k}from"./ComposedChart-AFpPZ6lH.js";import{X as K}from"./XAxis-hYV9QQyh.js";import{L as v}from"./Legend-D1MO9Czw.js";import{B as a}from"./Bar-D6BQdt1d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-dW2fYkfR.js";import"./Text-587hVFVv.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./ZIndexLayer-P8eiWDF3.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./throttle-DjegI8Tm.js";import"./axisSelectors-jPkZuWdd.js";import"./d3-scale-BTQYnDFg.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DEcx2xhj.js";import"./uniqBy-DGDne-O9.js";import"./iteratee-BOVTI74Q.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BUMHKDbc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8youXH0.js";import"./useAnimationId-C33gpbVv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./tooltipContext-Bni7e3Yx.js";import"./ErrorBarContext-BWeZxt5m.js";import"./activeStyles-dbWrPfDr.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getZIndexFromUnknown-CXjAgzw5.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./omit-DAUBzm3b.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
