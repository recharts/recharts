import{r as f,R as e}from"./iframe-__Uni7ot.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CjBkwZMp.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D7vG4UcO.js";import{C as k}from"./ComposedChart-De5M1TqL.js";import{X as K}from"./XAxis-_jE_dg8q.js";import{L as v}from"./Legend-E8-hGuLK.js";import{B as s}from"./Bar-M5B6veiz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-M8ASrgh5.js";import"./CartesianAxis-CtUpgzNz.js";import"./Layer-CMTKTZZ4.js";import"./resolveDefaultProps-id_IzIac.js";import"./Text-C_yGKqXr.js";import"./DOMUtils-neCLUP_5.js";import"./isWellBehavedNumber-DShwpyY_.js";import"./Label-CrlvYGOF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4Jgnnas.js";import"./index-DuAus-7O.js";import"./index-D5MVAu2q.js";import"./types-DL1t91_l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DJf3fvCP.js";import"./immer-DHOgEza7.js";import"./RechartsWrapper-BbAqMlrq.js";import"./index-ClzAupHk.js";import"./index-B8BzxjEy.js";import"./axisSelectors-CWQCxUri.js";import"./d3-scale-DZYmGYua.js";import"./string-B6fdYHAA.js";import"./CartesianChart--sKXWUKy.js";import"./chartDataContext-CKCl4rEW.js";import"./CategoricalChart-BLqwxQ25.js";import"./Symbols-D_5F4i1D.js";import"./symbol-bHB5vcKZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D9v1k3Me.js";import"./uniqBy-C2yG_xcT.js";import"./iteratee-Cq5ryGVX.js";import"./tooltipContext-BOFeB2Cb.js";import"./AnimatedItems-ZS1OqPe2.js";import"./useAnimationId-BhPEQZA3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGEFHU8W.js";import"./ActiveShapeUtils-r_dsHEWU.js";import"./RegisterGraphicalItemId-CVmvnLvy.js";import"./ErrorBarContext-DZdbeW5P.js";import"./GraphicalItemClipPath-B5rXG3_D.js";import"./SetGraphicalItem-DXUbiEXj.js";import"./getZIndexFromUnknown-Bw42bWSV.js";import"./graphicalItemSelectors-CGB-Dm-U.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
