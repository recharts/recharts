import{r as f,e}from"./iframe-KIGRIIb5.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-Bh8V8qj-.js";import{R as A}from"./arrayEqualityCheck-BpdZ7hwi.js";import{C}from"./ComposedChart-DvEDkjwM.js";import{X as K}from"./XAxis-CSvpHUvr.js";import{L as v}from"./Legend-CuaO4-BX.js";import{B as a}from"./Bar-hz4dCygd.js";import{R as x}from"./RechartsHookInspector-Bt2WJDB1.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cra0xsE5.js";import"./Layer-DuIzwjaR.js";import"./resolveDefaultProps-D_adPZ-8.js";import"./Text-BoAeRYTN.js";import"./DOMUtils-CBEI-OH0.js";import"./Label-CkUDjV7L.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBYmGw4W.js";import"./zIndexSlice-_VCrDw0P.js";import"./immer-WG6U2D_d.js";import"./types-w2IwZ3Nn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-eT4Ivs1b.js";import"./hooks-CB3QlvSf.js";import"./axisSelectors-BkzxsiaE.js";import"./d3-scale-DgRq4lUU.js";import"./RechartsWrapper-DHe9ZVa4.js";import"./index-ClQqk-oX.js";import"./CartesianChart-qCsQp1Vm.js";import"./chartDataContext-D4pNrPnz.js";import"./CategoricalChart-e7-cm4mq.js";import"./Symbols-B6R2DiC2.js";import"./symbol-C10mZUN3.js";import"./step-CQsLqeZl.js";import"./useElementOffset-D6WzauAM.js";import"./uniqBy-Cw44ZgZs.js";import"./iteratee-8JDIDxH7.js";import"./tooltipContext-bsfh6YT_.js";import"./ReactUtils-CkQKUzGb.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BbMpDdiq.js";import"./isPlainObject-CCJRIfQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcYcowey.js";import"./useAnimationId-Bv85JSPp.js";import"./Trapezoid-6-PW5Hrl.js";import"./Sector-Dsu6XmgC.js";import"./Curve-BndPQnOp.js";import"./RegisterGraphicalItemId-DsmENlGz.js";import"./ErrorBarContext-Dm4Pi7GF.js";import"./GraphicalItemClipPath-CZoI5FBE.js";import"./SetGraphicalItem-DmMr7UzB.js";import"./getZIndexFromUnknown-B2gsXm6D.js";import"./graphicalItemSelectors-Dnow2LTy.js";import"./index-CoeeyBxi.js";import"./ChartSizeDimensions-BY9JAKDy.js";import"./OffsetShower-DhxtKv-n.js";import"./PlotAreaShower-DjAl-bbb.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
