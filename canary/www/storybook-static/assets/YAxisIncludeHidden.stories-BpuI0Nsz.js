import{r as f,R as e}from"./iframe-Dk9ZDdT1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BG4jVm_S.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DeceblpS.js";import{C as k}from"./ComposedChart-BKh5yr5N.js";import{X as K}from"./XAxis-A_28Fvyn.js";import{L as v}from"./Legend-CCsIj-6h.js";import{B as s}from"./Bar-DOEl-B6-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5fu-9Ux.js";import"./Text-DxLESXkZ.js";import"./resolveDefaultProps-zYTWecoa.js";import"./DOMUtils-BpNuC4xp.js";import"./isWellBehavedNumber-CxvtDvRb.js";import"./useId-DehfeINH.js";import"./useBackwardsCompatibleTheme-C4vQm8Qy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DeueZom8.js";import"./index-CmUfEz5q.js";import"./index-B2rutIU6.js";import"./RechartsWrapper-DP2ymT_2.js";import"./axisSelectors-DxLef304.js";import"./throttle-DIOOZof0.js";import"./d3-scale-MpKXBNtT.js";import"./index-BxlkNIur.js";import"./index-bvujDpj7.js";import"./renderedTicksSlice-Ckrd08To.js";import"./index-DbhjdF6k.js";import"./CartesianAxis-DltOMyOx.js";import"./Layer-DmyqVj_Z.js";import"./types-B5p8Vh7N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DIP7sg4A.js";import"./chartDataContext-QSp1AmWQ.js";import"./CategoricalChart-Bx3cIM0F.js";import"./Symbols-COFyOQ-q.js";import"./symbol-C02v1ewE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KhQd1oWd.js";import"./uniqBy-CX3aiEBe.js";import"./iteratee-CvAqSA3n.js";import"./AnimatedItems-BJxfKwUv.js";import"./useAnimationId-Br2uK6cb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cb1y9t4l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EOWKKtqz.js";import"./tooltipContext-ByyuMFXy.js";import"./RegisterGraphicalItemId-z6QxmQfF.js";import"./ErrorBarContext-BvizcH0k.js";import"./GraphicalItemClipPath-CdL4vBCz.js";import"./SetGraphicalItem-BbnWj2u0.js";import"./getZIndexFromUnknown-DVQxj5SQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BJFtW09z.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
