import{r as f,R as e}from"./iframe-CFGBW6xJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DzdfuxTR.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-XhnqXoNc.js";import{C as k}from"./ComposedChart-CKhdd1T_.js";import{X as K}from"./XAxis-B5InI_Kd.js";import{L as v}from"./Legend-BW69lOtT.js";import{B as s}from"./Bar-Dll3ItHb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-mKIhZXA3.js";import"./CartesianAxis-B6GxQRPi.js";import"./Layer-DZ-_1tbp.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./Label-Dw9n6-WD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DWvdc9Et.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./types-CFb2awxA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./immer-DtmFdOpm.js";import"./RechartsWrapper-CeVvleXl.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./Symbols-DVPvqcsz.js";import"./symbol-BPUYBBZH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6J8YLqDe.js";import"./uniqBy-CNPIlWYU.js";import"./iteratee-gk_4xeaF.js";import"./tooltipContext-Bxk-h1zQ.js";import"./AnimatedItems-SqXWEHcu.js";import"./useAnimationId-nIrPYsqA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cx3fMF7b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./getZIndexFromUnknown-DudEWojl.js";import"./graphicalItemSelectors-Bk5rE5PR.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
