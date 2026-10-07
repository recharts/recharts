import{r as f,R as e}from"./iframe-Cs_QEvnb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BzFBF6j_.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DkQ_r41R.js";import{C as k}from"./ComposedChart-B4x9ib8K.js";import{X as K}from"./XAxis-C6JaM3hk.js";import{L as v}from"./Legend-CdK3p2Qt.js";import{B as a}from"./Bar-5_odZ_ep.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-AhMBQLf8.js";import"./Text-xCnIxjvW.js";import"./resolveDefaultProps-DexuDbrM.js";import"./DOMUtils-BYSGKLNe.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGjzOXsU.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./throttle-Dy_oOifq.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./CartesianAxis-Btqo2Ljv.js";import"./Layer-D-shTj0T.js";import"./types-C9b0uGu7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./Symbols-DC35OQmJ.js";import"./symbol-Dj3ENcoy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFIrW7Gj.js";import"./uniqBy-D0TPWZAb.js";import"./iteratee-B3WPktIR.js";import"./AnimatedItems-CbRljsJB.js";import"./useAnimationId-CXhRBgnj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9nz3j4B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./tooltipContext-DmYtpYej.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./ErrorBarContext-Ds3D9aj6.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getZIndexFromUnknown-C8c2wd7P.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";import"./dataEntryStyles-D2AkB34H.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
