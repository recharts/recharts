import{r as f,R as e}from"./iframe-gLXjAGh2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-sdrrSkAr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BiRgg5Ku.js";import{C as k}from"./ComposedChart-JJ7W0sdT.js";import{X as K}from"./XAxis-DwB13nw6.js";import{L as v}from"./Legend-B6WdNlEd.js";import{B as s}from"./Bar-Cs-HkM7d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Qcb7JOLO.js";import"./CartesianAxis-FCBmPftJ.js";import"./Layer-BmcxLaEj.js";import"./resolveDefaultProps-CF7N32I5.js";import"./Text-CQFVpw6C.js";import"./DOMUtils-yWa5RV4F.js";import"./isWellBehavedNumber-CiIySEg5.js";import"./Label-CJgHZQsX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnXfcGJ6.js";import"./index-M9vhh8Qk.js";import"./index-konkIWth.js";import"./types-BTt0M0gg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xzybHrTF.js";import"./immer-JN2QralJ.js";import"./RechartsWrapper-BAyuf4sH.js";import"./index-BffiaVbp.js";import"./index-DhIjfNMc.js";import"./axisSelectors-CZIlY7LR.js";import"./d3-scale-Ce8TMAGR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BlBRmLbV.js";import"./chartDataContext-ClIe94X6.js";import"./CategoricalChart-2uN7uMEr.js";import"./Symbols-CO1Km2T0.js";import"./symbol-Bq_9R8Y2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BY9xe1Fd.js";import"./uniqBy-DwtP5gK0.js";import"./iteratee-Dfb5foZq.js";import"./tooltipContext-epHbKqMP.js";import"./AnimatedItems-BahKKeqN.js";import"./useAnimationId-Cl5wMxi-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMbb_PeV.js";import"./ActiveShapeUtils-C5UVGI0p.js";import"./RegisterGraphicalItemId-Dn8a3wZC.js";import"./ErrorBarContext-DTXTD-Qt.js";import"./GraphicalItemClipPath-0uk6nwou.js";import"./SetGraphicalItem-Ce5UA7yP.js";import"./getZIndexFromUnknown-Cdc_ibXY.js";import"./graphicalItemSelectors-Cr5TPSnx.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
