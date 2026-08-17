import{r as f,R as e}from"./iframe-BPne-Hl-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C0fNq5VI.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Vbxajxxh.js";import{C as k}from"./ComposedChart-J8Blu4CC.js";import{X as K}from"./XAxis-rRwDqEnY.js";import{L as v}from"./Legend-CbVrBR9Z.js";import{B as s}from"./Bar-CI1QvEA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BrzCwn25.js";import"./Text-C95v_Vb1.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./DOMUtils-J3bqy14P.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfzxMoSO.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./throttle-Bi_zW3_L.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianAxis-ClYaFBOz.js";import"./Layer-SpL-rjyd.js";import"./types-BUNHJ5Kw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./Symbols-BRthCvHo.js";import"./symbol-BqX0FdKg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dphqCukD.js";import"./uniqBy-B3LW5wu3.js";import"./iteratee-DPXVHfHy.js";import"./tooltipContext-CsucA5SQ.js";import"./AnimatedItems-BPcfKqDa.js";import"./useAnimationId-Bq5h4Na4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cn7G2-_l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-IyyDIcQz.js";import"./RegisterGraphicalItemId-DLHR3ZEz.js";import"./ErrorBarContext-DTKdWH8V.js";import"./GraphicalItemClipPath-pLYwGWiU.js";import"./SetGraphicalItem-DdmyrxA9.js";import"./getZIndexFromUnknown-Cb39raE3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Bnvdlidl.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
