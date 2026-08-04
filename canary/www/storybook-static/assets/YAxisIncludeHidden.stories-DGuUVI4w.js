import{r as f,R as e}from"./iframe-DwLZZwhK.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BRmSg-U1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-lVUWNgM0.js";import{C as k}from"./ComposedChart-p1KVu18j.js";import{X as K}from"./XAxis-DBBjIwDo.js";import{L as v}from"./Legend-DKdaWvlb.js";import{B as s}from"./Bar-DBq_vWy7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-tECJL-37.js";import"./Text-Bh0YxhQF.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./DOMUtils-BGpns11t.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BAEsl3nH.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./throttle-m49sR4Np.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianAxis-ByQIstMG.js";import"./Layer-BVmot7FB.js";import"./types-B7g8Th-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./Symbols-DVjBjeOn.js";import"./symbol-CjHagoG3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Df4AHCQV.js";import"./uniqBy-BbT4zose.js";import"./iteratee-DaU-OdzY.js";import"./tooltipContext-C3AtKIbJ.js";import"./AnimatedItems-DKnm6tp0.js";import"./useAnimationId-C3Y_zOxU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./ErrorBarContext-wXozNj3Y.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./getZIndexFromUnknown-BRCSk4uY.js";import"./graphicalItemSelectors-CsGPPAWZ.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
