import{r as f,R as e}from"./iframe-cFlQwHEa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-kKnqa52f.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DDYeRltP.js";import{C as k}from"./ComposedChart-Cr_zCTxJ.js";import{X as K}from"./XAxis-B2GHVOpr.js";import{L as v}from"./Legend-BJF1jmuM.js";import{B as s}from"./Bar-BdldsEEE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-JW-KtVqW.js";import"./Text-BuwjYicu.js";import"./resolveDefaultProps-C2OiAFwa.js";import"./DOMUtils-BFAGFFMB.js";import"./isWellBehavedNumber-BSAPeCSS.js";import"./useId-B6yN-zUw.js";import"./useBackwardsCompatibleTheme-BqDTENvH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-p7Pk0-Yp.js";import"./index-DglaFOn3.js";import"./index-C-TRi17m.js";import"./RechartsWrapper-BXBBXfmC.js";import"./index-CSK5_VVc.js";import"./index-Dtvx5j6b.js";import"./throttle-DAdIMx4T.js";import"./axisSelectors--mu7xJ5Y.js";import"./d3-scale-CkWKTTx7.js";import"./renderedTicksSlice-D983KGZ4.js";import"./CartesianAxis-BIZkK73U.js";import"./Layer-BgSWIZl1.js";import"./types-ChcMjuwl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-fiOEBM8R.js";import"./chartDataContext-BvjIPTZo.js";import"./CategoricalChart-BBemHSvC.js";import"./Symbols-Q3AzLqoX.js";import"./symbol-BmR2DuwM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B0E-eh4h.js";import"./uniqBy-CNtWXDS-.js";import"./iteratee-DpEh8_N1.js";import"./AnimatedItems-DKR9bXgi.js";import"./useAnimationId-BEPJjOtf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-2lH1Rq4W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CR14wFnm.js";import"./tooltipContext-sOtdVRkd.js";import"./RegisterGraphicalItemId-BQvNsPKC.js";import"./ErrorBarContext-BnnhnyAe.js";import"./GraphicalItemClipPath-uMqpd6od.js";import"./SetGraphicalItem-B-flkej3.js";import"./getZIndexFromUnknown-BM1Wplnq.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-o35J0chX.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
