import{r as f,R as e}from"./iframe-B67xakaW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CgnEOw1P.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D0TzJ1fR.js";import{C as k}from"./ComposedChart-DYPq6hki.js";import{X as K}from"./XAxis-FKOR1g-7.js";import{L as v}from"./Legend-Cm48ptZU.js";import{B as s}from"./Bar-DJHJpq7-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DIs948ZI.js";import"./Text-Cz97PcLA.js";import"./resolveDefaultProps-B29-kufx.js";import"./DOMUtils-B9paDAsr.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bldiyv4x.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./throttle-BKrvbeAi.js";import"./axisSelectors-DXeKf5vs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./Symbols-Qt_DOPis.js";import"./symbol-CsiZkFNB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4Es4Bm1.js";import"./uniqBy-C2sdVxSX.js";import"./iteratee-qHco-Mg-.js";import"./tooltipContext-C_a-9b4W.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eKfFzmse.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-i_QMKwre.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./ErrorBarContext--xCAx9GD.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./getZIndexFromUnknown-BeAzE3s0.js";import"./graphicalItemSelectors-DZTsQwib.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
