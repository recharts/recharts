import{r as f,R as e}from"./iframe-BppzjNnb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DsoUE30k.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bz25ueAP.js";import{C as k}from"./ComposedChart-DhR9pH6Q.js";import{X as K}from"./XAxis-C5D711PO.js";import{L as v}from"./Legend-BJIzGJvS.js";import{B as s}from"./Bar-C0Zr2hdZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BADN9FM0.js";import"./CartesianAxis-DwkD9703.js";import"./Layer-InP7nrar.js";import"./resolveDefaultProps-DWEEC0T7.js";import"./Text-YWAIgGvz.js";import"./DOMUtils-CKoiYbaH.js";import"./isWellBehavedNumber-C8JMlk1c.js";import"./Label-mqH-rpXP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-vT85rwTx.js";import"./index-C65TBMtY.js";import"./index-G9uqktgG.js";import"./types-CY6jhn9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DTii-kcm.js";import"./immer-BMUlrvOK.js";import"./RechartsWrapper-BctTvK_s.js";import"./index-BbKylj6c.js";import"./index-e2oR9ZSK.js";import"./axisSelectors-W078EOTn.js";import"./d3-scale-CWnXAf3z.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DAZ3YXd0.js";import"./chartDataContext-C-pJrkOs.js";import"./CategoricalChart-CXNjM0Ue.js";import"./Symbols-C60S9_I6.js";import"./symbol-CA-NhIsd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHylbXnP.js";import"./uniqBy-BmI5nKZU.js";import"./iteratee-Cj4c1lFv.js";import"./tooltipContext-ycv3szzX.js";import"./AnimatedItems-ClsYQppB.js";import"./useAnimationId-CFK7zTSZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFXd9BK5.js";import"./ActiveShapeUtils-BLIRe5G7.js";import"./RegisterGraphicalItemId-B42PFFZO.js";import"./ErrorBarContext-DT0m-eV5.js";import"./GraphicalItemClipPath-C_3x93JD.js";import"./SetGraphicalItem-DoX9EqUs.js";import"./getZIndexFromUnknown-CkpPg-9d.js";import"./graphicalItemSelectors-BOPKrx09.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
