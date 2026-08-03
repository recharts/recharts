import{r as f,R as e}from"./iframe-Dg9AlkU9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CGrAoAPm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BMqB4Gyy.js";import{C as k}from"./ComposedChart-DdKLVGqR.js";import{X as K}from"./XAxis-lGCMel2W.js";import{L as v}from"./Legend-BtNiGOnl.js";import{B as s}from"./Bar-CV8PAvCg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-c2urfMyQ.js";import"./Text-B-psx-iS.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./DOMUtils-Bk_tuO3J.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-A0r-fd7s.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./throttle-DhT8i8lB.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./CartesianAxis-ClvRbJ15.js";import"./Layer-BfnZZDJ0.js";import"./types-BOBXQHFv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./Symbols-D8R954sr.js";import"./symbol-C6xbsDKr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-I4cHeDkl.js";import"./uniqBy-D39sA4fz.js";import"./iteratee-BlVn9B3O.js";import"./tooltipContext-B3xwhiGR.js";import"./AnimatedItems-Bh9SS3B5.js";import"./useAnimationId-DpUIMGhl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8eTHIfd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-App4amhZ.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getZIndexFromUnknown-DhucRbWw.js";import"./graphicalItemSelectors-CkAB3ALJ.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
