import{r as f,R as e}from"./iframe-B33Y4kOs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DoRVJcGp.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BV8vqz-A.js";import{C as k}from"./ComposedChart-C6iXQW_F.js";import{X as K}from"./XAxis-D7BTfG5w.js";import{L as v}from"./Legend-COewFJhC.js";import{B as a}from"./Bar-DPrRDsS0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQnbTFco.js";import"./Text-CnUdOxIr.js";import"./resolveDefaultProps-Bx3AGNLv.js";import"./pageBackground-CmnWJfG9.js";import"./isWellBehavedNumber-B7wXqJ9C.js";import"./useId-CRYD77s2.js";import"./useBackwardsCompatibleTheme-df6TzhQ0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dm3QzWrT.js";import"./index-D1w13u3d.js";import"./index-CqFL6s1V.js";import"./axisSelectors-CPTmOT_R.js";import"./throttle-Dx9BFaqt.js";import"./d3-scale-BRwhKw_2.js";import"./CartesianAxis-CldRPjzS.js";import"./Layer-DI-mGCka.js";import"./types-cCXzDmUf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C0XiR0Pe.js";import"./index-BM_y8xA7.js";import"./index-BLcaxlXW.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D4BmCMdI.js";import"./index--PM34IXj.js";import"./CartesianChart-BgWqiAzR.js";import"./chartDataContext-CCe5PXsU.js";import"./CategoricalChart-Dg0sKqob.js";import"./Symbols-D4YJU_zX.js";import"./symbol-CgLv1_Zy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_gZZN4km.js";import"./uniqBy-DtqOuezx.js";import"./iteratee-Cn3UJQOJ.js";import"./activeStyles-VptiM0EE.js";import"./useAnimationId-B0LKL5_Y.js";import"./dataEntryStyles-C0yw4w94.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9nqQ6MB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZNSeBf4.js";import"./tooltipContext-CYhba1Wa.js";import"./ErrorBarContext-CHVe4J2J.js";import"./GraphicalItemClipPath-C_VqIcXn.js";import"./SetGraphicalItem-B6sh6hag.js";import"./getZIndexFromUnknown-uqVHwP5u.js";import"./useEffectiveDataKey-BxhkF0gV.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
