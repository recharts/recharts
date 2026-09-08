import{r as f,R as e}from"./iframe-C4it_pSb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C2MK_IRI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bh8QqGYC.js";import{C as k}from"./ComposedChart-wnH8pGTH.js";import{X as K}from"./XAxis-D3_RnCQs.js";import{L as v}from"./Legend-RzUEKwqZ.js";import{B as a}from"./Bar-D2YbGeDX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-n6TZOZVu.js";import"./Text-C95jy76s.js";import"./resolveDefaultProps-Bk5elTFQ.js";import"./DOMUtils-CPJ15NMN.js";import"./isWellBehavedNumber-C0XEinXA.js";import"./useId-CmMKngVw.js";import"./useBackwardsCompatibleTheme-DQJyo6AF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Np7ngrTh.js";import"./index-Djot3vWG.js";import"./index-CyjOeiI7.js";import"./RechartsWrapper-WzaEVVng.js";import"./axisSelectors-iywT_uRR.js";import"./throttle-BWURsltW.js";import"./d3-scale-CNOoHAop.js";import"./index-B26DTqYo.js";import"./index-BP3VCIYx.js";import"./renderedTicksSlice-B9Dyi-a8.js";import"./index-EJd8pUya.js";import"./CartesianAxis-zFiEPAc_.js";import"./Layer-Y_kQ5bDn.js";import"./types-B3II6rjl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CHj9PLOA.js";import"./chartDataContext-BS14VVpw.js";import"./CategoricalChart-CdGO65GN.js";import"./Symbols-D0RMIlOv.js";import"./symbol-BJtlaRgk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkE284wq.js";import"./uniqBy-Cc1N6SgR.js";import"./iteratee-DFkmPQiY.js";import"./AnimatedItems-BXHU6KSj.js";import"./useAnimationId-DGQm40Oa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBBlhEC2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3E5vr02.js";import"./tooltipContext-BokE8xN3.js";import"./RegisterGraphicalItemId-C6_S5Zs0.js";import"./ErrorBarContext-CcVjks2v.js";import"./GraphicalItemClipPath-DOE5ucpL.js";import"./SetGraphicalItem-Crl-vV7P.js";import"./getZIndexFromUnknown-CeQcxris.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CplXrx77.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
