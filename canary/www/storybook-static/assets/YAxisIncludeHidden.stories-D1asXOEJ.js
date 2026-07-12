import{r as f,R as e}from"./iframe-BLfLpZux.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D5k-HM91.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BdrEPl1y.js";import{C as k}from"./ComposedChart-ZvZa43Nr.js";import{X as K}from"./XAxis-CxCuOvko.js";import{L as v}from"./Legend-DGc-IgG4.js";import{B as s}from"./Bar-AKqccxUx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BLCGjb7w.js";import"./Layer-Bul18HQO.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./Label-BjZvH2GY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BVA4IMdO.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./types-CXyRetpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./throttle-fbWpHloR.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./Symbols-Bd5lZmQG.js";import"./symbol-DBASN8zb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BSkmHUtf.js";import"./uniqBy-DOFQi5FN.js";import"./iteratee-DwKL5yyO.js";import"./tooltipContext-C475OCAK.js";import"./AnimatedItems-DJFtUIBr.js";import"./useAnimationId-CIoZmDPD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8GMZRm_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BK3uHCCg.js";import"./RegisterGraphicalItemId-CYVd3_VS.js";import"./ErrorBarContext-CNNRNaxb.js";import"./GraphicalItemClipPath-DsE8A5bl.js";import"./SetGraphicalItem-DGLUBmAF.js";import"./getZIndexFromUnknown-P7nUO6wX.js";import"./graphicalItemSelectors-nW53RAvp.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
